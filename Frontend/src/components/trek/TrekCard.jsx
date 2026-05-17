// src/components/trek/TrekCard.jsx

import { Link } from "react-router-dom";

function TrekCard({ trek }) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl duration-300 group">

            {/* Image */}
            <div className="relative overflow-hidden">

                <img
                    src={trek.image}
                    alt={trek.title}
                    className="h-80 w-full object-cover group-hover:scale-110 duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Price */}
                <div className="absolute top-5 right-5 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ₹ {trek.price}
                </div>
            </div>

            {/* Content */}
            <div className="p-8">

                {/* Duration */}
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                    {trek.duration}
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold mt-5">
                    {trek.title}
                </h2>

                {/* Description */}
                <p className="mt-5 text-gray-600 leading-8">
                    {trek.description}
                </p>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-8">

                    <div>

                        <p className="text-gray-400 text-sm">
                            Starting From
                        </p>

                        <h3 className="text-4xl font-bold text-green-600 mt-1">
                            ₹ {trek.price}
                        </h3>
                    </div>

                    <Link
                        to={`/trek/${trek.id}`}
                        className="bg-black hover:bg-green-600 text-white px-6 py-4 rounded-2xl duration-300"
                    >
                        Explore
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TrekCard;