// src/components/common/Loader.jsx

function Loader() {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">

            <div className="text-center">

                {/* Spinner */}
                <div className="w-20 h-20 border-4 border-white/20 border-t-green-500 rounded-full animate-spin mx-auto"></div>

                {/* Text */}
                <h2 className="text-white text-3xl font-bold mt-8">
                    Devbhoomi
                    <span className="text-green-500">
                        Trekkers
                    </span>
                </h2>

                <p className="text-gray-400 mt-3">
                    Preparing your adventure...
                </p>
            </div>
        </div>
    );
}

export default Loader;