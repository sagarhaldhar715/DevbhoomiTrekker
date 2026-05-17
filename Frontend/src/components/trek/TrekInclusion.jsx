// src/components/trek/TrekInclusion.jsx

function TrekInclusion() {
    return (
        <section className="mt-20 grid md:grid-cols-2 gap-10">

            {/* Included */}
            <div className="bg-green-50 rounded-3xl p-10">

                <h2 className="text-4xl font-bold text-green-700">
                    Included
                </h2>

                <ul className="mt-8 space-y-5 text-gray-700 text-lg">

                    <li>✔ Accommodation</li>
                    <li>✔ Meals During Trek</li>
                    <li>✔ Trek Leader & Guide</li>
                    <li>✔ Camping Equipment</li>
                    <li>✔ First Aid Support</li>
                </ul>
            </div>

            {/* Excluded */}
            <div className="bg-red-50 rounded-3xl p-10">

                <h2 className="text-4xl font-bold text-red-700">
                    Excluded
                </h2>

                <ul className="mt-8 space-y-5 text-gray-700 text-lg">

                    <li>✘ Personal Expenses</li>
                    <li>✘ Transportation</li>
                    <li>✘ Insurance</li>
                    <li>✘ Porter Charges</li>
                    <li>✘ Emergency Costs</li>
                </ul>
            </div>
        </section>
    );
}

export default TrekInclusion;