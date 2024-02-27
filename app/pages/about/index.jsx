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
      <div className="mt-14 bg-about px-6 py-14 text-white" id="about">
        <div className="w-full">
          <h1 className="text-[32px] font-bold leading-[40px] tracking-tight ">
            Tentang Perusahaan
          </h1>
          <h3 className="mt-4 text-2xl font-bold leading-[40px] tracking-tight text-[#F9CD34]">
            B.Tech Solutions
          </h3>
          <div className="mt-2 text-sm font-medium leading-[20pt]">
            <p>
              B.tech adalah perusahaan yang berjalan di bidang “
              <span className="font-bold text-[#F9CD34]">
                Business solution providers
              </span>
              ”. Kami memahami bahwa setiap perusahaan memiliki tantangan yang
              berbeda oleh karena itu kami memiliki tujuan untuk membantu
              menyelesaikan masalah bisnis anda sehingga bisnis anda dapat
              berkembang.
            </p>
          </div>
        </div>
        <div className="mt-6 h-[208px] w-full rounded-md bg-white p-[1px]">
          <div className="flex h-full w-full items-center justify-center rounded-md bg-video bg-no-repeat object-cover">
            <Image
              src={Play_Img}
              alt="play button"
              className="h-[32px] w-[32px]"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="mt-4 text-2xl font-bold leading-[40px] tracking-tight text-[#F9CD34]">
            Dokumentasi Kegiatan
          </h3>
          <div className="mt-2 text-sm font-medium leading-[20pt]">
            <p>
              Telusuri foto-foto yang menarik dan hidupkan kembali sorotan dari
              upaya kolektif kami dalam membangun persatuan, pemberdayaan, dan
              dampak positif dalam komunitas kami.
            </p>
          </div>
        </div>
        {/* Kegiatan Galeri */}
        <div className="flex flex-col gap-4">
          <h4 className="mt-6 text-xl font-bold leading-[40px] tracking-tight">
            Galeri Kegiatan
          </h4>
          <div className="flex gap-4 overflow-x-scroll">
            <div className="min-h-[112px] min-w-[183px]">
              <Image src={Kegiatan1} alt="Photo Kegiatan 1" />
            </div>
            <div className="min-h-[112px] min-w-[183px]">
              <Image src={Kegiatan2} alt="Photo Kegiatan 1" />
            </div>
            <div className="min-h-[112px] min-w-[183px]">
              <Image src={Kegiatan3} alt="Photo Kegiatan 1" />
            </div>
          </div>
          <Link
            href="/about"
            className="flex h-8 w-[120px] items-center justify-center
            rounded-md bg-[#F9CD34] px-4 py-2 text-sm font-bold text-[#13194B]"
          >
            Selengkapnya
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
