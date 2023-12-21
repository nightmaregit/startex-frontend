import Sidebar from "../components/Sidebar";
import ProfilePicture from "../assets/image/profile.png";
import { MdFavorite } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorit = () => {
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
      bookingId: "A001",
      kodeBuku: "U 330 END e 3",
      judulBuku: "Ekonomi Kelas XI Peminatan Ilmu Sosial",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 2,
      statusMsg: "BELUM KEMBALI",
    },
    {
      id: 1,
      bookingId: "A002",
      kodeBuku: "U 330 ERL m 3",
      judulBuku: "Matematika Kelas XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 2,
      statusMsg: "BELUM KEMBALI",
    },
    {
      id: 1,
      bookingId: "A003",
      kodeBuku: "U 330 ERL b 3",
      judulBuku: "Biologi XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 2,
      statusMsg: "BELUM KEMBALI",
    },
    {
      id: 1,
      bookingId: "A004",
      kodeBuku: "U 330 MUL k 3",
      judulBuku: "Kimia Kelas XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 2,
      statusMsg: "BELUM KEMBALI",
    },
    {
      id: 1,
      bookingId: "A005",
      kodeBuku: "U 330 ERL f 3",
      judulBuku: "Fisika Kelas XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 2,
      statusMsg: "BELUM KEMBALI",
    },
    {
      id: 1,
      bookingId: "A006",
      kodeBuku: "U 330 ERL f 3",
      judulBuku: "Fisika Kelas X",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "Ditangguhkan",
      status: 3,
      statusMsg: "KEMBALI TERLAMBAT",
    },
    {
      id: 1,
      bookingId: "A007",
      kodeBuku: "U 330 END s 3",
      judulBuku: "Sejarah Indonesia Kelas XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 2,
      statusMsg: "BELUM KEMBALI",
    },
    {
      id: 1,
      bookingId: "A008",
      kodeBuku: "U 330 ERN b 3",
      judulBuku: "Bahasa, Sastra dan Budaya X",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "Ditangguhkan",
      status: 2,
      statusMsg: "BELUM KEMBALI",
    },
    {
      id: 1,
      bookingId: "A009",
      kodeBuku: "U 330 ERL e 3",
      judulBuku: "English in Focus X",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 1,
      statusMsg: "SUDAH KEMBALI",
    },
    {
      id: 1,
      bookingId: "A010",
      kodeBuku: "U 330 GAN d 3",
      judulBuku: "Developing English Competencies XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "Ditangguhkan",
      status: 2,
      statusMsg: "BELUM KEMBALI",
    },
  ];

  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex flex-col w-full">
        <div className=" h-16 flex justify-end">
          <div className=" text-black flex  items-center pr-5  gap-[30px]">
          {user.map((userItem) => (
            <div key={userItem.id}>
              <h1 className="font-semibold text-sm leading-normal">
              {userItem.nama}
              </h1>
              <span className="text-slate-300 ">{userItem.role}</span>
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
        <table className=" relative rounded-[50px] mt-5 max-w-screen-2xl mx-5">
          <thead className="bg-black">
            <tr className="text-sm font-normal text-white">
              <th className="">Code-buku</th>
              <th className="p-3">Kode Buku</th>
              <th className="">Judul Buku</th>
              {/* <th className="p-3">Tgl Pinjam</th> */}
              {/* <th className="p-3">Tgl Kembali</th> */}
              {/* <th className="p-3">Sanksi</th> */}
              <th className="pr-16">Status</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-gray-300">
            {items.map((item) => (
              <tr
                key={item.bookingId}
                className="text-sm font-normal text-15px"
              >
                <td className="p-5 pl-9">{item.bookingId}</td>
                <td className="p-5 px-7">{item.kodeBuku}</td>
                <td className="p-5 pl-24">{item.judulBuku}</td>
                {/* <td className="p-3">{item.tglPinjam}</td> */}
                {/* <td className="p-3">{item.tglKembali}</td> */}
                {/* <td className="p-3">{item.sanksi}</td> */}
                <td className="pl-5">
                  <MdFavorite className="text-4xl text-red-600" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Favorit;
