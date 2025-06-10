import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaShoppingCart,
  FaCode,
  FaTools,
  FaSearch,
  FaInstagram,
  FaFileAlt,
  FaPaintBrush,
  FaFilePowerpoint,
  FaEnvelopeOpenText,
  FaIdBadge,
  FaLaptopCode,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

// CSS styles for hiding scrollbar
const styles = `
  .hide-scrollbar {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const webServices = [
  {
    title: "Responsive Website Design & Development",
    description:
      "Business websites, portfolios, blogs, and landing pages tailored for all devices.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    points: [
      "Mobile-friendly layout adapting to all screen sizes",
      "Fast loading times to improve user experience",
      "SEO-ready structure to boost search rankings",
      "Cross-browser compatibility",
      "Clean and maintainable codebase",
    ],
    icon: <FaGlobe size={44} className="text-indigo-600" />,
  },
  {
    title: "E-commerce Website Development",
    description: "Set up online stores using Shopify, WooCommerce, or custom platforms.",
    image:
      "https://images.unsplash.com/photo-1515165562835-c7bba642f26d?auto=format&fit=crop&w=800&q=80",
    points: [
      "Secure payment gateway integration",
      "Intuitive product management system",
      "Optimized checkout process to reduce cart abandonment",
      "Inventory tracking and order management",
      "Responsive design for mobile shoppers",
    ],
    icon: <FaShoppingCart size={44} className="text-indigo-600" />,
  },
  {
    title: "Frontend Development",
    description:
      "Modern UI with HTML, CSS, JavaScript, and React. Clean and responsive designs.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    points: [
      "Responsive UI using modern frameworks",
      "Component-based architecture for scalability",
      "Accessibility compliance (WCAG)",
      "Optimized for performance and SEO",
      "Cross-platform and device compatibility",
    ],
    icon: <FaCode size={44} className="text-indigo-600" />,
  },
  {
    title: "Website Maintenance & Updates",
    description:
      "Speed optimization, bug fixing, and content updates for existing websites.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    points: [
      "Regular bug fixes and security patches",
      "Performance optimization and caching",
      "Content and media updates",
      "Backup and disaster recovery plans",
      "Monitoring uptime and analytics",
    ],
    icon: <FaTools size={44} className="text-indigo-600" />,
  },
  {
    title: "SEO Basics",
    description:
      "On-page SEO setup with meta tags, structure, and accessibility improvements.",
    image:
      "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80",
    points: [
      "Keyword research and meta tag optimization",
      "Semantic HTML structure",
      "Image alt tags and accessibility improvements",
      "Fast loading speed and mobile optimization",
      "Google Analytics & Search Console setup",
    ],
    icon: <FaSearch size={44} className="text-indigo-600" />,
  },
  {
    title: "College Semester Projects",
    description:
      "Custom projects built to meet your semester requirements with full documentation.",
    image:
      "https://images.unsplash.com/photo-1555949963-4f3b4dbd7f4b?auto=format&fit=crop&w=800&q=80",
    points: [
      "Tailored to your syllabus and requirements",
      "Clean, documented code with comments",
      "Full project reports and presentations",
      "Support for multiple technologies",
      "Timely delivery and revision support",
    ],
    icon: <FaLaptopCode size={44} className="text-indigo-600" />,
  },
];


const canvaServices = [
  {
    title: "Social Media Graphics",
    description:
      "Designs for Instagram, Facebook, and YouTube using Canva templates.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    points: [
      "Platform-optimized image sizes",
      "Trendy and engaging design templates",
      "Quick turnaround for campaign needs",
      "Brand-consistent visuals",
      "High-resolution exports for ads and posts",
    ],
    icon: <FaInstagram size={44} className="text-pink-600" />,
  },
  {
    title: "Marketing & Print Materials",
    description:
      "Flyers, posters, brochures, and business cards tailored to your brand.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    points: [
      "Eye-catching flyer and poster designs",
      "Print-ready, CMYK color profiles",
      "Custom business card layouts",
      "Consistent branding across materials",
      "Flexible formats for printers",
    ],
    icon: <FaFileAlt size={44} className="text-pink-600" />,
  },
  {
    title: "Logo & Branding Kits",
    description:
      "Professional logo design with matching color palettes and font styles.",
    image:
      "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?auto=format&fit=crop&w=800&q=80",
    points: [
      "Unique and memorable logo concepts",
      "Custom color palettes and typography",
      "Full branding kits with guidelines",
      "Vector files for all uses",
      "Brand consistency across platforms",
    ],
    icon: <FaPaintBrush size={44} className="text-pink-600" />,
  },
  {
    title: "Presentation Design",
    description:
      "Visually engaging business presentations and workshop slides.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    points: [
      "Custom slide templates for PowerPoint & Google Slides",
      "Clean, professional layouts",
      "Engaging visuals and infographics",
      "Animation and transition setup",
      "Templates ready for editing",
    ],
    icon: <FaFilePowerpoint size={44} className="text-pink-600" />,
  },
  {
    title: "Event & Invitation Design",
    description:
      "Elegant wedding, party, and event invitations designed in Canva.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    points: [
      "Custom invitation designs tailored to theme",
      "Printable and digital formats",
      "Elegant typography and graphics",
      "RSVP cards and thank-you notes",
      "Fast turnaround time",
    ],
    icon: <FaEnvelopeOpenText size={44} className="text-pink-600" />,
  },
  {
    title: "Resume & Portfolio Design",
    description:
      "Standout resumes and personal portfolios built for maximum impact.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    points: [
      "Professional, ATS-friendly resume layouts",
      "Personal branding integration",
      "Clean and readable designs",
      "Easy-to-edit templates",
      "Portfolio pages showcasing your work",
    ],
    icon: <FaIdBadge size={44} className="text-pink-600" />,
  },
];

const Card = React.memo(({ title, description, icon, delay, onClick }) => (
  <motion.div
    className="group relative flex-shrink-0 w-72 h-72 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-3xl p-8 shadow-xl cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-3xl"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    onClick={onClick}
  >
    <div className="flex flex-col items-center justify-center text-center h-full transition-all duration-500 group-hover:translate-y-[-20px]">
      <div className="mb-2">{icon}</div>
      <h3 className="text-xl font-extrabold text-indigo-900">{title}</h3>
    </div>
    <div className="absolute bottom-6 left-4 right-4 px-2 text-center text-indigo-800 text-base opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
      {description}
    </div>
  </motion.div>
));

const Modal = ({ isOpen, onClose, service }) => {
  const headingVariants = {
    hidden: { scale: 0.9, opacity: 0, y: -20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } },
  };

  const scrollToContact = ({ setActiveSection }) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      onClose(); // Optional: close modal after navigating
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-7xl mx-6 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="w-full md:w-1/2 bg-gray-100 p-8 flex items-center justify-center"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full max-h-[500px] object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </motion.div>

            <div className="w-full md:w-1/2 p-10 relative flex flex-col">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-3xl text-gray-600 hover:text-indigo-700 transition-colors duration-300"
                aria-label="Close Modal"
              >
                <FaTimes />
              </button>

              <motion.h2
                className="text-5xl font-extrabold mb-6 text-indigo-700 tracking-wide select-none"
                variants={headingVariants}
                initial="hidden"
                animate="visible"
              >
                {service.title}
              </motion.h2>

              <motion.p
                className="text-lg text-gray-700 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {service.description}
              </motion.p>

              <ul className="list-disc list-inside text-gray-600 space-y-3 text-base font-medium mb-8">
                {service.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="hover:text-indigo-600 cursor-default"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className="mt-auto self-start px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-indigo-700 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


const ScrollSection = ({
  title,
  services,
  canScrollLeft,
  canScrollRight,
  scrollBy,
  onScroll,
  leftArrowColor,
  rightArrowColor,
  scrollRef,
  onCardClick,
  marginBottom = "mb-16",
}) => {
  const containerRef = scrollRef;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollBy({ left: e.deltaY, behavior: "smooth" });
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [containerRef]);

  return (
    <section className={`relative ${marginBottom}`}>
      <h3 className="text-3xl font-bold mb-8 text-white drop-shadow-md text-center">
        {title}
      </h3>

      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollBy(-320)}
          className={`absolute top-1/2 left-2 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 shadow-md flex items-center justify-center ${leftArrowColor} transition`}
          aria-label="Scroll Left"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      <div
        ref={containerRef}
        onScroll={onScroll}
        className="flex space-x-6 overflow-x-auto py-6 px-2 hide-scrollbar relative scroll-smooth"
      >
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            delay={index * 0.1}
            onClick={() => onCardClick(service)}
          />
        ))}
      </div>

      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollBy(320)}
          className={`absolute top-1/2 right-2 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 shadow-md flex items-center justify-center ${rightArrowColor} transition`}
          aria-label="Scroll Right"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </section>
  );
};

export default function Services() {
  const webRef = useRef(null);
  const canvaRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const [webCanScrollLeft, setWebCanScrollLeft] = useState(false);
  const [webCanScrollRight, setWebCanScrollRight] = useState(false);
  const [canvaCanScrollLeft, setCanvaCanScrollLeft] = useState(false);
  const [canvaCanScrollRight, setCanvaCanScrollRight] = useState(false);

  const checkScroll = (ref, setLeft, setRight) => {
    if (!ref.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = ref.current;
    setLeft(scrollLeft > 5);
    setRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    checkScroll(webRef, setWebCanScrollLeft, setWebCanScrollRight);
    checkScroll(canvaRef, setCanvaCanScrollLeft, setCanvaCanScrollRight);
  }, []);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  // Inject the scrollbar hiding styles into the document head
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="py-8 px-4 mt-8 lg:mt-10 lg:px-32 bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 min-h-screen overflow-hidden">
      <ScrollSection
        title="🌐 Web Development Services"
        services={webServices}
        canScrollLeft={webCanScrollLeft}
        canScrollRight={webCanScrollRight}
        scrollBy={(val) => webRef.current.scrollBy({ left: val, behavior: "smooth" })}
        onScroll={() => checkScroll(webRef, setWebCanScrollLeft, setWebCanScrollRight)}
        leftArrowColor="text-indigo-900"
        rightArrowColor="text-indigo-900"
        scrollRef={webRef}
        onCardClick={handleCardClick}
      />
      <ScrollSection
        title="🎨 Canva & Graphic Design Services"
        services={canvaServices}
        canScrollLeft={canvaCanScrollLeft}
        canScrollRight={canvaCanScrollRight}
        scrollBy={(val) => canvaRef.current.scrollBy({ left: val, behavior: "smooth" })}
        onScroll={() => checkScroll(canvaRef, setCanvaCanScrollLeft, setCanvaCanScrollRight)}
        leftArrowColor="text-pink-700"
        rightArrowColor="text-pink-700"
        scrollRef={canvaRef}
        onCardClick={handleCardClick}
        marginBottom="mb-32"
      />

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} service={selectedService || {}} />
    </div>
  );
}
