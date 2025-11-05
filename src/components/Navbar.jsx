import { useEffect, useState } from "react";

const Navbar = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50 transition-colors duration-500 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-blue-500 to-blue-500 bg-clip-text text-transparent tracking-widest drop-shadow-lg select-none">
          <span className="mr-2"></span>Ipuy
        </h1>
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <a
            href="#home"
            className="hover:text-pink-500 hover:scale-110 transition-all duration-200 text-gray-800 dark:text-white"
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-blue-500 hover:scale-110 transition-all duration-200 text-gray-800 dark:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-500 hover:scale-110 transition-all duration-200 text-gray-800 dark:text-white"
          >
            Contact
          </a>
        </nav>
        {/* Dark mode & mobile menu */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow hover:scale-110 transition-all duration-300"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              // Sun icon
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" fill="#facc15" />
                <g stroke="#facc15" strokeWidth="2">
                  <line x1="12" y1="2" x2="12" y2="5" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="5" y2="12" />
                  <line x1="19" y1="12" x2="22" y2="12" />
                  <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
                  <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
                  <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
                  <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
                </g>
              </svg>
            ) : (
              // Moon icon
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <path
                  d="M21 12.79A9 9 0 0 1 12.21 3a7 7 0 1 0 8.79 9.79Z"
                  fill="#a5b4fc"
                />
              </svg>
            )}
          </button>
          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow hover:scale-110 transition-all duration-300"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                  stroke="#f472b6"
                  strokeWidth="2"
                />
                <line
                  x1="6"
                  y1="18"
                  x2="18"
                  y2="6"
                  stroke="#f472b6"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                <line
                  x1="4"
                  y1="7"
                  x2="20"
                  y2="7"
                  stroke="#6366f1"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="12"
                  x2="20"
                  y2="12"
                  stroke="#6366f1"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="17"
                  x2="20"
                  y2="17"
                  stroke="#6366f1"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg px-6 py-4 flex flex-col gap-4 font-semibold animate-fade-in-down">
          <a
            href="#home"
            className="hover:text-pink-500 transition-all duration-200 text-gray-800 dark:text-white"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="hover:text-blue-500 transition-all duration-200 text-gray-800 dark:text-white"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-purple-500 transition-all duration-200 text-gray-800 dark:text-white"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
      <style>
        {`
          .animate-fade-in-down {
            animation: fadeInDown 0.7s cubic-bezier(.39,.575,.565,1) both;
          }
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </header>
  );
};

export default Navbar;




