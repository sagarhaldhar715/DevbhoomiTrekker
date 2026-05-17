// src/components/home/PopularTreks.jsx

import TrekCard from "../trek/TrekCard";

const treks = [
    {
        id: 1,
        title: "Kedarkantha Trek",
        duration: "5 Days",
        price: "6999",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        description:
            "Beautiful winter trek with snowy mountains.",
    },

    {
        id: 2,
        title: "Har Ki Dun Trek",
        duration: "6 Days",
        price: "8999",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        description:
            "Ancient Himalayan valley trek.",
    },

    {
        id: 3,
        title: "Brahmatal Trek",
        duration: "5 Days",
        price: "7499",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        description:
            "Frozen lake trek with summit views.",
    },
];

function PopularTreks() {
    return (
        <section className="py-24 px-6 bg-white">

            <div className="max-w-7xl mx-auto">

                <div className="flex items-center justify-between mb-16">

                    <div>

                        <h2 className="text-5xl font-bold">
                            Popular Treks
                        </h2>

                        <p className="mt-4 text-gray-500 text-lg">
                            Explore trending Himalayan adventures
                        </p>
                    </div>
                </div>

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
    );
}

export default PopularTreks;