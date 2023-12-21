import { HiUsers } from "react-icons/hi2";
import { FiBookOpen } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import perpus from "../assets/image/Library (1).png";

const LayananC = () => {
  return (
    <div className=" bg-masuk w-auto h-[619px] pl-24 pr-16 text-white ">
      <div className="pt-10">
        <span className=" uppercase font-bold text-2xl">Layanan Kami</span>
        <p className=" text-xl">
          Dengan koleksi yang beragam dan fasilitas modern, perpustakaan kami
          bertujuan untuk <br /> memenuhi kebutuhan literasi dan pembelajaran
          siswa.
          <hr className=" border mt-16" />
        </p>
      </div>
      <div className=" flex pt-[46px]">
        <div className=" ">
          <div className="flex">
            <div className=" py-[17px]">
              {/* <img src="https://source.unsplash.com/56x56?pohon" className="" /> */}
              <i className=" bg-masuk h-10 w-10 flex rounded-md pt-[10px] ">
                <HiUsers className="text-xl text-white mx-auto" />
              </i>
            </div>
            <div className="p-3">
              <span className=" uppercase font-bold">Keanggotaan</span>
              <p className="">
                Pinjam buku dengan mudah sebagai anggota perpustakaan.{" "}
              </p>
            </div>
          </div>
          <div className="flex pt-[20px]">
            <div className="py-[17px]">
              {/* <img src="https://source.unsplash.com/56x56?pohon" className="" /> */}
              <i className=" bg-masuk h-10 w-10 flex rounded-md pt-[10px]">
                <FiBookOpen className="text-xl text-white mx-auto" />
              </i>
            </div>
            <div className=" p-3">
              <span className=" uppercase font-bold ">Peminjaman Buku</span>
              <p className="">
                Pinjam buku impian dan nikmati pengalaman literatur yang tak
                terlupakan.
              </p>
            </div>
          </div>
          <div className="flex pt-[20px]">
            <div className="py-[17px]">
              {/* <img src="https://source.unsplash.com/56x56?pohon" className="" /> */}
              <i className=" bg-masuk h-10 w-10 flex rounded-md pt-[10px]">
                <IoGridOutline className="text-xl text-white mx-auto" />
              </i>
            </div>
            <div className="p-3">
              <span className=" uppercase font-bold ">Koleksi</span>
              <p className="">
                Tersedia koleksi buku dengan berbagai genre dan topik.
              </p>
            </div>
          </div>
        </div>
        <div className="flex pl-[113px] ">
          {/* <img src="https://source.unsplash.com/582x263?pohon" alt="" /> */}
          <img src={perpus} alt="" className="w-[582px] h-[333px] " />
        </div>
      </div>
    </div>
  );
};

export default LayananC;
