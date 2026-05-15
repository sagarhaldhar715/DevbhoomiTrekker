// src/pages/TrekDetails.jsx

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useParams } from "react-router-dom";

const trekData = {
  1: {
    title: "Kedarkantha Trek",
    price: "6999",
    duration: "5 Days",
    altitude: "12,500 ft",
    location: "Uttarakhand",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
  },
};

function TrekDetails() {
  const { id } = useParams();

  const trek = trekData[id];

  if (!trek) {
    return (
      <div className="h-screen flex items-center justify-center text-5xl font-bold">
        Trek Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24">

        <div className="h-[75vh] relative">

          <img
            src={trek.image}
            alt={trek.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50 flex items-center">

            <div className="max-w-7xl mx-auto px-6 text-white">

              <h1 className="text-7xl font-bold">
                {trek.title}
              </h1>

              <div className="flex flex-wrap gap-8 mt-8 text-xl">

                <p>
                  Duration:
                  <span className="font-semibold">
                    {" "} {trek.duration}
                  </span>
                </p>

                <p>
                  Altitude:
                  <span className="font-semibold">
                    {" "} {trek.altitude}
                  </span>
                </p>

                <p>
                  Location:
                  <span className="font-semibold">
                    {" "} {trek.location}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">

          {/* Left Side */}
          <div className="lg:col-span-2">

            {/* About */}
            <div>

              <h2 className="text-5xl font-bold">
                About The Trek
              </h2>

              <p className="mt-8 text-gray-600 leading-8 text-lg">
                Kedarkantha Trek is one of the most
                beautiful winter treks in India.
                Experience snowy forests, breathtaking
                mountain views, frozen lakes and peaceful
                campsites in Uttarakhand.
              </p>
            </div>

            {/* Itinerary */}
            <div className="mt-20">

              <h2 className="text-5xl font-bold mb-12">
                Day Wise Itinerary
              </h2>

              <div className="space-y-8">

                <div className="border rounded-3xl p-8">
                  <h3 className="text-3xl font-bold">
                    Day 1
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    Arrival at Sankri village and overnight stay.
                  </p>
                </div>

                <div className="border rounded-3xl p-8">
                  <h3 className="text-3xl font-bold">
                    Day 2
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    Trek from Sankri to Juda Ka Talab campsite.
                  </p>
                </div>

                <div className="border rounded-3xl p-8">
                  <h3 className="text-3xl font-bold">
                    Day 3
                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">
                    Trek to Kedarkantha base camp with snow trails.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div>

            <div className="sticky top-32 bg-white rounded-3xl shadow-2xl p-8 border">

              <h2 className="text-5xl font-bold text-green-600">
                ₹ {trek.price}
              </h2>

              <p className="mt-2 text-gray-500">
                Per Person
              </p>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl mt-10 text-lg">
                Book Now
              </button>

              <div className="mt-10 space-y-6 text-gray-600">

                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-semibold">
                    {trek.duration}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Altitude</span>
                  <span className="font-semibold">
                    {trek.altitude}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Location</span>
                  <span className="font-semibold">
                    {trek.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TrekDetails;