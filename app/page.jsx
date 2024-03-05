import Hero from "./pages/hero";
import Image from "next/image";
import Hero_Img from "./assets/image/Hero2.png";
import About from "./pages/about";
import Berita from "./pages/berita";

export default function Home() {
  return (
    <main className="w-full pt-16 xl:flex xl:flex-col xl:items-center xl:justify-center xl:px-32">
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
      <Berita />
    </main>
  );
}
