// import wave from "../assets/image/BgWave.png";
import fotos from "../assets/image/fotoS.png";
import frame1 from "../assets/image/frame1.png";
import frame2 from "../assets/image/frame2.png";
import Kategori from "./Kategori";
import p9 from "../assets/image/buku-pendidikan/p9.png";
import th4 from "../assets/image/buku/th 4.png";
import th5 from "../assets/image/buku/th 5.png";
import logo_sekolah from "../assets/image/buku/logo_sekolah.png";
import { IoBookOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";

import { IoDocumentTextOutline } from "react-icons/io5";

import { useNavigate } from "react-router-dom";
const Content_beranda = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="bg-[#0C356A] justify-center items-center flex flex-wrap ">
          <div className="pr-[104px] pl-[104px] pt-20  flex flex-nowrap gap-16 ">
            <div className="flex-col justify-center items-start gap-2.5 inline-flex">
              <div className=" w-[600px]  text-white text-[50px] font-bold font-['Lora'] leading-[50px] tracking-widest">
                SELAMAT DATANG <br />
                DI PERPUSTAKAAN SMAN 47 JAKARTA
              </div>
              <div className="text-white text-opacity-90 text-base font-normal font-['Poppins'] leading-normal">
                Pusat literasi yang memajukan pengetahuan, imajinasi, dan
                pemikiran kritis.
              </div>
            </div>

            <div className=" ">
              <img className=" " src={logo_sekolah} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={frame1} alt="" />
      </div>

      <div className=" container mx-auto ">
        <div className="shadow-xlrounded-lg p-10 ">
          <div className="text-center">
            <span className=" font-bold text-4xl   ">Datang dan Baca</span>
            <br />
            <span className=" font-bold text-4xl ">
              Bersama SMAN 47 Jakarta
            </span>
          </div>
          <div className="grid grid-cols-2 px-16 pt-10">
            <div className=" pr-4  ">
              <img
                // src="https://source.unsplash.com/586x365?sekolah-kita"
                src={fotos}
                alt=""
                className=""
              />
            </div>
            <div className=" ">
              <span className=" text-xl font-semibold">
                Website perpustakaan ini menawarkan pengalaman informasi yang
                mengagumkan dengan desain intuitif, navigasi yang mudah, dan
                koleksi buku yang kaya. <br /> <br /> Keamanan informasi yang
                canggih dan program edukasi yang beragam menjadikan situs ini
                sebagai pusat sumber daya literasi yang modern.
              </span>
              <div
                onClick={() => navigate("/masuk")}
                className="bg-masuk w-20 h-8 rounded-full flex mt-10"
              >
                <button className=" mx-auto text-white ">Masuk</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-masuk w-auto h-[300px]">
          <div className="px-16 pt-5">
            <div className="text-white text-center">
              <span className=" font-bold text-2xl">Membaca Semakin Mudah</span>
              <p>
                Baca buku, berbagi koleksi bacaan dan bersosialisasi secara
                bersamaan. Dimana pun,
                <br /> Kapan pun dengan nyaman bersama setiap orang{" "}
              </p>
            </div>
            <div className="grid grid-cols-3 text-white text-center pt-10">
              <div>
                <i className=" flex mx-auto items-center text-center bg-green-500 w-10 h-10 rounded ">
                  <IoDocumentTextOutline className="text-2xl mx-auto" />
                </i>
                <br />
                <span className=" font-bold text-xl">
                  Syarat Pendaftaran Mudah
                </span>
                <p>
                  Cukup 60 detik untuk bergabung dan merasakan menjadi anggota{" "}
                </p>
              </div>
              <div>
                <i className=" flex mx-auto items-center text-center bg-green-500 w-10 h-10 rounded ">
                  <IoBookOutline className="text-2xl mx-auto" />
                </i>
                <br />
                <span className=" font-bold text-xl">
                  Akses Mudah Dan Cepat
                </span>
                <p>Proses peminjaman buku yang sederhana dan efisien </p>
              </div>
              <div>
                <i className=" flex mx-auto items-center text-center bg-green-500 w-10 h-10 rounded ">
                  <FiUsers className="text-2xl mx-auto" />
                </i>
                <br />
                <span className=" font-bold text-xl">Dukungan Pendidikan</span>
                <p>Menyediakan layanan untuk membantu siswa dan pendidik </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Kategori />

      <div>
        <img src={frame2} alt="" />

        <div className="bg-masuk w-auto h-[750px] mb-10">
          <div className="pt-4">
            <span className=" flex justify-center font-bold text-slate-200">
              AYO MULAI MEMBACA SEKRANG
            </span>
            <span className="flex text-center justify-center text-white font-bold text-2xl pt-5">
              Temukan dunia pengetahuan di ujung jari Anda! Jelajahi koleksi
              kami. <br /> Temukan buku yang menginspirasi!{" "}
            </span>
            <hr className="border border-white mt-5 " />
          </div>
          <div className="grid grid-cols-3 px-28 gap-7 pt-14">
            <div>
              <img className="w-[341px] h-[450px]" src={p9} alt="" />
            </div>
            <div>
              <img className="w-[341px] h-[450px]" src={th4} alt="" />
            </div>
            <div>
              {/* <img src="https://source.unsplash.com/341x491?pohon" alt="" /> */}
              <img className="w-[341px] h-[450px]" src={th5} alt="" />
            </div>
          </div>
          <div className="flex mx-auto  bg-perpus w-24 h-8 rounded-full mt-10 ">
            <button
              onClick={() => navigate("/koleksi")}
              className=" text-black mx-auto font-bold"
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content_beranda;
