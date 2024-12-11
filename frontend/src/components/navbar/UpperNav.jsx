import React from 'react';
import { FiPhone } from 'react-icons/fi'; // Phone icon
import { MdEmail } from 'react-icons/md'; // Email icon

const UpperNavbar = () => {
  return (
    <div className="bg-yellow-800 text-white py-2">
      <div className="container mx-auto flex justify-start items-center space-x-6 px-4">
        {/* Phone Number */}
        <a
          href="tel:+1234567890"
          className="flex items-center space-x-2 hover:text-gray-400"
        >
          <FiPhone className="text-lg" />
          <span>+1 234 567 890</span>
        </a>

        {/* Email Address */}
        <a
          href="mailto:example@example.com"
          className="flex items-center space-x-2 hover:text-gray-400"
        >
          <MdEmail className="text-lg" />
          <span>example@example.com</span>
        </a>
      </div>
    </div>
  );
};

export default UpperNavbar;
