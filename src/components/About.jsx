
const About = () => {

    return (
<section
  id="about"
  className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500"
>
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
    {/* Bagian Gambar */}
    <div className="flex justify-center">
      <img
        src=""
        alt="Foto Saya"
        className="w-96 h-96 rounded-full object-cover"
      />
    </div>

    {/* Bagian Teks */}
    <div>
      <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        Tentang Saya
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
        Saya adalah seorang{" "}
        <span className="font-bold text-primary">
          Frontend Developer & UI/UX Designer
        </span>{" "}
        yang terbiasa membangun aplikasi web modern dengan tampilan{" "}
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
</section>


    )
}
export default About