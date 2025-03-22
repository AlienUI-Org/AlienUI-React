import Hero from "@/components/Hero";
import WhyUseAlienUI from "@/components/WhyUseAlienUI";
//import NewsLetter from "@/components/NewsLetter";
import FaQ from "@/components/FaQ";
import Inspiration from "@/components/Inspiration";
import Contributors from "@/components/Contributors";
import Products from "@/components/Products";
import InstallVSExtensionModal from "@/components/InstallVScodeExtension";

export default function Home() {
  return (
    <section>
      <InstallVSExtensionModal />
      <Hero />
      <WhyUseAlienUI />
      <Inspiration />
      <Products />
      <FaQ />
      <Contributors />
    </section>
  );
}
