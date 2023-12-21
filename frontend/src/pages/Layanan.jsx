import ArrowUP from "../components/arrowUP";
import Reading from "../assets/Reading.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import p9 from "../assets/image/buku-pendidikan/p9.png";
import p10 from "../assets/image/buku-pendidikan/p10.png";
import { IoBookOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";

const Layanan = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <ArrowUP />
      <div className="flex  justify-center  items-center  h-[610px] bg-masuk">
        <div className=" flex justify-between items-center w-[1000px]">
          <div className=" mb-8">
            <div className="text-justify w-fit  text-white text-[52px] font-bold  leading-[52px] tracking-widest">
              Ingin meminjam <br />
              buku tanpa ribet?
            </div>
            <div className="text-white text-opacity-90 text-4xl  leading-normal">
              Daftarkan diri anda segera
            </div>
            <div className="pt-7">
              <button
                onClick={() => navigate("/daftar")}
                className="bg-blue-600 font-semibold text-white w-[190px] h-[35px]  rounded-lg"
              >
                Daftar
              </button>
            </div>
          </div>
          <div className=" ">
            <img src={Reading} alt="" />
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
      <div className="bg-slate-500 h-[700px] flex justify-center items-center">
        <div className="flex justify-between items-center w-[1000px]  ">
          <div className=" flex justify-center items-center gap-8">
            <div className="flex flex-col justify-center items-center">
              <img src={p9} className="w-[300px] h-[440px]" alt="" />
              <div className="pt-7">
                <button
                  onClick={() =>
                    navigate(
                      "/koleksi/pendidikan/Buku-Siswa-Ekonomi-Kelas-XI-SMA"
                    )
                  }
                  className="bg-white font-semibold  w-[140px] h-[35px]  rounded-lg"
                >
                  Lihat
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img src={p10} className="w-[300px] h-[440px]" alt="" />
              <div className="pt-7">
                <button className="bg-white font-semibold  w-[140px] h-[35px]  rounded-lg">
                  Lihat
                </button>
              </div>
            </div>
          </div>
          <div className=" text-white text-center text-[42px] font-bold leading-[42px]">
            <div className="pb-4">
              Temukan Buku <br />
              Impian mu
            </div>
            <div className="w-[300px] h-[4px] bg-white"></div>
          </div>
        </div>
      </div>
      <ArrowUP />
      <Footer />
    </>
  );
};

export default Layanan;
