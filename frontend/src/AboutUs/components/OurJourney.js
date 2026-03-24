import React from 'react';
import journeyImage from '../../asserts/our_journey_image.png';

const OurJourney = () => {
  return (
    <section className="py-10 px-5 md:py-20 md:px-10 bg-[#fcfcfc] flex justify-center items-center">
      <div className="w-full max-w-[1200px]">
        <img src={journeyImage} alt="Entrex Our Journey Timeline" className="w-full h-auto object-contain" />
      </div>
    </section>
  );
};

export default OurJourney;
