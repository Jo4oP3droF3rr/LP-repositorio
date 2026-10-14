import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

const columns = [
  {
    title: "Investimentos",
    links: ["Renda Fixa", "Tesouro Direto", "Fundos", "Ações", "Previdência"],
  },
  {
    title: "Conta",
    links: ["Conta digital", "Cartão de crédito", "Pix", "Tarifas"],
  },
  {
    title: "Institucional",
    links: ["Sobre o BTG", "Relações com Investidores", "Carreiras", "Ouvidoria"],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div>
            <div className="w-40">
              <ImagePlaceholder slot={images.logoFooter} tone="dark" compact className="p-1" />
            </div>
            <p className="mt-6 text-sm">
              Atendimento: 0800 XXX XXXX
              <br />
              Ouvidoria: 0800 XXX XXXX
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-white">{c.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <div className="w-32">
            <ImagePlaceholder slot={images.seloAnbima} tone="dark" compact />
          </div>
          <div className="w-32">
            <ImagePlaceholder slot={images.seloB3} tone="dark" compact />
          </div>
        </div>

        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-xs leading-relaxed text-white/45">
          <p>
            [DISCLAIMER A VALIDAR COM COMPLIANCE] Rentabilidade passada não é garantia de
            rentabilidade futura. Investimentos envolvem riscos e não contam com garantia da
            instituição, do gestor, de qualquer mecanismo de seguro ou do FGC, exceto quando
            indicado. Leia o regulamento, a lâmina e o formulário de informações complementares
            antes de investir.
          </p>
          <p>*Condições sujeitas a alteração. Consulte as regras vigentes.</p>
          <p>© {new Date().getFullYear()} Banco BTG Pactual S.A. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
