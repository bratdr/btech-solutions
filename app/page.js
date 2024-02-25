import Hero from "./pages/hero";
import Image from "next/image";
import Hero_Img from "./assets/image/Hero2.png";
import HeroCarousel from "./components/hero_carousel";
import About from "./pages/about";

export default function Home() {
  return (
    <main className="w-full pt-16">
      <div className="bg-black xl:hidden">
        <Image
          src={Hero_Img}
          alt="Banner Hero"
          style={{
            width: "100%",
          }}
        />
      </div>
      <Hero />
      <About />
    </main>
  );
}
