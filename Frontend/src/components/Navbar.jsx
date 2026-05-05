import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">DevBhoomiTrekker</div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>Home</li>
        <li>Treks</li>
        <li>Destinations</li>
        <li>About</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>

      <button className="book-btn">Book Now</button>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <X size={30} /> : <Menu size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;