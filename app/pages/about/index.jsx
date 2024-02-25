import React from "react";
import Play_Img from "../../assets/image/play.png";
import Image from "next/image";
import Kegiatan1 from "../../assets/image/kegiatan/kegiatan_1.png";
import Kegiatan2 from "../../assets/image/kegiatan/kegiatan_2.png";
import Kegiatan3 from "../../assets/image/kegiatan/kegiatan_3.png";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="bg-about text-white mt-14 py-14 px-6 overflow-x-scroll ">
        <div className="max-w-[325px]">
          <h1 className="text-[32px] leading-[40px] tracking-tight font-bold ">
            Tentang Perusahaan
          </h1>
          <h3 className="text-2xl leading-[40px] tracking-tight font-bold mt-4 text-[#F9CD34]">
            B.Tech Solutions
          </h3>
          <div className="text-sm font-medium mt-2 leading-loose">
            <p>
              B.tech adalah perusahaan yang berjalan di bidang “
              <span className="text-[#F9CD34] font-bold">
                Business solution providers
              </span>
              ”. Kami memahami bahwa setiap perusahaan memiliki tantangan yang
              berbeda oleh karena itu kami memiliki tujuan untuk membantu
              menyelesaikan masalah bisnis anda sehingga bisnis anda dapat
              berkembang.
            </p>
          </div>
        </div>
        <div className="bg-white w-full h-[208px] mt-6 p-[1px] rounded-md">
          <div className="w-full h-full bg-video bg-no-repeat object-cover flex items-center justify-center rounded-md">
            <Image
              src={Play_Img}
              alt="play button"
              className="w-[32px] h-[32px]"
            />
          </div>
        </div>
        <div className="max-w-[325px] mt-10">
          <h3 className="text-2xl leading-[40px] tracking-tight font-bold mt-4 text-[#F9CD34]">
            Dokumentasi Kegiatan
          </h3>
          <div className="text-sm font-medium mt-2 leading-loose">
            <p>
              Telusuri foto-foto yang menarik dan hidupkan kembali sorotan dari
              upaya kolektif kami dalam membangun persatuan, pemberdayaan, dan
              dampak positif dalam komunitas kami.
            </p>
          </div>
        </div>
        {/* Kegiatan Galeri */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xl leading-[40px] tracking-tight font-bold mt-6">
            Galeri Kegiatan
          </h4>
          <div className="flex gap-4 overflow-x-scroll">
            <div className="min-w-[183px] min-h-[112px]">
              <Image src={Kegiatan1} alt="Photo Kegiatan 1" />
            </div>
            <div className="min-w-[183px] min-h-[112px]">
              <Image src={Kegiatan2} alt="Photo Kegiatan 1" />
            </div>
            <div className="min-w-[183px] min-h-[112px]">
              <Image src={Kegiatan3} alt="Photo Kegiatan 1" />
            </div>
          </div>
          <Link
            href="/about"
            className="w-[120px] h-8 flex justify-center items-center
             px-4 py-2 text-sm font-bold rounded-md text-[#13194B] bg-[#F9CD34]"
          >
            Selengkapnya
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
