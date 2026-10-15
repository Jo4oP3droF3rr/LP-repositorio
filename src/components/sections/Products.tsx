import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

const products = [
  {
    title: "CDB",
    text: "Renda fixa com proteção do FGC e opções com liquidez diária ou prazos maiores.",
    slot: images.productCdb,
  },
  {
    title: "Tesouro Direto",
    text: "Títulos públicos a partir de valores baixos, ideais para reserva e objetivos de longo prazo.",
    slot: images.productTesouro,
  },
  {
    title: "Fundos de Investimento",
    text: "Fundos próprios e de gestoras parceiras, selecionados por especialistas.",
    slot: images.productFundos,
  },
  {
    title: "Renda Variável",
    text: "Ações, FIIs, ETFs e BDRs com plataforma de negociação completa e análises diárias.",
    slot: images.productAcoes,
  },
  {
    title: "Previdência Privada",
    text: "Planos PGBL e VGBL para planejar a aposentadoria com eficiência tributária.",
    slot: images.productPrevidencia,
  },
  {
    title: "Cartão de Crédito",
    text: "Cartão sem anuidade com benefícios e cashback que podem virar investimento.",
    slot: images.productCartao,
  },
];

export function Products() {
  return (
    <section id="produtos" className="scroll-mt-20 bg-brand-50/60">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm text-navy-800/60">
            Investimentos
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            Tudo o que você precisa para investir, em um só lugar
          </h2>
          <p className="mt-4 text-navy-800/70">
            Do primeiro investimento à carteira diversificada, escolha os produtos que combinam com
            o seu perfil.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.title}
              className="group rounded-lg border border-navy-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-24">
                <ImagePlaceholder slot={p.slot} compact />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/70">{p.text}</p>
              <a
                href="#abrir-conta"
                className="mt-5 inline-block text-sm font-semibold text-brand-500 group-hover:text-brand-600"
              >
                Começar a investir →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
