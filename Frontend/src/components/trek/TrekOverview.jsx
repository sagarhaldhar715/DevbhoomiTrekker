// src/components/trek/TrekOverview.jsx

function TrekOverview({ trek }) {
    return (
        <section className="bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-4xl font-bold">
                Trek Overview
            </h2>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
                {trek?.overview ||
                    "Experience one of the most beautiful Himalayan treks with breathtaking mountain views, peaceful forests, rivers and unforgettable campsites."}
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">

                <div className="bg-gray-100 rounded-2xl p-6">

                    <h3 className="text-gray-500 text-lg">
                        Duration
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        {trek?.duration || "5 Days"}
                    </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-6">

                    <h3 className="text-gray-500 text-lg">
                        Altitude
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        {trek?.altitude || "12,500 ft"}
                    </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-6">

                    <h3 className="text-gray-500 text-lg">
                        Difficulty
                    </h3>

                    <p className="text-3xl font-bold mt-2">
                        Moderate
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TrekOverview;