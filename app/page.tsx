import TopBanner from "../src/components/top-banner";
import Navbar from "../src/components/navbar";
import Hero from "../src/components/hero";
import Partners from "../src/components/partners";
import TokenSaleDetails from "../src/components/token-sale-details";
import Footer from "../src/components/footer";
import { GridBackground } from "../src/components/grid-background";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[1440px] overflow-hidden bg-black text-white">
      <TopBanner />

      <div className="zoth-scene">
        
        <div aria-hidden="true" className="zoth-scene-glow" />
        <GridBackground/>

        <Navbar />
        <Hero />
      </div>

      <Partners />
      <TokenSaleDetails />
      <Footer />
    </main>
  );
}