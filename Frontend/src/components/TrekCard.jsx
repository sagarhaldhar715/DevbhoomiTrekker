import { Link } from "react-router-dom";

function TrekCard({ trek }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src={trek.image}
        alt={trek.name}
        className="h-60 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-2xl font-bold">{trek.name}</h2>

        <p className="text-gray-600 mt-2">{trek.location}</p>

        <div className="flex justify-between mt-4">
          <span className="font-bold text-green-600">
            ₹ {trek.price}
          </span>

          <Link
            to={`/treks/${trek.id}`}
            className="bg-black text-white px-4 py-2 rounded"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TrekCard;
