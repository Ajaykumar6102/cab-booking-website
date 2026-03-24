import React from 'react';
import ittaLogo from '../asserts/ITTA_logo.png';
import iatoLogo from '../asserts/IATO_logo.png';
import wreathLogo from '../asserts/golden_olive_leaves.png';

const OurCertifications = () => {
  return (
    <div className="py-20 px-10 bg-[#f6f6f6] flex justify-center items-center font-sans">
      <div className="flex flex-col md:flex-row items-center justify-center gap-[50px] md:gap-10 max-w-[1200px] w-full">
        
        {/* Left Card */}
        <div className="bg-white rounded-xl p-[30px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex-1 max-w-[320px] flex flex-col items-start text-left">
          <div className="w-full flex justify-start mb-5">
            <img src={ittaLogo} alt="ITTA Logo" className="h-[90px] object-contain" />
          </div>
          <h3 className="text-base font-bold text-[#1f2937] m-0 mb-2.5 leading-[1.4]">Affiliations: IATO – Indian Association of Tour Operators</h3>
          <p className="text-[13px] text-[#6b7280] leading-[1.5] m-0">
            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
          </p>
        </div>

        {/* Center Wreath */}
        <div className="flex justify-center items-center relative flex-[1.5] max-w-[450px]">
          <img src={wreathLogo} alt="Golden Olive Leaves Wreath" className="w-full max-w-[380px] object-contain opacity-90" />
          <h2 className="absolute text-[34px] font-extrabold text-black text-center leading-[1.2] m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Our<br />Certifications</h2>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-xl p-[30px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex-1 max-w-[320px] flex flex-col items-start text-left">
          <div className="w-full flex justify-start mb-5">
            <img src={iatoLogo} alt="IATO Logo" className="h-[90px] object-contain rounded-md" />
          </div>
          <h3 className="text-base font-bold text-[#1f2937] m-0 mb-2.5 leading-[1.4]">Affiliations: IATO – Indian Association of Tour Operators</h3>
          <p className="text-[13px] text-[#6b7280] leading-[1.5] m-0">
            We offer GPS-enabled rides so you—and your loved ones—can track your journey with full transparency.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurCertifications;
