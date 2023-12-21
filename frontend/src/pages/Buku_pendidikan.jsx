import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer_putih from "../components/Footer";

const Buku_pendidikan = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3102/api/buku");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Tambahkan dependensi kosong agar hanya terpanggil pada mounting.

  const handleImageClick = (id_buku) => {
    navigate(`/detail/${id_buku}`);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-masuk h-24 w-auto">
        <form className="">
          <div className="relative px-[350px] mr-20 pt-5">
            <input
              type="search"
              id="default-search"
              className="w-full p-4 ps-10 text-sm text-gray-900 border focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
              placeholder="Search judul buku..."
              required=""
            />
            <button
              type="submit"
              className="text-white absolute end-[250px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[54px] w-[94px] "
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-6 px-10 mt-10 border border-masuk py-5 gap-6">
        {data.map((dataObj) => (
          <div key={dataObj.id_buku}>
            <img
              src={`http://localhost:3102/uploads/${dataObj.cover_buku}`}
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-56 w-40"
              alt={dataObj.judul_buku}
              onClick={() => handleImageClick(dataObj.id_buku)}
            />
            <span>{dataObj.judul_buku}</span>
          </div>
        ))}
      </div>
      <Footer_putih />
    </div>
  );
};

export default Buku_pendidikan;
