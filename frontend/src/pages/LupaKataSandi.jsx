import Logo from "../assets/Logo.png";
import Never from "../assets/Never.png";
import back from "../assets/back.svg"
import { useNavigate } from "react-router-dom";

const LupaKataSandi = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="SignIn ">
        {/* bagian1 */}
        <div className="bagian2-signin ">
          <div className="w-full ">
            <img src={Logo} className="" alt="" />
          </div>
          <div className=" w-[385px] pt-[56px] pb-[45px] ">
            <button  onClick={() => navigate("/masuk")} > 
            <div className="pb-[14px] text-neutral-900 inline-flex items-center justify-center font-medium font-['Montserrat'] gap-1 ">
              <img src={back} className="w-[14px] h-[14px]" alt="" />
              Kembali untuk Masuk
            </div>
            </button>
            <div className="w-[445px] text-left textbagian2   leading-9 text-[34px]">
              Lupa kata sandi anda?
            </div>
            <div className="pt-[14px] opacity-75 text-neutral-900  text-sm font-['Montserrat']">
                Masukkan Email Anda.
            </div>
          </div>


          <div className=" w-[385px]">
            <form>
              <div className="flex-col  ">
                {/* masukan Email */}
                <div className=" ">
                  <label className="label-signin">
                    Email
                    <div className="pt-[11px] ">
                      <input
                        className="input-signin w-[385px]"
                        type="text"
                        placeholder="Masukan Email"
                      />
                    </div>
                  </label>
                </div>
                {/* masukan Email end */}

                {/* button daftar */}
                <div className="pt-[44px]">
                  <button className="buttonDaftar-signin w-[385px]  m-0 p-0">
                    Kirim
                  </button>
                </div>
                {/* button daftar end */}
              </div>
            </form>
          </div>
        </div>
        {/* bagian1 end */}

        <div className="justify-center bagian1-signin">
          <img src={Never} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LupaKataSandi;