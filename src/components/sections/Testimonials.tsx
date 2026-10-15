import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

// Depoimentos fictícios para apresentação de portfólio.
const testimonials = [
  {
    name: "Juliana Ferreira",
    role: "Investidora desde 2019",
    quote:
      "Comecei com o Tesouro para montar minha reserva e hoje acompanho tudo pelo app entre um cliente e outro da loja. Simples, rápido e sem surpresa nas taxas.",
    slot: images.avatar01,
  },
  {
    name: "Rafael Monteiro",
    role: "Cliente de assessoria",
    quote:
      "Meu assessor entendeu que eu queria expandir o negócio sem descuidar da família. Montamos uma carteira para cada objetivo e revisamos juntos todo trimestre.",
    slot: images.avatar02,
  },
  {
    name: "Marina Duarte",
    role: "Usuária do app",
    quote:
      "Abri a conta em poucos minutos e trouxe meus investimentos de outro banco sem dor de cabeça. Pix, cartão e carteira no mesmo app facilitam muito.",
    slot: images.avatar03,
  },
];

export function Testimonials() {
  return (
    <section className="bg-brand-50/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">Quem investe, recomenda</h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.slot.id}
              className="flex flex-col rounded-lg border border-navy-900/10 bg-white p-8 shadow-sm"
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
