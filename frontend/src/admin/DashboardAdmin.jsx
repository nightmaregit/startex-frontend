import Sidebar_admin from "../components/sidebar_admin";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineCheckBox } from "react-icons/md";
import ProfilePicture from "../assets/image/profile.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DashboardAdmin() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3102/api/v1/me");
      setUser(response.data);
    } catch (error) {
      navigate("/")
      console.error("Error fetching user data:", error);
    }
  };


  return (
   
    <div className="flex flex-row  ">
      <Sidebar_admin />
      <div className="flex flex-col w-screen  ">
      <div className=" mb-3 h-16 flex justify-end">
          <div className=" text-black flex  items-center pr-5  gap-[30px]">
          {user.map((userItem) => (
            <div key={userItem.id}>
              <h1 className="font-semibold text-sm leading-normal">
              {userItem.nama}
              </h1>
              <span className={userItem.role === "anggota" ? navigate("/profil"):"text-slate-300 "}>{userItem.role}</span>
            </div>
            ))}

            {/* Ini dibawah ntar diisi jd Image profile picturenya */}
            <div className="w-[45px] h-[45px] bg-black rounded-full">
              <img
                src={ProfilePicture}
                alt="profile picture"
                className="object-cover w-[45px] h-[45px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col m-10 gap-14 ">
        <div className="flex flex-row justify-between ">
          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-2 border-black rounded-xl font-semibold text-xl justify-between px-3  items-center">
            Admin
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              3
            </div>
          </div>
          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-2 border-black rounded-xl font-semibold text-xl justify-between px-3 items-center">
            Data user
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              100
            </div>
          </div>

          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-2 border-black rounded-xl font-semibold text-xl justify-between px-3 items-center">
            Data <br /> Anggota
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              100
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-10 ">
          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-2 border-black rounded-xl font-semibold text-xl justify-between px-3  items-center">
            user yang <br /> dipinjam
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              3
            </div>
          </div>
          <div className=" bg-[#FFF7E9] w-[250px] h-[90px] flex border-2 border-black rounded-xl font-semibold text-xl justify-between px-3 items-center">
            user yang <br /> terlambat
            <div className=" w-10 h-10 rounded-full flex items-center justify-center bg-slate-400">
              100
            </div>
          </div>
        </div>
        <div className="flex flex-row  gap-10 ">
          <div className=" bg-[#FFF7E9] w-[300px] h-[90px] flex flex-wrap border-2 border-black rounded-xl font-semibold text-2xl  px-3 justify-between items-center">
            <div className=" text-2xl">
              Data Peminjaman
              <div className="text-base w-8 h-8 rounded-full flex items-center justify-center bg-slate-400">
                100
              </div>
            </div>
            <div className=""><FaCartPlus className="text-[35px]"/></div>
          </div>
          <div className=" bg-[#FFF7E9] w-[300px] h-[90px] flex flex-wrap border-2 border-black rounded-xl font-semibold text-2xl  px-3 justify-between items-center">
            <div className=" text-2xl">
              Data Peminjaman
              <div className="text-base w-8 h-8 rounded-full flex items-center justify-center bg-slate-400">
                100
              </div>
            </div>
            <div className=""><MdOutlineCheckBox className="text-[40px]"/></div>
          </div>          
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default DashboardAdmin;
