import ProfilePicture from "../assets/image/profile.png";

import SidebarAdmin from "../components/sidebar_admin";
import { useEffect, useState } from "react";
import axios from "axios";


const DataAnggota = () => {
  const [anggota, setAnggota] = useState([]);

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

  useEffect(() => {
    getAnggota();
  }, []);

  const getAnggota = async () => {
    try {
      const response = await axios.get("http://localhost:3102/data-anggota/v1");
      setAnggota(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <div className="flex">
      <SidebarAdmin />

      <div className="flex flex-col w-full mb-96 ">
        <div className=" h-16 flex justify-end">
          <div className=" text-black flex  items-center pr-5  gap-[30px]">
          {user.map((userItem) => (
            <div key={userItem.id}>
              <h1 className="font-semibold text-sm leading-normal">
              {userItem.nama}
              </h1>
              <span className={userItem.role === "anggota" ? navigate("/profil"):"text-slate-300 "}>{userItem.role}</span>
            </div>
            ))}

            <div className="w-[45px] h-[45px] bg-white rounded-full">
              <img
                src={ProfilePicture}
                alt="profile picture"
                className="object-cover w-[45px] h-[45px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] mx-5 mt-[100px]">
          <h1 className="text-3xl font-medium leading-normal">Data Anggota</h1>
          <table className=" relative rounded-[50px] mt-5 max-w-screen-2xl">
            <thead className="bg-black/70">
              <tr className="text-sm font-normal text-white">
              <th className="p-3">No</th>
                <th className="p-3">Id Anggota</th>
                <th className="p-3">Nama</th>
                <th className="p-3">Email</th>
                <th className="p-3">Username</th>
                <th className="p-3">NISN</th>
                <th className="p-3">Foto</th>
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-[#D9D9D9]">
              {anggota.map((anggotaItem) => (
                <tr key={anggotaItem.id} className="text-sm font-normal text-15px">
                  <td className="p-3 text-center border-gray-500 border-x">
                    1
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {anggotaItem.id_anggota}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-r">
                    {anggotaItem.nama}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {anggotaItem.email}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {anggotaItem.nisn}
                  </td>
                  <td className="text-center border-gray-500 border-x">
                    {anggotaItem.kelas}
                  </td>
                  <td className="text-center"><img src={anggotaItem.foto} alt="" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataAnggota;
