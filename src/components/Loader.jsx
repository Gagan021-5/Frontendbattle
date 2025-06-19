// components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoaded, darkMode }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onLoaded, 1000);
    }, 3500);
    return () => clearTimeout(timeout);
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1 }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="relative w-40 h-40 mb-8 sm:w-28 sm:h-28">
        <div className="absolute w-5 h-5 bg-blue-500 rounded-full animate-orbit"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-yellow-300 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-yellow-500/40" />
      </div>
      <h1 className="text-xl font-mono tracking-widest animate-pulse text-center px-4 sm:text-base">
        Launching your space journey...
      </h1>
    </motion.div>
  );
};

export default Loader;
