// src/components/trek/TrekItinerary.jsx

const itinerary = [
    {
        day: "Day 1",
        title: "Arrival At Base Camp",
        desc: "Reach Sankri village and overnight stay.",
    },

    {
        day: "Day 2",
        title: "Trek To Campsite",
        desc: "Beautiful forest trail and mountain views.",
    },

    {
        day: "Day 3",
        title: "Summit Day",
        desc: "Early morning summit trek and return.",
    },
];

function TrekItinerary() {
    return (
        <section className="mt-20">

            <h2 className="text-5xl font-bold mb-12">
                Day Wise Itinerary
            </h2>

            <div className="space-y-8">

                {itinerary.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-3xl p-8 shadow-md"
                    >

                        <p className="text-green-600 font-semibold text-lg">
                            {item.day}
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            {item.title}
                        </h3>

                        <p className="mt-4 text-gray-600 leading-8">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrekItinerary;