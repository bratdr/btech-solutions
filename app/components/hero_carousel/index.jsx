import React from "react";

const HeroCarousel = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-4 xl:gap-8">
        <h1 className="max-w-[285px] text-xl font-bold leading-[24px] tracking-heading xl:max-w-full xl:text-[32px]">
          Cara menjadi bagian dari kami!
        </h1>
        <div className="flex flex-row items-center justify-center gap-2 xl:justify-between">
          <div className="flex flex-row gap-4 overflow-x-scroll xl:w-full">
            <div className="flex min-w-[303px] flex-col justify-center rounded-md bg-[#13194B] px-4 py-6 xl:h-[216px] xl:w-full xl:px-8">
              <h1 className="pb-2 text-xl font-bold text-white xl:text-xl xl:tracking-heading">
                01
              </h1>
              <h2 className="pb-4 font-bold -tracking-heading text-[#F9CD34] xl:text-xl xl:tracking-heading">
                Daftar Online / Offline
              </h2>
              <p className="text-xs font-medium tracking-paragraph text-white xl:max-w-[360px] xl:text-base">
                Daftar secara langsung ke kantor kami atau daftar secara online
                lewat website kami.
              </p>
            </div>
            <div className="flex min-w-[303px] flex-col justify-center rounded-md border border-primary px-4 py-6 xl:h-[216px] xl:w-full xl:px-8">
              <h1 className="pb-2 text-xl font-bold xl:text-xl xl:tracking-heading">
                02
              </h1>
              <h2 className=" pb-4 font-bold -tracking-heading text-primary xl:text-xl xl:tracking-heading">
                Siapkan dan Isi Dokumen
              </h2>
              <p className="text-xs font-medium tracking-paragraph text-primary xl:max-w-[360px] xl:text-base">
                Siapkan dokumen persyaratan dan isi secara online atau datang ke
                kantor kami.
              </p>
            </div>
            <div className="flex min-w-[303px] flex-col justify-center rounded-md border border-primary px-4 py-6 xl:h-[216px] xl:w-full xl:px-8">
              <h1 className="pb-2 text-xl font-bold xl:text-xl xl:tracking-heading">
                03
              </h1>
              <h2 className=" pb-4 font-bold -tracking-heading text-primary xl:text-xl xl:tracking-heading">
                Konsultasikan Masalah Anda
              </h2>
              <p className="text-xs font-medium tracking-paragraph text-primary xl:max-w-[360px] xl:text-base">
                Konsultasikan kebutuhan yang sesesuai untuk mengatasi masalah
                dalam bisnis anda.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-xs font-bold -tracking-heading xl:hidden">
          {"<"}- geser -{">"}
        </p>
      </div>
    </>
  );
};

export default HeroCarousel;
