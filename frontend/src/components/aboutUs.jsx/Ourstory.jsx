import React from "react";

const OurStory = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
          Our Story
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Vd techie is the Professional Industrial Courses Leader which was
          Established in 2018. We provide a New Age to Individuals to brighten
          up their Future with the Best Career Courses Training. We worked hard
          to ensure learners have access to the Industry Oriented Future skill
          programs like Digital Marketing, Graphic Designing, UI/UX design,
          Interior Designing, Animation, Web Designing and Development and many
          more. We have designed our course curriculum which is influenced by
          the Latest Industry Trends and Upskill Opportunities.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          With its cutting-edge technology, the classroom promotes a vibrant
          learning environment in which students may develop real-world skills
          and collaborate on authentic projects. Students who complete a course
          combined with internship are more likely to acquire careers with the
          world’s most prestigious multinational businesses.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center items-center mt-12 md:mt-0 relative">
        {/* Big Circles */}
        <div className="absolute w-40 h-40 bg-red-600 rounded-full flex justify-center items-center shadow-lg transform translate-x-10 -translate-y-10">
          <img
            src="https://via.placeholder.com/100"
            alt="Big Circle 1"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>
        <div className="absolute w-40 h-40 bg-black rounded-full flex justify-center items-center shadow-lg transform -translate-x-10 translate-y-10">
          <img
            src="https://via.placeholder.com/100"
            alt="Big Circle 2"
            className="w-28 h-28 rounded-full object-cover"
          />
        </div>

        {/* Small Circles */}
        <div className="absolute w-24 h-24 bg-red-400 rounded-full flex justify-center items-center shadow-md transform -translate-x-20 -translate-y-20">
          <img
            src="https://via.placeholder.com/80"
            alt="Small Circle 1"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
        <div className="absolute w-24 h-24 bg-gray-800 rounded-full flex justify-center items-center shadow-md transform translate-x-20 translate-y-20">
          <img
            src="https://via.placeholder.com/80"
            alt="Small Circle 2"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
