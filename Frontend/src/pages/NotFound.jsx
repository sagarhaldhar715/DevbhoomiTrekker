// src/pages/NotFound.jsx

import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="h-screen flex items-center justify-center bg-black text-white px-6">

            <div className="text-center">

                <h1 className="text-[150px] font-bold text-green-600 leading-none">
                    404
                </h1>

                <h2 className="text-5xl font-bold mt-4">
                    Page Not Found
                </h2>

                <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto leading-8">
                    The page you are looking for does not exist
                    or may have been moved.
                </p>

                <Link
                    to="/"
                    className="inline-block mt-10 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl text-lg"
                >
                    Back To Home
                </Link>
            </div>
        </section>
    );
}

export default NotFound;