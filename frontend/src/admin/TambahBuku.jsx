import Sidebar_admin from "../components/sidebar_admin";
import ProfilePicture from "../assets/image/profile.png";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function TambahBuku() {
  const [formData, setFormData] = useState({
    id_buku:"",
    judul_buku: "",
    kode_buku: "",
    penerbit_buku: "",
    bahasa_buku: "",
    lokasi_buku: "",
    isbn_issn: "",
    jumlah_buku: 0,
    ketersediaan: "",
    cover_buku: null,
    deskripsi:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cover_buku: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "http://localhost:3102/api/buku";
    const formDataApi = new FormData();

    for (const key in formData) {
      formDataApi.append(key, formData[key]);
    }

    try {
      await axios.post(apiUrl, formDataApi);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
    
      })
      console.log("Data berhasil dikirim");
    } catch (error) {
      console.error("Gagal mengirim data: ", error.message);
    }
  };

  // const [id_buku, setId] = useState("");
  // const [judul_buku, setJudul] = useState("");
  // const [kode_buku, setKode] = useState("");
  // const [penerbit_buku, setPenerbit] = useState("");
  // const [bahasa_buku, setBahasa] = useState("");
  // const [lokasi_buku, setDeskripsi] = useState("");
  // const [isbn_issn, setIsbn_issn] = useState("");
  // const [jumlah_buku, setJumlah] = useState("");
  // const [ketersediaan, setTersedia] = useState("");
  // const [cover_buku, setCover_buku] = useState("https://fakeimg.pl/360x200");
  // const [saveCover, setSaveCover] = useState(null);
  // // const [isbn_issn, setIsbn_issn] = useState("");

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
        <div className="px-16 font-semibold text-3xl">Tambah Buku</div>
        <form onSubmit={handleSubmit} action="">
          <div className="px-16 mb-5">
            <div className="pt-3">
              <table className="[&>*:nth-child(odd)]:bg-white min-w-full [&>*:nth-child(even)]:bg-slate-400">
                <tbody>
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
                        <div>id</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="id_buku"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Judul</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="judul_buku"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Kode</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="kode_buku"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Penerbit</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="penerbit_buku"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Bahasa</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="bahasa_buku"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Lokasi</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="lokasi_buku"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>ISBN/ISSN</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="isbn_issn"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Jumlah</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="number"
                        name="jumlah_buku"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Tersedia</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="ketersediaan"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Deskripsi</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="text"
                        name="deskripsi"
                        onChange={handleChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1 w-[150px]">
                      <div className="flex flex-row justify-between">
                        <div>Cover Buku</div>
                        <div>:</div>
                      </div>
                    </td>
                    <td className="p-1">
                      <input
                        className="min-w-full p-2 bg-slate-400"
                        type="file"
                        name="cover_buku"
                        onChange={handleFileChange}
                        required
                      />
                      {/* <img src={} alt="foto" /> */}
                    </td>
                  </tr>
                  <tr>
                    {/* <td className="flex justify-center mx-auto"></td> */}
                  </tr>
                  {/* Tambahkan baris lain sesuai dengan kebutuhan */}
                </tbody>
              </table>
              <div className="pt-10">
                <div className=" ">
                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-medium w-[100px] rounded-md p-1"
                    >
                      Simpan
                    </button>
                    <button
                      // onClick={() => navigate("/admin/databuku")}
                      className="bg-red-600 text-white font-medium w-[100px] rounded-md p-1"
                    >
                      Batal
                    </button>
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

export default TambahBuku;
