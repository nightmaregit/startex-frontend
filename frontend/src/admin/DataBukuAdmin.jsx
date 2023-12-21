import Sidebar_admin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
import { RiPencilFill } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
// import p9 from "../assets/image/buku-pendidikan/p9.png";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function DataBukuAdmin() {
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
      navigate("/");
      console.error("Error fetching user data:", error);
    }
  };

  const [buku, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:3102/api/buku");
        setBooks(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchBooks();
  }, []); // [] agar useEffect hanya dijalankan sekali pada saat mount

  // const [buku, setBuku] = useState([]);

  // useEffect(() => {
  //   getBuku();
  // }, []);

  // const getBuku = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3102/data-buku/v1");
  //     setBuku(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };

  const deleteBook = async (id_buku) => {
    try {
      await axios.delete(`http://localhost:3102/api/buku/${id_buku}`);
      // Jika penghapusan berhasil, perbarui daftar buku
      setBooks(buku.filter((buku) => buku.id_buku !== id_buku));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="flex flex-row  ">
      <Sidebar_admin />

      <div className="flex flex-col w-screen  ">
        <div className=" mb-3 h-16 flex justify-end">
          <div className=" text-black flex  items-center pr-5  gap-[30px]">
            <div>
              {user.map((userItem) => (
                <div key={userItem.id}>
                  <h1 className="font-semibold text-sm leading-normal">
                    {userItem.nama}
                  </h1>
                  <span className="text-slate-300 ">{userItem.role}</span>
                </div>
              ))}
            </div>

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

        <div className="mx-3 pt-5 pb-5">
          <button
            onClick={() => navigate("/admin/databuku/tambahbuku")}
            className="flex flex-row border-2 border-black border-solid rounded-lg"
          >
            <div className="p-2 text-[28px]">
              <FaPlus />
            </div>
            <div className="p-2 text-xl">Tambah Data buku</div>
          </button>
        </div>
        <div className="flex flex-col ">
          <table className=" p-2 border border-solid border-collapse mt-3 mx-3">
            <thead className="bg-slate-400">
              <tr className=" text-xs text-white">
                <th className="p-2 border-slate-300 border border-solid">Id</th>
                <th className="p-2 border-slate-300 border border-solid">
                  Judul
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  Kode
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  Penerbit
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  Bahasa
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  Lokasi
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  ISBN/ISSN
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  Jumlah
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  Tersedia
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  Deskripsi
                </th>
                <th className=" border-slate-300 border border-solid">
                  Cover Buku
                </th>
                <th className="p-2 border-slate-300 border border-solid">
                  Tindakan
                </th>
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(odd)]:bg-white  [&>*:nth-child(even)]:bg-slate-300">
              {buku.map((bukuItem) => (
                <tr key={bukuItem.id} className="text-sm font-normal text-15px">
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.id_buku}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.judul_buku}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.kode_buku}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.penerbit_buku}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.bahasa_buku}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.lokasi_buku}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.isbn_issn}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.jumlah_buku}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.ketersediaan}
                  </td>
                  <td className="align-top text-center border-[1px] border-slate-300 border-solid">
                    {bukuItem.deskripsi}
                  </td>
                  <td className="flex justify-center border-[1px] border-slate-300 border-solid ">
                    <img
                      src={`http://localhost:3102/uploads/${bukuItem.cover_buku}`}
                      className=" h-32 w-24"
                      // alt={buku.judul_buku}
                    />
                    {/* {bukuItem.cover_buku} */}
                  </td>
                  <td className=" border-[1px] border-slate-300 border-solid ">
                    <div className="flex justify-center gap-1">
                      <div>
                        <button
                          onClick={() => navigate("/admin/databuku/editbuku")}
                          className=" bg-yellow-500 p-1 text-black"
                        >
                          <RiPencilFill className="text-[20px]" />
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => deleteBook(bukuItem.id_buku)}
                          className=" bg-red-500 p-1 text-black"
                        >
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
  );
}

export default DataBukuAdmin;
