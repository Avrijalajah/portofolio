import { useEffect, useState } from "react";

const Navbar = () => {
  // State dark mode
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  // Sync dark mode ke <html> & localStorage
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          رجل
        </h1>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="hover:text-primary text-gray-800 dark:text-white"
            >
              Home
            </a>
            <a
              href="#projects"
              className="hover:text-primary text-gray-800 dark:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary text-gray-800 dark:text-white"
            >
              Contact
            </a>
          </nav>
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white transition-colors duration-500"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
