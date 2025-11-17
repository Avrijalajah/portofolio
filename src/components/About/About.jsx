import { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const imgUrl =
    "https://media.licdn.com/dms/image/v2/D5603AQEUfsBUXMzqCg/profile-displayphoto-scale_400_400/B56Zkxm1EUJwAg-/0/1757473891208?e=1762387200&v=beta&t=_DuKcwA92OD4QrIdgEQ_Zte_fhoQ20YFKB6XHIsDKY4";

  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="flex justify-center md:justify-end order-1 md:order-none">
          <img
            src={imgUrl}
            alt=""
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => setShowModal(true)}
            title="Klik untuk perbesar"
          />
        </div>

        {/* Teks di bawah (mobile) / kanan (desktop) */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Tentang Saya
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
            Saya adalah seorang{" "}
            <span className="font-bold text-primary">
              Frontend Developer & UI/UX Designer
            </span>{" "}
            yang suka membangun aplikasi web modern dengan tampilan{" "}
            <span className="underline decoration-primary">responsif</span>,{" "}
            <span className="italic text-secondary">interaktif</span>, dan berfokus
            pada pengalaman pengguna.
          </p>
          <p className="text-gray-700 dark:text-gray-300 italic border-l-4 border-primary pl-4 leading-relaxed">
            “Berkomitmen menciptakan desain yang responsif, interaktif, dan selalu
            beradaptasi dengan teknologi terbaru untuk menghadirkan kualitas proyek
            yang maksimal.”
          </p>
        </div>
      </div>

      {/* Modal Pop Up */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-transparent p-0 rounded-lg flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-2 text-3xl font-bold text-white px-3 py-1 rounded hover:bg-black/30 transition"
              onClick={() => setShowModal(false)}
              aria-label="Tutup"
            >
              &times;
            </button>
            <img
              src={imgUrl}
              alt="Foto Saya"
              className="w-[90vw] sm:w-[80vw] max-w-lg h-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
