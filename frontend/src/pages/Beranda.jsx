import LayananC from "../components/LayananC";
import ArrowUP from "../components/arrowUP";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Content_beranda from "../components/Content_beranda.jsx";
// import {useNavigate} from 'react-router-dom'

const Beranda = () => {
  // const navigate = useNavigate
  return (
    <>
      <Navbar />
      <Content_beranda />
      <LayananC />
      <ArrowUP />
      <Footer />
    </>
  );
};

export default Beranda;
