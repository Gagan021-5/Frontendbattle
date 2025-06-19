// components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center relative bg-gradient-to-b from-black via-purple-900 to-black">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-5xl md:text-7xl font-extrabold text-center text-white"
      >
        Welcome to the <br />
        <span className="text-purple-400">SpaceVerse</span>
      </motion.h1>
    </section>
  );
};

export default HeroSection;
