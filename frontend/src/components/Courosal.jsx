


import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import img from "../components/baner/img/1-4-qnmtcqwu8z89v4xaj1ori48g4vdmo0lgewgsfzxa60.jpg"
import img1 from "../components/baner/img/2-1-qnmqsu8y2s544m9vlw1448y0rkq22zlrfwg30ifltk.jpg"
import img2 from "../components/baner/img/3-1-qnmqsyy51e3wnhe58vhfp7e0cc4ytqfnyj3l1za260.jpg"
import img3 from "../components/baner/img/5-1024x1024.jpg.webp"
import img4 from "../components/baner/img/6-1-qnmqt9ad1hzjthtgri00t7damqbhgldzu2jeufkrso.jpg"
import img5 from "../components/baner/img/6-3.jpg.webp"
import img6 from "../components/baner/img/6-4-qnmtd6w3h5u5cia2xqlf6i7a8f6vavcw53k1lp9l88.jpg"
import img7 from "../components/baner/img/9-3-qnmtdj3zy0avjfsbydvkkx49yfin2xpeis1cuargzc.jpg"
import img8 from "../components/baner/img/10-2-qnmtdlxiiieqi9o8hx3gaeenql4qq10lj5zta4nago.jpg"

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-red-500 font-medium">
        What is Digital Marketing Course?
        </span>
        <h3 className="text-xl md:text-3xl font-semibold">
        Here Before Start Learing Digital Marketing You Need To First Know What is Digital Marketing?
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        In Simple and Easy Language Digital Marketing is a Platform Where You Promote Products or Services through Various Online platforms. Digital Marketing Connects all of Company’s Efforts to Engage Customers using Online Platform. Online marketing promotes products and services to potential customers using online channels including search engine optimization (SEO), pay-per-click (PPC) advertising, social media, mobile marketing, online customer communities, webinars, and other video-based content.
        </p>
        <button className="bg-red-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Find a class
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: img,
  },
  {
    id: 2,
    src:img1
  },
  {
    id: 3,
    src: img2,
  },
  {
    id: 4,
    src: img3,
  },
  {
    id: 5,
    src: img4,
  },
  {
    id: 6,
    src: img5,
  },
  {
    id: 7,
    src: img6,
  },
  {
    id: 8,
    src: img7,
  },
  {
    id: 9,
    src: img8,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full group relative overflow-hidden"
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `url(${sq.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold">
        Hover Text
      </div>
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[486px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
