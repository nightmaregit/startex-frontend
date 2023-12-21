import logo from "../assets/image/Logo.png";
// import logo_putih from "../assets/image/logo_putih.png";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer_putih = () => {
  return (
    <>
      {/* Footer container */}
      <footer className="flex flex-col items-center bg-perpus  font-serif text-black">
        <div className="container p-6">
          <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3">
            {/*First links section*/}
            <div className="mb-6">
              {/* <a href="#" className="uppercase font-bold text-6xl">
            brand
          </a> */}
              <img src={logo} alt="" className="w-80" />
            </div>
            {/*Second links section*/}
            <div className="mb-6">
              <h4>update terbaru kami</h4>
              <div className="flex justify-center p-2 ">
                <FaYoutube />
                <FaFacebookSquare />
                <IoLogoInstagram />
              </div>
            </div>
            {/*Almaat*/}
            <div className="mb-6">
              <span className="text-medium">Hubungi kami</span>
              <p>
                Alamat: Jl, Delman Utama 1,
                <br /> Kebayoran Lama Jakarta Selatan
              </p>
              <a href="#" className="">
                info@sman47jkt.com
              </a>
              <br />
              <a href="#" className="">
                021 7260904
              </a>
            </div>
          </div>
        </div>
        {/*Copyright section*/}
        <div className="w-full bg-masuk p-4 text-center text-white">
          © 2023 All rights reserved - by
          <a href="#" className="">
            Startex
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer_putih;
