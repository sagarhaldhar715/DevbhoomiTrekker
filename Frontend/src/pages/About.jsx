// src/pages/About.jsx

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function About() {
    return (
        <>
            <Navbar />

            <section className="pt-32 pb-24 px-6 bg-white">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}
                    <div>

                        <h1 className="text-6xl font-bold leading-tight">
                            About
                            <span className="text-green-600">
                                {" "}Devbhoomi Trekkers
                            </span>
                        </h1>

                        <p className="mt-8 text-gray-600 leading-8 text-lg">
                            Devbhoomi Trekkers is a trekking and
                            adventure organization based in Uttarakhand.
                            We organize safe and unforgettable Himalayan
                            experiences for trekkers across India.
                        </p>

                        <p className="mt-6 text-gray-600 leading-8 text-lg">
                            From snow-covered mountains to beautiful
                            valleys and peaceful campsites, our mission
                            is to connect people with nature.
                        </p>

                        <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl">
                            Explore Treks
                        </button>
                    </div>

                    {/* Right */}
                    <div>

                        <img
                            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                            alt=""
                            className="rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default About;