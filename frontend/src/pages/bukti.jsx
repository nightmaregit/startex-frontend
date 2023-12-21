import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Logo from "../assets/Logo.png";
// import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import p9 from "../assets/image/buku-pendidikan/p9.png";

const Detail_buku = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="px-16 mb-5 opacity-20 ">
        <div className="flex pt-5">
          <div className="">
            <img className="w-96" src={p9} alt="" />
          </div>
          <div className="ml-3">
            <div className="flex">
              <span className=" font-bold">Judul Buku :</span>
              <p>Ekonomi Kelas XI Peminatan Ilmu Sosial </p>
            </div>
            <div className=" flex">
              <span className="  font-bold">Penulis :</span>
              <p>Endang Mulyani, Asep Nurcahyanto </p>
            </div>
            <div className="">
              <span className=" font-bold">Deskripsi :</span>
              <p>
                Buku ini dirancang sebagai panduan utama bagi siswa kelas XI SMA
                dan MA yang memilih kelompok peminatan Ilmu-Ilmu Sosial,
                khususnya dalam bidang Ekonomi. Dengan pendekatan yang
                komprehensif dan aplikatif, buku ini menyajikan materi-materi
                ekonomi yang sesuai dengan kurikulum yang berlaku.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-3">
          <div className="border border-black ">
            <label
              className="flex justify-center bg-slate-800 text-white"
              htmlFor=""
            >
              DETAIL BUKU
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Judul Seri     :<p className="px-3"> - </p>{" "}
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              Kode Buku     :<p className="px-3"> - </p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Penerbit     &nbsp; : <p className="px-3"> Tiga Serangkai</p>
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              Bahasa      &nbsp;  : <p className="px-3"> Indonesia</p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Deskripsi Fisik   : <p />
            </label>
            <label className="flex  bg-slate-300" htmlFor="">
              ISBN / ISSN    : <p className="px-3"> 978-623-209-311-9</p>
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Lokasi       &nbsp;&nbsp; &nbsp; :{" "}
              <p className="px-3"> Perpustakaan</p>
            </label>
            <label
              className="flex justify-center bg-slate-800 text-white"
              htmlFor=""
            >
              KETERSEDIAAN
            </label>
            <label className="flex  bg-slate-400" htmlFor="">
              Jumlah Buku    : <p className="px-3"> 52</p>
            </label>
          </div>
          <div className="pt-3">
            <div className="flex justify-end ">
              <button className="px-4 focus:text-pink-500 ">
                <MdFavorite className="text-4xl " />
              </button>
              <button className="bg-masuk w-24 h-8 rounded-full text-white hover:bg-perpus hover:text-black border border-black">
                pinjam
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-[434px] h-[500px] mt-20 mx-auto absolute left-[420px] top-4 rounded-lg">
        <div className="px-20">
          <div className="flex justify-center pt-5">
            {/* <span className="font-bold text-5xl">logo</span> */}
            {/* <img src={logo} alt="" /> */}
          </div>
          <div className=" flex justify-center pt-5">
            <span className=" font-bold text-3xl">Bukti peminjaman</span>
          </div>
          <div className=" mt-20">
            <p>Id Anggota      : </p>
            <p>Nama        :</p>
            <p>Tanggal Pinjam   :</p>
            <p>Judul Buku     :</p>
            <p>Kode Buku     :</p>
            <p>Tanggal Kembali   :</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail_buku;
