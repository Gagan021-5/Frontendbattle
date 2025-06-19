// components/Achievements.jsx
import React from 'react';

const stats = [
  { label: 'Stars Explored', value: '10K+' },
  { label: 'Galaxies Tracked', value: '5' },
  { label: 'Missions Launched', value: '42' },
];

const Achievements = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-purple-950 to-black text-center">
      <h2 className="text-3xl font-bold mb-10">🚀 Achievements</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-purple-800/20 backdrop-blur-md p-6 rounded-xl w-52 shadow-md">
            <h3 className="text-4xl font-bold text-purple-300">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
