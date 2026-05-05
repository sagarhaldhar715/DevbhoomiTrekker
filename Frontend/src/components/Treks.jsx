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
    <section className="treks">
      <h2>Find Your Next Adventure</h2>

      <div className="trek-grid">
        {trekData.map((trek, index) => (
          <TrekCard key={index} {...trek} />
        ))}
      </div>
    </section>
  );
};

export default Treks;