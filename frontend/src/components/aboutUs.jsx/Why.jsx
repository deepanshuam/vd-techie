import React from "react";

const WhyChoose = () => {
  return (
    <div className="flex justify-center items-center bg-white py-16 px-6 md:px-12">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-start w-full sm:w-1/2 space-y-6 text-center sm:text-left">
        <h2 className="text-4xl font-bold text-black">Why Students Choose DG Royals?</h2>
        <p className="text-lg text-black mb-6">
          Thousands of students are making the right choice by joining professional courses for a highly rewarding career.
        </p>
        <ul className="space-y-4 text-lg font-medium text-black">
          <li> Get Paid Internship & Placements</li>
          <li> 100% Placement Assistance</li>
          <li> Interactive Live Training</li>
          <li> Creative Portfolio Building</li>
          <li> Weekly Assignments To Gain Realtime Practical Knowledge</li>
          <li> Premium Workshops on Latest Updates</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center sm:ml-16 w-full sm:w-1/2 space-y-8">
        <div className="flex justify-center space-x-8">
          {/* Square Image Boxes with Rounded Edges */}
          <div className="bg-red-500 rounded-lg w-40 h-40 overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/160"
              alt="DG Royals Image 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-black rounded-lg w-40 h-40 overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/160"
              alt="DG Royals Image 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          {/* Circular Image Boxes */}
          <div className="bg-red-500 rounded-full w-24 h-24 overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/96"
              alt="DG Royals Circle Image 1"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="bg-black rounded-full w-24 h-24 overflow-hidden shadow-lg">
            <img
              src="https://via.placeholder.com/96"
              alt="DG Royals Circle Image 2"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
