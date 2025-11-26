const projects = [
  {
    title: "Website Toko Online",
    img: "https://cdn.dribbble.com/userupload/37174639/file/original-034dc406cc5a2055f7e12ad727a39b2b.png?resize=752x564&vertical=center",
    category: "Web",
    color: "from-pink-500 to-pink-300",
  },
  {
    title: "Dashboard Admin UI",
    img: "https://cdn.dribbble.com/userupload/13168890/file/original-63d92b93e9bc3839d6d66965c454eab4.jpg?resize=1024x768&vertical=center",
    category: "UI",
    color: "from-purple-500 to-purple-300",
  },
  {
    title: "Website E-Commerce",
    img: "https://cdn.dribbble.com/userupload/44211327/file/original-0ede309d16c2e99043039c975f8193e1.png?resize=1024x768&vertical=center",
    category: "Web",
    color: "from-blue-500 to-blue-300",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
          Proyek Saya
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${p.color} mb-4`}
              >
                {p.category}
              </span>

              <img
                src={p.img}
                alt={p.title}
                className="rounded-xl mb-4 w-full h-48 object-cover shadow-lg"
              />

              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white text-center">
                {p.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
