const faqs = [
  {
    q: "Quanto custa abrir e manter uma conta?",
    a: "A abertura e a manutenção da conta digital são gratuitas. Consulte a tabela de tarifas vigente para serviços específicos.",
  },
  {
    q: "Qual o valor mínimo para começar a investir?",
    a: "Depende do produto. Há opções de renda fixa e Tesouro Direto com aplicação inicial a partir de valores baixos.",
  },
  {
    q: "Meu dinheiro está seguro?",
    a: "Produtos elegíveis, como CDB e conta, contam com a garantia do FGC dentro dos limites vigentes. Títulos públicos têm garantia do Tesouro Nacional.",
  },
  {
    q: "Preciso ter um assessor?",
    a: "Não. Você pode investir sozinho pelo app ou contar com um assessor para montar e acompanhar sua carteira.",
  },
  {
    q: "Como transfiro meus investimentos de outra instituição?",
    a: "Solicite a portabilidade pelo app ou com seu assessor. A transferência de custódia é feita sem precisar resgatar os ativos.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">Perguntas frequentes</h2>

        <div className="mt-12 divide-y divide-navy-900/10 border-y border-navy-900/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-semibold">
                {f.q}
                <span className="text-2xl leading-none text-brand-500 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-navy-800/70">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
