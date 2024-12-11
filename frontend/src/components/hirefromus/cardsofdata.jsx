import React from "react";

const Services = () => {
  return (
    <div className="py-16 px-6 md:px-12 bg-gray-50">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <p className="text-lg text-gray-600">We offer a range of services to boost your business</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-yellow-500 group-hover:text-yellow-600 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Consulting</h3>
          <p className="text-sm text-gray-600 mt-2">Expert guidance for business growth and strategy.</p>
        </div>

        {/* Card 2 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-yellow-500 group-hover:text-yellow-600 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 3v18l15-9-15-9z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Marketing</h3>
          <p className="text-sm text-gray-600 mt-2">Increase your reach with targeted marketing strategies.</p>
        </div>

        {/* Card 3 */}
        <div className="group relative bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out">
          <div className="flex justify-center items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-yellow-500 group-hover:text-yellow-600 transition-all"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Design</h3>
          <p className="text-sm text-gray-600 mt-2">Creative design services to enhance your brand identity.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
