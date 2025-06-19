import React, { useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { TbUniverse } from "react-icons/tb";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ toggleDarkMode, darkMode, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (id) =>
    `block py-2 md:inline-block md:py-0 px-4 transition-colors duration-300 ${
      activeSection === id
        ? "text-purple-500 font-semibold"
        : "text-gray-300 hover:text-purple-400"
    }`;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 dark:bg-white/10 border-b border-white/10 dark:border-black/10 px-6 py-3"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-purple-400 inline-flex items-center gap-2">
          <TbUniverse className="size-6" /> SpaceVerse
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className={linkClass("home")}>Home</a>
          <a href="#planets" className={linkClass("planets")}>Planets</a>
          <a href="#about" className={linkClass("about")}>About</a>

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full hover:bg-purple-500/20 transition cursor-pointer text-purple-400"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-purple-500/20 transition text-purple-400"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-purple-400 p-2 rounded hover:bg-purple-500/20 transition"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2 text-center backdrop-blur-md bg-black/40 dark:bg-white/10 rounded-md py-4">
          <a href="#home" onClick={() => setIsOpen(false)} className={linkClass("home")}>Home</a>
          <a href="#planets" onClick={() => setIsOpen(false)} className={linkClass("planets")}>Planets</a>
          <a href="#about" onClick={() => setIsOpen(false)} className={linkClass("about")}>About</a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
