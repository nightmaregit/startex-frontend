import { useNavigate } from "react-router-dom";

const EditAkun = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-[#F5F5F5]">
      <div className="container mx-auto pt-6 bg-white pb-[53px] rounded-b-[20px] px-6">
        <div className="w-full rounded-t-[20px] bg-masuk h-[60px]">
          <h1 className="text-4xl font-bold leading-normal text-white ml-[30px]">
            Perbaharui Akun
          </h1>
        </div>

        <div className="px-[30px] w-full mt-[35px] flex gap-6 ml-14">
          {/* Left Section */}
          <div className="w-[192px] flex flex-col gap-4">
            <p className="font-semibold text-lg leading-normal">Foto *</p>
            <div className="w-[175px] h-[175px] border border-dashed border-[#C1BBEB] flex justify-center items-center">
              <span className="font-normal leading-normal text-sm text-[#A098AE] px-[11px] text-center">
                Seret dan lepas atau Klik di sini untuk memilih file
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col gap-[33px]">
            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">
                Nama Lengkap *
              </h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan nama lengkap anda"
              />
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">Email *</h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan email anda"
              />
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">
                Kata Sandi *
              </h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan kata sandi"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-8 ml-auto mr-auto relative ">
            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">NISN *</h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan NISN anda"
              />
            </div>

            <div className="flex flex-col gap-4 items-start">
              <h3 className="font-semibold text-lg leading-normal">Kelas *</h3>
              <input
                type="text"
                className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                placeholder="Masukkan Kelas anda"
              />
            </div>

            <button
              onClick={() => navigate("/profil/akun")}
              className="flex items-center justify-center w-[129px] h-[60px] rounded-full bg-masuk absolute bottom-0 right-[47px] text-white"
            >
              <p className="text-lg leading-normal font-normal">Kirim</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAkun;
