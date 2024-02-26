import React from "react";
import Image from "next/image";
import Link from "next/link";

const LogoButton = () => {
  return (
    <div>
      <Link href="/">
        <Image src="/icon2.png" width={32} height={32} alt="B-Tech Icon" />
      </Link>
    </div>
  );
};

export default LogoButton;
