import React from 'react';

import carImage from '../../asserts/carImage2.png';
import imgHatchback from '../../asserts/hatchBacks_image.png';
import imgMUV from '../../asserts/MUV_image.png';
import imgTempo from '../../asserts/tempo_travelers_image.png';
import imgAC from '../../asserts/AC_image.png';

const fleetList = [
  {
    id: 1,
    title: 'Hatchbacks & Sedans',
    desc: 'Ideal for individual pickups, senior staff, or compact city routes.',
    img: imgHatchback
  },
  {
    id: 2,
    title: 'MUVs & SUVs',
    desc: 'Spacious, comfortable, and perfect for small teams or mid-range commutes.',
    img: imgMUV
  },
  {
    id: 3,
    title: 'Mini & Large Tempo Travelers',
    desc: 'Best suited for shift-based staff transport and high-volume deployment.',
    img: imgTempo
  },
  {
    id: 4,
    title: 'Luxury Air-Conditioned Coaches (on request)',
    desc: 'Premium option for corporate events, long-distance staff movement, or executive group travel.',
    img: imgAC
  }
];

const FleetOptions = () => {
  return (
    <section className="flex flex-col py-20 px-10 bg-white font-sans">
      <div className="max-w-[800px] mx-auto mb-16 text-center">
        <h2 className="text-[42px] font-extrabold text-slate-900 mb-4 tracking-tight">Why Your Website Is Your Best Salesperson</h2>
        <p className="text-[15px] text-gray-600 leading-relaxed m-0">Choose from a wide range of well-maintained vehicles tailored for employee transportation across all business sizes and shift types.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-[60px] max-w-[1200px] mx-auto items-stretch w-full">
        <div className="flex-1 flex justify-center items-center">
          <img src={carImage} alt="Red Car" className="w-full max-w-[600px] h-auto object-cover" />
        </div>
        
        <div className="flex-1 py-5">
          <div className="flex flex-col gap-10">
            {fleetList.map((item, idx) => (
              <div key={item.id} className="flex flex-row gap-6 relative group">
                <div className="flex flex-col items-center relative z-10 shrink-0">
                  <div className="w-10 h-10 flex items-center justify-center shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  {/* Connective SVG line mapped to CSS equivalent */}
                  {idx !== fleetList.length - 1 && (
                    <div className="absolute top-10 bottom-[-40px] left-1/2 -translate-x-1/2 w-0.5 bg-slate-200 -z-10"></div>
                  )}
                </div>
                <div className="pt-1">
                  <h4 className="text-[18px] font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-[15px] text-slate-500 leading-relaxed m-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetOptions;
