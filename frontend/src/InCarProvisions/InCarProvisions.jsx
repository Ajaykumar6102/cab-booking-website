import React from 'react';

// Import icons
import waterBottle from '../asserts/water_bottle.png';
import newspaper from '../asserts/news_paper.png';
import tissuePouch from '../asserts/tissue_paper_pouch.png';
import cookies from '../asserts/cookies.png';
import writingSlip from '../asserts/writing_slip_and _paper.png';
import iceBox from '../asserts/icebox.png';
import extinguisher from '../asserts/fire_extinguisher.png';
import perfume from '../asserts/perfume.png';
import charger from '../asserts/hand_phone_charger.png';
import gpsTracking from '../asserts/gps_tracking.png';
import umbrella from '../asserts/umbrella.png';
import torchLight from '../asserts/torch_light.png';
import firstAidKit from '../asserts/first_aid_kit.png';

const provisions = [
  { id: 1, name: 'Water bottle', icon: waterBottle },
  { id: 2, name: 'Newspaper', icon: newspaper },
  { id: 3, name: 'Tissue Paper pouch', icon: tissuePouch },
  { id: 4, name: 'Cookies', icon: cookies },
  { id: 5, name: 'Writing slip & Pen', icon: writingSlip },
  { id: 6, name: 'Ice Box (Based on request)', icon: iceBox },
  { id: 7, name: 'Fire Extinguisher Kit', icon: extinguisher },
  { id: 8, name: 'Perfume', icon: perfume },
  { id: 9, name: 'Hand-phone Charger', icon: charger },
  { id: 10, name: 'GPS Tracking', icon: gpsTracking },
  { id: 11, name: 'Umbrella', icon: umbrella },
  { id: 12, name: 'Torch Light', icon: torchLight },
  { id: 13, name: 'First Aid Kit', icon: firstAidKit }
];

const InCarProvisions = () => {
  return (
    <div className="py-20 px-[5%] bg-[#f4f6f8] text-[#1a1a1a] font-sans text-center">
      <div className="mb-[60px]">
        <h2 className="text-[38px] font-extrabold m-0 mb-2.5 text-black">In-car Provisions</h2>
        <p className="text-[14px] text-[#444] max-w-[650px] mx-auto font-medium">Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-[30px] max-w-[1300px] mx-auto mb-[60px]">
        {provisions.map((item) => (
          <div className="bg-transparent w-full sm:w-[calc(50%-15px)] md:w-[calc(33.333%-20px)] lg:w-[calc(20%-24px)] min-w-[160px] px-2.5 py-[15px] flex flex-col items-center justify-center transition-transform duration-200 cursor-default hover:-translate-y-[3px]" key={item.id}>
            <div className="h-[50px] flex items-center justify-center mb-[15px]">
              <img src={item.icon} alt={item.name} className="max-h-[48px] max-w-[48px] object-contain" />
            </div>
            <p className="text-[13px] font-bold text-[#1a1a1a] m-0 text-center">{item.name}</p>
          </div>
        ))}
      </div>

      <button className="bg-gradient-to-r from-[#f44336] to-[#f39c12] text-white border-none py-4 px-[45px] rounded-[30px] text-base font-semibold cursor-pointer shadow-[0_6px_20px_rgba(244,67,54,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(244,67,54,0.6)]">Book Your Journey Now</button>
    </div>
  );
};

export default InCarProvisions;
