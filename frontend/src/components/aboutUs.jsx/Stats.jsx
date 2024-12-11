import React, { useEffect, useState, useRef } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { label: "Years in The Business", value: 18 },
    { label: "Happy Students", value: 11 },
    { label: "Offered Courses", value: 32 },
    { label: "Studio Locations", value: 4 },
  ];

  // Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#facc15] py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-around items-center text-center"
    >
      {stats.map((stat, index) => (
        <div key={index} className="mb-8 md:mb-0">
          {/* Animated Counter */}
          <h3 className="text-4xl md:text-5xl font-bold text-red-600">
            {isVisible ? (
              <AnimatedCounter value={stat.value} duration={2} />
            ) : (
              0
            )}
          </h3>
          <p className="text-lg text-gray-700 mt-2">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

// Counter Animation Logic
const AnimatedCounter = ({ value, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{count}</>;
};

export default StatsSection;
