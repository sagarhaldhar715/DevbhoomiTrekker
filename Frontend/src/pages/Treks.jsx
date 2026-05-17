// src/pages/Treks.jsx

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TrekCard from "../components/trek/TrekCard";

const treks = [
  {
    id: 1,
    title: "Kedarkantha Trek",
    duration: "5 Days",
    price: "6999",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description:
      "Beautiful winter trek with snowy mountains and forests.",
  },

  {
    id: 2,
    title: "Har Ki Dun Trek",
    duration: "6 Days",
    price: "8999",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description:
      "Ancient Himalayan valley trek with rivers and pine forests.",
  },

  {
    id: 3,
    title: "Brahmatal Trek",
    duration: "5 Days",
    price: "7499",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description:
      "Frozen lake trek with breathtaking summit views.",
  },

  {
    id: 4,
    title: "Valley Of Flowers",
    duration: "6 Days",
    price: "9999",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    description:
      "Beautiful valley filled with Himalayan flowers and waterfalls.",
  },

  {
    id: 5,
    title: "Hampta Pass Trek",
    duration: "5 Days",
    price: "8999",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    description:
      "One of the most scenic crossover treks in Himachal.",
  },

  {
    id: 6,
    title: "Nag Tibba Trek",
    duration: "2 Days",
    price: "2999",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    description:
      "Perfect weekend trek near Mussoorie with amazing views.",
  },
];

function Treks() {
  const treks = [
    {
      name: "Har Ki Dun",
      location: "Uttarakhand",
      days: "5 Days",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Kedarkantha",
      location: "Uttarakhand",
      days: "6 Days",
      image:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Valley of Flowers",
      location: "Uttarakhand",
      days: "4 Days",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-23">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
          alt="Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            Explore Treks
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Discover breathtaking हिमालयन adventures and unforgettable trekking experiences.
          </p>
        </div>
      </div>

      {/* Trek Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Popular Treks
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:scale-105 transition duration-300 shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={trek.image}
                  alt={trek.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-3xl font-bold mb-2">{trek.name}</h3>

                <p className="text-gray-300 mb-2">
                  📍 {trek.location}
                </p>

                <p className="text-gray-400 mb-5">
                  🗓️ {trek.days}
                </p>

                <button className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 transition font-semibold text-lg">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Treks;