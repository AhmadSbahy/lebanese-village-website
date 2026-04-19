import { setRequestLocale } from "next-intl/server";
import { Navbar } from "@/components/nav/Navbar";
import { Footer } from "@/components/nav/Footer";
import { Hero } from "@/components/hero/Hero";
import { Story } from "@/components/sections/Story";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { MenuSection } from "@/components/sections/Menu";
import { Gallery } from "@/components/sections/Gallery";
import { Visit } from "@/components/sections/Visit";
import { ArabesqueDivider } from "@/components/ornament/ArabesqueDivider";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ArabesqueDivider />
      <Story />
      <ArabesqueDivider />
      <SignatureDishes />
      <ArabesqueDivider />
      <MenuSection />
      <ArabesqueDivider />
      <Gallery />
      <ArabesqueDivider />
      <Visit />
      <Footer />
    </main>
  );
}
