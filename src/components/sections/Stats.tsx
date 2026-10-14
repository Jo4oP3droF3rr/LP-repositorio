// Valores são exemplos e precisam ser validados com dados oficiais antes de publicar.
const stats = [
  { value: "R$ XXX bi", label: "sob custódia e gestão" },
  { value: "+XX anos", label: "de história no mercado financeiro" },
  { value: "+X mi", label: "de clientes" },
  { value: "+XX", label: "escritórios no Brasil e no mundo" },
];

export function Stats() {
  return (
    <section className="border-b border-navy-900/10 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="text-3xl font-bold text-navy-900 sm:text-4xl">{s.value}</p>
            <p className="mt-2 text-sm text-navy-800/70">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="pb-6 text-center font-mono text-[11px] text-navy-800/50">
        [DADOS A CONFIRMAR: substituir pelos números oficiais do RI]
      </p>
    </section>
  );
}
