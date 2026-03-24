import React from 'react';
import card1 from '../asserts/bento_card1.png';
import card2 from '../asserts/bento_card2.png';
import card3 from '../asserts/bento_card3.png';
import card4 from '../asserts/bento_card4.png';
import card5 from '../asserts/bento_card5.png';
import vectorIcon from '../asserts/vector.png';

const OurServices = () => {
  return (
    <div className="py-20 px-[5%] bg-[#f4f6f8] text-[#1a1a1a] font-sans text-center">
      <div className="mb-[50px]">
        <h2 className="text-[42px] font-extrabold m-0 mb-2.5 text-black">Our Services</h2>
        <p className="text-[14px] text-[#444] max-w-[600px] mx-auto mb-[30px] font-semibold">Premium travel solutions tailored for businesses and individuals across India.</p>

        <div className="inline-flex bg-[#e9ecef] rounded-full p-1.5 gap-1.5">
          <div className="px-6 py-2.5 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 bg-gradient-to-r from-[#f44336] to-[#f39c12] text-white shadow-[0_4px_10px_rgba(244,67,54,0.3)]">Corporate Solutions</div>
          <div className="px-6 py-2.5 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 text-[#666] bg-transparent hover:bg-black/5">Personal / Retail Rides</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1710px] mx-auto">
        {/* Card 1 */}
        <div className="relative rounded-2xl overflow-hidden h-[420px] bg-cover bg-center flex flex-col justify-end text-left p-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] md:col-span-2 lg:col-span-2" style={{ backgroundImage: `url(${card1})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-[1]"></div>
          <div className="relative z-[2] text-white">
            <div className="bg-white rounded-md w-8 h-8 flex justify-center items-center mb-5 shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
              <img src={vectorIcon} alt="Icon" className="w-4 h-auto" />
            </div>
            <h3 className="text-[24px] font-bold m-0 mb-2.5">Employee Commute Solutions</h3>
            <p className="text-sm leading-[1.5] m-0 text-white/90 font-normal">Daily transportation for corporate staff with fixed routes, real-time tracking, and punctual pickups.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-2xl overflow-hidden h-[420px] bg-cover bg-center flex flex-col justify-end text-left p-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]" style={{ backgroundImage: `url(${card2})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-[1]"></div>
          <div className="relative z-[2] text-white">
            <div className="bg-white rounded-md w-8 h-8 flex justify-center items-center mb-5 shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
              <img src={vectorIcon} alt="Icon" className="w-4 h-auto" />
            </div>
            <h3 className="text-[24px] font-bold m-0 mb-2.5">Executive Chauffeur Service</h3>
            <p className="text-sm leading-[1.5] m-0 text-white/90 font-normal">Suited, trained chauffeurs with luxury vehicles for directors, clients, and VIP executives.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative rounded-2xl overflow-hidden h-[420px] bg-cover bg-center flex flex-col justify-end text-left p-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]" style={{ backgroundImage: `url(${card3})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-[1]"></div>
          <div className="relative z-[2] text-white">
            <div className="bg-white rounded-md w-8 h-8 flex justify-center items-center mb-5 shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
              <img src={vectorIcon} alt="Icon" className="w-4 h-auto" />
            </div>
            <h3 className="text-[24px] font-bold m-0 mb-2.5">Event &amp; Conference Travel</h3>
            <p className="text-sm leading-[1.5] m-0 text-white/90 font-normal">Coordinated fleet for business meetings, offsites, seminars, and corporate gatherings—managed end-to-end.</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative rounded-2xl overflow-hidden h-[420px] bg-cover bg-center flex flex-col justify-end text-left p-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]" style={{ backgroundImage: `url(${card4})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-[1]"></div>
          <div className="relative z-[2] text-white">
            <div className="bg-white rounded-md w-8 h-8 flex justify-center items-center mb-5 shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
              <img src={vectorIcon} alt="Icon" className="w-4 h-auto" />
            </div>
            <h3 className="text-[24px] font-bold m-0 mb-2.5">Airport Transfers</h3>
            <p className="text-sm leading-[1.5] m-0 text-white/90 font-normal">Timely drop-offs and pickups for your team and guests from all major airports with live flight monitoring.</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="relative rounded-2xl overflow-hidden h-[420px] bg-cover bg-center flex flex-col justify-end text-left p-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)]" style={{ backgroundImage: `url(${card5})` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 z-[1]"></div>
          <div className="relative z-[2] text-white">
            <div className="bg-white rounded-md w-8 h-8 flex justify-center items-center mb-5 shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
              <img src={vectorIcon} alt="Icon" className="w-4 h-auto" />
            </div>
            <h3 className="text-[24px] font-bold m-0 mb-2.5">Transport Desk Management</h3>
            <p className="text-sm leading-[1.5] m-0 text-white/90 font-normal">On-demand ride management with 24x7 support, live dashboards, and centralized control from our app or portal.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurServices;
