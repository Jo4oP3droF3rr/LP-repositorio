import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BTG Pactual | Invista com o maior banco de investimentos da América Latina",
  description:
    "Abra sua conta gratuita no BTG Pactual e invista em CDB, Tesouro Direto, fundos, ações e previdência com assessoria especializada.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
