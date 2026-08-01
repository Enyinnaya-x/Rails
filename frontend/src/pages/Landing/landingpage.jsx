import Hero from "../../components/Landing/Hero";
import Navbar from "../../components/Landing/Navbar";
import Features from "../../components/Landing/Features";
import FeatureCard from "../../components/Landing/FeatureCard";
import Stats from "../../components/Landing/Stats";
import HowItWorks from "../../components/Landing/HowItWorks";
import CTA from "../../components/Landing/CTA";
import Footer from "../../components/Landing/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;