import frame1 from "../assets/image/frame1.png";
const Bg_web = () => {
  return (
    <div className=" bg-masuk w-auto h-[350px]">
      <div>
        <p className=" absolute top-40 left-[300px] text-white font-bold text-6xl text-center  ">
          Temukan Petualangan <br /> Baru di Setiap Halaman
        </p>
        <form className="pt-[270px]">
          <div className=" relative px-[350px] mr-32">
            <input
              type="search"
              id="default-search"
              className="  w-full p-4 ps-10 text-sm text-gray-900 border  rounded-lg  focus:ring-blue-800 focus:border-blue-800 dark:bg-gray-700 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-800 dark:focus:border-blue-800"
              placeholder="Search judul buku..."
              required=""
            />
            <button
              type="submit"
              className="text-white absolute end-[250px]  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-[54px] w-[94px] "
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        <img src={frame1} alt="" />
      </div>
    </div>
  );
};

export default Bg_web;
