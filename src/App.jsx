import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Harga from "./components/Harga";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./components/Galery";
import Testimonials from "./components/Testimoni";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Harga />
      <Gallery />
      <Testimonials />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
