import React from 'react';

// Import logos
import googleLogo from '../asserts/google_logo.png';
import creativeMarketLogo from '../asserts/creative_market_logo.png';
import airbnbLogo from '../asserts/airbnb_logo.png';
import shopifyLogo from '../asserts/shopify_logo.png';
import amazonLogo from '../asserts/amazon_logo.png';
import dropboxLogo from '../asserts/dropbox_logo.png';
import spotifyLogo from '../asserts/spotify_logo.png';
import asanaLogo from '../asserts/asana_logo.png';
import deliverooLogo from '../asserts/deliveroo_logo.png';
import nissanLogo from '../asserts/niisan_logo.png';

const TrustedCompanies = () => {
  return (
    <div className="py-[60px] px-[5%] bg-[#f7f8f9] text-center font-sans">
      <div className="mb-[50px]">
        <h2 className="text-[26px] sm:text-[32px] font-extrabold text-black m-0 mb-2.5">Trusted by 1500+ popular companies</h2>
        <p className="text-[14px] text-[#555] m-0">Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.</p>
      </div>

      <div className="grid grid-cols-2 min-[600px]:grid-cols-3 md:grid-cols-5 gap-y-[30px] gap-x-[15px] sm:gap-y-10 sm:gap-x-5 max-w-[1000px] mx-auto items-center justify-items-center">
        {/* Row 1 */}
        <div className="flex justify-center items-center w-full h-[60px]"><img src={googleLogo} alt="Google" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
        <div className="flex justify-center items-center w-full h-[60px]"><img src={creativeMarketLogo} alt="Creative Market" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
        <div className="flex justify-center items-center w-full h-[60px]"><img src={airbnbLogo} alt="Airbnb" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
        <div className="flex justify-center items-center w-full h-[60px]"><img src={shopifyLogo} alt="Shopify" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
        <div className="flex justify-center items-center w-full h-[60px]"><img src={amazonLogo} alt="Amazon" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>

        {/* Row 2 */}
        <div className="flex justify-center items-center w-full h-[60px]"><img src={dropboxLogo} alt="Dropbox" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
        <div className="flex justify-center items-center w-full h-[60px]"><img src={spotifyLogo} alt="Spotify" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
        <div className="flex justify-center items-center w-full h-[60px]"><img src={asanaLogo} alt="Asana" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
        <div className="flex justify-center items-center w-full h-[60px]"><img src={deliverooLogo} alt="Deliveroo" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
        <div className="flex justify-center items-center w-full h-[60px]"><img src={nissanLogo} alt="Nissan" className="max-w-full max-h-[40px] object-contain opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0" /></div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
