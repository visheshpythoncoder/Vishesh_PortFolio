import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";
import { GiCakeSlice, GiBrain } from "react-icons/gi";
import { BiWorld } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdEmail } from "react-icons/md";

// ✅ Imported image instead of direct src usage
import profileImg from "../Images/pr4.png";

export default function About() {
  const InfoItem = ({ Icon, color, text }) => (
    <div className="flex items-center gap-3">
      <Icon className={`text-xl ${color}`} />
      <span>{text}</span>
    </div>
  );

  const SocialLink = ({ href, Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon className="text-2xl hover:scale-125 transition-transform text-white" />
    </a>
  );

  return (
    <>
      <style>
        {`
          @keyframes gradientBackground {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .animated-gradient {
            background: linear-gradient(-45deg, #0f0c29, #302b63, #8e44ad, #f8cdda);
            background-size: 400% 400%;
            animation: gradientBackground 12s ease infinite;
          }
        `}
      </style>

      <section
        id="about"
        className="animated-gradient min-h-screen text-white px-4 sm:px-8 md:px-16 lg:px-32 py-10 md:py-20 flex items-center"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={profileImg}
              alt="Vishesh Maraskolhe"
              className="rounded-full w-full max-w-xl sm:max-w-xl md:max-w-2xl aspect-square object-cover shadow-[0_25px_60px_rgba(0,255,255,0.4)] border-[6px] border-cyan-400"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring" }}
            style={{ transformStyle: "preserve-3d" }}
            className="text-center lg:text-left"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-pink-500 tracking-wider"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-xl sm:text-2xl font-semibold mb-4 text-white"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Vishesh Maraskolhe
            </motion.p>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-cyan-400 font-medium">I’m a </span>
              <span className="text-white font-bold">
                <Typewriter
                  words={[
                    "Web Developer 💻",
                    "UI/UX Designer 🎨",
                    "React Enthusiast ⚛️",
                    "Creative Coder ✨",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={30}
                  delaySpeed={1200}
                />
              </span>
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-base md:text-lg text-gray-200 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <InfoItem
                Icon={GiCakeSlice}
                color="text-pink-400"
                text="22 May 2002"
              />
              <InfoItem
                Icon={BiWorld}
                color="text-blue-400"
                text="www.example.com"
              />
              <InfoItem
                Icon={BsFillTelephoneFill}
                color="text-green-400"
                text="+91-8956381223"
              />
              <InfoItem
                Icon={GoLocation}
                color="text-red-400"
                text="Nagpur, Maharashtra, India"
              />
              <InfoItem
                Icon={FaGraduationCap}
                color="text-yellow-300"
                text="Master's"
              />
              <InfoItem
                Icon={MdEmail}
                color="text-orange-300"
                text="visheshmaraskolhej@gmail.com"
              />
              <InfoItem
                Icon={FaRocket}
                color="text-purple-400"
                text="Available"
              />
              <InfoItem Icon={GiBrain} color="text-indigo-300" text="23" />
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 py-4 bg-gray-900 rounded-xl mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 }}
            >
              <SocialLink
                href="https://facebook.com/yourusername"
                Icon={FaFacebookF}
              />
              <SocialLink
                href="https://instagram.com/yourusername"
                Icon={FaInstagram}
              />
              <SocialLink
                href="https://twitter.com/yourusername"
                Icon={FaTwitter}
              />
              <SocialLink
                href="https://linkedin.com/in/yourusername"
                Icon={FaLinkedinIn}
              />
              <SocialLink
                href="https://youtube.com/@yourusername"
                Icon={FaYoutube}
              />
            </motion.div>

            <motion.p
              className="text-center lg:text-left text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              I build responsive websites and digital products that fuse{" "}
              <span className="text-cyan-400 font-semibold">creativity</span>{" "}
              with <span className="text-pink-400 font-semibold">code</span>.
              Passionate about{" "}
              <span className="text-purple-400 font-semibold">UI/UX</span> and{" "}
              <span className="text-green-400 font-semibold">performance</span>,
              I turn client ideas into sleek, functional realities.
              <br />
              <span className="inline-block mt-4 text-white font-bold">
                Let's create something amazing together!
              </span>
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
