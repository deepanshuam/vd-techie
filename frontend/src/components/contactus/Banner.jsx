import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [showText, setShowText] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setShowText(true);
    }
  }, [inView]);

  return (
    <div className="py-12 px-6 md:px-12">
      {/* Left Section - Our Team Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2
            ref={ref}
            className={`text-3xl font-bold text-black mb-4 transition-all duration-1000 ease-in-out ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {showText && "Our Team is Here to Help You!"}
          </h2>
          <p
            ref={ref}
            className={`text-lg text-gray-700 mb-4 transition-all duration-1000 ease-in-out ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {showText && "DG Royals is a Leading Professional Institute which helps students to transform their Professional Career. We Provide Industry Oriented Training and work Culture with our customised Courses to build their Future."}
          </p>
          <p
            ref={ref}
            className={`text-lg text-gray-700 mb-6 transition-all duration-1000 ease-in-out ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {showText && "Apply Now"}
          </p>
          <button className="bg-[#facc15] text-black py-2 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-all">
            Apply Now
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/300"
            alt="DG Royals Team"
            className="w-full max-w-[400px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Contact Information - Red Box with Icons */}
      <div className="bg-red-500 text-white py-8 px-6 rounded-xl mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Address */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11.5V21H5V3h14v8.5zm-7-4.5h-2v6h2V7z"
              />
            </svg>
            <p>
              Visit Us
              <br />
              92 -94, 3rd Floor, Mall Road GTB Nagar Near Metro Gate No. 03,
              Delhi 110009.
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6.62 10.79a15.928 15.928 0 005.57-3.39 15.928 15.928 0 003.39-5.57c.11-.3-.03-.63-.33-.82l-1.3-.87a.553.553 0 00-.75.17c-1.27 2.42-3.74 4.59-6.65 5.51-3.59 1.09-7.72-.66-10.08-3.02-.62-.62-1.3-1.21-1.92-1.81-.31-.33-.42-.83-.31-1.29l.59-2.09a.563.563 0 00-.24-.58C2.91 3.8 4.86 1.76 6.96 2.04c4.8.42 9.3 3.44 11.21 7.71 2.11 4.65 1.47 10.24-1.27 14.32-2.02 3.16-5.48 5.12-9.07 5.6-.55-.2-.95-.7-.92-1.27-.1-.23-.29-.44-.5-.63-1.14-1.26-2.5-2.38-3.91-3.42a1.53 1.53 0 00-1.35-.31l-.35 1.47a15.72 15.72 0 0010.29 4.47c8.15-.33 14.23-6.41 14.56-14.56a.6.6 0 00-.56-.7l-1.42.45c-.3.1-.57.23-.87.34l-1.4.46c-.28-.15-.57-.33-.87-.47z"
              />
            </svg>
            <p>
              Call us
              <br />
              +91-8447726000
              <br />
              +91-8585959688
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12l-8-5v10l8-5zm0 0l8-5v10l-8-5z"
              />
            </svg>
            <p>
              Email us
              <br />
              dgroyalsofficial@gmail.com
              <br />
              hrdgroyals@gmail.com
            </p>
          </div>

          {/* Hours */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
            <p>
              Hours
              <br />
              Monday–Sunday: 10am–7pm
              <br />
              Friday: Fix OFF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
