import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import About from "./About";
import SkillShowcase from "./Skills";
import Services from "./Serv";
import Profile from "./Profile";
import ContactCard from "./Contact";
import PortfolioShowcase from "./Portfolio";

const componentsMap = {
  Home: (props) => <Profile {...props} />,
  About: (props) => <About {...props} />,
  Skills: (props) => <SkillShowcase {...props} />,
  Services: (props) => <Services {...props} />,
  Contact: (props) => <ContactCard {...props} />,
  PortFolio: (props) => <PortfolioShowcase {...props} />,
};

const MainPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const savedSection = localStorage.getItem("activeSection");
    if (savedSection && componentsMap[savedSection]) {
      setActiveSection(savedSection);
    } else {
      setActiveSection("Home");
    }
  }, []);

  useEffect(() => {
    if (activeSection) {
      localStorage.setItem("activeSection", activeSection);
    }
  }, [activeSection]);

  if (!activeSection) return null;

  return (
    <div>
      <Navbar activeItem={activeSection} setActiveItem={setActiveSection} />
      <div className="pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            {componentsMap[activeSection]({ setActiveSection })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MainPage;
