"use client";

import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const MAX_TILT = 18;

export function Card3D({ src, alt, width, height }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--rx", `${(0.5 - y) * MAX_TILT * 2}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * MAX_TILT * 2}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.dataset.active = "true";
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.dataset.active = "false";
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="card3d group relative mx-auto w-full max-w-md [perspective:1200px]"
    >
      <div className="card3d-float">
        <div className="card3d-tilt relative">
          <Image src={src} alt={alt} width={width} height={height} className="h-auto w-full select-none" draggable={false} />
          {/* Reflexo que segue o cursor, recortado no formato do cartão */}
          <div
            aria-hidden
            className="card3d-shine pointer-events-none absolute inset-0"
            style={{
              WebkitMaskImage: `url(${src})`,
              maskImage: `url(${src})`,
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
            }}
          />
        </div>
      </div>
      {/* Sombra no "chão" */}
      <div className="card3d-shadow mx-auto mt-6 h-6 w-2/3 rounded-[50%] bg-navy-950/60 blur-xl" />
    </div>
  );
}
