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
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-black text-white text-center px-6">

        <h1 className="text-7xl font-bold">
          Explore Treks
        </h1>

        <p className="mt-6 text-gray-300 text-xl max-w-3xl mx-auto leading-8">
          Discover the most beautiful Himalayan trekking
          experiences with Devbhoomi Trekkers.
        </p>
      </section>

      {/* Trek Cards */}
      <section className="py-24 px-6 bg-gray-100">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {treks.map((trek) => (
              <TrekCard
                key={trek.id}
                trek={trek}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Treks;