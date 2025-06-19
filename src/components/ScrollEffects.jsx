// components/ScrollEffects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ScrollEffects = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-t from-black via-purple-800 to-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-4xl font-bold mb-4">🌌 Journey Through the Cosmos</h2>
        <p className="text-gray-300 max-w-xl mx-auto">
          Scroll to begin your deep-space exploration, uncover the mysteries of the universe, and meet the wonders of each celestial body.
        </p>
      </motion.div>
    </section>
  );
};

export default ScrollEffects;
