import React from "react";
import Image from "next/image";
import Link from "next/link";
import { carouselItems } from "@/app/lib/constants";

export default function BeritaCarousel() {
  return (
    <div>
      <div className="mt-6 flex w-full flex-col gap-4 text-[#13194B] xl:mt-8">
        <h4 className="xl:text-h3_desktop text-xl font-bold leading-[40px] tracking-heading">
          Berita Terbaru
        </h4>
        <div className="flex w-full gap-4 overflow-x-auto">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className="flex min-h-[168px] min-w-[299px] flex-col gap-4 xl:min-h-[232px] xl:min-w-[424px]"
            >
              <Image
                src={item.imageSrc}
                alt={`Gambar Berita ${index + 1}`}
                className="xl:h-[248px]"
              />
              <div className="flex flex-col gap-2">
                <Link href={`/berita/${item.id}`}>
                  <h5 className="text-base font-bold leading-[28px] tracking-paragraph xl:w-[424px]">
                    {item.title}
                  </h5>
                </Link>
                <p className="text-xs xl:font-medium">{item.full_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
