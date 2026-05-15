const CTA = () => {
  return (
    <section className="relative bg-[url('/images/trek.jpg')] bg-cover bg-center py-20">
      
      {/* Overlay (safe way, no opacity issue) */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Journey?
        </h2>

        <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
          Book Your Trek Now
        </button>
      </div>
    </section>
  );
};

export default CTA;