import React from 'react';

interface GlassIconsProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  themeColor: string;
  textColor: string;
  bgColor: string;
}

export default function GlassIcons({ icon: IconComponent, themeColor, textColor, bgColor }: GlassIconsProps) {
  return (
    <div className={`w-20 h-20 rounded-[1.8rem] bg-gradient-to-b ${themeColor} p-[1px] shadow-sm transition-all duration-500 group-hover/value:scale-110 group-hover/value:rotate-3 shrink-0`}>
      <div className={`w-full h-full ${bgColor} rounded-[1.7rem] backdrop-blur-md bg-opacity-40 flex items-center justify-center border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]`}>
        <IconComponent className={`w-8 h-8 ${textColor} stroke-[1.5]`} />
      </div>
    </div>
  );
}
