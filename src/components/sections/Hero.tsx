import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";
import { LeadForm } from "@/components/LeadForm";

export function Hero() {
  return (
    <section id="abrir-conta" className="relative isolate flex min-h-[75svh] scroll-mt-20 items-end overflow-hidden bg-navy-950 text-white">
      {/* Mobile: foto no tamanho natural no topo, degradê de baixo pra cima */}
      <div className="absolute inset-x-0 -top-[28vw] -z-20 aspect-[1116/2000] md:hidden">
        <ImagePlaceholder
          slot={images.heroMobile}
          fill
          priority
          sizes="(min-width: 768px) 0px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 from-5% via-navy-950/60 via-30% to-transparent to-55%" />
      </div>

      {/* Desktop: foto full-bleed, degradê da esquerda pra direita */}
      {/* Imagem deslocada pra direita para a pessoa ficar ao lado do texto */}
      <div className="absolute inset-y-0 -right-[10%] left-[40%] -z-20 hidden md:block xl:left-[25%]">
        <ImagePlaceholder
          slot={images.hero}
          fill
          priority
          sizes="(min-width: 768px) 85vw, 0px"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 to-transparent to-30%" />
      </div>
      <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-navy-950 from-20% to-transparent to-50% md:block" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-[94vw] pb-14 sm:px-6 md:pt-24 md:pb-20">
        <h1 className="max-w-3xl text-5xl leading-[0.95] font-medium tracking-tight sm:text-7xl xl:text-8xl">
          Banco de investimento de verdade.
          <span className="block text-white/45">No seu celular.</span>
        </h1>

        <p className="mt-8 max-w-md text-lg text-white/70">
          A mesma mesa que estrutura operações para grandes empresas agora monta a sua carteira.
          Renda fixa, fundos, ações e previdência em um app só.
        </p>

        <LeadForm />
      </div>
    </section>
  );
}
