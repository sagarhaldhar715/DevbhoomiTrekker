import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-[90vh] bg-green-900 text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-6">
          Explore Uttarakhand Treks
        </h1>

        <p className="text-xl max-w-2xl mx-auto">
          Discover mountains, adventures and unforgettable journeys.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
