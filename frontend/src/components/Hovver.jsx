import React from "react";

const FooterWithMovingCircle = () => {
  return (
    <div className="relative bg-gray-800 text-white py-12">
      {/* Moving Circle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-moveCircle z-0">
        <div className="w-24 h-24 bg-blue-500 rounded-full"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">Have questions? We’d love to hear from you.</p>
        <a
          href="mailto:contact@example.com"
          className="bg-yellow-500 text-black py-3 px-6 rounded-lg hover:bg-yellow-600 transition"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
};

export default FooterWithMovingCircle;
