import React from "react";

const LongTermCourses = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("courseForm");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const courses = [
    {
      id: 1,
      title: "Web Development Mastery",
      description:
        "Master the art of web development from front-end to back-end.",
    },
    {
      id: 2,
      title: "Data Analytics",
      description:
        "Unlock data insights, master analytics tools, and transform decision-making powerfully!",
    },
    {
      id: 3,
      title: "Digital Marketing Expert",
      description: "Learn advanced digital marketing techniques and tools.",
    },
    {
      id: 4,
      title: "Performance Marketing",
      description: "Master performance marketing, boost ROI, and drive results with expert guidance!",
    },
    {
      id: 5,
      title: "Graphics Design",
      description: "Unleash creativity, master design tools, and create stunning visuals effortlessly.",
    },
    {
      id: 6,
      title: "Personal Branding",
      description: "Build your unique identity, enhance credibility, and grow your personal brand!",
    },
  ];

  const handleWhatsAppRedirect = () => {
    window.open("https://wa.me/your_number_here", "_blank");
  };

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Top Leading Long Term Courses
        </h2>
        <p className="text-lg text-gray-500 mb-8">Master Courses</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer hover:bg-gradient-to-r from-red-600 to-black"
              onClick={scrollToForm}
            >
              {/* Card Title */}
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black">
                {course.title}
              </h3>

              {/* Hidden Description */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all flex items-center justify-center rounded-lg">
                <p className="text-white text-lg font-medium px-4 py-2 text-center">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Button */}
        <div className="mt-8">
          <button
            className="bg-red-600 text-white text-lg px-8 py-3 rounded-lg hover:bg-red-700 transition"
            onClick={handleWhatsAppRedirect}
          >
            Book Free Counseling
          </button>
        </div>
      </div>
    </div>
  );
};

export default LongTermCourses;
