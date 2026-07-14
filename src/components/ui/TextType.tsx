import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

interface TextTypeProps {
  text: string | string[];
  className?: string;
}

export default function TextType({ text, className = '' }: TextTypeProps) {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const words = Array.isArray(text) ? text : [text];
    const element = textRef.current;
    if (!element) return;
    const tl = gsap.timeline({ repeat: 0 });

    words.forEach((word) => {
      tl.to(element, { 
        duration: 1.8, 
        text: { value: word, delimiter: "" }, 
        ease: "power1.out" 
      });
    });

    return () => { tl.kill(); };
  }, [text]);

  return (
    <span className={`${className} inline-flex items-center`}>
      <span ref={textRef}></span>
      <span className="animate-[pulse_0.6s_infinite] ml-1 font-light text-pink-500">|</span>
    </span>
  );
}
