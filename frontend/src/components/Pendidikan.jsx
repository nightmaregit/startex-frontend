// import th_4 from "../assets/image/buku/th 4.png";
// import th_5 from "../assets/image/buku/th 5.png";
// import th_6 from "../assets/image/th 6.png";
// import th_7 from "../assets/image/th 7.png";
// import th_8 from "../assets/image/th 8.png";
// import th_9 from "../assets/image/buku-pendidikan/th 15.png";
import { useNavigate } from "react-router-dom";
import { VscRepoPull } from "react-icons/vsc";
import axios from "axios";
import { useEffect, useState } from "react";

const Pendidikan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = () => {
    return axios
      .get("http://localhost:3102/api/buku")
      .then((response) => setData(response.data));
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <div className="px-[92px] mb-14">
        <div className="flex items-center justify-between">
          <div className=" flex">
            <i>
              <VscRepoPull className="text-3xl" />
            </i>
            <button
              onClick={() => navigate("/koleksi/pendidikan")}
              className=" font-bold text-2xl"
            >
              Pendidikan
            </button>
          </div>
          <button
            onClick={() => navigate("/koleksi/pendidikan")}
            className="font-bold"
          >
            Lainnya &gt;
          </button>
        </div>
        <div></div>
        <div className="border px-4 py-4 shadow-lg border-black  mt-12">
          <div className="grid grid-cols-6   ">
            {data.map((dataObj, index) => {
              return (
                <div key={index}>
                  <img
                    src={`http://localhost:3102/uploads/${dataObj.cover_buku}`}
                    alt=""
                    className=" transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300"
                  />
                  <p>{dataObj.judul_buku}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pendidikan;
