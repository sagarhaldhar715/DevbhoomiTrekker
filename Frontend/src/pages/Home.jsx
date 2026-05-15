import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Treks from "../components/Treks";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Treks />
      <About />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;