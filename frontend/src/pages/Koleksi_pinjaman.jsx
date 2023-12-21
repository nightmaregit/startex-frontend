import Sidebar from "../components/Sidebar";
import ProfilePicture from "../assets/image/profile.png";

const Riwayat_peminjaman = () => {
  const items = [
    {
      id: 1,
      bookingId: "A001",
      kodeBuku: "U 330 END e 3",
      judulBuku: "Ekonomi Kelas XI Peminatan Ilmu Sosial",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
    },
    {
      id: 1,
      bookingId: "A002",
      kodeBuku: "U 330 ERL m 3",
      judulBuku: "Matematika Kelas XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
    },
    {
      id: 1,
      bookingId: "A003",
      kodeBuku: "U 330 ERL b 3",
      judulBuku: "Biologi XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
    },
    {
      id: 1,
      bookingId: "A004",
      kodeBuku: "U 330 MUL k 3",
      judulBuku: "Kimia Kelas XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
    },
    {
      id: 1,
      bookingId: "A005",
      kodeBuku: "U 330 ERL f 3",
      judulBuku: "Fisika Kelas XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
    },
    {
      id: 1,
      bookingId: "A006",
      kodeBuku: "U 330 ERL f 3",
      judulBuku: "Fisika Kelas X",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "Ditangguhkan",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",

      statusMsg: "SUDAH DIVERIFIKSI",
    },
    {
      id: 1,
      bookingId: "A007",
      kodeBuku: "U 330 END s 3",
      judulBuku: "Sejarah Indonesia Kelas XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "-",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
    },
    {
      id: 1,
      bookingId: "A008",
      kodeBuku: "U 330 ERN b 3",
      judulBuku: "Bahasa, Sastra dan Budaya X",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "Ditangguhkan",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
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
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
    },
    {
      id: 1,
      bookingId: "A010",
      kodeBuku: "U 330 GAN d 3",
      judulBuku: "Developing English Competencies XI",
      tglPinjam: "11-07-23",
      tglKembali: "10-06-24",
      sanksi: "Ditangguhkan",
      status: 1,
      hapus: 1,
      ubah: 2,
      pesanHapus: "Hapus",
      pesanUbah: "Ubah",
      statusMsg: "SUDAH DIVERIFIKASI",
    },
  ];

  return (
    <div className="flex w-full">
      <Sidebar />

      <div className="flex flex-col w-full">
        <div className="bg-masuk h-16 flex justify-end">
          <div className=" text-white flex  items-center pr-5  gap-[30px]">
            <div>
              <h1 className="font-semibold text-sm leading-normal">
                nabila
              </h1>
              <span>anggota</span>
            </div>

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
              <th className="p-3">No. Booking</th>
              <th className="p-3">Kode Buku</th>
              <th className="p-3">Judul Buku</th>
              <th className="p-3">Tgl Pinjam</th>
              <th className="p-3">Tgl Kembali</th>
              {/* <th className="p-3">Sanksi</th> */}
              <th className="p-3 pr-16">Status</th>
              <th className="p-3 pr-16">Tindakan</th>
            </tr>
          </thead>
          <tbody className="[&>*:nth-child(odd)]:bg-gray-300">
            {items.map((item) => (
              <tr
                key={item.bookingId}
                className="text-sm font-normal text-15px"
              >
                <td className="p-3">{item.bookingId}</td>
                <td className="p-3">{item.kodeBuku}</td>
                <td className="p-3">{item.judulBuku}</td>
                <td className="p-3">{item.tglPinjam}</td>
                <td className="p-3">{item.tglKembali}</td>
                {/* <td className="p-3">{item.sanksi}</td> */}
                <td
                  className={
                    item.status === 1
                      ? "p-3 flex mr-10 w-[200px] justify-center mt-[10px] bg-green-500 text-center text-white font-bold text-15px"
                      : item.status === 2
                      ? "p-3 flex mr-10 w-[200px] justify-center mt-[10px] bg-blue-500 text-center text-white font-bold text-15px"
                      : ""
                  }
                >
                  {item.statusMsg}
                </td>
                <td className="">
                  <button className="mr-1 bg-yellow-500 w-16 h-11 text-white">
                    Ubah
                  </button>
                  <button className=" bg-red-500 w-16 h-11 text-white">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Riwayat_peminjaman;
