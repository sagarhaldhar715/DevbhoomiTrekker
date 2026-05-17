// src/components/home/Hero.jsx

import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="h-screen relative">

            <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
                alt=""
                className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 flex items-center">

                <div className="max-w-7xl mx-auto px-6 text-white">

                    <p className="text-green-400 text-xl mb-6">
                        Explore The Himalayas
                    </p>

                    <h1 className="text-7xl font-bold leading-tight max-w-4xl">
                        Discover Beautiful Treks Across Uttarakhand
                    </h1>

                    <p className="mt-8 text-xl text-gray-300 max-w-2xl leading-8">
                        Experience breathtaking mountains,
                        peaceful campsites, snowy peaks and
                        unforgettable adventures.
                    </p>

                    <div className="flex gap-6 mt-10">

                        <Link
                            to="/treks"
                            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl text-lg"
                        >
                            Explore Treks
                        </Link>

                        <button className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black duration-300">
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;