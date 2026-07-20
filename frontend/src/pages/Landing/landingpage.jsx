import Hero from "../../components/Landing/hero";
import Navbar from "../../components/Landing/Navbar";
import Features from "../../components/Landing/features";
import featuresCard from "../../components/Landing/featureCard";

function landingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <featureCard/>
    </>
  );
}

export default landingPage;