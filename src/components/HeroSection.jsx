const HeroSection = () => {
    return (
    <section id="home" class="pt-28 pb-20 text-center transition-colors duration-500">
    <h1 className="text-5xl font-extrabold">
  Halo, saya <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Ipuy</span>
</h1>

    <p class="text-lg md:text-xl mb-4" id="typingText"></p>
    <a href="#projects" class="bg-primary text-white px-6 py-3 rounded-full mt-4 inline-block hover:bg-secondary transition-colors duration-500">Lihat Proyek</a>
    <a href="#about" class="bg-primary text-white px-6 py-3 rounded-full mt-4 inline-block hover:bg-secondary transition-colors duration-500">Lihat Proyek</a>
  </section>
    )
}

export default HeroSection