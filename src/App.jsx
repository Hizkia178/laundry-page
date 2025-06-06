import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Harga from "./components/Harga";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Galery";
import Testimonials from "./components/Testimoni";
import Location from "./components/Location";
import Faq from "./components/Faq";

import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Harga />
      <Gallery />
      <Testimonials />
      <Location />
      <Faq />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
