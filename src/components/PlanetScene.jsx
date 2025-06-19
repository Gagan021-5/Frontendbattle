
import React from 'react';
import Spline from '@splinetool/react-spline';

const PlanetScene = () => {
  return (
    <div className="w-full h-[600px] md:h-[700px] overflow-hidden">
      <Spline scene="https://prod.spline.design/Um4APbDH6A-ERRfa/scene.splinecode" />
    </div>
  );
};

export default PlanetScene;
