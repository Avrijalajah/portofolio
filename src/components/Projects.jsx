const projects = [
  {
    title: "Website Toko Online",
    img: "https://cdn.dribbble.com/userupload/44603373/file/6b29fd4ea81bc0983d17a7caec31e0bc.png?resize=1504x1037&vertical=center",
    category: "Web",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Dashboard Admin UI",
    img: "https://cdn.dribbble.com/userupload/43996183/file/original-c596e11420458b7253e6744bbcb8e1f4.png?resize=1504x1128&vertical=center",
    category: "UI",
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Website E-Commerce",
    img: "https://cdn.dribbble.com/userupload/3989863/file/original-87029f4a232a3377371a49a1daed0de0.png?resize=1504x1128&vertical=center",
    category: "Web",
    color: "from-pink-500 to-blue-500",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-100 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 animate-fade-in">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center gap-2 drop-shadow-lg">
          <span>💼</span> Proyek Saya
        </h2>
        <div id="projectGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`project-card group relative bg-white/70 dark:bg-gray-800/70 p-5 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-md`}
              data-category={p.category.toLowerCase()}
            >
              {/* Badge kategori */}
              <span
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.color} shadow`}
              >
                {p.category}
              </span>
              <img
                src={p.img}
                alt={p.title}
                className="rounded-xl mb-4 w-full h-48 object-cover shadow-lg group-hover:shadow-pink-400/40 transition-all duration-300"
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .animate-fade-in {
            animation: fadeInUp 1s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(40px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects;

