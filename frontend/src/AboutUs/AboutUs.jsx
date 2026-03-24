import React from 'react';
import { Link } from 'react-router-dom';
import entrexLogo from '../asserts/entrex_logo.png';
import aboutImage from '../asserts/entrex_ad_pic.png';
import OurStory from './components/OurStory';
import MissionVision from './components/MissionVision';
import MeetFounders from './components/MeetFounders';
import OurJourney from './components/OurJourney';
import Testimonials from './components/Testimonials';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';
import OurCertifications from '../OurCertifications/OurCertifications';
import FAQ from '../FAQ/FAQ';
import NewsAndUpdates from '../NewsAndUpdates/NewsAndUpdates';
import LetsTalk from '../LetsTalk/LetsTalk';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen">
      {/* Top Bar */}
      <div className="flex justify-between px-[30px] lg:px-[60px] py-3 border-b border-slate-200 text-xs font-medium text-slate-600 bg-white items-center flex-col sm:flex-row gap-2">
        <div className="flex gap-4">bookings@entrex.in</div>
        <div className="flex gap-4">
          +91 44 4953 0055 | +91 98400 27990 | +91 91767 81444
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="flex justify-between items-center px-[30px] lg:px-[60px] py-5 bg-white flex-col lg:flex-row gap-5 lg:gap-0">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={entrexLogo} alt="Entrex Logo" className="h-12" />
          </Link>
        </div>
        <ul className="flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-8 m-0 p-0 list-none">
          <li><Link to="/about" className="text-black text-sm font-semibold transition-colors duration-200 border-b-2 border-transparent hover:border-black pb-1">About Us</Link></li>
          <li><Link to="/#services" className="text-slate-700 text-sm font-semibold transition-colors duration-200 hover:text-black hover:border-black pb-1 border-b-2 border-transparent">Services</Link></li>
          <li><Link to="/tour_packages" className="text-slate-700 text-sm font-semibold transition-colors duration-200 hover:text-black hover:border-black pb-1 border-b-2 border-transparent">Tour Packages</Link></li>
          <li><Link to="/luxury_car_rentals" className="text-slate-700 text-sm font-semibold transition-colors duration-200 hover:text-black hover:border-black pb-1 border-b-2 border-transparent">Luxury Car Rentals</Link></li>
          <li><Link to="/clients" className="text-slate-700 text-sm font-semibold transition-colors duration-200 hover:text-black hover:border-black pb-1 border-b-2 border-transparent">Clients</Link></li>
          <li><Link to="/contact" className="text-slate-700 text-sm font-semibold transition-colors duration-200 hover:text-black hover:border-black pb-1 border-b-2 border-transparent">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[1280px] mx-auto my-[80px] px-[30px] lg:px-[60px] flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1">
          <h1 className="text-[40px] md:text-[54px] font-extrabold leading-[1.15] mb-[30px] text-slate-900">
            India’s Premier <br />
            <span className="relative inline-block text-slate-900">
              Chauffeur Partner
              <svg className="absolute -bottom-1 left-0 w-full h-[15px]" viewBox="0 0 300 15" xmlns="http://www.w3.org/2000/svg">
                <path d="M5,10 Q140,-5 295,10" fill="transparent" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
            {' '}for <br />
            Corporates & Expats
          </h1>

          <p className="text-[15px] leading-relaxed text-slate-700 mb-10 font-semibold">
            ENTREX delivers reliable, professional, and tech-enabled ground transportation services across India. Backed by premium vehicles, multilingual chauffeurs, and 24x7 operational support, we're the preferred choice for corporates, expats, and high-value travelers seeking more than just a ride.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-none py-4 px-8 rounded-full text-[15px] font-bold cursor-pointer transition-opacity duration-200 hover:opacity-90">Explore Our Services</button>
            <button className="bg-black text-white border-none py-4 px-8 rounded-full text-[15px] font-bold cursor-pointer transition-colors duration-200 hover:bg-[#333]">Talk to Our Team</button>
          </div>
        </div>

        <div className="flex-[1.3] w-full">
          <img src={aboutImage} alt="Entrex Team" className="w-full h-auto rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]" />
        </div>
      </div>

      {/* Dynamic Subcomponents */}
      <OurStory />
      <MissionVision />
      <MeetFounders />
      <OurJourney />
      <Testimonials />
      <TrustedCompanies />
      <OurCertifications />
      <FAQ />
      <NewsAndUpdates />
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default AboutUs;
