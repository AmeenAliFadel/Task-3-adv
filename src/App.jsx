import { useEffect, useState } from "react"
import Footer from "./components/FooterSection/Footer"
import NavBar1 from "./components/NavBar1/NavBar1"
import NavBar2 from "./components/NavBar2/NavBar2"
import './index.css'
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader/Loader"
import ScrollToTop from "./components/ScrollToTop/ScrollToTop"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Academics from "./pages/Academics/Academics"
import AboutUs from "./pages/AboutUs/AboutUs"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 0,
      distance: '50px',
      once: false,
      mirror: true
    });
  }, []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;


  return (
    <>
      <header>
        <NavBar1 text="Admission is Open, Grab your seat now" />
        <NavBar2 list={["Home", "About Us", "Academics", "Admissions", "Student Life", "Contact"]} />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/academics' element={<Academics />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
