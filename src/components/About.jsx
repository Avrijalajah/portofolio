import { useState } from "react";

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const imgUrl =
    "https://media.licdn.com/dms/image/v2/D5603AQEUfsBUXMzqCg/profile-displayphoto-scale_400_400/B56Zkxm1EUJwAg-/0/1757473891208?e=1762387200&v=beta&t=_DuKcwA92OD4QrIdgEQ_Zte_fhoQ20YFKB6XHIsDKY4";

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Bagian Gambar di kiri */}
        <div className="flex justify-center md:justify-end">
          <img
            src={imgUrl}
            alt="Foto Saya"
            className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer"
            onClick={() => setShowModal(true)}
            title="Klik untuk perbesar"
          />
        </div>

        {/* Bagian Teks di kanan */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Tentang Saya
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-transparent p-0 rounded-lg flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-2 text-2xl font-bold text-white px-3 py-1 rounded hover:bg-black/30"
              onClick={() => setShowModal(false)}
              aria-label="Tutup"
            >
              &times;
            </button>
            <img
              src={imgUrl}
              alt="Foto Saya"
              className="w-[90vw] max-w-xl h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;