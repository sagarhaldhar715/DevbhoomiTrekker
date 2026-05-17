// src/components/trek/TrekGallery.jsx

const images = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",

    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",

    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",

    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
];

function TrekGallery() {
    return (
        <section className="mt-24">

            <h2 className="text-5xl font-bold mb-12">
                Trek Gallery
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

                {images.map((image, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-3xl shadow-lg"
                    >

                        <img
                            src={image}
                            alt=""
                            className="h-[350px] w-full object-cover hover:scale-110 duration-500"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrekGallery;