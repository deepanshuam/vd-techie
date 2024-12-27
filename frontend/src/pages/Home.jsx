import React from "react";
// import UpperNav from "../components/navbar/upperNav.jsx";
// import Navbar from "../components/navbar/navbar.jsx";
import Banner from "../components/baner/baner.jsx";
import ProgramOverview from "../components/programe/Programe.jsx";
import LongTermCourses from "../components/cards/Cards.jsx";
import OurAchievers from "../components/ourachiever/Ourachiver.jsx";
import WhyLearning from "../components/whyLearning/WhyLearning.jsx";
import VideoSection from "../components/vedio/Vedio.jsx";
import WhyJoinVDTechie from "../components/why Join/WhyJoin.jsx";
import TopCompaniesSection from "../components/demosection/Demosection.jsx";
import LearnerTestimonials from "../components/Whatlearnersay/WhatLearnerSAy.jsx";
import StartLearningNow from "../components/bookDemoClass/Book.jsx";
import MakeYourJourneyEasier from "../components/Jounry/Journy.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CardSection from "../components/cards/CardSection.jsx";
import Carousel from "../components/Courosal.jsx";
import CurveCardSlider from "../components/Courosal.jsx";
import ShuffleHero from "../components/Courosal.jsx";

import Navbar from "../components/navbar/Navbar.jsx";
import Img from "../components/baner/img.jsx";
const Home = () => {
  return (
    <>
      <div></div>
      <div>
        <Navbar />
      </div>
      <Img />
      <ShuffleHero />
      <ProgramOverview />
      {/* <LongTermCourses/> */}
      <OurAchievers />
      <CardSection />
      <WhyLearning />
      {/* <VideoSection/> */}
      {/* <CurveCardSlider/> */}
      <WhyJoinVDTechie />
      {/* <TopCompaniesSection /> */}
      {/* <LearnerTestimonials/> */}
      <StartLearningNow />
      <MakeYourJourneyEasier />
      {/* <FooterWithMovingCircle/> */}
      <Footer />
    </>
  );
};

export default Home;
