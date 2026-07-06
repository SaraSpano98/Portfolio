import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const vertex = `attribute vec2 position; attribute vec2 uv; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 0, 1); }`;
const fragment = `precision highp float; uniform float uTime; uniform vec3 uColor1; uniform vec3 uColor2; varying vec2 vUv; vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); } float snoise(vec2 v){ const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439); vec2 i = floor(v + dot(v, C.yy) ); vec2 x0 = v - i + dot(i, C.xx) ; vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0); vec4 x12 = x0.xyxy + C.xxzz; x12.xy -= i1; i = mod(i, 289.0); vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 )); vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0); m = m*m ; m = m*m ; vec3 x = 2.0 * fract(p * C.www) - 1.0; vec3 h = abs(x) - 0.5; vec3 ox = floor(x + 0.5); vec3 a0 = x - ox; m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ); vec3 g; g.x = a0.x * x0.x + h.x * x0.y; g.yz = a0.yz * x12.xz + h.yz * x12.yw; return 130.0 * dot(m, g); } void main() { vec2 uv = vUv; float noise = snoise(uv * 2.0 + uTime * 0.05); vec3 finalColor = mix(uColor1, uColor2, noise * 0.5 + 0.5); float mask = smoothstep(0.0, 0.7, uv.y * (1.0 - uv.y) * uv.x * (1.0 - uv.x)); gl_FragColor = vec4(finalColor, mask * 0.3); }`;

const hexToRgb = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.replace('#', ''), 16);
  return [((bigint >> 16) & 255) / 255, ((bigint >> 8) & 255) / 255, (bigint & 255) / 255];
};

export default function SoftAurora() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex, fragment,
      uniforms: { uTime: { value: 0 }, uColor1: { value: hexToRgb('#ec4899') }, uColor2: { value: hexToRgb('#8b5cf6') } },
      depthTest: false, depthWrite: false,
    });

    const mesh = new Mesh(gl, { geometry, program });
    const resize = () => renderer.setSize(container.offsetWidth, container.offsetHeight);
    window.addEventListener('resize', resize);
    resize();

    let id: number;
    const update = (t: number) => {
      id = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    };
    id = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(id);
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none rounded-[3rem] overflow-hidden" />;
}
