const TrekCard = ({ image, title, days, price }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-500"></div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          ₹{price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">

        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-800">
            {title}
          </h3>

          <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            {days}
          </span>
        </div>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Experience breathtaking mountain views, peaceful valleys,
          thrilling trails, and unforgettable adventures.
        </p>

        {/* Button */}
        <button className="mt-6 w-full py-3 bg-zinc-900 hover:bg-green-500 text-white rounded-xl font-semibold transition duration-300 shadow-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default TrekCard;