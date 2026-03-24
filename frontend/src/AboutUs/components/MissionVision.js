import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-[60px] px-10 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        
        {/* Card 1: Vision */}
        <div className="bg-white rounded-2xl p-[40px_30px] text-left border border-red-500 text-red-500">
          <div className="mb-6 relative">
            <svg viewBox="0 0 24 24" fill="none" className="w-[60px] h-[60px] block" stroke="#eab308" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l3.5-3.5L16.5 20l-3.5 3.5zm7-7a5.5 5.5 0 1010-10 5.5 5.5 0 00-10 10z" />
            </svg>
          </div>
          <h3 className="text-[26px] font-bold m-0 mb-4 text-gray-800">Our Vision</h3>
          <p className="text-[15px] leading-[1.6] text-gray-600 m-0 mb-[30px] min-h-[60px]">
            To become the most trusted and technologically advanced ground mobility 
            partner for corporates and expats.
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">Setting new standards in service</li>
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">Expanding with smart, scalable systems</li>
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">Earning trust through consistency</li>
          </ul>
        </div>

        {/* Card 2: Mission */}
        <div className="bg-white rounded-2xl p-[40px_30px] text-left border border-orange-500 text-orange-500">
          <div className="mb-6 relative">
             <svg viewBox="0 0 24 24" fill="none" className="w-[60px] h-[60px] block" stroke="#3b82f6" strokeWidth="2">
              <rect x="6" y="4" width="12" height="16" rx="2" strokeLinecap="round" />
              <path strokeLinecap="round" d="M10 8h4m-4 4h4" />
            </svg>
          </div>
          <h3 className="text-[26px] font-bold m-0 mb-4 text-gray-800">Our Mission</h3>
          <p className="text-[15px] leading-[1.6] text-gray-600 m-0 mb-[30px] min-h-[60px]">
            To deliver consistent, secure, and high-quality chauffeur-driven experiences 
            through:
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">Verified professionals</li>
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">A modern, compliant fleet</li>
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">A technology-first approach to mobility, <br/> safety, and customer support</li>
          </ul>
        </div>

        {/* Card 3: Core Values */}
        <div className="bg-white rounded-2xl p-[40px_30px] text-left border border-red-300 text-red-300">
          <div className="mb-6 relative">
            <svg viewBox="0 0 24 24" fill="none" className="w-[60px] h-[60px] block" stroke="#0ea5e9" strokeWidth="2">
               <polygon points="12 2 22 8.5 12 22 2 8.5 12 2" strokeLinecap="round" strokeLinejoin="round"/>
               <line x1="12" y1="2" x2="12" y2="22" />
               <line x1="22" y1="8.5" x2="2" y2="8.5" />
            </svg>
            <span className="bg-amber-500 text-white text-[10px] font-extrabold py-1 px-2.5 rounded-full inline-block mt-2.5">OUR VALUES</span>
          </div>
          <h3 className="text-[26px] font-bold m-0 mb-4 text-gray-800">Our Core Values</h3>
          <p className="text-[15px] leading-[1.6] text-gray-600 m-0 mb-[30px] min-h-[60px]">
            We operate with principles that drive excellence in every journey.
          </p>
          <ul className="list-none p-0 m-0 flex flex-col gap-3">
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">Lead with integrity and professionalism</li>
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">Prioritize safety, transparency, and reliability</li>
            <li className="border border-gray-300 rounded-lg py-3 px-4 text-[13px] text-gray-700 font-medium leading-[1.4] bg-white">Embrace innovation to improve every ride</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
