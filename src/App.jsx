// src/App.jsx
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import PlanetScene from './components/PlanetScene';
import HeroSection from './components/HeroSection';
import PlanetsOverview from './components/PlanetsOverview';
import AboutSection from './components/AboutSection';
import ScrollEffects from './components/ScrollEffects';
import Achievements from './components/Achievements';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';
import useScrollSpy from './hooks/useScrollSpy';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const activeSection = useScrollSpy(['home', 'planets', 'about']);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
      {loading ? (
        <Loader onLoaded={() => setLoading(false)} darkMode={darkMode} />
      ) : (
        <div className={`relative scroll-smooth ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
          <StarsBackground />

          <Navbar
            toggleDarkMode={() => setDarkMode(!darkMode)}
            darkMode={darkMode}
            activeSection={activeSection}
          />

          <section id="home">
            <HeroSection />
            <ScrollEffects />
          </section>

          <section id="planets" className="py-20 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl text-center mb-10 font-extrabold text-purple-400 backdrop-blur-md bg-black/30 px-4 py-2 rounded-md shadow-md"
            >
              🪐 Explore Planets
            </motion.h2>
            <PlanetScene />
            <PlanetsOverview />
          </section>

          <Achievements />
          <Timeline />

          <section id="about">
            <AboutSection />
          </section>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
