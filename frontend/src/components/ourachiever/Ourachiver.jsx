import React from "react";
import { Carousel } from "3d-react-carousal";
import bing from "../../assets/bing-ads.webp"
import dowanload from "../../assets/download.png"

const OurAchievers = () => {
  const achievers = [
    { id: 1, name: "web Development", image: bing, description: "Top Scorer in Web Development" },
    { id: 2, name: "performance marketing", image: dowanload, description: "Best Innovator in AI Projects" },
    { id: 3, name: "personal branding", image: "/images/achiever3.jpg", description: "Outstanding Performer in Data Science" },
    { id: 4, name: "ui&ux", image: "/images/achiever4.jpg", description: "Excellence in Digital Marketing" },
    { id: 5, name: "graphic designing", image: "/images/achiever5.jpg", description: "Top Graduate in Cloud Computing" },
    { id: 6, name: "animation", image: "/images/achiever5.jpg", description: "Top Graduate in Cloud Computing" },
  ];

  const slides = achievers.map((achiever) => (
    <div
      key={achiever.id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        padding: "20px",
        width: "300px",
        height: "400px",
        margin: "0 auto",
      }}
    >
      <img
        src={achiever.image}
        alt={achiever.name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      />
      
      <h3 style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>{achiever.name}</h3>
      <p style={{ fontSize: "14px", color: "#555", textAlign: "center" }}>{achiever.description}</p>
    </div>
  ));

  return (
    <div
      style={{
        background: "linear-gradient(to right, #1e3c72, #2a5298)", // Gradient background
        padding: "50px 0",
        color: "white",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-8">
          ToolKit
        </h2>

        {/* 3D Carousel */}
        <Carousel slides={slides} autoplay={true} interval={3000} />
      </div>
    </div>
  );
};

export default OurAchievers;
