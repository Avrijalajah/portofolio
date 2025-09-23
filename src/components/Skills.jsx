const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500 text-white">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">HTML & CSS</h3>
                        <p>Responsive Layout, Flexbox, Grid.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
                        <p>DOM Manipulation, Event Handling.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                        <p>Styling dengan utility classes.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">React JS</h3>
                        <p>Komponen, State, Props.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                        <p>Desain responsif, interaktif, dan selalu belajar teknologi baru.</p>
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded shadow text-center">
                        <h3 className="text-xl font-semibold mb-2">Version Control</h3>
                        <p>Git, GitHub</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
