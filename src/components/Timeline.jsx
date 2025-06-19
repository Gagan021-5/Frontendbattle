import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { year: '2022', event: '🚀 Mission Alpha Launched' },
  { year: '2023', event: '🪐 Discovered Exoplanet X-29' },
  { year: '2024', event: '🤖 First AI Astrobiology Report' },
  { year: '2025', event: '⚡ Hyperdrive Simulation Complete' },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-4 relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="sticky top-16 z-20 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-purple-400 mb-16 backdrop-blur-xl bg-black/30 px-4 py-2 rounded-md inline-block shadow-lg"
        >
          📅 Galactic Timeline
        </motion.h2>
      </div>

      <div className="relative border-l-4 border-purple-600 pl-10 max-w-2xl mx-auto">
        {events.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="relative mb-14"
          >
            <div className="absolute -left-6 w-8 h-8 flex items-center justify-center bg-purple-600 rounded-full shadow-lg animate-pulse hover:scale-110 transition">
              <span className="text-white font-bold">{item.year.slice(2)}</span>
            </div>
            <div className="ml-2 text-gray-200">
              <h3 className="text-xl font-semibold mb-1">{item.year}</h3>
              <p className="text-gray-400">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stars background animation */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <div className="w-full h-full bg-stars bg-cover opacity-10 animate-pan" />
      </div>
    </section>
  );
};

export default Timeline;
