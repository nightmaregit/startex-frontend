import Sidebar_admin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
import { RiPencilFill } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Administrator() {
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
  
  
  const items = [
    {
      id: 1,
      Nama: "Muhammad",
      Email: "der@gmail.com",
      Username: "deftra",
      Password: "12345678",
      hapus: 1,
      ubah: 2,
    },
    {
      id: 2,
      Nama: "Deril",
      Email: "der@gmail.com",
      Username: "derftra",
      Password: "12345678",
      hapus: 1,
      ubah: 2,
    },
    {
      id: 2,
      Nama: "Fitra",
      Email: "der@gmail.com",
      Username: "derftra",
      Password: "12345678",
      hapus: 1,
      ubah: 2,
    },
  ];
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

        <div className="container mx-auto">
          <div className="mx-3 pt-5 pb-5">
            <button
              className="text-3xl font-medium leading-normal flex p-1 px-2 cursor-pointer border rounded-md w-[341px] border-black items-center gap-2"
              onClick={() => navigate("/admin/tambah-akun-admin")}
            >
              <FaPlus className="w-5" /> <span>Tambah Akun</span>
            </button>
          </div>
          <div className="flex flex-col ">
            <table className=" p-2 border border-solid border-collapse mt-3 mx-3">
              <thead className="bg-black/75">
                <tr className=" text-xs text-white">
                  <th className="p-2 border-slate-300 border border-solid">
                    No
                  </th>
                  <th className="p-2 border-slate-300 border border-solid">
                    Nama
                  </th>
                  <th className="p-2 border-slate-300 border border-solid">
                    Email
                  </th>
                  <th className="p-2 border-slate-300 border border-solid">
                    Username
                  </th>
                  <th className="p-2 border-slate-300 border border-solid">
                    Password
                  </th>

                  <th className="p-2 border-slate-300 border border-solid">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="[&>:nth-child(odd)]:bg-white  [&>:nth-child(even)]:bg-[#D9D9D9]">
                {items.map((item) => (
                  <tr
                    key={item.bookingId}
                    className="text-sm font-normal text-15px"
                  >
                    <td className="align-top h-4 py-[9px] self-center text-center border-[1px] border-slate-300 border-solid">
                      {item.id}
                    </td>
                    <td className="align-top h-4 py-[9px] text-center border-[1px] border-slate-300 border-solid">
                      {item.Nama}
                    </td>
                    <td className="align-top h-4 py-[9px] text-center border-[1px] border-slate-300 border-solid">
                      {item.Email}
                    </td>
                    <td className="align-top h-4 py-[9px] text-center border-[1px] border-slate-300 border-solid">
                      {item.Username}
                    </td>
                    <td className="align-top h-4 py-[9px] text-center border-[1px] border-slate-300 border-solid">
                      {item.Password}
                    </td>

                    <td className=" border-[1px] border-slate-300 border-solid ">
                      <div className="flex justify-center gap-1">
                        <div>
                          <button
                            onClick={() => navigate("/admin/edit-akun-admin")}
                            className=" bg-yellow-500 p-1 text-black"
                          >
                            <RiPencilFill className="text-[20px]" />
                          </button>
                        </div>
                        <div>
                          <button className=" bg-red-500 p-1 text-black">
                            <FaRegTrashCan className="text-[20px]" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Administrator;
