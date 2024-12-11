import React from 'react';

const WhyJoinVDTechie = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-4">
            Why Join VD TECHIE?
          </h2>
          <p className="text-lg text-gray-600">
            VD Techie is one of the Foremost and Leading Institutes of all most demanded Professional Courses and provides excellent training and placements to all the students.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          {/* Card 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform hover:scale-105 transform hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-4">
              Expert Trainers
            </h3>
            <p className="text-gray-600">
              Learn from industry experts who have years of real-world experience and knowledge.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform hover:scale-105 transform hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-4">
              Industry Connections
            </h3>
            <p className="text-gray-600">
              Gain access to our vast network of industry partners for internship and job opportunities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg transition-transform hover:scale-105 transform hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-4">
              Hands-On Experience
            </h3>
            <p className="text-gray-600">
              Work on real-world projects to build practical skills and stand out in the job market.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center">
          <p className="italic text-gray-500 text-xl">
            “It’s easy to dream, but much harder to execute it. …..Work!” 
            <br />
            <span className="text-gray-800 mt-2">– Gary Vaynerchuk</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinVDTechie;
