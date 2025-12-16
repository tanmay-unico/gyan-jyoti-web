import React from "react";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Services from "../sections/Services";
import Founder from "../sections/Founder";
import DonationUsage from "../sections/DonationUsage";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import CTABanner from "../sections/CTABanner";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Founder />
      <DonationUsage />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </>
  );
};

export default Home;


