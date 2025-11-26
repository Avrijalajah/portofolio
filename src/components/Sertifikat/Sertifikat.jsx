import sertif from "../../assets/sertif.png";

const Sertifikat = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold text-center mb-10">
          Sertifikat
        </h2>

        <div
          id="projectGrid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1 */}
          <div className="project-card" data-category="web">
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">
                HTML
              </h3>
              <img src={sertif} alt="HTML Certificate" className="rounded mb-3" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="project-card" data-category="ui">
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">
                React JS
              </h3>
              <img src={sertif} alt="React Certificate" className="rounded mb-3" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sertifikat;
