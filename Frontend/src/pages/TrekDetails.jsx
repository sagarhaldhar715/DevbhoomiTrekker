import React, { useState } from "react";
import TrekCard from "../components/TrekCard";
import TrekDetails from "./TrekDetails";

const treksData = [
  {
    id: 1,
    title: "Kedarkantha Trek",
    duration: "5 Days",
    price: "₹6499",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    description:
      "Kedarkantha Trek is one of the most beautiful winter treks in India with snow-covered trails and stunning Himalayan views.",
  },

  {
    id: 2,
    title: "Triund Trek",
    duration: "2 Days",
    price: "₹2999",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    description:
      "Triund Trek is perfect for beginners and offers breathtaking mountain landscapes.",
  },

  {
    id: 3,
    title: "Brahmatal Trek",
    duration: "6 Days",
    price: "₹7999",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    description:
      "Brahmatal Trek is famous for frozen lakes and panoramic Himalayan views.",
  },

  {
    id: 4,
    title: "Hampta Pass Trek",
    duration: "5 Days",
    price: "₹7499",
    image:
      "https://images.unsplash.com/photo-1517821099601-9a6c1c0c53b7?q=80&w=1200&auto=format&fit=crop",
    description:
      "Hampta Pass Trek gives an amazing crossover experience between valleys.",
  },
];

const Treks = () => {
  const [selectedTrek, setSelectedTrek] = useState(null);

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold mb-10">
          Find Your Next Adventure
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {treksData.map((trek) => (
            <TrekCard
              key={trek.id}
              trek={trek}
              onViewDetails={setSelectedTrek}
            />
          ))}

        </div>
      </div>

      {/* VIEW DETAILS POPUP */}
      {selectedTrek && (
        <TrekDetails
          trek={selectedTrek}
          onClose={() => setSelectedTrek(null)}
        />
      )}
    </section>
  );
};

export default Treks;