import Hero from "../../components/Landing/hero";
import Navbar from "../../components/Landing/Navbar";
import Features from "../../components/Landing/features";
import featuresCard from "../../components/Landing/featureCard";
import Stats from "../../components/Landing/stats";
import HowItWorks from "../../components/Landing/howitworks";

function landingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <Features />
      <featureCard/>
      <HowItWorks/>
    </>
  );
}

export default landingPage;