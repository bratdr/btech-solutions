import Image from "next/image";
import React from "react";
import Dot from "../../assets/image/dot.png";
import HeroCarousel from "@/app/components/hero_carousel";

const Hero = () => {
  return (
    <>
      <div className="w-full px-6 text-[#13194B]">
        {/* Hero Title n Desc */}
        <div className="">
          <h1 className="text-[32px] leading-[40px] tracking-heading font-bold sm:text-[24px] pt-10 pb-4">
            Bermitra dengan kami untuk pertumbuhan bisnis Anda.
          </h1>
          <h3 className="font-medium pb-2">
            Apa yang kami dapat lakukan dalam upaya untuk membantu bisnis anda ?
          </h3>
          <ul className="flex flex-col gap-2 max-w-[325px] tracking-paragraph text-sm font-medium">
            <li className="flex gap-2 items-center justify-center">
              <Image src={Dot} alt="dot logo" className="w-[16px] h-[16px]" />
              <p>Memberikan saran dan rekomendasi untuk strategi bisnis</p>
            </li>
            <li className="flex gap-2 items-center justify-center">
              <Image src={Dot} alt="dot logo" className="w-[16px] h-[16px]" />
              <p>Mengumpulkan, menganalisis, dan menginterpretasikan data</p>
            </li>
            <li className="flex gap-2 items-center justify-center">
              <Image src={Dot} alt="dot logo" className="w-[16px] h-[16px]" />
              <p>
                Mengintegrasikan sistem dan teknologi untuk meningkatkan
                efisiensi
              </p>
            </li>
            <li className="flex gap-2 items-center justify-center">
              <Image src={Dot} alt="dot logo" className="w-[16px] h-[16px]" />
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
