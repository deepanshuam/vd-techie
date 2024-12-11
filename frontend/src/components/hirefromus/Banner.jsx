




import React from "react";

const Bannerhire = () => {
  return (
    <div className="py-12 px-6 md:px-12 flex flex-col md:flex-row items-center">
      {/* Left Side Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <p className="text-sm text-gray-600 mb-2">Hire Our Talents Now</p>
        <h2 className="text-4xl font-bold text-black mb-4">
          Hire Right Candidate for your company’s Growth
        </h2>
        <p className="text-sm text-gray-600 mb-8">
          Fuel Your Growth with Exceptional Candidates from Our Pool of Talent.
        </p>
        <div className="flex justify-center">
          <button className="bg-[#facc15] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-all">
            Contact
          </button>
        </div>
      </div>

      {/* Right Side Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-72 h-72 bg-gray-100 rounded-lg overflow-hidden shadow-lg flex justify-center items-center">
          {/* Replace this image source with the actual image URL */}
          <img
            src="https://via.placeholder.com/150"
            alt="Talent Image"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Bannerhire;
