import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

const pillars = [
  { title: "Planejamento", text: "Carteira montada a partir dos seus objetivos e perfil de risco." },
  { title: "Acompanhamento", text: "Revisões periódicas e rebalanceamento conforme o mercado." },
  { title: "Research", text: "Acesso às análises de uma das equipes mais premiadas do país." },
];

export function Advisory() {
  return (
    <section id="assessoria" className="relative isolate scroll-mt-20 overflow-hidden bg-navy-900 text-white">
      {/* Foto colada na borda esquerda, altura total da seção, dissolvendo no azul à direita
          (no celular fica no topo e dissolve para baixo) */}
      <div className="relative h-80 sm:h-[28rem] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-1/2">
        <ImagePlaceholder slot={images.assessor} tone="dark" fill sizes="(min-width: 1024px) 50vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-navy-900 lg:bg-gradient-to-r lg:from-30%" />
      </div>

      <div className="relative mx-auto grid max-w-7xl px-4 pb-20 sm:px-6 md:pb-28 lg:grid-cols-2 lg:py-28">
        <div className="lg:col-start-2 lg:pl-12 xl:pl-20">
          <p className="text-sm text-white/60">
            Assessoria de investimentos
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Um especialista cuidando do seu patrimônio
          </h2>
          <p className="mt-4 text-white/70">
            Conte com assessores certificados para construir uma estratégia sob medida, do
            primeiro aporte à sucessão patrimonial.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title}>
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
