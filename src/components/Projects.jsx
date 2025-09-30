const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-white text-3xl font-bold text-center mb-10">Proyek Saya</h2>
                <div id="projectGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* 3 kartu awal dengan gambar */}
                    <div className="project-card" data-category="web">
                        <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">Website Toko Online</h3>
                            <img src="https://cdn.dribbble.com/userupload/44603373/file/6b29fd4ea81bc0983d17a7caec31e0bc.png?resize=1504x1037&vertical=center" alt="Website Toko Online" className="rounded mb-3" />
                        </div>
                    </div>

                    <div className="project-card" data-category="ui">
                        <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">Dashboard Admin UI</h3>
                            <img src="https://cdn.dribbble.com/userupload/43996183/file/original-c596e11420458b7253e6744bbcb8e1f4.png?resize=1504x1128&vertical=center" alt="Dashboard Admin UI" className="rounded mb-3" />
                        </div>
                    </div>

                    <div className="project-card" data-category="web">
                        <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform ">
                            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white text-center">Website E-Commerce</h3>
                            <img src="https://cdn.dribbble.com/userupload/3989863/file/original-87029f4a232a3377371a49a1daed0de0.png?resize=1504x1128&vertical=cente" alt="designer" className="rounded mb-3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
