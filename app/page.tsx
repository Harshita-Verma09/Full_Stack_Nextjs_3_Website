


import TopCards from "@/components/TopCards";
import StrategySection from "@/components/StrategySection";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Create from "@/components/letscreate";
import Partner from "@/components/Partner";
import Game from "@/components/Game";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <TopCards />
      <StrategySection />
      <Create />
      <Partner />
      <Game />
      <Footer/>
    </>
  );
}


