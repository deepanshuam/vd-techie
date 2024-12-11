import React, { useState } from "react";
import binglogod from "../../assets/new icons/binglogo.png";
import bingads from "../../assets/new icons/bingads.png";
import down from "../../assets/download.png";
import google from "../../assets/google-search-console.png";
import googlelogo from "../../assets/googlelogo.jpeg";
import metalogo from "../../assets/download1.png";
// import binglogo from "../../assets/download.jpeg";
import googleads from "../../assets/new icons/goggleads.png";
import adslogo from "../../assets/new icons/adslogo.jpeg";
import corallogo from "../../assets/new icons/corallogo.jpeg";
import coral from "../../assets/dd.png";
import monkey from "../../assets/new icons/monkey.png";
import monkeyw from "../../assets/new icons/mokeyw.png";
import frog from "../../assets/new icons/frog.png";
import frogw from "../../assets/new icons/frogw.png";
import analaytics from "../../assets/new icons/analaytics.png";
import analayticsw from "../../assets/gana.jpeg";
import trendsw from "../../assets/new icons/trendsw.png";
import arrrow from "../../assets/arrow.png";
import ps from "../../assets/new icons/ps.png";
import psw from "../../assets/new icons/psw.png";
import ai from "../../assets/new icons/ai.png";
import aiw from "../../assets/new icons/aiw.png";
import hub from "../../assets/new icons/hub.png";
import hubw from "../../assets/new icons/hubw.png";
import a from "../../assets/new icons/a.png";
import aw from "../../assets/new icons/aw.png";
import sem from "../../assets/new icons/sem.png";
import semw from "../../assets/new icons/semw.png";
import u from "../../assets/new icons/u.png";
import uw from "../../assets/new icons/uw.png";
const CardSection = () => {
  // Array of cards with default and hover images
  const cards = [
    { id: 1, defaultImage: binglogod, hoverImage: bingads },
    { id: 2, defaultImage: metalogo, hoverImage: down },
    { id: 3, defaultImage: googlelogo, hoverImage: google },
    { id: 4, defaultImage: adslogo, hoverImage: googleads },
    { id: 5, defaultImage: corallogo, hoverImage: coral },
    { id: 6, defaultImage: monkey, hoverImage: monkeyw },
    { id: 7, defaultImage: frog, hoverImage: frogw },
    { id: 8, defaultImage: analaytics, hoverImage: analayticsw },
    { id: 9, defaultImage: arrrow, hoverImage: trendsw },
    { id: 10, defaultImage: ps, hoverImage: psw },
    { id: 11, defaultImage: hub, hoverImage: hubw },
    { id: 10, defaultImage: a, hoverImage: aw },
    { id: 11, defaultImage: ai, hoverImage: aiw },
    { id: 10, defaultImage: sem, hoverImage: semw },
    { id: 11, defaultImage: u, hoverImage: uw },
  ];

  return (
    <div className="flex justify-center items-center p-10">
      {/* Big card container */}
      <div className="bg-gray rounded-lg shadow-xl w-[60%] p-6">
        {/* Title of the section */}
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Our Cards Section
        </h2>

        {/* Grid of small cards */}
        <div className="grid grid-cols-5 gap-6 justify-items-center items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-lg shadow-lg transition-transform transform group-hover:scale-105 group-hover:shadow-xl overflow-hidden w-32 h-32 p-2"
            >
              {/* Default Image and Hover Image */}
              <img
                src={card.defaultImage}
                alt={`Card ${card.id}`}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src={card.hoverImage}
                alt={`Card ${card.id} Hover`}
                className="absolute inset-0 w-full h-full object-cover scale-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:scale-90"
              />
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-gray-500 text-sm">
          All product and company names are trademarks or registered trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
        </p>
      </div>
    </div>
  );
};

export default CardSection;
