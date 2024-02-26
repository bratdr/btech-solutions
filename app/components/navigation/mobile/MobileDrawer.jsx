import React from "react";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";

import Logo from "../ButtonLogo.jsx";

export default function MobileDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed right-0 top-0 z-10 flex h-full w-full transform flex-col items-center justify-center bg-primary text-black transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="absolute left-6 top-4 border border-white"
        onClick={onClose}
      >
        <Logo />
      </button>

      <button className="absolute right-6 top-3 pt-2" onClick={onClose}>
        <AiOutlineMenu size={24} className="text-white" />
      </button>
      <ul className="flex flex-col items-center justify-center gap-8">
        <li className="hover:text-tertiary text-xl font-medium text-white hover:font-semibold">
          <Link href="/" onClick={onClose}>
            Beranda
          </Link>
        </li>
        <li className="hover:text-tertiary text-xl font-medium text-white hover:font-semibold">
          <Link href="/tentang-kami" onClick={onClose}>
            Tentang Kami
          </Link>
        </li>
        <li className="hover:text-tertiary text-xl font-medium text-white hover:font-semibold">
          <Link href="/galeri" onClick={onClose}>
            Galeri
          </Link>
        </li>
        <li className="hover:text-tertiary text-xl font-medium text-white hover:font-semibold">
          <Link href="/berita" onClick={onClose}>
            Berita
          </Link>
        </li>
        <li className="hover:text-tertiary text-xl font-medium text-white hover:font-semibold">
          <Link href="/kontak" onClick={onClose}>
            Kontak
          </Link>
        </li>
        {/* Add other navigation links */}
      </ul>
    </div>
  );
}
