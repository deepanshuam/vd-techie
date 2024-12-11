import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    course: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="py-12 px-6 md:px-12">
      {/* Left Section - Form */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* Center the heading */}
          <h2 className="text-3xl font-bold text-black mb-4 text-center">
            Let's Connect!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="space-y-2">
              <label className="block text-left" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-left" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-left" htmlFor="course">
                Course
              </label>
              <input
                type="text"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-left" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-left" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                rows="4"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#facc15] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Section - Google Map Embed */}
        <div className="w-full md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.364698157801!2d77.51082007495738!3d28.648796883342776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ced4b8180313d%3A0x4aee636d4030b992!2sGREENWOOD%20ENCLAVE%20SEC%205!5e0!3m2!1sen!2sin!4v1732787867675!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Form;
