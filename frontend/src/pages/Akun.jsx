import Footer from "../components/Footer";
import Background from "../assets/image/akun-bg.jpg";
import ProfilePicture from "../assets/image/profile.png";
import UploadButton from "../assets/image/UploadButton.png";
import EditIcon from "../assets/icons/Edit.svg?react";
import { useNavigate } from "react-router-dom";

const Akun = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative h-full min-h-screen w-full bg-[#FAFBFC]">
        <div className="container mx-auto py-6 px-6">
          {/* Account Profile */}
          <div className="rounded-[20px] relative flex flex-col">
            <div className="rounded-t-[20px] bg-masuk w-full z-10 h-[60px]" />
            <div className="h-[352px] w-full relative">
              <img
                src={Background}
                alt="account background"
                className="object-cover opacity-75 h-full w-full shadow-lg"
              />
              <img
                src={UploadButton}
                alt="upload button"
                className="object-cover absolute h-12 rounded-[4px] right-[52px] bottom-14 cursor-pointer"
              />
            </div>

            <div className="flex flex-col justify-center items-center absolute -bottom-[132px] right-[45%]">
              <div className="rounded-full w-40 h-40">
                <img
                  src={ProfilePicture}
                  alt="profile picture"
                  className="object-cover"
                />
                <div className="bg-[#FF8682] rounded-full absolute right-0 bottom-[90px] h-12 w-12" />
              </div>
              <div className="text-center mt-6">
                <h2 className="text-2xl font-semibold leading-normal font-Montserrat">
                  nabila
                </h2>
                <span className="text-base font-normal font-Montserrat opacity-75">
                  nabila123@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="flex w-full flex-col items-start gap-4 mt-36">
            <h1 className="font-semibold leading-9 tracking-[0.259px] text-4xl">
              Akun
            </h1>

            <div className="bg-white rounded-2xl w-full flex flex-col gap-8 px-6 py-8 shadow-md">
              <div className="text-left">
                <div className="text-left">
                  <span className="font-normal text-base font-Montserrat opacity-75">
                    Id Anggota
                  </span>
                  <p className="text-xl leading-normal font-semibold">A001</p>
                </div>
              </div>
              <div className="text-left">
                <span className="font-normal text-base font-Montserrat opacity-75">
                  Nama Lengkap
                </span>
                <p className="text-xl leading-normal font-semibold">Nabila A</p>
              </div>
              <div className="text-left">
                <span className="font-normal text-base font-Montserrat opacity-75">
                  Email
                </span>
                <p className="text-xl leading-normal font-semibold">
                  Nabila123@gmail.com
                </p>
              </div>
              <div className="text-left">
                <span className="font-normal text-base font-Montserrat opacity-75">
                  Kata sandi
                </span>
                <p className="text-xl leading-normal font-semibold">
                  ************
                </p>
              </div>
              <div className="text-left">
                <span className="font-normal text-base font-Montserrat opacity-75">
                  NISN
                </span>
                <p className="text-xl leading-normal font-semibold">
                  1230496897
                </p>
              </div>
              <div className="text-left">
                <span className="font-normal text-base font-Montserrat opacity-75">
                  Kelas
                </span>
                <p className="text-xl leading-normal font-semibold">
                  10 Mipa 2
                </p>
              </div>

              <div className="flex justify-end ">
                <button
                  className="text-xl leading-normal font-medium flex items-center justify-center gap-1 px-4 py-2 border border-solid rounded-[4px] border-[#0C6FD1] w-[108px] mr-[127px]"
                  onClick={() => navigate("/profil/akun/edit-akun")}
                >
                  <EditIcon />
                  <span className="">Edit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Akun;
