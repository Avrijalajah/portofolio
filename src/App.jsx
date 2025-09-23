import Navbar from "./components/Navbar";
import Contact from "./components/contact";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


const App = () => {
  return (
   <>
   <Navbar />
   <Contact />
   <HeroSection />
   <About /> 
   <Projects />
   <Skills />
   <Footer />
   </>
  );
};

export default App;