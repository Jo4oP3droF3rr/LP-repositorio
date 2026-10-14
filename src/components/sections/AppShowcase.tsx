import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

const features = [
  "Abertura de conta 100% digital em poucos minutos",
  "Pix, TED e pagamentos sem custo",
  "Carteira consolidada com rentabilidade em tempo real",
  "Relatórios e recomendações do BTG Research",
];

export function AppShowcase() {
  return (
    <section id="app" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
        <div className="mx-auto w-full max-w-md lg:order-last">
          <ImagePlaceholder slot={images.appMockup} className="rounded-3xl" />
        </div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-brand-500 uppercase">
            App BTG Pactual
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            O banco e a corretora na palma da sua mão
          </h2>
          <ul className="mt-8 space-y-4">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-[11px] font-bold text-white">
                  ✓
                </span>
                <span className="text-navy-800/80">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#" className="block w-44">
              <ImagePlaceholder slot={images.badgeAppStore} compact className="rounded-lg" />
            </a>
            <a href="#" className="block w-44">
              <ImagePlaceholder slot={images.badgeGooglePlay} compact className="rounded-lg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
