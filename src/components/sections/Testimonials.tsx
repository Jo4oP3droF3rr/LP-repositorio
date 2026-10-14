import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

// Depoimentos de exemplo: substituir por depoimentos reais e autorizados.
const testimonials = [
  {
    name: "Nome do Cliente",
    role: "Investidor desde 20XX",
    quote:
      "Texto de exemplo. Inserir aqui o depoimento real do cliente sobre a experiência com a plataforma.",
    slot: images.avatar01,
  },
  {
    name: "Nome da Cliente",
    role: "Cliente de assessoria",
    quote:
      "Texto de exemplo. Inserir aqui o depoimento real sobre o atendimento da assessoria de investimentos.",
    slot: images.avatar02,
  },
  {
    name: "Nome do Cliente",
    role: "Usuário do app",
    quote:
      "Texto de exemplo. Inserir aqui o depoimento real sobre a usabilidade do app e a conta digital.",
    slot: images.avatar03,
  },
];

export function Testimonials() {
  return (
    <section className="bg-brand-50/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Quem investe, recomenda</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.slot.id}
              className="flex flex-col rounded-2xl border border-navy-900/10 bg-white p-8 shadow-sm"
            >
              <blockquote className="flex-1 leading-relaxed text-navy-800/80">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <div className="w-20 shrink-0">
                  <ImagePlaceholder slot={t.slot} compact className="rounded-full" />
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-navy-800/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
