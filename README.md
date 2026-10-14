# Landing Page BTG Pactual (Investimentos PF)

Landing page em **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4**, focada em captação de clientes pessoa física (abertura de conta e investimentos).

## Rodando

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
```

## Estrutura

```
src/
  app/                   layout, página e estilos globais (tokens de cor em globals.css)
  components/
    ImagePlaceholder.tsx placeholder com label de imagem (vira <Image> quando há src)
    sections/            Header, Hero, Stats, Products, AppShowcase, Advisory,
                         Testimonials, Faq, FinalCta, Footer
  content/images.ts      mapa central de TODAS as imagens da página
public/images/           onde os arquivos de imagem devem ser colocados
```

## Imagens

Cada espaço de imagem aparece na página como uma caixa tracejada com um label amarelo (`IMG-...`), a descrição, o tamanho recomendado e o caminho do arquivo.

**Para inserir uma imagem:**

1. Coloque o arquivo em `public/` no caminho indicado na tabela.
2. Em `src/content/images.ts`, adicione `src` no slot correspondente com o mesmo caminho:
   ```ts
   hero: {
     id: "IMG-HERO-01",
     ...
     path: "/images/hero.webp",
     src: "/images/hero.webp", // <- adicionar
   },
   ```
3. Pronto: o placeholder é substituído automaticamente por `next/image`.

| ID | Seção | Descrição | Tamanho (px) | Arquivo |
|---|---|---|---|---|
| `IMG-LOGO` | Header | Logo BTG Pactual (versão horizontal, fundo transparente) | 800×318 | `public/images/logo-btg.png` ✅ |
| `IMG-LOGO-FOOTER` | Footer | Logo BTG Pactual (versão negativa/branca) | 800×318 | `public/images/logo-btg-white.png` ✅ |
| `IMG-HERO-01` | Hero (desktop) | Foto de fundo do hero no desktop | 2000×1125 | `public/images/hero.webp` ✅ |
| `IMG-HERO-MOBILE` | Hero (mobile) | Foto do hero no celular (retrato), texto fica sobre a parte de baixo | 1116×2000 | `public/images/hero-mobile.webp` ✅ |
| `IMG-PROD-CDB` | Produtos | Ícone/ilustração CDB | 160×160 | `public/images/produtos/cdb.svg` |
| `IMG-PROD-TESOURO` | Produtos | Ícone/ilustração Tesouro Direto | 160×160 | `public/images/produtos/tesouro.svg` |
| `IMG-PROD-FUNDOS` | Produtos | Ícone/ilustração Fundos de Investimento | 160×160 | `public/images/produtos/fundos.svg` |
| `IMG-PROD-ACOES` | Produtos | Ícone/ilustração Renda Variável (ações, FIIs, ETFs) | 160×160 | `public/images/produtos/acoes.svg` |
| `IMG-PROD-PREV` | Produtos | Ícone/ilustração Previdência Privada | 160×160 | `public/images/produtos/previdencia.svg` |
| `IMG-PROD-CARTAO` | Produtos | Imagem do cartão BTG | 160×160 | `public/images/produtos/cartao.webp` |
| `IMG-APP-MOCKUP` | App | Mockup de celular com a tela do app BTG Investimentos | 900×1100 | `public/images/app-mockup.webp` |
| `IMG-BADGE-APPSTORE` | App | Selo oficial 'Baixar na App Store' | 270×80 | `public/images/badges/app-store.svg` |
| `IMG-BADGE-GPLAY` | App | Selo oficial 'Disponível no Google Play' | 270×80 | `public/images/badges/google-play.svg` |
| `IMG-ASSESSOR` | Assessoria | Foto de assessor(a) atendendo cliente / reunião de investimentos | 1200×900 | `public/images/assessoria.webp` |
| `IMG-AVATAR-01` | Depoimentos | Foto do cliente 1 (quadrada, rosto centralizado) | 160×160 | `public/images/depoimentos/cliente-01.webp` |
| `IMG-AVATAR-02` | Depoimentos | Foto do cliente 2 (quadrada, rosto centralizado) | 160×160 | `public/images/depoimentos/cliente-02.webp` |
| `IMG-AVATAR-03` | Depoimentos | Foto do cliente 3 (quadrada, rosto centralizado) | 160×160 | `public/images/depoimentos/cliente-03.webp` |
| `IMG-CTA-BG` | CTA final | Imagem de fundo do banner final (escura ou com overlay, texto vai por cima) | 1920×800 | `public/images/cta-bg.webp` |
| `IMG-SELO-ANBIMA` | Footer | Selo ANBIMA (usar arquivo oficial) | 200×80 | `public/images/selos/anbima.svg` |
| `IMG-SELO-B3` | Footer | Selo B3 / PQO (usar arquivo oficial) | 200×80 | `public/images/selos/b3.svg` |

## Conteúdo a validar antes de publicar

- **Marca:** logo, selos (ANBIMA, B3) e badges das lojas devem ser os arquivos oficiais, com autorização de uso.
- **Números** da seção de estatísticas estão como `XXX` e precisam vir de fonte oficial (RI).
- **Depoimentos** são textos de exemplo; substituir por depoimentos reais e autorizados.
- **Disclaimers** do rodapé e condições comerciais (taxas, FGC, custódia) precisam de validação do compliance.
- **Telefones** de atendimento/ouvidoria estão como `0800 XXX XXXX`.
