import React from 'react';
import car_image from '../asserts/car_image.png';
import award from '../asserts/award.png';
import magic_star from '../asserts/magic_star.png';
import gps from '../asserts/gps.png';
import dollar_square from '../asserts/dollar_square.png';
import medal from '../asserts/medal.png';
import support24 from '../asserts/24-support.png';

const WhyEntrex = () => {
  return (
    <div className="py-20 px-[5%] bg-[#f4f6f8] text-[#1a1a1a] text-center font-sans overflow-x-hidden">
      <div className="mb-[50px]">
        <h2 className="text-[38px] font-extrabold m-0 mb-2.5 text-black tracking-[-0.5px]">
          Why <span className="relative inline-block text-black z-10 w-fit after:content-[''] after:absolute after:-left-[5%] after:-bottom-0 after:w-[110%] after:h-3.5 after:bg-gradient-to-r after:from-[#e74c3c] after:to-[#f39c12] after:-z-10 after:rounded-sm">ENTREX?</span>
        </h2>
        <p className="text-[14px] text-[#333] max-w-[600px] mx-auto font-medium">Trusted by hundreds of travelers and corporates across India for a premium ride experience.</p>
      </div>

      <div className="flex flex-col min-[900px]:flex-row justify-center items-center relative max-w-[1400px] mx-auto gap-10 min-[900px]:gap-[30px]">

        {/* Left Features */}
        <div className="flex-1 flex flex-col gap-10 min-[900px]:gap-[60px] z-10 w-full min-[900px]:w-auto">
          <div className="flex flex-col max-w-full min-[900px]:max-w-[360px] items-center min-[900px]:items-end text-center min-[900px]:text-right mx-auto min-[900px]:ml-auto min-[900px]:mr-0">
            <div className="flex items-center gap-2 mb-2">
              <img src={award} alt="Award" className="w-5 h-5 object-contain" />
              <h4 className="text-[18px] font-extrabold text-[#0a1f44] m-0">Premium Chauffeurs</h4>
            </div>
            <p className="text-[12px] leading-[1.6] text-[#444] m-0 font-medium">All our drivers are handpicked, background-<br className="hidden min-[900px]:block"/>verified, professionally dressed, and trained for<br className="hidden min-[900px]:block"/>top-tier customer service.</p>
          </div>

          <div className="flex flex-col max-w-full min-[900px]:max-w-[360px] items-center min-[900px]:items-end text-center min-[900px]:text-right mx-auto min-[900px]:transform min-[900px]:-translate-x-[60px]">
            <div className="flex items-center gap-2 mb-2">
              <img src={magic_star} alt="Star" className="w-5 h-5 object-contain" />
              <h4 className="text-[18px] font-extrabold text-[#0a1f44] m-0">Well-Maintained Vehicles</h4>
            </div>
            <p className="text-[12px] leading-[1.6] text-[#444] m-0 font-medium">Our fleet is serviced regularly, sanitized daily,<br className="hidden min-[900px]:block"/>and equipped with modern amenities for a<br className="hidden min-[900px]:block"/>smooth and safe ride.</p>
          </div>

          <div className="flex flex-col max-w-full min-[900px]:max-w-[360px] items-center min-[900px]:items-end text-center min-[900px]:text-right mx-auto min-[900px]:ml-auto min-[900px]:mr-0">
            <div className="flex items-center gap-2 mb-2">
              <img src={gps} alt="GPS" className="w-5 h-5 object-contain" />
              <h4 className="text-[18px] font-extrabold text-[#0a1f44] m-0">Real-Time Tracking</h4>
            </div>
            <p className="text-[12px] leading-[1.6] text-[#444] m-0 font-medium">We offer GPS-enabled rides so you—and<br className="hidden min-[900px]:block"/>your loved ones—can track your journey with<br className="hidden min-[900px]:block"/>full transparency.</p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex-[1.5] w-full flex justify-center items-center z-[1]">
          <img src={car_image} alt="Entrex Car" className="w-full max-w-[750px] h-auto object-contain" />
        </div>

        {/* Right Features */}
        <div className="flex-1 flex flex-col gap-10 min-[900px]:gap-[60px] z-10 w-full min-[900px]:w-auto">
          <div className="flex flex-col max-w-full min-[900px]:max-w-[360px] items-center min-[900px]:items-start text-center min-[900px]:text-left mx-auto min-[900px]:mr-auto min-[900px]:ml-0">
            <div className="flex items-center gap-2 mb-2">
              <img src={dollar_square} alt="Dollar" className="w-5 h-5 object-contain" />
              <h4 className="text-[18px] font-extrabold text-[#0a1f44] m-0">Transparent Pricing</h4>
            </div>
            <p className="text-[12px] leading-[1.6] text-[#444] m-0 font-medium">No hidden charges. Transparent fare structure<br className="hidden min-[900px]:block"/>with real-time billing through our app.</p>
          </div>

          <div className="flex flex-col max-w-full min-[900px]:max-w-[360px] items-center min-[900px]:items-start text-center min-[900px]:text-left mx-auto min-[900px]:transform min-[900px]:translate-x-[60px]">
            <div className="flex items-center gap-2 mb-2">
              <img src={medal} alt="Medal" className="w-5 h-5 object-contain" />
              <h4 className="text-[18px] font-extrabold text-[#0a1f44] m-0">Punctual & Reliable</h4>
            </div>
            <p className="text-[12px] leading-[1.6] text-[#444] m-0 font-medium">Time is valuable. Our chauffeurs arrive ahead of<br className="hidden min-[900px]:block"/>schedule and follow optimized routes for timely<br className="hidden min-[900px]:block"/>arrivals.</p>
          </div>

          <div className="flex flex-col max-w-full min-[900px]:max-w-[360px] items-center min-[900px]:items-start text-center min-[900px]:text-left mx-auto min-[900px]:mr-auto min-[900px]:ml-0">
            <div className="flex items-center gap-2 mb-2">
              <img src={support24} alt="24/7 Support" className="w-5 h-5 object-contain" />
              <h4 className="text-[18px] font-extrabold text-[#0a1f44] m-0">24x7 Dedicated Support</h4>
            </div>
            <p className="text-[12px] leading-[1.6] text-[#444] m-0 font-medium">Our operations team is available around the<br className="hidden min-[900px]:block"/>clock to assist with bookings, changes, or<br className="hidden min-[900px]:block"/>emergencies.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyEntrex;
