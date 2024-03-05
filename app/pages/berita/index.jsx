import Link from "next/link";
import ButtonMedium from "@/app/components/button/ButtonMedium";
import BeritaCarousel from "@/app/components/carousel/BeritaCarousel";

const Berita = () => {
  return (
    <>
      <div className="flex w-full flex-col px-6 pb-16 xl:px-0" id="berita">
        <div className="mb-4 mt-10 max-w-[325px] text-[#13194B] xl:max-w-[535px]">
          <h3 className="xl:text-h2_desktop mt-4 text-2xl font-bold leading-[40px] tracking-tight">
            Media dan Informasi
          </h3>
          <div className="xl:text-body_desktop mt-2 text-sm font-medium leading-loose">
            <p>
              Temukan konten menarik, artikel informatif, dan materi yang
              dirancang dengan professional.
            </p>
          </div>
        </div>

        <Link className="max-w-[124px]" href="/berita">
          <ButtonMedium />
        </Link>
        {/* Berita Carousel */}
        <BeritaCarousel />
      </div>
    </>
  );
};

export default Berita;
