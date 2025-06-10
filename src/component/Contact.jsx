import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaGlobe,
} from 'react-icons/fa';

const ContactCard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 to-indigo-900 flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <motion.div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12"
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 1.2, type: 'spring' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Info Section */}
        <div className="flex flex-col justify-between">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-800 mb-4 sm:mb-6">
              Let's Work Together!
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              We’re a creative duo: a professional Web Developer and a Canva Design Creator.
              Whether you need a stunning website or eye-catching graphics, we’re here to make it happen.
            </p>
            <div className="flex flex-col space-y-4 text-base sm:text-lg text-gray-700">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-indigo-600 text-xl" /> <span>visheshmaraskolhej@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-indigo-600 text-xl" /> <span>+91-89563-81223</span>
              </div>
              <div className="flex items-center gap-3">
                <FaGlobe className="text-indigo-600 text-xl" /> <span>www.DV_WebCanvas.dev</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-6 sm:mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-indigo-700 text-2xl sm:text-3xl hover:scale-125 transition-transform" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram className="text-pink-600 text-2xl sm:text-3xl hover:scale-125 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="bg-gray-50 rounded-2xl shadow-inner p-6 sm:p-8 flex flex-col gap-4 sm:gap-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-indigo-700 mb-1 sm:mb-2">
            Send Us a Message
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 sm:p-4 text-base sm:text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 sm:p-4 text-base sm:text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 sm:p-4 text-base sm:text-lg rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <motion.button
            type="submit"
            className="bg-indigo-600 text-white text-base sm:text-lg py-3 sm:py-4 rounded-xl hover:bg-indigo-700 transition-all font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Us
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactCard;
