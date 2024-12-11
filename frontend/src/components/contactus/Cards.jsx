import React from "react";

const ContactCard = () => {
  return (
    <div className="py-12 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-black text-center mb-8">
        Reach Our Team
      </h2>

      {/* Cards Section */}
      <div className="flex justify-center space-x-8">
        {/* Card 1 - Call Career Advisor */}
        <div className="w-80 bg-white p-6 rounded-lg shadow-lg relative">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11.5V21H5V3h14v8.5zm-7-4.5h-2v6h2V7z"
              />
            </svg>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Call Our Career Advisor
          </p>
          <p className="text-gray-600 mb-6">
            Kick Start your Career in Professional Career Courses and Be ready for the Top Leading Industries.
          </p>
          <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2">
            <button className="bg-[#facc15] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-all">
              Contact
            </button>
          </div>
        </div>

        {/* Card 2 - Work With Us */}
        <div className="w-80 bg-white p-6 rounded-lg shadow-lg relative">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12l-8-5v10l8-5zm0 0l8-5v10l-8-5z"
              />
            </svg>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Work With Us
          </p>
          <p className="text-gray-600 mb-6">
            Grow with us, Come one step closer and join a creative team and get a growth in your career.
          </p>
          <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2">
            <button className="bg-[#facc15] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-all">
              Contact
            </button>
          </div>
        </div>

        {/* Card 3 - Hire From Us */}
        <div className="w-80 bg-white p-6 rounded-lg shadow-lg relative">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            Hire From Us
          </p>
          <p className="text-gray-600 mb-6">
            We have creative Trainees for who will contribute in the growth of your company with innovative ideas.
          </p>
          <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2">
            <button className="bg-[#facc15] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-all">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
