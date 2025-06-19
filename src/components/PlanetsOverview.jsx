
import React from 'react';

const planets = [
  { name: 'Mercury', desc: 'Smallest and closest planet to the Sun' },
  { name: 'Venus', desc: 'Hottest planet with thick atmosphere' },
  { name: 'Earth', desc: 'Our home planet' },
  { name: 'Mars', desc: 'The red planet with signs of water' },
  { name: 'Jupiter', desc: 'Largest planet with massive storms' },
  { name: 'Saturn', desc: 'Known for its rings' },
  { name: 'Uranus', desc: 'Rotates on its side' },
  { name: 'Neptune', desc: 'Furthest planet with deep blue color' },
];

const PlanetsOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {planets.map((planet) => (
        <div
          key={planet.name}
          className="bg-gradient-to-br from-purple-700 cursor-pointer to-black p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-xl font-semibold text-purple-300">{planet.name}</h3>
          <p className="text-sm text-gray-300 mt-2">{planet.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default PlanetsOverview;
