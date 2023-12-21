
import Reading from "../assets/Reading.png";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function SignUp() {
  const navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const coba = async (e) => {
    e.preventDefault();
 

    try {
      await axios.post("http://localhost:3102/api/v1/register", {
        nama,
        email,
        password,
      });
      Swal.fire({
        icon: "success",
        title: "Berhasil",
    
      });
      console.log("coba liat")
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };


  return (
    <div className="page-container">
      <div className="SignIn ">
        {/* 1 */}
        <div className="bagian1-signin">
          <img src={Reading} className="w-[380px] h-[380px]" alt="" />
          <div className="textbagian1">
            Masuk Untuk
            <br />
            Memulai Petualanganmu
          </div>
          <button
            onClick={() => navigate("/masuk")}
            className="buttonMasuk-signin "
          >
            Masuk
          </button>
        </div>
        {/* 1 end */}

        {/* 2 */}
        <div className="bagian2-signin">
          <div className="w-full ">
            {" "}
            <img src={Logo} className="w-[40%] " alt="" />{" "}
          </div>
          {/* form */}
          <div className="textbagian2 pb-[19px] ">Daftar</div>
          <div>
            <form  onSubmit={coba}>
              <div className="flex-col ">
                {/* masukan nama */}
                <div className="pt-[0px]">
                  <label className="label-signin  ">
                    Nama
                    <div className="pt-[6px] ">
                      <input
                        className="input-signin  "
                        type="text"
                        placeholder="Masukan Nama"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
                {/* masukan nama end */}

                {/* masukan Email */}
                <div className="pt-[15px] ">
                  <label className="label-signin">
                    Email
                    <div className="pt-[6px] ">
                      <input
                        className="input-signin  "
                        type="email"
                        placeholder="Masukan Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
                {/* masukan Email end */}

                {/* masukan Kata Sandi */}
                <div className="pt-[15px] ">
                  <label className="label-signin">
                    Kata Sandi
                    <div className="pt-[6px] ">
                      <input
                        className="input-signin  "
                        type="password"
                        placeholder="Masukan Kata Sandi"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </label>
                </div>
                {/* masukan Kata Sandi end */}

                {/* button daftar */}
                <div className="pt-[49px]">
                  <button className="buttonDaftar-signin"> Daftar </button>
                </div>
                {/* button daftar end */}
              </div>
            </form>
          </div>

          {/* form end */}
        </div>
        {/* 2 end */}
      </div>
    </div>
  );
}

export default SignUp;
