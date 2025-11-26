import { useEffect, useRef, useState } from "react";

const typingTexts = [
  "Frontend Developer.",
  "UI/UX Enthusiast.",
  "React & Tailwind Lover.",
  "Siap Kolaborasi Proyek Keren!"
];

const HeroSection = () => {
  const typingRef = useRef(null);
  const introRef = useRef(null);
  const [showIntro, setShowIntro] = useState(true);

  // Intro Animation Auto Hide
  useEffect(() => {
    const timer = setTimeout(() => {
      if (introRef.current) {
        introRef.current.classList.add("opacity-0", "scale-95");
        setTimeout(() => setShowIntro(false), 500);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Typing Effect
  useEffect(() => {
    let i = 0, j = 0, isDeleting = false, current = 0;

    const type = () => {
      if (!typingRef.current) return;
      let text = typingTexts[current];

      if (isDeleting) {
        typingRef.current.textContent = text.substring(0, j--);
        if (j < 0) {
          isDeleting = false;
          current = (current + 1) % typingTexts.length;
          setTimeout(type, 500);
        } else setTimeout(type, 40);
      } else {
        typingRef.current.textContent = text.substring(0, j++);
        if (j > text.length) {
          isDeleting = true;
          setTimeout(type, 1200);
        } else setTimeout(type, 80);
      }
    };

    type();

    return () => { if (typingRef.current) typingRef.current.textContent = ""; };
  }, []);

  return (
    <>
      {/* INTRO / PRELOADER */}
      {showIntro && (
        <div
          id="intro"
          ref={introRef}
          className="fixed inset-0 flex flex-col justify-center items-center 
          bg-black text-white z-[9999] transition-all duration-500"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-[4px] sm:tracking-[6px] fade-in-slow">
            Whats up
          </h1>
          <p className="text-gray-400 mt-3 text-xs sm:text-sm md:text-base tracking-[2px] sm:tracking-[3px] fade-in-slow delay-300">
            wait...
          </p>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        id="home"
        className="
        pt-32 pb-24 text-center 
        bg-gradient-to-br from-purple-50 via-blue-50 to-pink-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        transition-colors duration-500 animate-fade-in"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 flex flex-col items-center gap-2">
          <span className="text-gray-900 dark:text-white inline-flex items-center gap-2">
            Halo, saya
          </span>

          <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            Ipuy
          </span>
        </h1>

        <p
          className="text-lg md:text-2xl mb-8 h-8 font-mono 
          text-gray-700 dark:text-gray-200 
          min-h-[2.5rem] transition-colors duration-500"
          ref={typingRef}
        ></p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 
            text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg 
            hover:scale-105 hover:from-blue-500 hover:to-purple-600 
            transition-all duration-300 flex items-center gap-2"
          >
            Lihat Proyek
          </a>

          <a
            href="#about"
            className="bg-gradient-to-r from-blue-500 via-blue-500 to-purple-600 
            text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg 
            hover:scale-105 hover:from-purple-600 hover:to-blue-500 
            transition-all duration-300 flex items-center gap-2"
          >
            Tentang Saya
          </a>
        </div>

        {/* Animation style */}
        <style>
          {`
            .animate-fade-in {
              animation: fadeInUp 1s cubic-bezier(.39,.575,.565,1) both;
            }
            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(40px); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}
        </style>
      </section>
    </>
  );
};

export default HeroSection;
