import React, { useState } from 'react';


const TopCompaniesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left pl-6">
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-4 animate-gradient">
            Top companies from all over India have hired VD Techie Trainees
          </h2>
          <p className="text-sm text-gray-600">
            We have a free session starting soon – Join us now and meet us at Our Centre!
          </p>
        </div>

        {/* Right Side - Button Section */}
        <div className="w-full md:w-1/2 text-center mt-8 md:mt-0">
          <button
            onClick={openModal}
            className="px-6 py-3 bg-red-600 text-white text-lg rounded-lg shadow-lg hover:bg-red-700 focus:outline-none transition"
          >
            Book a Demo Class
          </button>
        </div>
      </div>

      {/* Modal - Popup for demo class */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Book a Demo Class
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="ml-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopCompaniesSection;
