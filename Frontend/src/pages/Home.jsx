<<<<<<< HEAD
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Treks from "../components/Treks.jsx";
import About from "../components/About.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";
=======
import { Link } from "react-router-dom";
>>>>>>> 7cb0720 (frontend bigad diya)

function Home() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          alt="mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center h-full">

          <div className="max-w-7xl mx-auto px-6 w-full">

            <div className="max-w-3xl">

              <p className="text-green-400 text-xl font-semibold mb-5">
                Explore The Himalayas
              </p>

              <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
                Discover Beautiful Treks Across Uttarakhand
              </h1>

              <p className="text-gray-300 text-xl mt-8 leading-9">
                Experience breathtaking mountains,
                peaceful campsites, snowy peaks
                and unforgettable adventures.
              </p>

              {/* Buttons */}
              <div className="flex gap-5 mt-10">

                <Link
                  to="/treks"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold duration-300"
                >
                  Explore Treks
                </Link>

                <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg font-semibold duration-300">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-5xl font-bold">
              Why Choose Devbhoomi Trekkers
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-8">
              We provide unforgettable trekking
              experiences with expert guides,
              premium camping and safe adventures.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">

            <div className="bg-gray-100 p-10 rounded-3xl hover:-translate-y-3 duration-300">

              <h3 className="text-3xl font-bold">
                Expert Guides
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                Certified and experienced trek leaders
                for safe adventures.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-3xl hover:-translate-y-3 duration-300">

              <h3 className="text-3xl font-bold">
                Scenic Camps
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                Beautiful camping locations
                with breathtaking views.
              </p>
            </div>

            <div className="bg-gray-100 p-10 rounded-3xl hover:-translate-y-3 duration-300">

              <h3 className="text-3xl font-bold">
                Affordable Packages
              </h3>

              <p className="text-gray-600 mt-5 leading-8">
                Premium trekking experiences
                at affordable prices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;