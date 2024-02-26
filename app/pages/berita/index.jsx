import Image from "next/image";
import Link from "next/link";

import Berita1 from "../../assets/image/berita/berita1.png";
import Berita2 from "../../assets/image/berita/berita2.png";
import Berita3 from "../../assets/image/berita/berita3.png";

const Berita = () => {
  return (
    <>
      <div className="flex flex-col px-6 pb-16" id="berita">
        <div className="mt-10 max-w-[325px] text-[#13194B]">
          <h3 className="mt-4 text-2xl font-bold leading-[40px] tracking-tight">
            Media dan Informasi
          </h3>
          <div className="mt-2 text-sm font-medium leading-loose">
            <p>
              Temukan konten menarik, artikel informatif, dan materi yang
              dirancang dengan professional.
            </p>
          </div>
        </div>
        {/* Berita Carousel */}
        <div className="flex flex-col gap-4 text-[#13194B]">
          <h4 className="mt-6 text-xl font-bold leading-[40px] tracking-heading">
            Berita Terbaru
          </h4>
          <div className="flex gap-4 overflow-x-scroll">
            <div className="flex min-h-[168px] min-w-[299px] flex-col gap-4">
              <Image src={Berita1} alt="Photo Kegiatan 1" />
              <div className="flex flex-col gap-2">
                <h5 className="text-base font-bold leading-[28px] tracking-paragraph">
                  Membaca Ulang Simpanan Nasabah di Perbankan, Ada Fenomena
                  Makan Tabungan?
                </h5>
                <p className="text-xs">Rabu, 8 Februari 2024</p>
              </div>
            </div>

            <div className="flex min-h-[168px] min-w-[299px] flex-col gap-4">
              <Image src={Berita2} alt="Photo Kegiatan 1" />
              <div className="flex flex-col gap-2">
                <h5 className="text-base font-bold leading-[28px] tracking-paragraph">
                  Mengukur Potensi Valuasi Merger Grab dan GOTO Jika Benar
                  Terjadi
                </h5>
                <p className="text-xs">Senin, 6 Februari 2024</p>
              </div>
            </div>

            <div className="flex min-h-[168px] min-w-[299px] flex-col gap-4">
              <Image src={Berita3} alt="Photo Kegiatan 1" />
              <div className="flex flex-col gap-2">
                <h5 className="text-base font-bold leading-[28px] tracking-paragraph">
                  Membaca Ulang Simpanan Nasabah di Perbankan, Ada Fenomena
                  Makan Tabungan?
                </h5>
                <p className="text-xs">Selasa, 7 Februari 2024</p>
              </div>
            </div>
          </div>
          <Link
            href="/berita"
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

export default Berita;
