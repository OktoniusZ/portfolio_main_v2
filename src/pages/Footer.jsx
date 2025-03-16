import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <section
      id="footer"
      className="py-16 text-center text-[#f4f4f4] flex items-center justify-center min-h-[50vh] px-4"
    >
      <motion.div
        className="max-w-sm md:max-w-xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-5xl mb-4 text-[#f4f4f4] shadow-md"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.p className="text-lg md:text-xl mb-8" variants={itemVariants}>
          Feel free to reach out for collaborations or a quick chat. Always
          happy to connect👋
        </motion.p>

        {/* Social Media Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8"
          variants={itemVariants}
        >
          <a
            href="https://github.com/OktoniusZ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-4xl md:text-5xl text-[#f4f4f4] transition-all duration-300 hover:text-[#b47aff] hover:-translate-y-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/oktonius-zevanya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-4xl md:text-5xl text-[#f4f4f4] transition-all duration-300 hover:text-[#b47aff] hover:-translate-y-1"
            />
          </a>
          <a
            href="https://www.instagram.com/oktoniuszevanya/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-4xl md:text-5xl text-[#f4f4f4] transition-all duration-300 hover:text-[#b47aff] hover:-translate-y-1"
            />
          </a>
          <a
            href="mailto:oktoniuszevanya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FontAwesomeIcon
              icon={faEnvelopeSolid}
              className="text-4xl md:text-5xl text-[#f4f4f4] transition-all duration-300 hover:text-[#b47aff] hover:-translate-y-1"
            />
          </a>
        </motion.div>

        {/* Additional Text */}
        <motion.p
          className="text-sm md:text-lg opacity-80"
          variants={itemVariants}
        >
          Designed & built by Oktonius Zevanya Simanungkalit
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Footer;
