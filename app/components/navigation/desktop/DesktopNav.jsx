import React from "react";
import Logo from "../ButtonLogo.jsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonNavbar from "../../button/ButtonNavbar.jsx";

const NavDesktop = () => {
  const currentPath = usePathname();

  return (
    <div className="fixed hidden h-16 w-full flex-row items-center justify-between bg-white px-6 shadow-sm xl:flex xl:px-32">
      <Logo />
      <div className="flex flex-row items-center justify-center gap-8">
        <Link
          href={"/"}
          className={
            currentPath === "/"
              ? "flex h-16 items-center justify-center border border-x-0 border-b-2 border-b-primary  font-semibold text-primary"
              : "font-medium text-secondary"
          }
        >
          Beranda
        </Link>
        <Link
          href={"/tentang-kami"}
          className={
            currentPath === "/tentang-kami"
              ? "flex h-16 items-center justify-center border border-x-0 border-b-2 border-b-primary  font-semibold text-primary"
              : "font-medium text-secondary"
          }
        >
          Tentang Kami
        </Link>
        <Link
          href={"/galeri"}
          className={
            currentPath === "/galeri"
              ? "flex h-16 items-center justify-center border border-x-0 border-b-2 border-b-primary  font-semibold text-primary"
              : "font-medium text-secondary"
          }
        >
          Galeri
        </Link>
        <Link
          href={"/berita"}
          className={
            currentPath === "/berita"
              ? "flex h-16 items-center justify-center border border-x-0 border-b-2 border-b-primary font-semibold text-primary"
              : "font-medium text-secondary"
          }
        >
          Berita
        </Link>
        <Link
          href={"/kontak"}
          className={
            currentPath === "/kontak"
              ? "flex h-16 items-center justify-center border border-x-0 border-b-2 border-b-primary font-semibold text-primary"
              : "font-medium text-secondary"
          }
        >
          Kontak
        </Link>
      </div>
      <ButtonNavbar />
    </div>
  );
};

export default NavDesktop;
