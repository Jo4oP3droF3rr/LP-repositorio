import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

export function FinalCta() {
  return (
    <section id="abrir-conta" className="scroll-mt-20 bg-white px-4 pb-20 sm:px-6 md:pb-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-navy-900">
        <ImagePlaceholder slot={images.ctaBackground} tone="dark" fill className="rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/30" />

        <div className="relative px-6 py-16 text-white sm:px-12 md:py-24">
          <h2 className="max-w-xl text-3xl font-bold sm:text-5xl">
            Comece a investir hoje. A conta é grátis.
          </h2>
          <p className="mt-4 max-w-lg text-white/75">
            Abra sua conta em poucos minutos pelo app e tenha acesso a toda a plataforma de
            investimentos do BTG Pactual.
          </p>
          <a
            href="#"
            className="mt-10 inline-block rounded-full bg-accent-400 px-8 py-4 font-semibold text-navy-950 transition hover:brightness-95"
          >
            Abrir minha conta
          </a>
        </div>
      </div>
    </section>
  );
}
