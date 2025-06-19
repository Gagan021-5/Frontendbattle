
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black via-purple-900 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-purple-400">🌠 About SpaceVerse</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          SpaceVerse is a fully animated, interactive galaxy exploration website designed with React, Tailwind CSS,
          Framer Motion, and Spline 3D. This experience lets you travel across the cosmos, view 3D planets, track
          astronomical missions, and celebrate cosmic achievements — all within a futuristic, immersive UI.
        </p>
        <p className="mt-4 text-md text-gray-400">
          Built for innovation. Designed for impact. Powered by creativity. 🌌
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
