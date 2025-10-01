const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-8 mt-20 transition-colors duration-500">
      {/* Gradasi atas */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-t-lg"></div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 z-10 relative">
        {/* Sosmed */}
        <div className="flex gap-4 mb-2">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Instagram"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="7" fill="url(#ig)"/>
              <defs>
                <linearGradient id="ig" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#f58529"/>
                  <stop offset="0.5" stopColor="#dd2a7b"/>
                  <stop offset="1" stopColor="#515bd4"/>
                </linearGradient>
              </defs>
              <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" stroke="#fff" strokeWidth="1.5"/>
              <circle cx="17.5" cy="6.5" r="1" fill="#fff"/>
            </svg>
          </a>
            <a
                href="https://www.linkedin.com/in/avri-avrijal-b95627377"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                aria-label="Linkedin"
            >
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
                </svg>
            </a>
          <a
            href="mailto:avrijal190409@student.abudzar.sch.id"
            className="hover:scale-110 transition-transform duration-200"
            aria-label="Email"
          >
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="7" fill="#6366f1"/>
              <path d="M6 8l6 5 6-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="6" y="8" width="12" height="8" rx="2" stroke="#fff" strokeWidth="1.5"/>
            </svg>
          </a>
        </div>
        {/* Copyright */}
        <p className="text-sm text-center bg-gradient-to-r from-purple-400 via-blue-400 to-blue-400 bg-clip-text text-transparent font-semibold">
          &copy; {new Date().getFullYear()} porto-ipuy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
