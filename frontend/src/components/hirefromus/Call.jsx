import React, { useState } from "react";

const AssistanceSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        For immediate assistance talk to our team.
      </h1>

      <button
        onClick={togglePopup}
        className="bg-blue-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Contact Us
      </button>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 w-80 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-6">
              Call us now: <strong>99837919</strong>
            </p>
            <button
              onClick={togglePopup}
              className="w-full bg-red-600 text-white font-medium py-2 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssistanceSection;
