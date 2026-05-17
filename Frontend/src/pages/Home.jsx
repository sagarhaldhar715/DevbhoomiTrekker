import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Treks from "../components/Treks.jsx";
import About from "../components/About.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

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