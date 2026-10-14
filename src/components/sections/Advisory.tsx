import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

const pillars = [
  { title: "Planejamento", text: "Carteira montada a partir dos seus objetivos e perfil de risco." },
  { title: "Acompanhamento", text: "Revisões periódicas e rebalanceamento conforme o mercado." },
  { title: "Research", text: "Acesso às análises de uma das equipes mais premiadas do país." },
];

export function Advisory() {
  return (
    <section id="assessoria" className="scroll-mt-20 bg-navy-900 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
        <ImagePlaceholder slot={images.assessor} tone="dark" className="rounded-3xl" />

        <div>
          <p className="text-sm font-semibold tracking-widest text-accent-400 uppercase">
            Assessoria de investimentos
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Um especialista cuidando do seu patrimônio
          </h2>
          <p className="mt-4 text-white/70">
            Conte com assessores certificados para construir uma estratégia sob medida, do
            primeiro aporte à sucessão patrimonial.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="border-l-2 border-accent-400 pl-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/65">{p.text}</p>
              </div>
            ))}
          </div>

          <a
            href="#abrir-conta"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-semibold text-navy-900 transition hover:bg-brand-50"
          >
            Falar com um assessor
          </a>
        </div>
      </div>
    </section>
  );
}
