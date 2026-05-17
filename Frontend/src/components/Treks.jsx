import TrekCard from "./TrekCard";

import trek1 from "../assets/images/trek1.jpg";
import trek2 from "../assets/images/trek2.jpg";
import trek3 from "../assets/images/trek3.jpg";
import trek4 from "../assets/images/trek4.jpg";

const Treks = () => {
  const trekData = [
    {
      image: trek1,
      title: "Kedarkantha Trek",
      days: "5 Days",
      price: "6499",
    },
    {
      image: trek2,
      title: "Triund Trek",
      days: "2 Days",
      price: "2999",
    },
    {
      image: trek3,
      title: "Brahmatal Trek",
      days: "6 Days",
      price: "7999",
    },
    {
      image: trek4,
      title: "Hampta Pass Trek",
      days: "5 Days",
      price: "7499",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-green-500 font-semibold tracking-widest uppercase">
            Popular Treks
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Find Your Next Adventure
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover breathtaking Himalayan destinations, thrilling trails,
            snowy mountains, and unforgettable trekking experiences curated
            for adventure lovers.
          </p>
        </div>

        {/* Trek Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {trekData.map((trek, index) => (
            <TrekCard key={index} {...trek} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Treks;