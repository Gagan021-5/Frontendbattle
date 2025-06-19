// components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-purple-900 to-black py-10 px-4 text-center text-white mt-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-bold mb-3">🚀 SpaceVerse</h3>
        <p className="text-sm text-gray-400">
          Made with ❤️ by Team Galaxy | © {new Date().getFullYear()}
        </p>

        <div className="flex justify-center mt-4 gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@spaceverse.com"
            className="hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
