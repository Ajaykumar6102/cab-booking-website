import React from 'react';
import storyGraphic from '../../asserts/golden_olive_leaves.png'; // Placeholder graphic

const OurStory = () => {
  return (
    <section className="py-20 px-10 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center text-center md:text-left md:gap-20 gap-10">
        
        {/* Left Graphic */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-[400px]">
            <img src={storyGraphic} alt="Our Story Graphic" className="w-full h-auto object-contain sepia-[.5] hue-rotate-[-30deg] saturate-200 brightness-110" />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-[1.2]">
          <h2 className="text-[48px] font-extrabold m-0 mb-[30px] inline-block bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">Our Story</h2>
          <p className="text-[16px] leading-[1.8] text-gray-700 m-0 mb-6 font-medium">
            Founded in 2015 with a mission to transform business travel in India, ENTREX 
            started as a small operation in Chennai focused on consistent, premium chauffeur 
            service. Over the years, we've evolved into a pan-India enterprise mobility partner, 
            serving MNCs, diplomats, international consultants, and expats with personalized 
            care and operational excellence.
          </p>
          <p className="text-[16px] leading-[1.8] text-gray-700 m-0 font-medium">
            We don't just move people. We manage experiences — using technology, 
            compliance, and hospitality to create seamless journeys across cities and states.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurStory;
