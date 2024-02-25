import React from "react";

const HeroCarousel = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-xl font-bold leading-[24px] tracking-heading max-w-[285px]">
          Cara menjadi bagian dari kami!
        </h1>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex flex-row gap-4 overflow-x-scroll">
            <div className="flex flex-col justify-center min-w-[303px] bg-[#13194B] px-4 py-6 rounded-md">
              <h1 className="text-white font-bold pb-2 text-xl">01</h1>
              <h2 className="text-[#F9CD34] font-bold -tracking-heading pb-4">
                Daftar Online / Offline
              </h2>
              <p className="text-white font-medium text-xs tracking-paragraph">
                Daftar secara langsung ke kantor kami atau daftar secara online
                lewat website kami.
              </p>
            </div>
            <div className="min-w-[303px] border border-[#13194B] px-4 py-6 rounded-md text-[#13194B]">
              <h1 className="font-bold pb-2 text-xl">02</h1>
              <h2 className=" font-bold -tracking-heading pb-4">
                Siapkan dan Isi Dokumen
              </h2>
              <p className=" font-medium text-xs tracking-paragraph">
                Siapkan dokumen persyaratan dan isi secara online atau datang ke
                kantor kami.
              </p>
            </div>
            <div className="min-w-[303px] border border-[#13194B] px-4 py-6 rounded-md text-[#13194B]">
              <h1 className=" font-bold pb-2 text-xl">03</h1>
              <h2 className=" font-bold pb-4 -tracking-heading">
                Konsultasikan Masalah Anda
              </h2>
              <p className=" font-medium text-xs tracking-paragraph">
                Konsultasikan kebutuhan yang sesesuai untuk mengatasi masalah
                dalam bisnis anda.
              </p>
            </div>
          </div>
        </div>
        <p className="text-xs font-bold -tracking-heading text-center">
          {"<"}- geser -{">"}
        </p>
      </div>
    </>
  );
};

export default HeroCarousel;
