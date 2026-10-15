import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { CardShowcase } from "@/components/sections/CardShowcase";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { Advisory } from "@/components/sections/Advisory";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <CardShowcase />
        <AppShowcase />
        <Advisory />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
