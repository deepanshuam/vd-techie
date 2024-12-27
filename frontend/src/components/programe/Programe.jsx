import React, { useState } from "react";
import axios from "axios";

const ProgramOverview = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form data
    if (!formData.name || !formData.phone || !formData.course || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }

    try {
      // Send form data to the backend
      const response = await axios.post(
        "http://localhost:8000/api/v1/contact/create",
        formData
      );

      // Success message
      setSuccessMessage("Your message has been sent successfully!");

      // Clear form data after submission
      setFormData({
        name: "",
        phone: "",
        course: "",
        email: "",
        message: "",
      });

      setError("");
    } catch (err) {
      setError("An error occurred while sending your message. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch justify-between px-6 md:px-16 gap-8">
        {/* Left Side */}
        <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-black mb-8 text-center md:text-left">
            Program Overview
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mb-6 text-justify">
            This comprehensive Digital Marketing Course is designed to equip participants with the knowledge, skills, and tools necessary to create and implement effective digital marketing strategies.
          </p>

          <p className="text-lg md:text-xl text-gray-700 mb-6 text-justify">
            The program is ideal for beginners, entrepreneurs, marketing professionals, and business owners looking to leverage digital platforms for growth.
          </p>

          <div className="space-y-6 flex-grow">
            <h3 className="text-2xl font-semibold text-gray-800">Key Highlights</h3>
            <div className="overflow-y-auto max-h-96 border border-gray-300 rounded-lg p-4">
              <ul className="list-disc pl-6 space-y-4 text-gray-700 text-justify">
                <li><strong className="text-xl">Comprehensive Curriculum</strong>: Covers the latest trends and strategies in digital marketing.</li>
                <li><strong className="text-xl">Hands-On Training</strong>: Real-world projects and case studies.</li>
                <li><strong className="text-xl">Expert-Led Sessions</strong>: Taught by experienced industry professionals.</li>
                <li><strong className="text-xl">Certifications</strong>: Preparation for globally recognized certifications like Google Ads, HubSpot, Facebook Blueprint, and others.</li>
                <li><strong className="text-xl">Flexible Learning Options</strong>: Online, offline, or hybrid formats to suit different schedules.</li>
                <li><strong className="text-xl">Career Support</strong>: Job placement assistance and resume-building workshops.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Learn More About The Course Program
          </h3>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
            {error && <div className="text-red-500 text-sm">{error}</div>}
            {successMessage && <div className="text-green-500 text-sm">{successMessage}</div>}

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="course">
                course
              </label>
              <select
                id="course"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select a Course</option>
                <option value="course1">Seo</option>
                <option value="course2">Smo</option>
                <option value="course3">Web development</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300"
                placeholder="Your Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2" htmlFor="address">
                message
              </label>
              <input
                id="message"
                type="text"
                className="w-full border-gray-300 border rounded-lg p-3 focus:ring focus:ring-blue-300 mb-8"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full p-5 mt-9 bg-red-500 text-white rounded-lg hover:bg-yellow-500 transition"
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
