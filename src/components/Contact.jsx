const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-100 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 animate-fade-in"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 bg-clip-text text-transparent flex items-center justify-center gap-2 drop-shadow-lg">
         Kontak Saya
        </h2>

        <form className="backdrop-blur-md bg-white/70 dark:bg-gray-700/70 p-8 rounded-2xl shadow-2xl space-y-6 border border-purple-200 dark:border-gray-600 transition-all duration-500">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
              Nama
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              required
              placeholder="Nama lengkap kamu"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              required
              placeholder="Alamat email aktif"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-700 dark:text-gray-200">
              Pesan
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50/80 dark:bg-gray-800/80 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
              required
              placeholder="Tulis pesanmu di sini..."
            ></textarea>
          </div>

          <button
            className="w-full py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-purple-600 via-blue-500 to-blue-500 text-white shadow-lg hover:scale-105 hover:from-blue-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
            type="submit"
          >
           Kirim Pesan
          </button>
        </form>
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

export default Contact;
