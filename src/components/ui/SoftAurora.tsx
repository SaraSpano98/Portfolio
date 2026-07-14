import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SoftAurora() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initialWidth = container.clientWidth || 1200;
    const initialHeight = 180;

    // 1. SCENA E TELECAMERA (Allontanata a 9.5 per inquadrare tutta la linea allungata)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, initialWidth / initialHeight, 0.1, 1000);
    camera.position.z = 9.5; 

    // 2. WEBGL RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(initialWidth, initialHeight);
    container.appendChild(renderer.domElement);

    // 3. GEOMETRIA ULTRA ALLUNGATA (Larghezza portata a 32 per coprire tutta la card)
    const geometry = new THREE.PlaneGeometry(32, 3, 160, 32);

    // 4. SHADER NOISE SENZA FILTRI TAGLIO LATERALI
    const material = new THREE.ShaderMaterial({
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#ec4899') }, 
        uColor2: { value: new THREE.Color('#7c3aed') }  
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;
        varying float vNoise;

        vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v - i + dot(i, C.xx) ;
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod(i, 289.0);
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ; m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x * x0.x + h.x * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          vUv = uv;
          vec3 pos = position;
          float t = uTime * 0.4;
          
          // Frequenza abbassata per onde lunghe, distese e morbide che attraversano lo schermo
          float noise = snoise(vec2(pos.x * 0.12 - t, pos.y * 0.6)) * 0.5;
          noise += snoise(vec2(pos.x * 0.4 + t * 0.2, pos.y * 1.0)) * 0.12;
          
          pos.z += noise;
          pos.y += noise * 0.1;
          vNoise = noise;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying vec2 vUv;
        varying float vNoise;

        void main() {
          // Sfumatura di colore distribuita su tutta la lunghezza X
          vec3 finalColor = mix(uColor1, uColor2, vUv.x);
          
          float dist = vUv.y - 0.5 - vNoise * 0.08;
          float glow = exp(-pow(dist, 2.0) / 0.03); // Allargato leggermente lo spessore per densità
          
          float maskY = smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
          
          // RIMOSSA LA MASCHERA DI TAGLIO LATTERALE: Ora i pixel non vengono azzerati ai lati
          gl_FragColor = vec4(finalColor, glow * maskY * 0.95);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = 180;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);
    resize();

    const clock = new THREE.Clock();
    let animationId: number;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    // CONTENITORE AGGIORNATO: Larghezza impostata a w-[110%] e left-[-5%] per far uscire l'onda fuori dalla card
    <div 
      ref={containerRef} 
      className="absolute inset-y-0 -left-[5%] -right-[5%] w-[110%] top-1/2 -translate-y-1/2 h-[180px] pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none blur-[14px] sm:blur-[18px] scale-y-[1.1]"
    />
  );
}
