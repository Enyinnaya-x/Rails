import Hero from "../../components/Landing/hero";
import Navbar from "../../components/Landing/Navbar";
import Features from "../../components/Landing/features";
import FeaturesCard from "../../components/Landing/FeatureCard";
import Stats from "../../components/Landing/stats";
import HowItWorks from "../../components/Landing/howitworks";
import CTA from "../../components/Landing/CTA";
import Footer from "../../components/Landing/Footer";

function landingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <Features />
      <featureCard/>
      <HowItWorks/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default landingPage;