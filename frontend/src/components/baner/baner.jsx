import React from "react";
import './banner.css'; // Make sure to add custom CSS for any necessary styles

const Banner = () => {
  return (
    <div className="relative bg-gray-100 py-40 mt-[80px] h-full flex items-center group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        ></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-10">
        {/* Left Side */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center space-y-6 pl-8 md:pl-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black leading-snug tracking-tight">
            Enroll in Leading Courses with 100% Placement Support
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium">
            Get Certified, Get Ahead with Our Programs. Build your professional career now!
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
            <Link to="/brochure">
              <button className="bg-red-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-all ease-in-out duration-300 transform hover:scale-105">
                Get Brochure
              </button>
            </Link>
            <Link to="/apply">
              <button className="bg-[#facc15] text-black py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-all ease-in-out duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side (Optional Images Removed) */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          {/* Optionally, add images or any other content */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
