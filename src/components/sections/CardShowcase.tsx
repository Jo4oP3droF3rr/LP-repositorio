import { Card3D } from "@/components/Card3D";
import { images } from "@/content/images";

// Benefícios a validar com a tabela oficial do cartão antes de publicar.
const perks = [
  { label: "Bandeira", value: "Mastercard World Legend" },
  { label: "Pagamento", value: "Aproximação, carteiras digitais e cartão virtual" },
  { label: "Benefícios", value: "[A CONFIRMAR: salas VIP, pontos, cashback]" },
];

export function CardShowcase() {
  const card = images.cardUltrablue;

  return (
    <section id="cartao" className="relative scroll-mt-20 overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute top-1/2 right-0 h-[40rem] w-[40rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-brand-500/25 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">Ultrablue</p>
          <h2 className="mt-4 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
            O cartão que pesa
            <span className="block text-white/45">no bolso certo.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/70">
            Metal escovado, Mastercard World Legend e controle total pelo app. Os gastos aparecem
            em tempo real ao lado da sua carteira de investimentos.
          </p>

          <dl className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {perks.map((p) => (
              <div key={p.label} className="grid grid-cols-[7rem_1fr] gap-4 py-4 text-sm">
                <dt className="text-white/50">{p.label}</dt>
                <dd>{p.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#abrir-conta"
            className="mt-10 inline-block rounded-md bg-accent-400 px-7 py-4 font-semibold text-navy-950 transition hover:brightness-95"
          >
            Quero o Ultrablue
          </a>
        </div>

        <div className="order-first lg:order-last">
          <Card3D src={card.src} alt={card.description} width={card.width} height={card.height} />
        </div>
      </div>
    </section>
  );
}
