import Sidebar_admin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
import { useNavigate } from "react-router-dom";

function EditBuku() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row  ">
      <Sidebar_admin />

      <div className="flex flex-col w-screen  ">
        <div className=" mb-10 h-16 flex justify-end">
          <div className=" text-black flex  items-center pr-5  gap-[30px]">
            <div>
              <h1 className="font-semibold text-sm leading-normal">bekti</h1>
              <span className="text-slate-300 ">admin</span>
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
        <div className="px-16 font-semibold text-3xl">Edit Buku</div>
        <form action="">
          <div className="px-16 mb-5 ">
            <div className="pt-3">
              <div className="pt-3 ">
                <table className="[&>*:nth-child(odd)]:bg-white min-w-full [&>*:nth-child(even)]:bg-slate-400 ">
                  <tr>
                    <td
                      className="text-center bg-gray-600 text-white p-2"
                      colSpan={2}
                    >
                      TAMBAH BUKU
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Judul Seri</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name=""
                        id=""
                      />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">
                      <div className="flex flex-row justify-between">
                        <div>Kode Buku</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2"
                        type="text"
                        name=""
                        id=""
                      />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">
                      <div className="flex flex-row justify-between">
                        <div>penerbit</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name=""
                        id=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">
                      <div className="flex flex-row justify-between">
                        <div>Bahasa</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2"
                        type="text"
                        name=""
                        id=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">
                      <div className="flex flex-row justify-between">
                        <div>Deskripsi Fisik</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name=""
                        id=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">
                      <div className="flex flex-row justify-between">
                        <div>ISBN / ISSN</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2"
                        type="text"
                        name=""
                        id=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">
                      <div className="flex flex-row justify-between">
                        <div>Lokasi</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name=""
                        id=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1">
                      <div className="flex flex-row justify-between">
                        <div>Cover Buku</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <button className="bg-blue-600 w-[70px] p-1 text-white font-semibold rounded-md">
                        Upload
                      </button>
                    </td>
                  </tr>
                </table>
                <div className="pt-10">
                  <div className=" ">
                    <div className="flex gap-4">
                      <button className="bg-blue-600 text-white font-medium w-[100px] rounded-md p-1">
                        Simpan
                      </button>
                      <button
                        onClick={() => navigate("/admin/databuku")}
                        className="bg-red-600 text-white font-medium w-[100px] rounded-md p-1"
                      >
                        Batal
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBuku;
