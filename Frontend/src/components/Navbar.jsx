import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <h1
            style={{ color: "#4ade80" }}
            className="text-3xl font-bold"
          >
            Devbhoomi Trekkers
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">

          <Link to="/">
            <li className="cursor-pointer hover:text-green-400 transition">
              Home
            </li>
          </Link>

          <Link to="/treks">
            <li className="cursor-pointer hover:text-green-400 transition">
              Treks
            </li>
          </Link>

          <Link to="/destinations">
            <li className="cursor-pointer hover:text-green-400 transition">
              Destinations
            </li>
          </Link>

          <Link to="/about">
            <li className="cursor-pointer hover:text-green-400 transition">
              About
            </li>
          </Link>

          <Link to="/gallery">
            <li className="cursor-pointer hover:text-green-400 transition">
              Gallery
            </li>
          </Link>

          <Link to="/contact">
            <li className="cursor-pointer hover:text-green-400 transition">
              Contact
            </li>
          </Link>

        </ul>

        {/* Button */}
        <Link to="/booking">
          <button className="hidden md:block bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-full">
            Book Now
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 text-white px-6 pb-6">
          <ul className="flex flex-col gap-5 font-medium">

            <Link to="/" onClick={() => setOpen(false)}>
              <li>Home</li>
            </Link>

            <Link to="/treks" onClick={() => setOpen(false)}>
              <li>Treks</li>
            </Link>

            <Link to="/destinations" onClick={() => setOpen(false)}>
              <li>Destinations</li>
            </Link>

            <Link to="/about" onClick={() => setOpen(false)}>
              <li>About</li>
            </Link>

            <Link to="/gallery" onClick={() => setOpen(false)}>
              <li>Gallery</li>
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)}>
              <li>Contact</li>
            </Link>

            <Link to="/booking" onClick={() => setOpen(false)}>
              <button className="bg-green-500 w-full py-3 rounded-full">
                Book Now
              </button>
            </Link>

          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;