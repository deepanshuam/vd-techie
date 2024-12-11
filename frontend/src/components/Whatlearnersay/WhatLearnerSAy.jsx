import React from 'react';

const LearnerTestimonials = () => {
  // Sample data for learner testimonials
  const testimonials = [
    { id: 1, name: 'John Doe', message: 'This course has transformed my career. Highly recommend it!', image: '/images/learner1.jpg' },
    { id: 2, name: 'Jane Smith', message: 'Fantastic learning experience! The instructors were top-notch.', image: '/images/learner2.jpg' },
    { id: 3, name: 'Alice Johnson', message: 'Great course content and excellent support throughout the program.', image: '/images/learner3.jpg' },
    { id: 4, name: 'Michael Brown', message: 'The best course I have ever taken. Practical knowledge that I can apply immediately.', image: '/images/learner4.jpg' },
    { id: 5, name: 'Emily Davis', message: 'I learned so much and landed my dream job thanks to this course.', image: '/images/learner5.jpg' },
    { id: 6, name: 'David Lee', message: 'Amazing instructors and a very practical course structure. Loved it!', image: '/images/learner6.jpg' },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black animate-gradient-text mb-12">
          What our learners have to say about us!
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-r from-red-600 to-black rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              {/* Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 z-10 relative"
              />

              {/* Text */}
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black z-10 relative group-hover:translate-y-2 transition-transform">
                {testimonial.name}
              </h3>
              <p className="text-gray-200 text-center mt-2 z-10 relative group-hover:translate-y-2 group-hover:text-white transition-transform duration-300">
                {testimonial.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnerTestimonials;
