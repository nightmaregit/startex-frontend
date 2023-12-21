import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Koleksi from "./pages/Koleksi";
import Layanan from "./pages/Layanan";
import Tentang_kami from "./pages/Tentang_kami";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import Peminjaman from "./pages/PeminjamanNew";
import Akun from "./pages/Akun";
import EditAkun from "./pages/EditAkun";
import Riwayat_peminjaman from "./pages/Riwayat_peminjaman";
import Buku_pendidikan from "./pages/Buku_pendidikan";
import Detail_buku from "./pages/Detail_buku";
import LupaKataSandi from "./pages/LupaKataSandi";
import Buku_novel from "./pages/Buku_novel";
import Bukti from "./pages/bukti";
import Profil from "./pages/Profil";
import MasukSebagai from "./pages/MasukSebagai";
import DashboardAdmin from "./admin/DashboardAdmin";
import DataBukuAdmin from "./admin/DataBukuAdmin";
import Koleksi_pinjaman from "./pages/Koleksi_pinjaman";
import Favorit from "./pages/Favorit";
import TambahBuku from "./admin/TambahBuku";
import EditBuku from "./admin/EditBuku";
import PeminjamanBuku from "./admin/PeminjamanBuku";
import PengembalianBuku from "./admin/PengembalianBuku";
import DataAnggota from "./admin/DataAnggota";
import EditAkunAdmin from "./admin/EditAkunAdmin";
import Administrator from "./admin/Administrator";
import TambahAkunAdmin from "./admin/TambahAkunAdmin";
// import Buku_cerpen from './pages/Buku_cerpen'
// import Buku_komik from './pages/Buku_komik'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/koleksi" element={<Koleksi />}></Route>
        <Route path="/layanan" element={<Layanan />}></Route>
        <Route path="/tentang-kami" element={<Tentang_kami />}></Route>
        <Route path="/masuk" element={<SignIn />}></Route>
        <Route path="/masuk/lupakatasandi" element={<LupaKataSandi />}></Route>
        <Route path="/daftar" element={<SignUp />}></Route>
        {/* <Route path="/peminjaman" element={<PeminjamanNew />}></Route> */}
        <Route path="/masuksebagai" element={<MasukSebagai />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
        <Route path="/profil/akun" element={<Akun />}></Route>
        <Route path="/profil/akun/edit-akun" element={<EditAkun />}></Route>
        <Route path="/profil/favorit" element={<Favorit />}></Route>
        <Route
          path="/profil/riwayat-peminjaman"
          element={<Riwayat_peminjaman />}
        ></Route>
        <Route
          path="/profil/koleksi-pinjaman"
          element={<Koleksi_pinjaman />}
        ></Route>
        <Route path="/detail/:id_buku" element={<Detail_buku />}></Route>
        <Route
          path="/koleksi/pendidikan/Buku-Siswa-Ekonomi-Kelas-XI-SMA/bukti"
          element={<Bukti />}
        ></Route>
        {/* Buku-perpustakaan */}
        <Route path="/koleksi/pendidikan" element={<Buku_pendidikan />}></Route>
        <Route path="/koleksi/novel" element={<Buku_novel />}></Route>
        {/* <Route path="/koleksi/cerpen" element={<Buku_cerpen />}></Route>
        <Route path="/koleksi/komik" element={<Buku_komik />}></Route> */}
        <Route path="/admin/dashboard" element={<DashboardAdmin />}></Route>
        <Route path="/admin/databuku" element={<DataBukuAdmin />}></Route>
        <Route
          path="/admin/databuku/tambahbuku"
          element={<TambahBuku />}
        ></Route>
        <Route path="/admin/databuku/editbuku" element={<EditBuku />}></Route>
        <Route
          path="/admin/peminjaman-buku"
          element={<PeminjamanBuku />}
        ></Route>
        <Route
          path="/admin/pengembalian-buku"
          element={<PengembalianBuku />}
        ></Route>
        <Route path="/admin/data-anggota" element={<DataAnggota />}></Route>
        <Route
          path="/admin/edit-akun-admin"
          element={<EditAkunAdmin />}
        ></Route>
        <Route
          path="/admin/tambah-akun-admin"
          element={<TambahAkunAdmin />}
        ></Route>
        <Route path="/admin/administrator" element={<Administrator />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
