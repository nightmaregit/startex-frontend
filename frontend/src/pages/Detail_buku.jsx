import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdFavorite } from "react-icons/md";
import Swal from "sweetalert2";

const Detail_buku = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id_buku } = useParams();

  function notif() {
    Swal.fire({
      icon: "success",
      title: "Berhasil",
  
    })
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (isNaN(id_buku)) {
          setError("Invalid id_buku");
          return;
        }

        const response = await axios.get(
          `http://localhost:3102/api/buku/${id_buku}`
        );

        console.log("Book details response:", response.data);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error.message);
        setError("Error fetching book details");
      } finally {
        setLoading(false);
      }
    };

    if (id_buku) {
      fetchBooks();
    }
  }, [id_buku]);

  return (
    <>
      <Navbar />

      <div className="px-16 mb-5">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {books.map((book) => (
          <div key={book.id_buku} className="flex pt-5">
            <div className="">
              <img
                className="w-96"
                src={`http://localhost:3102/uploads/${book.cover_buku}`}
                alt={book.judul_buku}
              />
            </div>
            <div className="ml-3">
              <div className="flex">
                <span className="font-bold">Judul Buku :</span>
                <p>{book.judul_buku}</p>
              </div>
              <div className="flex">
                <span className="font-bold">Penulis :</span>
                <p>{book.penerbit_buku}</p>
              </div>
              <div>
                <span className="font-bold">Deskripsi :</span>
                <p>{book.deskripsi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {books.map((book) => (
        <div className="px-16" key={book.id_buku}>
          <div className="border border-black">
            <label className="flex justify-center bg-slate-800 text-white">
              DETAIL BUKU
            </label>
            <label className="flex bg-slate-400">
              Judul buku    :<p className="px-3"> {book.judul_buku} </p>{" "}
            </label>
            <label className="flex bg-slate-300">
              Kode Buku     :<p className="px-3"> {book.kode_buku} </p>
            </label>
            <label className="flex bg-slate-400">
              Penerbit     &nbsp; :{" "}
              <p className="px-3"> {book.penerbit_buku}</p>
            </label>
            <label className="flex bg-slate-300">
              Bahasa      &nbsp;  : <p className="px-3"> {book.bahasa_buku}</p>
            </label>
            <label className="flex bg-slate-400">
              Deskripsi Fisik   : <p />
            </label>
            <label className="flex bg-slate-300">
              ISBN / ISSN    : <p className="px-3"> {book.isbn_issn}</p>
            </label>
            <label className="flex bg-slate-400">
              Lokasi       &nbsp;&nbsp; &nbsp; :{" "}
              <p className="px-3"> {book.lokasi_buku}</p>
            </label>
            <label className="flex justify-center bg-slate-800 text-white">
              KETERSEDIAAN
            </label>
            <label className="flex bg-slate-400">
              Jumlah Buku    : <p className="px-3"> {book.jumlah_buku}</p>
            </label>
            <label className="flex bg-slate-400">
              Buku Tersedia    : <p className="px-3"> {book.ketersediaan}</p>
            </label>
          </div>
          <div className="pt-3">
            <div className="flex justify-end">
              <form>
                {/* Add content or remove the empty button */}
                
                <button className="px-4 pb-4 focus:text-pink-500">
                  <div><MdFavorite className="text-3xl relative top-2"/></div>
                </button>
                
                <button onClick={notif} className="bg-masuk w-24 h-8 rounded-full text-white hover:bg-perpus hover:text-black border border-black">
                  Pinjam
                </button>
              </form>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Detail_buku;
