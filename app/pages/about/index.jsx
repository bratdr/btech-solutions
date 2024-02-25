import React from "react";
import Play_Img from "../../assets/image/play.png";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="bg-about text-white mt-14 py-14 px-6">
        <div className="max-w-[325px]">
          <h1 className="text-[32px] leading-[40px] tracking-tight font-bold ">
            Tentang Perusahaan
          </h1>
          <h1 className="text-2xl leading-[40px] tracking-tight font-bold mt-4 text-[#F9CD34]">
            B.Tech Solutions
          </h1>
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
      </div>
    </>
  );
};

export default About;
