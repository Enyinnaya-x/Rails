import Hero from "../../components/Landing/hero";
import Navbar from "../../components/Landing/Navbar";
import Features from "../../components/Landing/features";
import featuresCard from "../../components/Landing/featureCard";
import Stats from "../../components/Landing/stats";

function landingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <Features />
      <featureCard/>
    </>
  );
}

export default landingPage;