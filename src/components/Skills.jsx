const skills = [
  {
    title: "HTML & CSS",
    desc: "Responsive Layout, Flexbox, Grid.",
    icon: "🌐",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "JavaScript",
    desc: "DOM Manipulation, Event Handling.",
    icon: "🟨",
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Tailwind CSS",
    desc: "Styling dengan utility classes.",
    icon: "🌬️",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "React JS",
    desc: "Komponen, State, Props.",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "UI/UX Design",
    desc: "Desain responsif, interaktif, dan selalu belajar teknologi baru.",
    icon: "🎨",
    color: "from-purple-400 to-pink-400",
  },
  {
    title: "Version Control",
    desc: "Git, GitHub",
    icon: "😺",
    color: "from-gray-400 to-gray-300",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-100 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 animate-fade-in">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 bg-clip-text text-transparent flex items-center justify-center gap-2 drop-shadow-lg">
          <span>🛠️</span> Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((s, i) => (
            <div
              key={i}
              className={`group bg-white/70 dark:bg-gray-800/70 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-md flex flex-col items-center gap-2`}
            >
              <div
                className={`text-4xl mb-2 bg-gradient-to-r ${s.color} bg-clip-text text-transparent group-hover:scale-125 transition-transform duration-300`}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-800 dark:text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                {s.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-center">{s.desc}</p>
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

export default Skills;
