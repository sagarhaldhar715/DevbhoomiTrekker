// src/pages/Contact.jsx

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function Contact() {
    return (
        <>
            <Navbar />

            <section className="pt-32 pb-24 px-6 bg-gray-100 min-h-screen">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center">

                        <h1 className="text-6xl font-bold">
                            Contact Us
                        </h1>

                        <p className="mt-6 text-gray-500 text-lg">
                            We'd love to hear from you
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 mt-20">

                        {/* Form */}
                        <div className="bg-white rounded-3xl shadow-xl p-10">

                            <h2 className="text-3xl font-bold mb-8">
                                Send Message
                            </h2>

                            <form className="space-y-6">

                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border p-4 rounded-xl outline-none"
                                />

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border p-4 rounded-xl outline-none"
                                />

                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border p-4 rounded-xl outline-none"
                                />

                                <textarea
                                    rows="6"
                                    placeholder="Your Message"
                                    className="w-full border p-4 rounded-xl outline-none"
                                ></textarea>

                                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl">
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Info */}
                        <div>

                            <h2 className="text-4xl font-bold">
                                Let's Plan Your Adventure
                            </h2>

                            <p className="mt-6 text-gray-600 leading-8">
                                Contact us for trekking bookings,
                                customized tours, group adventures,
                                camping, and Himalayan expeditions.
                            </p>

                            <div className="mt-12 space-y-8">

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        Phone
                                    </h3>

                                    <p className="mt-2 text-gray-500">
                                        +91 9876543210
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        Email
                                    </h3>

                                    <p className="mt-2 text-gray-500">
                                        devbhoomitrekkers@gmail.com
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold">
                                        Location
                                    </h3>

                                    <p className="mt-2 text-gray-500">
                                        Dehradun, Uttarakhand
                                    </p>
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

export default Contact;