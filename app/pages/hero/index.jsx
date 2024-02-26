import Image from "next/image";
import React from "react";
import Dot from "../../assets/image/dot.png";
import HeroCarousel from "@/app/components/hero_carousel";

const Hero = () => {
  return (
    <>
      <div className="w-full px-6 text-[#13194B]" id="hero">
        {/* Hero Title n Desc */}
        <div className="">
          <h1 className="pb-4 pt-10 text-[32px] font-bold leading-[40px] tracking-heading sm:text-[24px]">
            Bermitra dengan kami untuk pertumbuhan bisnis Anda.
          </h1>
          <h3 className="pb-2 font-medium">
            Apa yang kami dapat lakukan dalam upaya untuk membantu bisnis anda ?
          </h3>
          <ul className="flex max-w-[325px] flex-col gap-2 text-sm font-medium tracking-paragraph">
            <li className="flex items-center justify-center gap-2">
              <Image src={Dot} alt="dot logo" className="h-[16px] w-[16px]" />
              <p>Memberikan saran dan rekomendasi untuk strategi bisnis</p>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Image src={Dot} alt="dot logo" className="h-[16px] w-[16px]" />
              <p>Mengumpulkan, menganalisis, dan menginterpretasikan data</p>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Image src={Dot} alt="dot logo" className="h-[16px] w-[16px]" />
              <p>
                Mengintegrasikan sistem dan teknologi untuk meningkatkan
                efisiensi
              </p>
            </li>
            <li className="flex items-center justify-center gap-2">
              <Image src={Dot} alt="dot logo" className="h-[16px] w-[16px]" />
              <p>
                Memberikan saran keuangan, perencanaan pajak, dan analisis
                keuangan
              </p>
            </li>
          </ul>
        </div>
        {/* Hero Carousel | Cara Bergabung Dengan Kami */}
        <div className="mt-8">
          <HeroCarousel />
        </div>
      </div>
    </>
  );
};

export default Hero;
