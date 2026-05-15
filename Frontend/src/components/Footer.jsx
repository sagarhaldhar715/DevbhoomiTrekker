// src/components/Footer.jsx

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Devbhoomi Trekkers
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Explore the Himalayas with unforgettable adventures and breathtaking journeys.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-green-400 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                Treks
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-green-400 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📍 Uttarakhand, India</p>
              <p>📞 +91 9876543210</p>
              <p>✉️ info@devbhoomitrekkers.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2026 Devbhoomi Trekkers. All rights reserved.
          </p>

          <div className="flex gap-4 text-2xl mt-4 md:mt-0">
            <span className="hover:text-green-400 cursor-pointer">🌐</span>
            <span className="hover:text-green-400 cursor-pointer">📸</span>
            <span className="hover:text-green-400 cursor-pointer">▶️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;