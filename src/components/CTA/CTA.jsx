const LinkedinSection = () => {
  return (
    <section
      id="linkedin"
      className="
        w-full py-20 text-center 
        bg-[#0f0f0f] dark:bg-[#0f172a]
        text-white flex flex-col items-center px-4
      "
    >
      <h2 className="text-xl sm:text-2xl font-semibold mb-3">
        Connect with me
      </h2>

      <p
        className="
          text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed 
          mb-6
        "
      >
        See my professional profile on LinkedIn
      </p>

      <a
        href="https://www.linkedin.com/in/avrijalajah"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-[#2b2f3a] hover:bg-[#3b3f4d]
          text-gray-200 text-sm px-6 py-2 rounded-md
          transition-all duration-300 shadow-md
        "
      >
        LinkedIn
      </a>
    </section>
  );
};

export default LinkedinSection;
