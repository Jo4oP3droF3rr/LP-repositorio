import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold tracking-widest text-accent-400 uppercase">
            Conta digital gratuita
          </span>
          <h1 className="mt-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Seu dinheiro investido com quem entende de mercado.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Acesse CDBs, Tesouro Direto, fundos, ações e previdência em uma única plataforma, com
            a expertise do maior banco de investimentos da América Latina.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#abrir-conta"
              className="rounded-full bg-accent-400 px-8 py-4 text-center font-semibold text-navy-950 transition hover:brightness-95"
            >
              Abrir conta grátis
            </a>
            <a
              href="#produtos"
              className="rounded-full border border-white/30 px-8 py-4 text-center font-semibold transition hover:bg-white/10"
            >
              Conhecer investimentos
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <li>✓ Sem taxa de manutenção</li>
            <li>✓ Tesouro Direto sem taxa de custódia*</li>
            <li>✓ Assessoria especializada</li>
          </ul>
        </div>

        <div className="mx-auto w-full max-w-lg lg:max-w-none">
          <ImagePlaceholder slot={images.hero} tone="dark" priority className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
