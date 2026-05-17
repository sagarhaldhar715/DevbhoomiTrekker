import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-white"
        >
          Devbhoomi
          <span className="text-green-500">
            Trekkers
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10 text-white text-lg">

          <Link
            to="/"
            className="hover:text-green-400 duration-300"
          >
            Home
          </Link>

          <Link
            to="/treks"
            className="hover:text-green-400 duration-300"
          >
            Treks
          </Link>

          <Link
            to="/about"
            className="hover:text-green-400 duration-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-green-400 duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold duration-300">
          Book Now
        </button>
      </div>
    </header>
  );
}

export default Navbar;