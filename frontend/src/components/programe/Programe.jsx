import React from "react";

const ProgramOverview = () => {
  return (
    <div className="bg-gray-200 py-12 ">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between px-6 md:px-16 gap-8">
        {/* Left Side */}
        <div className="w-full  md:w-2/3 bg-white p-8 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-8 text-center md:text-left">
            Program Overview
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-6 text-justify">
            This comprehensive Digital Marketing Course is designed to equip
            participants with the knowledge, skills, and tools necessary to
            create and implement effective digital marketing strategies.
          </p>

          <p className="text-lg md:text-xl text-gray-700 mb-6 text-justify">
            The program is ideal for beginners, entrepreneurs, marketing
            professionals, and business owners looking to leverage digital
            platforms for growth.
          </p>

          <div className="space-y-6 flex-grow">
            <h3 className="text-2xl font-semibold text-gray-800">Key Highlights</h3>
            {/* Scrollable Container */}
            <div
              className="overflow-y-auto max-h-96 border border-gray-300 rounded-lg p-4"
            >
              <ul className="list-disc pl-6 space-y-4 text-gray-700 text-justify">
                <li>
                  <strong className="text-xl">Comprehensive Curriculum</strong>: Covers the latest trends and
                  strategies in digital marketing, including SEO, SEM, Google Ads, Social
                  Media Marketing (SMM), Email Marketing, and more.
                </li>
                <li>
                  <strong className="text-xl">Hands-On Training</strong>: Real-world projects and case studies.
                  Practice on tools like Google Analytics, SEMrush, HubSpot, Canva, and
                  Facebook Ads Manager.
                </li>
                <li>
                  <strong className="text-xl">Expert-Led Sessions</strong>: Taught by experienced industry
                  professionals and certified trainers. Insights into current market trends
                  and best practices.
                </li>
                <li>
                  <strong className="text-xl">Certifications</strong>: Preparation for globally recognized
                  certifications like Google Ads, HubSpot, Facebook Blueprint, and others.
                  Course completion certificate from the institution.
                </li>
                <li>
                  <strong className="text-xl">Flexible Learning Options</strong>: Online, offline, or hybrid
                  formats to suit different schedules. Weekend and weekday batches available.
                </li>
                <li>
                  <strong className="text-xl">Career Support</strong>: Job placement assistance and resume-building
                  workshops. Opportunity to network with industry experts and alumni.
                </li>
                <li>
                  <strong className="text-xl">Analytics and Reporting</strong>: Learn to analyze campaign
                  performance. Master reporting tools to track ROI and optimize strategies.
                </li>
                <li>
                  <strong className="text-xl">Focus on Emerging Technologies</strong>: Introduction to AI in
                  marketing, voice search optimization, and programmatic advertising. Learn
                  about influencer marketing and the power of micro-content.
                </li>
                <li>
                  <strong className="text-xl">Community and Networking</strong>: Access to a community of digital
                  marketers for collaboration and support. Networking events, webinars, and
                  Q&A sessions.
                </li>
                <li>
                  <strong className="text-xl">Bonus Modules</strong>: Freelancing tips and personal branding.
                  Building a portfolio and scaling businesses digitally.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Learn More About The Course Program
          </h3>
          <form className="space-y-4 flex-grow">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="course">
                Course
              </label>
              <select
                id="course"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300"
              >
                <option value="">Select a Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300"
                placeholder="Your Email Address"
              />
            </div>
            <div className="">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Address
              </label>
              <input
                id="address"
                type="address"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300 mb-8"
                placeholder="Your Address"
              />
            </div>
            <button
              type="submit"
              className="w-full p-5 mt-9 bg-[#facc15] text-white  rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProgramOverview;
