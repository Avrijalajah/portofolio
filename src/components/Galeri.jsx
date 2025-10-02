import { useState, useEffect, useRef } from "react";
import img1 from "../assets/foto-gw/1000011611.jpg";
import img2 from "../assets/foto-gw/1000011615.jpg";
import img3 from "../assets/foto-gw/1000011654.jpg";
import img4 from "../assets/foto-gw/1000227558.jpg";
import img5 from "../assets/foto-gw/1712151545569.jpg";
import img6 from "../assets/foto-gw/1744890169109.webp";
import img7 from "../assets/foto-gw/1744890169138.webp";
import img8 from "../assets/foto-gw/533956918_24367782779515263_4767490438294752286_n.jpg";
import img9 from "../assets/foto-gw/Haflah halaqoh.jpg";
import img10 from "../assets/foto-gw/IMG20230818202208.jpg";
import img11 from "../assets/foto-gw/IMG_0465.jpg";

const fotoList = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

const Galeri = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    // Auto slide setiap 2 detik
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fotoList.length);
    }, 2000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset timer jika tombol manual ditekan
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % fotoList.length);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fotoList.length);
    }, 2000);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + fotoList.length) % fotoList.length);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fotoList.length);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">IPUY</h1>
      <div className="relative w-96 h-96 flex items-center justify-center">
        <img
          src={fotoList[current]}
          alt={`foto-gw-${current + 1}`}
          className="w-96 h-96 object-cover rounded-2xl shadow-2xl border-4 border-gray-700 transition-all duration-500"
        />
      </div>
      {/* Indikator bulat */}
      <div className="flex gap-2 mt-6">
        {fotoList.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Galeri;