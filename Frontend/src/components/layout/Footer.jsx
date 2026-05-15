// src/components/layout/Footer.jsx

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
    <footer className="bg-[#071018] text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* Brand */}
        <div className="lg:col-span-2">

          <h2 className="text-4xl font-bold">
            Devbhoomi
            <span className="text-green-500">
              Trekkers
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-md">
            Explore beyond limits. Discover breathtaking
            Himalayan treks, peaceful campsites and
            unforgettable adventures across Uttarakhand.
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-8">

            <div className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
              <FaTwitter />
            </div>

            <div className="w-11 h-11 rounded-full border border-gray-700 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Links */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-green-400 duration-300 cursor-pointer">
              Home
            </li>

            <li className="hover:text-green-400 duration-300 cursor-pointer">
              Treks
            </li>

            <li className="hover:text-green-400 duration-300 cursor-pointer">
              About
            </li>

            <li className="hover:text-green-400 duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Treks */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">
            Popular Treks
          </h3>

          <ul className="space-y-4 text-gray-400">

            <li className="hover:text-green-400 duration-300 cursor-pointer">
              Kedarkantha Trek
            </li>

            <li className="hover:text-green-400 duration-300 cursor-pointer">
              Har Ki Dun Trek
            </li>

            <li className="hover:text-green-400 duration-300 cursor-pointer">
              Brahmatal Trek
            </li>

            <li className="hover:text-green-400 duration-300 cursor-pointer">
              Valley Of Flowers
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>

          <h3 className="text-2xl font-semibold mb-6">
            Contact Us
          </h3>

          <div className="space-y-5 text-gray-400">

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-green-500" />
              <span>+91 9876543210</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-500" />
              <span>
                devbhoomitrekkers@gmail.com
              </span>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-500 mt-1" />

              <span>
                Dehradun,
                <br />
                Uttarakhand, India
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-16 pt-8">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500">

          <p>
            © 2026 Devbhoomi Trekkers.
            All rights reserved.
          </p>

          <p>
            Made with ❤️ in Uttarakhand
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;