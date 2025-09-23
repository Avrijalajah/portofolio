const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-white text-3xl font-bold text-center mb-10">Kontak Saya</h2>

        <form className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Nama</label>
            <input 
              type="text" 
              id="name" 
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300" 
              required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300" 
              required 
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">Pesan</label>
            <textarea 
              id="message" 
              rows="5" 
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300" 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors duration-300"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
