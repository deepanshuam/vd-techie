import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          {/* Left Section: Courses List */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>Digital Marketing Course</li>
              <li>Graphic Design Course</li>
              <li>Digital & Design Course</li>
              <li>UI/UX Design Course</li>
              <li>Web Design Course</li>
              <li>Interior Design Course</li>
              <li>Animation Course</li>
              <li>Video Editing Course</li>
              <li>Web Design & Development Course</li>
            </ul>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blogs" className="font-bold">
                  Blogs
                </a>
              </li>
              <li>
                <a href="/about" className="font-bold">
                  About Us
                </a>
              </li>
              <li>Success Stories</li>
              <li>Submit Guest Post</li>
              <li>Life at DG Royals</li>
              <li>Students Portfolio</li>
              <li>
                <a href="/hire" className="font-bold">
                  Hire From Us
                </a>
              </li>
              <li>Work with Us</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Right Section: Reach Us and Google Map */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-4">Reach Us</h3>
            <p className="mb-4">
              25GF Greenwood Enclave Sector 5 Wave City, Ghaziabad, Uttar
              Pradesh 201002
            </p>
            <p className="mb-4">
              +91-8447726000 / +91-8447729000 / +91-8585959688
            </p>
            <p className="mb-4">
              Email:{" "}
              <a href="mailto:info.vd@gmail.com" className="text-blue-400">
                info.vd@gmail.com
              </a>
            </p>
            <p className="mb-4">All Days: 09:00 AM - 7:00 PM</p>

            {/* Google Map Embed */}
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
    </footer>
  );
};

export default Footer;
