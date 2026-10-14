import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { images } from "@/content/images";

const nav = [
  { label: "Investimentos", href: "#produtos" },
  { label: "App", href: "#app" },
  { label: "Assessoria", href: "#assessoria" },
  { label: "Dúvidas", href: "#faq" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-900/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="block w-36 shrink-0 sm:w-40" aria-label="BTG Pactual - início">
          <ImagePlaceholder slot={images.logo} compact priority />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-navy-800 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-500">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm font-semibold text-navy-800 hover:text-brand-500 sm:inline"
          >
            Entrar
          </a>
          <a
            href="#abrir-conta"
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-700"
          >
            Abra sua conta
          </a>
        </div>
      </div>
    </header>
  );
}
