import React from 'react';
import './intro.css';

const Intro = () => {
  return (
    <div className="intro-holder p-5">
      <div className="intro-container pt-2 md:flex flex-col md:flex-row w-full p-2 rounded-xl bg-slate-100 gap-4">
        
        {/* Text Section */}
        <div className="text-wrapper md:basis-1/4 text-center md:text-left">
          <h1 className="text-2xl font-bold text-left">For Faith</h1>
          <h1 className="text-2xl font-bold text-left">For Grace</h1>
          <h1 className="text-2xl font-bold text-left">For Eternal Life</h1>
          <p className="mt-2 text-left">
            Welcome to GloryVine Church, where spiritual growth and divine connection flourish.
          </p>
        </div>

        {/* Image Section */}
        <div className="image-wrapper md:basis-3/4">
          <img
            src="https://res.cloudinary.com/dtrskzurx/image/upload/v1738425409/pastor_uitwbv.jpg"
            className="w-full h-auto max-h-[400px] rounded-xl object-cover"
            alt="Pastor"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Intro;
