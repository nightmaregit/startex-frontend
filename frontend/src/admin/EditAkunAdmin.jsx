import SidebarAdmin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
import { useNavigate } from "react-router-dom";

const EditAkunAdmin = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full min-h-screen">
      <div className="flex">
        <SidebarAdmin />

        <div className="flex flex-col w-full">
          <div className="h-16 flex justify-end">
            <div className="text-black flex  items-center pr-5 gap-[30px]">
              <div>
                <h1 className="font-semibold text-sm leading-normal text-masuk">
                  bekti
                </h1>
                <span className="text-gray-400">Admin</span>
              </div>

              <div className="w-[45px] h-[45px] bg-white rounded-full">
                <img
                  src={ProfilePicture}
                  alt="profile picture"
                  className="object-cover w-[45px] h-[45px] bg-black rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="pt-8 bg-white pb-[53px] rounded-b-[20px] px-6">
            <h1 className="text-3xl font-medium leading-normal ml-[30px] flex p-1 px-2 cursor-pointer">
              <span>Edit Akun </span>
            </h1>

            <div className="px-[30px] mt-[35px] flex gap-[170px] lg:justify-normal xl:justify-around">
              {/* Left Section */}
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-lg leading-normal">Foto *</p>
                <div className="w-[175px] h-[175px] border border-dashed border-[#C1BBEB] flex justify-center items-center">
                  <span className="font-normal leading-normal text-sm text-[#A098AE] px-[11px] text-center">
                    Seret dan lepas atau Klik di sini untuk memilih file
                  </span>
                </div>

                <div className="flex flex-col gap-4 items-start mt-[59px]">
                  <h3 className="font-semibold text-lg leading-normal">
                    Nama Lengkap *
                  </h3>
                  <input
                    type="text"
                    className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                    placeholder="Masukkan nama lengkap anda"
                  />
                </div>
              </div>
              {/* Right Section */}
              <div className="flex flex-col gap-12 relative justify-between">
                <div className="flex flex-col gap-4 items-start">
                  <h3 className="font-semibold text-lg leading-normal">
                    Username *
                  </h3>
                  <input
                    type="text"
                    className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                    placeholder="Masukkan Username anda"
                  />
                </div>

                <div className="flex flex-col gap-4 items-start">
                  <h3 className="font-semibold text-lg leading-normal">
                    Email *
                  </h3>
                  <input
                    type="text"
                    className="font-normal leading-normal py-[13px] px-[9px] text-sm text-[#A098AE] rounded-[5px] w-[350px] border border-solid border-[#C1BBEB]"
                    placeholder="Masukkan Email anda"
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
            </div>
          </div>
          <button
            className="flex items-center self-center justify-center w-[129px] h-[60px] rounded-full bg-masuk bottom-0 right-[47px] text-white"
            onClick={() => navigate("/admin/administrator")}
          >
            <p className="text-lg leading-normal font-normal">Kirim</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditAkunAdmin;
