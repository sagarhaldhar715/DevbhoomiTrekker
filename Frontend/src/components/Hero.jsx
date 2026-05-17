const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mt-20">

        <p className="text-green-400 text-lg md:text-xl font-semibold tracking-widest uppercase">
          Explore Nature
        </p>

        <h1 className="mt-4 text-5xl md:text-7xl font-extrabold text-white leading-tight">
          THE MOUNTAINS <br />
          ARE CALLING
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300 leading-relaxed">
          Discover breathtaking Himalayan treks, unforgettable adventures,
          and the beauty of the wild.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full text-lg font-semibold transition duration-300 shadow-xl">
            Explore Treks
          </button>

          <button className="px-8 py-4 border border-white/30 hover:bg-white/10 text-white rounded-full text-lg font-semibold transition duration-300 backdrop-blur-md">
            Watch Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;