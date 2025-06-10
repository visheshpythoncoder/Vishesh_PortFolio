import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🌐 Web project images
import ht1 from "../Images/ht1.png";
import ht2 from "../Images/ht2.png";
import ht3 from "../Images/ht3.png";
import ht4 from "../Images/ht4.png";
import ht5 from "../Images/ht5.png";

import mp1 from "../Images/mp1.png";
import mp2 from "../Images/mp2.png";
import mp3 from "../Images/mp3.png";
import mp4 from "../Images/mp4.png";
import mp5 from "../Images/mp5.png";
import mp6 from "../Images/mp6.png";

import bs1 from "../Images/bs1.png";
import bs2 from "../Images/bs2.png";
import bs3 from "../Images/bs3.png";
import bs4 from "../Images/bs4.png";
import bs5 from "../Images/bs5.png";
import bs6 from "../Images/bs6.png";

// 🐍 Python project images
import f1 from "../Images/f1.png";
import f2 from "../Images/f2.png";
import f3 from "../Images/f3.png";
import f4 from "../Images/f4.png";

// 🎨 Design project images
import pdb from "../Images/pdb.png";
import img2 from "../Images/2.png";
import img3 from "../Images/3.png";
import vfd from "../Images/vfd.png";

// Project Data
const projects = {
  Web: [
    {
      title: "HiTech Power Service Website",
      description:
        "Corporate website built for a power service company using React with responsive design.",
      images: [ht1, ht2, ht3, ht4, ht5],
      live: "https://hitechpowerservice.in",
      download: "https://github.com/your-repo/hitech-website",
    },
    {
      title: "Makeup Artist Portfolio",
      description:
        "Stylish and vibrant React site for a professional makeup artist with service sections and image sliders.",
      images: [mp1, mp2, mp3, mp4, mp5, mp6],
      live: "https://visheshpythoncoder.github.io/Sonali_Makeover/",
      download: "https://github.com/your-repo/makeup-portfolio",
    },
    {
      title: "Bus Transportation System",
      description:
        "System to manage bus schedules and routes using React and a clean UI design.",
      images: [bs1, bs2, bs3, bs4, bs5, bs6],
      live: "https://your-live-url.com/bus-transport",
      download: "https://github.com/your-repo/bus-transport",
    },
  ],
  Python: [
    {
      title: "Face Recognition Attendance System",
      description:
        "Developed a face recognition system using Python and OpenCV for automated attendance during academic period.",
      images: [f1, f2, f3, f4],
      live: "https://github.com/your-repo/face-attendance",
      download: "https://github.com/your-repo/face-attendance/archive/main.zip",
    },
  ],
  Design: [
    {
      title: "Insta Post Design",
      description:
        "Created a variety of banners, posters, and social media creatives using Canva.",
      images: [pdb, img3, img2, vfd],
      live: "https://canva.com/designs",
      download: "https://yourdrive.com/designs.zip",
    },
    {
      title: "Banner Design",
      description:
        "Designed banners and visuals for brands using Canva’s graphic tools.",
      images: [pdb, img3, img2, vfd],
      live: "https://canva.com/designs",
      download: "https://yourdrive.com/designs.zip",
    },
  ],
};

const PortfolioCard = ({ proj }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % proj.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [proj.images.length]);

  return (
    <motion.div
      key={proj.title}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-xl rounded-2xl p-6 hover:shadow-2xl transition duration-300"
    >
      <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {proj.title}
        </h3>
        <div className="flex gap-2">
          <a
            href={proj.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow"
          >
            Live Preview
          </a>
          <a
            href={proj.download}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded-lg shadow"
          >
            Download
          </a>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{proj.description}</p>

      <div className="relative w-full h-[300px] md:h-[200px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={proj.images[imageIndex]}
            src={proj.images[imageIndex]}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-contain"
          />
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2 mt-3">
        {proj.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setImageIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === imageIndex ? "bg-blue-600 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default function PortfolioShowcase() {
  const [category, setCategory] = useState("Web");

  const tabClasses = (tab) =>
    `px-6 py-2 rounded-full font-semibold transition transform duration-300 shadow-md ${
      category === tab
        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white scale-105"
        : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white"
    }`;

  return (
    <div className="min-h-screen mt-4 md:mt-6 p-6 md:p-10 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
            "linear-gradient(135deg,rgb(96, 157, 255) 0%,rgb(17, 104, 145) 100%)",
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.h2
        className="text-5xl font-extrabold text-center mb-10 text-white drop-shadow-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Portfolio
      </motion.h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {Object.keys(projects).map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setCategory(tab)}
            className={tabClasses(tab)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {projects[category].map((proj) => (
            <PortfolioCard key={proj.title} proj={proj} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
