import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import HireFromUs from "./pages/HireFromUs.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/courses/web-development"
            element={<h1>Web Development</h1>}
          />
          <Route path="/courses/data-science" element={<h1>Data Science</h1>} />
          <Route path="/courses/design" element={<h1>Design</h1>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<h1>Careers</h1>} />
          <Route path="/hire-from-us" element={<HireFromUs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
