// import wave from "../assets/image/BgWave.png";
import fotos from "../assets/image/fotoS.png";
import frame1 from "../assets/image/frame1.png";
// import frame2 from "../assets/image/frame2.png";

const Welcome_koleksi = () => {
  return (
    <>
      {/* 1 start */}
      <div>
        <img src={frame1} alt="" />
      </div>
      {/* 1 end */}
      {/* 2 start */}
      <div className=" container mx-auto ">
        <div className="shadow-xlrounded-lg p-10 ">
          <div className="text-center">
            <span className=" font-bold text-5xl   ">Selamat Datang</span>
            <br />
            <span className=" font-bold text-5xl ">
              Di Koleksi Perpustakaan SMAN 47 Jakarta
            </span>
          </div>
          <div className="flex pt-14 p-16">
            <div className=" pr-4  ">
              <img
                // src="https://source.unsplash.com/586x365?sekolah-kita"
                src={fotos}
                alt=""
                className=""
              />
            </div>
            <div className=" pt-20">
              <span className=" text-xl font-semibold">
                Temukan Buku Favorit Mu
              </span>
              <p className=" pt-7">
                “Tuntutlah ilmu setingi-tinggi mungkin temukanlah hal menarik di
                dalam nya”
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <img src={frame2} alt="" /> */}
        <div className="bg-masuk h-20 w-auto"></div>
      </div>
      {/* 2 end  */}
      {/* 3 start */}

      {/* 3 end  */}
    </>
  );
};

export default Welcome_koleksi;
