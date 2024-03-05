import React from "react";
import Link from "next/link";

export default function ButtonNavbar() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 font-semibold tracking-heading">
        {/* Masuk Button */}
        <Link
          className="flex h-8 items-center justify-center rounded-md px-6 text-primary outline outline-1 outline-primary"
          href="/masuk"
        >
          Masuk
        </Link>
        {/* Daftar Button */}
        <Link
          className="flex h-8 items-center justify-center rounded-md bg-primary px-6 text-white"
          href="/daftar"
        >
          Daftar
        </Link>
      </div>
    </div>
  );
}
