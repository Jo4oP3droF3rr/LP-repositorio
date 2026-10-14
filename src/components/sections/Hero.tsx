import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-end overflow-hidden bg-navy-950 text-white">
      {/* Mobile: foto no tamanho natural no topo, degradê de baixo pra cima */}
      <div className="absolute inset-x-0 top-0 -z-20 aspect-[1116/2000] md:hidden">
        <ImagePlaceholder
          slot={images.heroMobile}
          fill
          priority
          sizes="(min-width: 768px) 0px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 from-5% via-navy-950/60 via-30% to-transparent to-55%" />
      </div>

      {/* Desktop: foto full-bleed, degradê da esquerda pra direita */}
      <div className="absolute inset-0 -z-20 hidden md:block">
        <ImagePlaceholder slot={images.hero} tone="dark" fill />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/10" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pt-[122vw] pb-14 sm:px-6 md:pt-24 md:pb-20">
        <h1 className="max-w-3xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-7xl lg:text-8xl">
          Banco de investimento de verdade.
          <span className="block text-white/45">No seu celular.</span>
        </h1>

        <p className="mt-8 max-w-md text-lg text-white/70">
          A mesma mesa que estrutura operações para grandes empresas agora monta a sua carteira.
          Renda fixa, fundos, ações e previdência em um app só.
        </p>

        <form action="#abrir-conta" className="mt-10 flex max-w-lg flex-col gap-2 sm:flex-row">
          <label htmlFor="hero-email" className="sr-only">
            Seu e-mail
          </label>
          <input
            id="hero-email"
            type="email"
            required
            placeholder="Seu melhor e-mail"
            className="h-14 w-full rounded-md sm:flex-1 border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 focus:border-accent-400 focus:outline-none"
          />
          <button
            type="submit"
            className="h-14 rounded-md bg-accent-400 px-7 font-semibold text-navy-950 transition hover:brightness-95"
          >
            Abrir conta grátis
          </button>
        </form>

        <p className="mt-4 text-sm text-white/50">
          Já é cliente?{" "}
          <a href="#" className="text-white underline underline-offset-4 hover:text-accent-400">
            Acesse sua conta
          </a>
        </p>
      </div>
    </section>
  );
}
