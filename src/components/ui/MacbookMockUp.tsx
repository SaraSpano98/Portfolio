import { useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface MacbookMockUpProps {
    className?: string;
    children?: ReactNode;
    src?: string;
    style?: CSSProperties;
}

const DESIGN_WIDTH_EM = 46.25;

const MIN_FONT_SIZE = 4;
const MAX_FONT_SIZE = 16;


export default function MacbookMockUp({
    className = '',
    children,
    src,
    style,
}: MacbookMockUpProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [fontSize, setFontSize] = useState<number>(MAX_FONT_SIZE);

    useLayoutEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const updateFontSize = () => {
            const containerWidth = el.offsetWidth;
            if (containerWidth === 0) return;

            const idealFontSize = containerWidth / DESIGN_WIDTH_EM;
            const clamped = Math.min(
                MAX_FONT_SIZE,
                Math.max(MIN_FONT_SIZE, idealFontSize)
            );
            setFontSize(clamped);
        };

        updateFontSize();

        const resizeObserver = new ResizeObserver(updateFontSize);
        resizeObserver.observe(el);

        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div
            ref={wrapperRef}
            className={`relative mx-auto ${className}`}
            style={{ fontSize: `${fontSize}px`, ...style }}
        >
            <div className="relative z-[1] mx-0 my-[1em] max-h-[27.125em] w-[46.25em]">
                <div className="relative z-[1] mx-auto my-0 h-[26.125em] w-[38.625em] overflow-hidden rounded-[1.25em] border-[0.125em] border-[rgb(200,202,203)] px-[0.5625em] pt-[0.5625em] pb-[1.4375em] [background:rgb(13,13,13)]">
                    {children || (
                        <img
                            alt="Macbook Pro background"
                            className="relative h-[23.4375em] w-full rounded-t-[0.625em] border-[0.125em] border-[rgb(18,18,18)] border-solid bg-slate-200 bg-cover object-cover"
                            loading="lazy"
                            src={src}
                        />
                    )}
                    <div className="absolute right-0 bottom-0 left-0 h-[1.5em] bg-gradient-to-b from-[#272727] to-[#0d0d0d]" />
                </div>

                {/* WEBCAM NOTCH */}
                <div className="-ml-[2em] absolute top-[0.6875em] left-2/4 z-[2] h-[0.75em] w-[4em] rounded-br rounded-bl bg-[rgb(13,13,13)]" />

                {/* CERNIERA / BASE */}
                <div className="-mt-[0.625em] relative z-[9] h-[1.5em] w-[46.25em] rounded-[0.125em_0.125em_0.75em_0.75em] border-[0.0625em_0.125em_0em] border-[rgb(160,163,167)] border-solid shadow-[rgb(108,112,116)_0em_-0.125em_0.5em_0em_inset] [background:radial-gradient(circle,rgb(226,227,228)_85%,rgb(200,202,203)_100%)] [border-image:initial]">
                    <div className="absolute top-0 left-1/2 ml-[-3.75em] h-[0.625em] w-[7.5em] rounded-b-[0.625em] shadow-[inset_0_0_0.25em_0.125em_#babdbf]" />
                </div>

                {/* PIEDINI */}
                <div className="-bottom-[0.125em] absolute left-[3em] h-[0.125em] w-[2.5em] rounded-b-full bg-neutral-600" />
                <div className="-bottom-[0.125em] absolute right-[3em] h-[0.125em] w-[2.5em] rounded-b-full bg-neutral-600" />
            </div>
        </div>
    );
}
