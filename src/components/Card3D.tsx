import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Palavra gigante que atravessa o cartão (contorno atrás, gravada no metal na frente)
  word?: string;
};

export function Card3D({ src, alt, width, height, word }: Props) {
  const cardMask = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
  };

  return (
    <div className="card3d relative mx-auto w-full max-w-md [perspective:1200px]">
      {/* Contorno via filtro (dilata a letra cheia e subtrai o miolo): o
          text-stroke desenha os contornos sobrepostos internos da fonte */}
      <svg aria-hidden width="0" height="0" className="absolute">
        <filter id="card3d-outline">
          <feMorphology in="SourceAlpha" operator="dilate" radius="1.5" result="grow" />
          <feComposite in="grow" in2="SourceAlpha" operator="out" result="ring" />
          <feFlood floodColor="#fff" floodOpacity="0.28" />
          <feComposite in2="ring" operator="in" />
        </filter>
      </svg>

      <div className="relative">
        {word && (
          <span aria-hidden className="card3d-word card3d-word-back">
            {word}
          </span>
        )}

        <div className="card3d-float relative">
          <div className="card3d-tilt relative">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              className="h-auto w-full select-none"
              draggable={false}
            />

            {word && (
              <div aria-hidden className="card3d-word-blend pointer-events-none absolute inset-0" style={cardMask}>
                <span className="card3d-word card3d-word-front">{word}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sombra no "chão" */}
      <div className="card3d-shadow mx-auto mt-6 h-6 w-2/3 rounded-[50%] bg-navy-950/60 blur-xl" />
    </div>
  );
}
