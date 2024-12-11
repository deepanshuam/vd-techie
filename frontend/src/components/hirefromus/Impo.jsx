import React from "react";

const JoinVDSection = () => {
  return (
    <div className="py-16 px-6 md:px-12 flex items-center justify-between bg-gray-50">
      {/* Left Side - Text Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Join VD techie Participants?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Joining VD techie Participants offers a unique and enriching
          experience that goes beyond traditional learning. Our community is a
          vibrant and supportive network of individuals passionate about personal
          and professional growth. As a member, you gain access to a wealth of
          knowledge through expert-led workshops, engaging discussions, and
          hands-on projects.
        </p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Get Candidates
        </button>
      </div>

      {/* Right Side - Grid Section */}
      <div className="w-full md:w-1/2 bg-gray-900 text-white p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Individual Card Items */}
          <div className="p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold">Job-Ready Candidates</h3>
            <p className="text-sm mt-2">
              Our participants, with extensive industrial experience, are
              job-ready from day one, armed with practical, hands-on knowledge
              to tackle real-world challenges.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold">End-to-End Placement Support</h3>
            <p className="text-sm mt-2">
              We offer full end-to-end placement support, understanding your
              organization’s needs and seamlessly managing screening, shortlisting,
              and coordination among our pre-trained candidate pool.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold">Bulk Hiring of Candidates</h3>
            <p className="text-sm mt-2">
              We provide bulk hiring needs, leverage our extensive network and
              talent pool to efficiently identify and source suitable candidates
              for multiple positions.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold">No Hiring Fees</h3>
            <p className="text-sm mt-2">
              We provide cost-effective talent acquisition solutions that save on
              recruitment expenses without compromising candidate quality.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold">Updated Industrial Content Knowledge</h3>
            <p className="text-sm mt-2">
              Our participants maintain up-to-date industrial knowledge through
              continuous training, staying informed about emerging trends,
              technologies, and best practices in their fields.
            </p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
            <h3 className="text-xl font-semibold">Diverse Skill Sets and Specialisations</h3>
            <p className="text-sm mt-2">
              Our pool of pre-trained candidates offers a diverse range of skill
              sets and specializations. We can connect you with candidates who
              have the right expertise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinVDSection;
