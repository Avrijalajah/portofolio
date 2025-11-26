import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Sertifikat from "./components/Sertifikat/Sertifikat";
import Galeri from "./components/Galeri/Galeri";
import CTA from "./components/CTA/CTA";

const App = () => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("mode") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
  }, [dark]);

  return (
    <div className="bg-white text-black dark:bg-[#0f172a] dark:text-white min-h-screen transition-colors duration-300">
      {/* tombol dark mode */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white shadow"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Sertifikat />
      <Galeri />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
