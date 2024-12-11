import React, { useState } from 'react';

const WhyLearning = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardDetails = [
    { title: 'Flexible Learning Schedules', description: 'Learn at your own pace with flexible schedules.' },
    { title: 'Affordable Pricing Options', description: 'Get high-quality education at an affordable price.' },
    { title: 'Learn from Industry Experts', description: 'Our instructors are experts in the field.' },
    { title: '100% Placement Support', description: 'We offer placement assistance after completing your course.' },
    { title: 'Access to Premium Tools', description: 'Access premium tools and software to enhance your learning.' },
    { title: 'Hands-on Live Projects', description: 'Work on real-world projects to gain practical experience.' },
    { title: 'Interactive Live Sessions', description: 'Engage with instructors and peers in live interactive sessions.' },
    { title: 'Dedicated Student Support', description: 'A sharpener is a tool or device used to sharpen the tip of a pencil or the edge of a knife so that it can be used for writing or other purposesPencil sharpeners: Sharpen the writing point of a pencil by shaving away the worn surface. Pencil sharpeners can be operated manually or by an electric motor. Many sharpeners have a casing that can be removed to empty the pencil shavings.' },
  ]; 

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center text-center md:text-left pl-8">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-4">
            Why Learn Online?
          </h2>
          <p className="text-lg mb-2 from-red-600 to-black">
            Our Online course is same like our Offline course, our prime focus is to provide quality training.
          </p>
          <p className="text-gray-700 mb-6">
            We provide online & offline Mode of training through which anyone can upgrade their skills and build their 
            professional career. Our courses are designed in such a way that anyone can learn no matter in which 
            mode they are learning. So start your Career With DG Royals.
          </p>
          <button
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 focus:outline-none animate-pulse"
          >
            Download Brochure
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-6 pr-8">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className={`relative bg-white shadow-md p-6 rounded-lg text-center text-gray-800 font-medium transition-all duration-300 
                ${hoveredCard === index ? 'h-64 scale-y-125' : 'h-32 scale-y-100'}
              `}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <p
                className={`text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black transition-opacity duration-300 ${
                  hoveredCard === index ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {card.title}
              </p>
              {/* Hover Content */}
              {hoveredCard === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-100 rounded-lg p-4 text-gray-800 text-sm">
                  <p  className="overflow-hidden text-justify">{card.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyLearning;
