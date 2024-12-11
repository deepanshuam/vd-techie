import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Anuj Sangal",
    role: "Youtuber, Anuj Classes",
    text: "Excellent institute for Digital Marketing and it has helped me to get my dream job and given me wings to fly. The Faculty members are very experienced and with the help of their best practices, we have gained a lot of practical knowledge.",
  },
  {
    name: "Nidhi Seth",
    role: "Graphic Designer, ET Creatives",
    text: "I recommend DG Royals institute for Graphic Designing, I had a great experience studying with them and if they say they mean it, they really have an Internship program along with a course & excellent placement program for all the trainees.",
  },
  {
    name: "Rahul Sharma",
    role: "Graphic Designer, Periscope",
    text: "I did a master’s in Graphic Designing from DG Royals and I am so delighted to choose this institute since it has turned my dream into reality. Now I have an excellent knowledge of industrial Brand designs, advertising & Illustrations.",
  },
  {
    name: "Mohit Tanwar",
    role: "Digital Marketer, Havfly",
    text: "Choosing DG Royals for the Master’s Course in Digital Marketing was one of the best decisions and once I completed my Internship and Live projects, I got placed in a good organization with an excellent package.",
  },
  {
    name: "Ajay Gupta",
    role: "SEO Specialist, Next Wavelength (UAE)",
    text: "The Trainers and Faculty members are highly-qualified and skilled at DG royals Institute of Digital Marketing and they will leave no stone unturned to give you a bright future. They Provide Amazing work experience during internship also.",
  },
  {
    name: "Mukul Kumar",
    role: "Graphic Designer, Galgotias University",
    text: "DG Royals is the Best Institute in Delhi for all the professional courses and their live projects that is a part of the course really helps to learn all the concepts and to become a professional. I have done a Master’s Course in Digital & Design.",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#facc15] py-16 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-center text-4xl font-bold text-black mb-10">
        What Our Students Say
      </h2>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between h-full transform hover:scale-105 transition-transform"
          >
            <p className="text-sm font-medium text-gray-700">{testimonial.text}</p>
            <div className="mt-6 text-center">
              <h3 className="font-semibold text-xl text-black">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-red-500 text-white text-center py-8 mt-16">
        <h3 className="text-2xl font-semibold">Ready to Make a Change?</h3>
        <p className="text-lg mt-2">Take the Right Career Choice to Build Your Career Now!</p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            className="bg-black text-white py-3 px-8 rounded-md hover:bg-gray-800 transition-colors"
            onClick={() => navigate("/become-a-member")}
          >
            Become a Member
          </button>
          <button
            className="bg-transparent border-2 border-white py-3 px-8 rounded-md hover:bg-white hover:text-black transition-all"
            onClick={() => navigate("/start-learning")}
          >
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
