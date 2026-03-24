import React from 'react';

import commuteImage from '../../asserts/insideCar_image.png'; 
import imgGPS from '../../asserts/realTimeGPS_image.png';
import imgShift from '../../asserts/dynamicShift_image.png';
import imgChauffeur from '../../asserts/verifiedClaffeurs_image.png';
import imgPanIndia from '../../asserts/PAN_india_image.png';
import imgControlRoom from '../../asserts/controlRoom_image.png';
import imgData from '../../asserts/dataDriven_image.png';

const features = [
  {
    id: 1,
    title: 'Real-Time GPS Tracking',
    description: 'Monitor routes, driver behavior, and vehicle status through our centralized tracking system.',
    img: imgGPS
  },
  {
    id: 2,
    title: 'Dynamic Shift Management',
    description: 'Auto-generated rosters based on employee shift timings, integrated with your HRMS or scheduling platform.',
    img: imgShift
  },
  {
    id: 3,
    title: 'Verified Chauffeurs',
    description: 'All drivers undergo background checks, safety training, and etiquette certification.',
    img: imgChauffeur
  },
  {
    id: 4,
    title: 'PAN India Coverage',
    description: 'Operations across Tier 1, Tier 2, and emerging metro regions — no location is out of reach.',
    img: imgPanIndia
  },
  {
    id: 5,
    title: '24x7 Control Room',
    description: 'Round-the-clock support for routing, rescheduling, or emergency handling.',
    img: imgControlRoom
  },
  {
    id: 6,
    title: 'Data-Driven Reporting',
    description: 'MIS reports, trip logs, billing summaries, and audit trails — all available via dashboard or export.',
    img: imgData
  }
];

const WhyEntrexCommute = () => {
  return (
    <section className="py-20 px-10 bg-white font-sans">
      <div className="flex flex-col lg:flex-row gap-[60px] max-w-[1200px] mx-auto items-center">
        <div className="flex-1">
          <h2 className="text-[42px] font-extrabold text-slate-900 mb-10 leading-[1.2] tracking-tight">Why ENTREX for<br />Employee Commute?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]">
            {features.map(feature => (
              <div key={feature.id} className="flex flex-col items-start">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                  <img src={feature.img} alt={feature.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed m-0">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 flex justify-center">
          <img src={commuteImage} alt="Employee Commute" className="w-full max-w-[600px] rounded-2xl shadow-xl object-cover" />
        </div>
      </div>
    </section>
  );
};

export default WhyEntrexCommute;
