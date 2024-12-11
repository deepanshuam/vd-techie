import React, { useState } from 'react';

const StartLearningNow = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    mode: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'mode') {
      setFormData({
        ...formData,
        mode: checked ? 'Online' : 'Offline',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-5xl font-semibold bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-4">
            Start Learning Now!
          </h2>
          <p className="text-xl bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-4">
            Enroll now at VD Techie !! 4300+ Students are working at their dream organizations and we made it possible.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Fill the form for any query.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-2/5 bg-white p-6 md:px-10 py-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-6 text-center">
            Book Demo
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-red-300"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-red-300"
                placeholder="Your Phone Number"
              />
            </div>

            <div>
              <label htmlFor="course" className="block bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-2">
                Course
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-red-300"
              >
                <option value="">Select a Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="mode"
                name="mode"
                checked={formData.mode === 'Online'}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="mode" className="bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text">
                Online Mode
              </label>
            </div>

            <div>
              <label htmlFor="email" className="block bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-red-300"
                placeholder="Your Email Address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartLearningNow;
