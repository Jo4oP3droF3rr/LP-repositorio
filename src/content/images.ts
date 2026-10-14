// Mapa central de todas as imagens da landing page.
// Para trocar um placeholder pela imagem real: suba o arquivo em `public` no
// caminho indicado em `path` e preencha `src` com o mesmo valor.

export type ImageSlot = {
  id: string;
  section: string;
  description: string;
  width: number;
  height: number;
  path: string;
  src?: string;
};

export const images = {
  logo: {
    id: "IMG-LOGO",
    section: "Header",
    description: "Logo BTG Pactual (versão horizontal, fundo transparente)",
    width: 800,
    height: 318,
    path: "/images/logo-btg.png",
    src: "/images/logo-btg.png",
  },
  logoFooter: {
    id: "IMG-LOGO-FOOTER",
    section: "Footer",
    description: "Logo BTG Pactual (versão negativa/branca)",
    width: 800,
    height: 318,
    path: "/images/logo-btg-white.png",
    src: "/images/logo-btg-white.png",
  },
  hero: {
    id: "IMG-HERO-01",
    section: "Hero",
    description: "Foto de fundo do hero, full-bleed. Pessoa real em contexto (não banco de imagem genérico); deixar o lado esquerdo com respiro para o texto",
    width: 1920,
    height: 1080,
    path: "/images/hero.webp",
  },
  heroMobile: {
    id: "IMG-HERO-MOBILE",
    section: "Hero (mobile)",
    description: "Foto do hero no celular (retrato), texto fica sobre a parte de baixo",
    width: 1116,
    height: 2000,
    path: "/images/hero-mobile.webp",
    src: "/images/hero-mobile.webp",
  },
  productCdb: {
    id: "IMG-PROD-CDB",
    section: "Produtos",
    description: "Ícone/ilustração CDB",
    width: 160,
    height: 160,
    path: "/images/produtos/cdb.svg",
  },
  productTesouro: {
    id: "IMG-PROD-TESOURO",
    section: "Produtos",
    description: "Ícone/ilustração Tesouro Direto",
    width: 160,
    height: 160,
    path: "/images/produtos/tesouro.svg",
  },
  productFundos: {
    id: "IMG-PROD-FUNDOS",
    section: "Produtos",
    description: "Ícone/ilustração Fundos de Investimento",
    width: 160,
    height: 160,
    path: "/images/produtos/fundos.svg",
  },
  productAcoes: {
    id: "IMG-PROD-ACOES",
    section: "Produtos",
    description: "Ícone/ilustração Renda Variável (ações, FIIs, ETFs)",
    width: 160,
    height: 160,
    path: "/images/produtos/acoes.svg",
  },
  productPrevidencia: {
    id: "IMG-PROD-PREV",
    section: "Produtos",
    description: "Ícone/ilustração Previdência Privada",
    width: 160,
    height: 160,
    path: "/images/produtos/previdencia.svg",
  },
  productCartao: {
    id: "IMG-PROD-CARTAO",
    section: "Produtos",
    description: "Imagem do cartão BTG",
    width: 160,
    height: 160,
    path: "/images/produtos/cartao.webp",
  },
  appMockup: {
    id: "IMG-APP-MOCKUP",
    section: "App",
    description: "Mockup de celular com a tela do app BTG Investimentos",
    width: 900,
    height: 1100,
    path: "/images/app-mockup.webp",
  },
  badgeAppStore: {
    id: "IMG-BADGE-APPSTORE",
    section: "App",
    description: "Selo oficial 'Baixar na App Store'",
    width: 270,
    height: 80,
    path: "/images/badges/app-store.svg",
  },
  badgeGooglePlay: {
    id: "IMG-BADGE-GPLAY",
    section: "App",
    description: "Selo oficial 'Disponível no Google Play'",
    width: 270,
    height: 80,
    path: "/images/badges/google-play.svg",
  },
  assessor: {
    id: "IMG-ASSESSOR",
    section: "Assessoria",
    description: "Foto de assessor(a) atendendo cliente / reunião de investimentos",
    width: 1200,
    height: 900,
    path: "/images/assessoria.webp",
  },
  avatar01: {
    id: "IMG-AVATAR-01",
    section: "Depoimentos",
    description: "Foto do cliente 1 (quadrada, rosto centralizado)",
    width: 160,
    height: 160,
    path: "/images/depoimentos/cliente-01.webp",
  },
  avatar02: {
    id: "IMG-AVATAR-02",
    section: "Depoimentos",
    description: "Foto do cliente 2 (quadrada, rosto centralizado)",
    width: 160,
    height: 160,
    path: "/images/depoimentos/cliente-02.webp",
  },
  avatar03: {
    id: "IMG-AVATAR-03",
    section: "Depoimentos",
    description: "Foto do cliente 3 (quadrada, rosto centralizado)",
    width: 160,
    height: 160,
    path: "/images/depoimentos/cliente-03.webp",
  },
  ctaBackground: {
    id: "IMG-CTA-BG",
    section: "CTA final",
    description: "Imagem de fundo do banner final (escura ou com overlay, texto vai por cima)",
    width: 1920,
    height: 800,
    path: "/images/cta-bg.webp",
  },
  seloAnbima: {
    id: "IMG-SELO-ANBIMA",
    section: "Footer",
    description: "Selo ANBIMA (usar arquivo oficial)",
    width: 200,
    height: 80,
    path: "/images/selos/anbima.svg",
  },
  seloB3: {
    id: "IMG-SELO-B3",
    section: "Footer",
    description: "Selo B3 / PQO (usar arquivo oficial)",
    width: 200,
    height: 80,
    path: "/images/selos/b3.svg",
  },
} satisfies Record<string, ImageSlot>;
