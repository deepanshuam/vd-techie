import React from 'react';

const MakeYourJourneyEasier = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <h2 className="text-5xl font-semibold bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-12">
          Let’s Make Your Journey Easier
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Talk to Adviser */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-4">
              Talk to an Adviser
            </h3>
            <p className="text-gray-600 mb-4">
              Get personalized advice to kickstart your journey.
            </p>
            <div className="flex justify-center">
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#003B46] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
              >
                <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#003B46] text-white duration-300 group-hover:translate-x-0">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                  Talk to Adviser
                </span>
                <span className="invisible relative">Button Text</span>
              </a>
            </div>
          </div>

          {/* Card 2: Attend a Demo Session */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-4">
              Attend a Demo Session
            </h3>
            <p className="text-gray-600 mb-4">
              Join our free demo session to learn more about our courses.
            </p>
            <div className="flex justify-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#003B46] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
              >
                <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#003B46] text-white duration-300 group-hover:translate-x-0">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                  Attend Demo
                </span>
                <span className="invisible relative">Button Text</span>
              </a>
            </div>
          </div>

          {/* Card 3: Apply Now */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transform hover:scale-110 hover:shadow-2xl transition-transform duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-4">
              Apply Now
            </h3>
            <p className="text-gray-600 mb-4">
              Ready to begin? 
            </p>
            <div className="flex justify-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#003B46] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
              >
                <span className="absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#003B46] text-white duration-300 group-hover:translate-x-0">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full">
                  Apply Now
                </span>
                <span className="invisible relative">Button Text</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeYourJourneyEasier;
