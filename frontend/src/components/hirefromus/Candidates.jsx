import React from "react";

const CandidateSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 flex items-center justify-between bg-gray-50">
      {/* Left Side - Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Get the Candidate that’s right for you
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Finding the ideal candidate for DG Royals is a pivotal decision that
          can define the success of your team and organization. We understand
          the importance of selecting someone who not only possesses the
          necessary skills and qualifications but also aligns with your company
          culture and values. Our dedicated team of recruitment experts is
          committed to helping you get the candidate that’s right for you. We
          leverage our extensive network and expertise to identify and assess
          top talent who can contribute to the growth and prosperity of DG
          Royals.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Get Candidates
        </button>
      </div>

      {/* Right Side - Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="https://via.placeholder.com/150"
          alt="Candidate Image"
          className="rounded-lg shadow-lg w-32 md:w-40" // Adjust size here
        />
      </div>
    </div>
  );
};

export default CandidateSection;
