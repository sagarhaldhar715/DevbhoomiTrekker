import Hero from "../components/Hero";
import TrekCard from "../components/TrekCard";

const treks = [
  {
    id: 1,
    name: "Kedarkantha Trek",
    location: "Uttarkashi",
    price: 4999,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    id: 2,
    name: "Valley of Flowers",
    location: "Chamoli",
    price: 6999,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

function Home() {
  return (
    <>
      <Hero />

      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Popular Treks
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
