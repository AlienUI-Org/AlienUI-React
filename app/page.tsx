import Hero from "@/components/Hero";
import WhyUseAlienUIReact from "@/components/WhyUseAlienUIReact";
import NewsLetter from "@/components/NewsLetter";
import FaQ from "@/components/FaQ";
import Inspiration from "@/components/Inspiration";
import Contributors from "@/components/Contributors";
import Products from "@/components/Products";
import InstallVSExtensionModal from "@/components/InstallVScodeExtension";
import LandingPageCompDisplayOne from "@/components/LandingPageCompDisplayOne";
import LandingPageCompDisplayTwo from "@/components/LandingPageCompDisplayTwo";

export default function Home() {
  return (
    <section>
      <InstallVSExtensionModal />
      <Hero />
      <LandingPageCompDisplayOne />
      <WhyUseAlienUIReact />
      <Inspiration />
      <LandingPageCompDisplayTwo />
      <Products />
      <NewsLetter />
      <FaQ />
      <Contributors />
    </section>
  );
}
