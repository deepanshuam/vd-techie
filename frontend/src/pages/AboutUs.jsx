import React from "react";
import Banner from "../components/aboutUs.jsx/banner";
import Navbar from "../components/navbar/Navbar";
import OurStory from "../components/aboutUs.jsx/Ourstory";
import StatsSection from "../components/aboutUs.jsx/stats";
import Cards from "../components/aboutUs.jsx/Cards"
import Testimonials from "../components/aboutUs.jsx/Alumni";
import WhyChoose from "../components/aboutUs.jsx/Why";
import Footer  from "../components/Footer/Footer"
const aboutUs = () => {
  return (
    <>
      <Navbar />

      <Banner />
      <OurStory/>
      <StatsSection/>
      <Cards/>
      <Testimonials/>
      <WhyChoose/>
      <Footer/>
    </>
  );
};

export default aboutUs;
