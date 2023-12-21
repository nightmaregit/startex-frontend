import { BiSolidCategoryAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Kategori = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-10 pt-9">
      <div className="flex justify-between px-[90px] items-center">
        <div className=" flex">
          <i className=" px-1">
            <BiSolidCategoryAlt className="text-3xl" />
          </i>
          <span className=" font-bold text-xl">Kategori</span>
        </div>
      </div>
      <div className="px-[94px] grid grid-cols-3  gap-8 pt-10  text-2xl ">
        {/* <div> */}
        <button
          onClick={() => navigate("#")}
          className="  border border-black bg-masuk hover:bg-white hover:text-black text-white  rounded-2xl shadow-lg shadow-black h-[84px] py-3"
        >
          Agama
        </button>
        <button
          onClick={() => navigate("#")}
          className="  border border-black bg-masuk text-white hover:bg-white hover:text-black rounded-2xl shadow-lg shadow-black h-[84px] py-3 "
        >
          Sosial
        </button>
        <button
          onClick={() => navigate("#")}
          className="  border border-black bg-masuk hover:bg-white hover:text-black text-white rounded-2xl shadow-lg shadow-black h-[84px] py-3 "
        >
          Bahasa
        </button>

        {/* </div> */}
      </div>
      <div className=" flex justify-center pt-10">
        <button
          onClick={() => navigate("/koleksi/pendidikan")}
          className="  border border-black bg-masuk text-white hover:bg-white hover:text-black rounded-2xl shadow-lg shadow-black h-[84px] py-3 w-[340px] text-2xl "
        >
          Pendidikan
        </button>
      </div>
    </div>
  );
};

export default Kategori;
