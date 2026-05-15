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
    <footer className="bg-[#071018] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-10">
        
        {/* Logo Section */}
        <div>
          <h2 className="text-3xl font-bold">
            Trek<span className="text-green-500">Beyond</span>
          </h2>

          <p className="mt-5 text-gray-400 leading-7">
            Explore beyond limits.
            <br />
            Discover mountains.
            <br />
            Discover yourself.
          </p>

          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
              <FaYoutube />
            </div>

            <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-green-500 duration-300 cursor-pointer">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-green-400 cursor-pointer">
              Home
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Treks
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              About Us
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Blogs
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Popular Treks */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Popular Treks
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-green-400 cursor-pointer">
              Kedarkantha Trek
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Brahmatal Trek
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Hampta Pass Trek
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Valley of Flowers
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Roopkund Trek
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Support
          </h3>

          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-green-400 cursor-pointer">
              FAQ
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Terms & Conditions
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Privacy Policy
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Cancellation Policy
            </li>

            <li className="hover:text-green-400 cursor-pointer">
              Refund Policy
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
              <span>info@trekbeyond.com</span>
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
      <div className="border-t border-gray-700 mt-14 pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>
            © 2026 TrekBeyond. All rights reserved.
          </p>

          <p>
            Made with ❤️ for explorers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;