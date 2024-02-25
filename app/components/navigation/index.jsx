import React from "react";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
  return (
    <>
      <div className="fixed flex flex-row items-center justify-between px-6 w-full h-16 bg-white shadow-sm">
        <Image src="/icon2.png" width={32} height={32} alt="B-Tech Icon" />
        <a>
          <AiOutlineMenu size={24} />
        </a>
      </div>
    </>
  );
};

export default Navigation;
