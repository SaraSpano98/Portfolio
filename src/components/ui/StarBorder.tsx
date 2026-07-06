import React from 'react';

export default function StarBorder({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-[1px] overflow-hidden rounded-[2.5rem] ${className}`}>
      <div
        className="absolute inset-0 w-[200%] h-[200%] top-[-50%] left-[-50%] animate-star-rotate pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, #ec4899 25%, transparent 50%, #ec4899 75%, transparent 100%)`,
        }}
      />
      <div className="relative w-full h-full bg-white rounded-[calc(2.5rem-1px)] p-0.5">
        {children}
      </div>
    </div>
  );
}
