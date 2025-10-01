import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sertifikat from "./components/sertifikat";
import Galeri from "./components/Galeri";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Sertifikat />
      <Galeri />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
