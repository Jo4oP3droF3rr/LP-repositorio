import { Card3D } from "@/components/Card3D";
import { images } from "@/content/images";

export function CardShowcase() {
  const card = images.cardUltrablue;

  return (
    <section id="cartao" className="relative scroll-mt-20 overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-brand-500/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="py-6 md:py-10">
          <Card3D
            src={card.src}
            alt={card.description}
            width={card.width}
            height={card.height}
            word="ULTRABLUE"
          />
        </div>

        <div className="mt-6 text-center lg:text-left">
          <h2 className="text-4xl leading-[1.05] font-medium tracking-tight sm:text-6xl">
            O cartão que pesa
            <span className="block text-white/45">no bolso certo.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70 lg:mx-0">
            Vá mais longe com até 4,5 pontos por dólar gasto ou até 2% de cashback em todas as suas
            compras no crédito, concierge dedicado para apoiar o planejamento de viagens, eventos e
            celebrações, acessos ilimitados às Salas VIP Dragonpass e LoungeKey, e muito mais.
          </p>

          <a
            href="#abrir-conta"
            className="mt-10 inline-block rounded-md bg-accent-400 px-7 py-4 font-semibold text-navy-950 transition hover:brightness-95"
          >
            Quero o Ultrablue
          </a>
        </div>
      </div>
    </section>
  );
}
