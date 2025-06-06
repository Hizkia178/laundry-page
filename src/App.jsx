import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Harga from "./components/Harga";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Galery";
import Testimonials from "./components/Testimoni";
import Location from "./components/Location";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Harga />
      <Gallery />
      <Testimonials />
      <Location />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
