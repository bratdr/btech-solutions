import Image from "next/image";
import Link from "next/link";
import Dot from "../../assets/image/dot.png";
import HeroCarousel from "@/app/components/hero_carousel";
import HeroImg from "../../assets/image/hero/Hero.png";

const Hero = () => {
  return (
    <>
      <div
        className="w-full px-6 text-[#13194B] xl:px-0 xl:pt-[72px]"
        id="hero"
      >
        {/* Hero Title n Desc */}
        <div className="xl:flex xl:w-full xl:flex-row-reverse xl:items-center xl:justify-between xl:gap-5">
          <div
            className="
          hidden xl:block"
          >
            <Image
              src={HeroImg}
              alt="Hero Image"
              className="xl:w-[646px] 2xl:w-[822px]"
            ></Image>
          </div>
          <div className="xl:w-[646px]">
            <h3 className="hidden font-semibold text-primary 2xl:block">
              Business Solution Provider Terbaik Untuk Anda
            </h3>
            <h1 className="pb-4 pt-10 text-[32px] font-bold leading-[40px] tracking-heading sm:text-[24px] xl:pb-6 xl:pt-0 xl:text-3xl 2xl:pt-6 2xl:text-[48px] 2xl:leading-[64px]">
              Bermitra dengan kami untuk pertumbuhan bisnis Anda.
            </h1>
            <h3 className="pb-2 font-medium xl:pb-4 xl:pr-6 xl:font-semibold 2xl:text-lg">
              Apa yang kami dapat lakukan dalam upaya untuk membantu bisnis anda
              ?
            </h3>
            <ul className="flex w-full flex-col items-start justify-start gap-2 text-sm font-medium tracking-paragraph text-secondary xl:w-full xl:max-w-[535px] 2xl:max-w-[635px] 2xl:text-base">
              <li
                className="flex items-center justify-center gap-2 xl:items-start xl:justify-normal
            "
              >
                <Image src={Dot} alt="dot logo" className="h-[16px] w-[16px]" />
                <p>Memberikan saran dan rekomendasi untuk strategi bisnis</p>
              </li>
              <li className="flex items-center justify-center gap-2 xl:items-start xl:justify-normal">
                <Image src={Dot} alt="dot logo" className="h-[16px] w-[16px]" />
                <p>Mengumpulkan, menganalisis, dan menginterpretasikan data</p>
              </li>
              <li className="flex items-center justify-center gap-2 xl:items-start xl:justify-normal">
                <Image src={Dot} alt="dot logo" className="h-[16px] w-[16px]" />
                <p>
                  Mengintegrasikan sistem dan teknologi untuk meningkatkan
                  efisiensi
                </p>
              </li>
              <li className="flex items-center justify-center gap-2 xl:items-start xl:justify-normal">
                <Image src={Dot} alt="dot logo" className="h-[16px] w-[16px]" />
                <p>
                  Memberikan saran keuangan, perencanaan pajak, dan analisis
                  keuangan
                </p>
              </li>
            </ul>
            <Link
              href="/tentang-kami"
              className="hidden h-8 w-full items-center justify-center rounded-md bg-[#F9CD34] px-6
            py-6 text-base font-bold text-[#13194B] xl:mt-6 xl:flex xl:h-2 2xl:mt-8 2xl:w-[275px]"
            >
              Gabung Bersama Kami!
            </Link>
          </div>
        </div>
        <Link
          href="/tentang-kami"
          className="mt-8 flex h-8 w-full items-center justify-center rounded-md
            bg-[#F9CD34] px-6 py-6 text-base font-bold text-[#13194B] xl:hidden xl:w-[275px]"
        >
          Gabung Bersama Kami!
        </Link>
        {/* Hero Carousel | Cara Bergabung Dengan Kami */}
        <div className="mt-8">
          <HeroCarousel />
        </div>
      </div>
    </>
  );
};

export default Hero;
