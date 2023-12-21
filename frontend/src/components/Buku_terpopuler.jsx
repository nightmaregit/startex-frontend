import th_4 from "../assets/image/th 4.png";
import th_5 from "../assets/image/th 5.png";
import th_6 from "../assets/image/th 6.png";
import th_7 from "../assets/image/th 7.png";
import th_8 from "../assets/image/th 8.png";
import th_9 from "../assets/image/th 15.png";
import { useNavigate } from "react-router-dom";
import { VscRepoPull } from "react-icons/vsc";

const Buku_terpopuler = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-[92px] mb-14">
        <div className="flex">
          <i className="pt-[3px] ">
            <VscRepoPull className="text-3xl" />
          </i>
          <span className=" font-bold text-2xl">Buku Terpopuler</span>
        </div>
        <div className="border px-4 py-4 shadow-lg border-black  mt-12">
          <div className="grid grid-cols-6   ">
            <div className="">
              <img
                onClick={() => navigate("")}
                src={th_4}
                alt=""
                className=" transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300"
              />
              <p>Menanti Restu Langit</p>
            </div>
            <div>
              <img
                onClick={() => navigate("")}
                src={th_5}
                alt=""
                className=" transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300"
              />
              <p>Harga Sebuah Percaya Sebuah Novel</p>
            </div>
            <div>
              <img
                onClick={() => navigate("")}
                src={th_6}
                alt=""
                className=" transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
              />
              <p>Laluba Sebuah Novel</p>
            </div>
            <div>
              <img
                onClick={() => navigate("")}
                src={th_7}
                alt=""
                className=" transition ease-in-out :-translate-y-1 hover:scale-110  duration-300"
              />
              <p>Gadis dan Galaksi Tak Dikenal </p>
            </div>
            <div>
              <img
                onClick={() => navigate("")}
                src={th_8}
                alt=""
                className=" transition ease-in-out :-translate-y-1 hover:scale-110  duration-300"
              />
              <p>Tentang Rasa</p>
            </div>
            <div>
              <img
                onClick={() => navigate("")}
                src={th_9}
                alt=""
                className=" transition ease-in-out :-translate-y-1 hover:scale-110  duration-300"
              />
              <p>Seuntai Harapan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buku_terpopuler;
