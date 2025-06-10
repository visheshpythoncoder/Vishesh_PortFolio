import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Download } from "lucide-react";

const Profile = ({ setActiveSection }) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    const link = document.createElement("a");
    link.href = "/Images/Vishesh_New_Resume.pdf";
    link.download = "Vishesh_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloading(false), 1000);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-12 py-12 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('src/Images/pr2.png')`,
      }}
    >
      <div className="absolute inset-0 bg-opacity-50 z-0" />

      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 w-full text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Creative <b className="text-gray-200">UI / UX</b>
          </h1>
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-300">
            Designer & Developer
          </span>

          <p className="flex flex-wrap justify-center md:justify-start items-center text-lg sm:text-xl md:text-2xl text-gray-200 mt-2">
            <span className="font-semibold text-purple-300 whitespace-nowrap">
              <Typewriter
                options={{
                  strings: ["Web Developer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
            <span className="mx-2 text-gray-400 font-bold select-none">|</span>
            <span className="font-semibold text-blue-300 whitespace-nowrap">
              <Typewriter
                options={{
                  strings: ["Canva Designer"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <button
              onClick={() => setActiveSection("Contact")}
              className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300 shadow-lg text-base sm:text-lg"
            >
              Hire me
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className={`relative px-6 py-3 rounded-2xl text-white font-bold transition duration-300 ease-in-out overflow-hidden ${
                downloading ? "bg-green-600" : "bg-blue-600"
              }`}
            >
              {downloading ? (
                <span className="flex items-center gap-2 animate-pulse">
                  Downloading...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Download size={18} /> Download CV
                </span>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
