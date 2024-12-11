import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLaptopCode, FaPaintBrush, FaMobileAlt, FaVectorSquare, FaFilm } from "react-icons/fa"; // Icons for courses

const courses = [
  {
    name: "Digital Marketing",
    icon: <FaLaptopCode className="text-4xl text-red-500" />,
    link: "/courses/digital-marketing",
  },
  {
    name: "Graphic Design",
    icon: <FaPaintBrush className="text-4xl text-red-500" />,
    link: "/courses/graphic-design",
  },
  {
    name: "UI/UX Designing",
    icon: <FaMobileAlt className="text-4xl text-red-500" />,
    link: "/courses/ui-ux-designing",
  },
  {
    name: "Web Designing",
    icon: <FaVectorSquare className="text-4xl text-red-500" />,
    link: "/courses/web-designing",
  },
  {
    name: "Animation",
    icon: <FaFilm className="text-4xl text-red-500" />,
    link: "/courses/animation",
  },
];

const CoursesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-20">
      <h2 className="text-center text-3xl font-bold text-black mb-8">
        Our Leading Industry Courses
      </h2>
      <div className="flex justify-between items-center gap-4 flex-wrap">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group w-48 h-48 bg-white shadow-md rounded-lg flex flex-col justify-center items-center p-4 cursor-pointer transition-transform transform hover:-translate-y-2 hover:shadow-xl"
            onClick={() => navigate(course.link)}
          >
            {/* Icon */}
            <div className="mb-2">{course.icon}</div>

            {/* Course Name */}
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-red-500 transition-colors text-center">
              {course.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
