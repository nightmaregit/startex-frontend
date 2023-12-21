import ProfilePicture from "../assets/image/profile.png";
import SidebarAdmin from "../components/sidebar_admin";
import axios from "axios";
import { useEffect, useState } from "react";

const PengembalianBuku = () => {

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
  // const items = [
  //   {
  //     id: 1,
  //     No: "1.",
  //     IdAnggota: "A001",
  //     KodeBuku: "F 813 SAI",
  //     tanggalPinjam: "11-07-23",
  //     tanggalKembali: "10-06-24",
  //     status: 1,
  //     statusMsg: "Sudah",
  //   },
  //   {
  //     id: 1,
  //     No: "2.",
  //     IdAnggota: "A001",
  //     KodeBuku: "U 330 END e 3",
  //     tanggalPinjam: "11-07-23",
  //     tanggalKembali: "10-06-24",
  //     status: 2,
  //     statusMsg: "Belum",
  //   },
  // ];

  const [pengembalian, setPengemabalian] = useState([]);

  useEffect(() => {
    getPengemabalian();
  }, []);

  const getPengemabalian = async () => {
    try {
      const response = await axios.get("http://localhost:3102/data-pengembalian/v1");
      setPengemabalian(response.data);
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

            {/* Ini dibawah ntar diisi jd Image profile picturenya */}
            <div className="w-[45px] h-[45px] bg-white rounded-full">
              <img
                src={ProfilePicture}
                alt="profile picture"
                className="object-cover w-[45px] h-[45px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[18px] mx-5">
          <h1 className="text-3xl font-medium leading-normal">
            Pengembalian Buku
          </h1>
          <table className=" relative rounded-[50px] mt-5 max-w-screen-2xl">
            <thead className="bg-black/70">
              <tr className="text-sm font-normal text-white">
                <th className="p-3">No</th>
                <th className="p-3">Id Anggota</th>
                <th className="p-3">Kode Buku</th>
                <th className="p-3">Tanggal Pinjam</th>
                <th className="p-3">Tanggal Kembali</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-[#D9D9D9]">
              {pengembalian.map((pengembalianItem) => (
                <tr key={pengembalianItem.id} className="text-sm font-normal text-15px">
                  <td className="p-3 text-center border-gray-500 border-r">
                    {pengembalianItem.id_pengembalian}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {pengembalianItem.id_anggota}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {pengembalianItem.kode_buku}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {pengembalianItem.tanggal_pinjam}
                  </td>
                  <td className="p-3 text-center border-gray-500 border-x">
                    {pengembalianItem.tanggal_kembali}
                  </td>
                  <td className="p-3 text-center border-gray-500 ">
                  <div className={ pengembalianItem.status === "Sudah" 
                    ? "p-2 flex justify-center bg-green-500 text-center text-white font-normal tracking-[1.12px] text-sm text-15px"
                    : pengembalianItem.status === "Belum" ? "p-2 flex justify-center bg-blue-500 text-center text-white font-normal tracking-[1.12px] text-sm text-15px"
                    : "p-2 flex justify-center bg-red-500 text-center text-white font-normal tracking-[1.12px] text-sm text-15px"}>
                    {pengembalianItem.status}
                    </div>
                  </td>

                  {/* <td
                    className={
                      item.status === 1
                        ? "p-3 flex justify-center"
                        : item.status === 2
                        ? "p-3 flex justify-center"
                        : "p-3 flex justify-center"
                    }
                  >
                    <span
                      className={
                        item.status === 1
                          ? "p-2 flex justify-center bg-green-500 text-center text-white font-normal tracking-[1.12px] text-sm text-15px"
                          : item.status === 2
                          ? "p-2 flex justify-center bg-[#FFB628] text-center text-white font-normal tracking-[1.12px] text-sm text-15px"
                          : "p-2 flex justify-center bg-red-500 text-center text-white font-normal tracking-[1.12px] text-sm text-15px"
                      }
                    >
                      {item.statusMsg}
                    </span>
                  </td> */}
                </tr>
              ))}

              {/* {[...Array(3)].map((_, idx) => (
                <tr key={idx} className="text-sm font-normal text-15px">
                  <td className="p-3 text-center border-gray-500"></td>
                  <td className="p-3 text-center border-gray-500 border-x"></td>
                  <td className="p-3 text-center border-gray-500 border-x"></td>
                  <td className="p-3 text-center border-gray-500 border-x"></td>
                  <td className="p-3 text-center border-gray-500 border-x"></td>
                  <td className="p-3 flex justify-center">
                    <span className="h-9">&nbsp;</span>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>

          <div className="flex justify-between text-sm font-medium break-words text-white w-[110px] gap-2">
            <button className="px-3 py-1 rounded-md bg-[#0075FF]">
              Simpan
            </button>
            <button className="px-3 py-1 rounded-md bg-[#FF1212]">Batal</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PengembalianBuku;
