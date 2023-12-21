import ArrowUP from "../components/arrowUP";
import Bg_web from "../components/Bg_web";
// import Footer from "../components/footer";
import Footer_putih from "../components/Footer_putih";
import Navbar from "../components/Navbar";
import Novel from "../components/Novel";
import Pendidikan from "../components/Pendidikan";
import p9 from "../assets/image/buku-pendidikan/p9.png";
import image_bukuagma from "../assets/image/buku-pendidikan/image 26.png";
import th15 from "../assets/image/buku-pendidikan/th 15.png";
import Cerpen from "../components/cerpen";
import Komik from "../components/komik";
// import { useNavigate } from "react-router-dom";

const Koleksi = () => {
  // const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Bg_web />
      <div className=" mt-32 px-24 mb-11">
        <div className=" grid grid-cols-3  gap-4">
          <div className=" bg-masuk hover:tra  h-20  flex">
            <button className=" font-bold text-white mx-auto">Agama</button>
          </div>
          <div className=" bg-masuk  h-20  flex">
            <button className=" font-bold text-white mx-auto">Sosial</button>
          </div>
          <div className=" bg-masuk  h-20  flex">
            <button className="font-bold text-white mx-auto">Bahasa</button>
          </div>
          <div className=" bg-masuk  h-20  flex">
            <button className=" font-bold text-white mx-auto">
              Sain & Matematika
            </button>
          </div>
          <div className=" bg-masuk  h-20  flex">
            <button className="font-bold text-white mx-auto">Sejarah</button>
          </div>
          <div className=" bg-masuk  h-20  flex">
            <button className="font-bold text-white mx-auto">Kesenian</button>
          </div>
        </div>
      </div>
      <Pendidikan />
      <Novel />
      <div>
        <div className="bg-masuk w-auto h-[700px] mb-10">
          <div className="pt-4">
            <span className="flex text-center justify-center text-white font-bold text-2xl">
              Terfavorit{" "}
            </span>
            <hr className="border border-white mt-5 " />
          </div>
          <div className="grid grid-cols-3 px-28 gap-7 pt-14">
            <div>
              <img
                className="w-[341px] h-[450px]"
                src={image_bukuagma}
                alt=""
              />
            </div>
            <div>
              <img className="w-[341px] h-[450px]" src={p9} alt="" />
            </div>
            <div>
              {/* <img src="https://source.unsplash.com/341x491?pohon" alt="" /> */}
              <img className="w-[341px] h-[450px]" src={th15} alt="" />
            </div>
          </div>

          <div className="flex justify-between pt-10 px-52">
            <div className="bg-perpus w-32 h-9 flex rounded-full ">
              <button className=" mx-auto font-bold">Lihat</button>
            </div>
            <div className="bg-perpus w-32 h-9 flex rounded-full ">
              <button className=" mx-auto font-bold">Lihat</button>
            </div>
            <div className="bg-perpus w-32 h-9 flex rounded-full ">
              <button className=" mx-auto font-bold">Lihat</button>
            </div>
          </div>
        </div>
      </div>
      <Cerpen />
      <Komik />
      <ArrowUP />
      {/* <Footer /> */}
      <Footer_putih />
    </>
  );
};

export default Koleksi;
