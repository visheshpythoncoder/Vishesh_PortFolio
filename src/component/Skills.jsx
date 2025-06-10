// SkillShowcase.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaChartBar,
  FaTable,
  FaProjectDiagram,
  FaChartLine,
} from "react-icons/fa";
import {
  SiCanva,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiCss3,
  SiJavascript,
  SiNumpy,
} from "react-icons/si";
import { TbMathFunction } from "react-icons/tb";
import { RiLineChartLine } from "react-icons/ri";

// Split the skills into two categories
const webSkills = [
  { name: "React", icon: <FaReact className="text-sky-400" />, percentage: 90 },
  {
    name: "Canva Designer",
    icon: <SiCanva className="text-cyan-400" />,
    percentage: 85,
  },
  { name: "SQL", icon: <SiMysql className="text-blue-500" />, percentage: 70 },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    percentage: 65,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    percentage: 80,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="text-purple-600" />,
    percentage: 75,
  },
  { name: "CSS3", icon: <SiCss3 className="text-blue-400" />, percentage: 70 },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-300" />,
    percentage: 78,
  },
];

const dataScienceSkills = [
  {
    name: "Python",
    icon: <FaPython className="text-yellow-400" />,
    percentage: 75,
  },
  { name: "SQL", icon: <SiMysql className="text-blue-500" />, percentage: 70 },
  {
    name: "Power BI",
    icon: <FaChartBar className="text-yellow-500" />,
    percentage: 70,
  },
  {
    name: "Scikit-learn",
    icon: <FaProjectDiagram className="text-orange-500" />,
    percentage: 65,
  },
  {
    name: "Pandas",
    icon: <FaTable className="text-indigo-500" />,
    percentage: 75,
  },
  {
    name: "NumPy",
    icon: <TbMathFunction className="text-blue-400" />,
    percentage: 72,
  },
  {
    name: "Matplotlib",
    icon: <FaChartLine className="text-purple-500" />,
    percentage: 68,
  },
  {
    name: "Seaborn",
    icon: <RiLineChartLine className="text-teal-400" />,
    percentage: 66,
  },
];

// Skill Card component remains the same
const SkillCard = ({ name, icon, percentage, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[200px] aspect-square flex transform transition-transform duration-300 hover:scale-105 items-center justify-center perspective-1000 group"
      initial={{ scale: 0, rotateY: 90 }}
      animate={{ scale: 1, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 z-[-1] rounded-[30px] animate-[bgmove_8s_linear_infinite] opacity-70"
        style={{
          background:
            "linear-gradient(-45deg, #ff6ec4, #7873f5, #4ADEDE, #ff9a9e)",
          backgroundSize: "400% 400%",
        }}
      />
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="border"
            className="absolute inset-0 rounded-[30px] z-0"
            initial={{
              background: `conic-gradient(#a3a380 0deg, transparent 0deg)`,
            }}
            animate={{
              background: `conic-gradient(#a3a380 ${
                percentage * 3.6
              }deg, transparent 0deg)`,
            }}
            exit={{
              background: `conic-gradient(#a3a380 0deg, transparent 0deg)`,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              border: "4px solid transparent",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "destination-out",
              padding: "4px",
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="z-10 flex flex-col items-center text-white text-center space-y-1 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
      >
        <div className="text-8xl">{icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
        <motion.p
          className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{ opacity: hovered ? 1 : 0 }}
        >
          {percentage}%
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

// Main component
const SkillShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-600 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-16">
        <h2
          className="text-white text-4xl sm:text-5xl font-bold text-center mb-14"
          style={{ animation: "pulseColor 3s ease-in-out infinite" }}
        >
          My Skills
        </h2>

        {/* Web Development Skills */}
        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Web Development
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-10 justify-items-center mb-16">
          {webSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>

        {/* Data Science Skills */}
        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Data Science
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-10 justify-items-center">
          {dataScienceSkills.map((skill, index) => (
            <SkillCard
              key={index}
              {...skill}
              index={index + webSkills.length}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bgmove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulseColor {
          0%, 100% {
            color: #ffffff;
            text-shadow: 0 0 5px #fff, 0 0 10px #38bdf8;
          }
          50% {
            color: #38bdf8;
            text-shadow: 0 0 20px #38bdf8, 0 0 30px #38bdf8;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default SkillShowcase;
