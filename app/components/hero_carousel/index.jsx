import React from "react";

const HeroCarousel = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <h1 className="max-w-[285px] text-xl font-bold leading-[24px] tracking-heading">
          Cara menjadi bagian dari kami!
        </h1>
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex flex-row gap-4 overflow-x-scroll">
            <div className="flex min-w-[303px] flex-col justify-center rounded-md bg-[#13194B] px-4 py-6">
              <h1 className="pb-2 text-xl font-bold text-white">01</h1>
              <h2 className="pb-4 font-bold -tracking-heading text-[#F9CD34]">
                Daftar Online / Offline
              </h2>
              <p className="text-xs font-medium tracking-paragraph text-white">
                Daftar secara langsung ke kantor kami atau daftar secara online
                lewat website kami.
              </p>
            </div>
            <div className="min-w-[303px] rounded-md border border-[#13194B] px-4 py-6 text-[#13194B]">
              <h1 className="pb-2 text-xl font-bold">02</h1>
              <h2 className=" pb-4 font-bold -tracking-heading">
                Siapkan dan Isi Dokumen
              </h2>
              <p className=" text-xs font-medium tracking-paragraph">
                Siapkan dokumen persyaratan dan isi secara online atau datang ke
                kantor kami.
              </p>
            </div>
            <div className="min-w-[303px] rounded-md border border-[#13194B] px-4 py-6 text-[#13194B]">
              <h1 className=" pb-2 text-xl font-bold">03</h1>
              <h2 className=" pb-4 font-bold -tracking-heading">
                Konsultasikan Masalah Anda
              </h2>
              <p className=" text-xs font-medium tracking-paragraph">
                Konsultasikan kebutuhan yang sesesuai untuk mengatasi masalah
                dalam bisnis anda.
              </p>
            </div>
          </div>
        </div>
        <p className="text-center text-xs font-bold -tracking-heading">
          {"<"}- geser -{">"}
        </p>
      </div>
    </>
  );
};

export default HeroCarousel;
