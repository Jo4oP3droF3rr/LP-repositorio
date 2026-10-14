import Image from "next/image";
import type { ImageSlot } from "@/content/images";

type Props = {
  slot: ImageSlot;
  className?: string;
  // "dark" para placeholders sobre fundo escuro
  tone?: "light" | "dark";
  // Esconde descrição/caminho em slots pequenos (logo, ícones, avatares)
  compact?: boolean;
  priority?: boolean;
  // Ocupa 100% do pai posicionado (uso como imagem de fundo)
  fill?: boolean;
};

export function ImagePlaceholder({
  slot,
  className = "",
  tone = "light",
  compact = false,
  priority = false,
  fill = false,
}: Props) {
  const aspectRatio = `${slot.width} / ${slot.height}`;

  if (slot.src && fill) {
    return (
      <Image
        src={slot.src}
        alt={slot.description}
        fill
        sizes="100vw"
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }

  if (slot.src) {
    return (
      <Image
        src={slot.src}
        alt={slot.description}
        width={slot.width}
        height={slot.height}
        priority={priority}
        className={`h-auto w-full object-cover ${className}`}
      />
    );
  }

  const toneClasses =
    tone === "dark"
      ? "border-white/40 bg-white/5 text-white/80"
      : "border-brand-500/50 bg-brand-50 text-navy-800";

  return (
    <div
      role="img"
      aria-label={`Espaço para imagem ${slot.id}: ${slot.description}`}
      data-image-slot={slot.id}
      style={fill ? undefined : { aspectRatio }}
      className={`flex flex-col gap-1 overflow-hidden border-2 border-dashed ${
        fill
          ? "absolute inset-0 items-end justify-start p-6 text-right"
          : "relative w-full items-center justify-center rounded-xl p-3 text-center"
      } ${toneClasses} ${className}`}
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className={compact ? "h-5 w-5 opacity-60" : "h-8 w-8 opacity-60"}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span
        className={`rounded bg-accent-400 font-mono font-bold text-navy-950 ${
          compact ? "px-1 text-[9px] whitespace-nowrap" : "px-2 py-0.5 text-[11px] tracking-wide"
        }`}
      >
        {slot.id}
      </span>
      {!compact && (
        <>
          <span className="max-w-xs text-xs leading-snug font-medium">{slot.description}</span>
          <span className="font-mono text-[10px] opacity-70">
            {slot.width}×{slot.height}px · public{slot.path}
          </span>
        </>
      )}
    </div>
  );
}
