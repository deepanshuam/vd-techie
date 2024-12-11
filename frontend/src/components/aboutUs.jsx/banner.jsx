import React from "react";

const Banner = () => {
  return (
    <div className="bg-red-100 py-20 px-4 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        {/* First Line */}
        <h1 className="text-4xl font-bold text-red-500 md:text-5xl">
          Right platform for the next billion students
        </h1>
        {/* Second Line */}
        <p className="text-base md:text-lg text-gray-600 mt-4">
          “Be Creative, Be Digital and Let's Start Your Career with DG Royals”
        </p>
      </div>
    </div>
  );
};

export default Banner;
