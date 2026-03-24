import React from 'react';
import { Link } from 'react-router-dom';
import entrexLogo from '../asserts/entrex_logo.png';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';
import Footer from '../Footer/Footer';
import WhatWeOffer from '../ContactUs/components/WhatWeOffer';
import Testimonials from '../AboutUs/components/Testimonials';
import OurCertificates from '../../src/OurCertifications/OurCertifications';
import LetsTalk from '../../src/LetsTalk/LetsTalk'

const Clients = () => {
  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-[#1e1e1e] text-[#f2f2f2] px-10 py-2.5 flex justify-between items-center text-xs tracking-wide">
        <div className="font-medium flex items-center h-full">bookings@entrex.in</div>
        <div className="font-medium flex items-center h-full">
          +91 44 4953 0055 | +91 98400 27990 | +91 91767 81444
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white border-b border-gray-100 sticky top-0 z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center">
          <Link to="/">
            <img src={entrexLogo} alt="Entrex Logo" className="h-10 w-auto" />
          </Link>
        </div>
        <ul className="flex gap-[30px] list-none m-0 p-0 items-center">
          <li><Link to="/about" className="no-underline text-[#1e1e1e] font-semibold text-[13px] uppercase tracking-wide transition-colors hover:text-[#f45d22]">About Us</Link></li>
          <li><Link to="/#services" className="no-underline text-[#1e1e1e] font-semibold text-[13px] uppercase tracking-wide transition-colors hover:text-[#f45d22]">Services</Link></li>
          <li><Link to="/#tour" className="no-underline text-[#1e1e1e] font-semibold text-[13px] uppercase tracking-wide transition-colors hover:text-[#f45d22]">Tour Packages</Link></li>
          <li><Link to="/#luxury" className="no-underline text-[#1e1e1e] font-semibold text-[13px] uppercase tracking-wide transition-colors hover:text-[#f45d22]">Luxury Car Rentals</Link></li>
          <li><Link to="/clients" className="no-underline text-[#f45d22] font-semibold text-[13px] uppercase tracking-wide transition-colors hover:text-[#f45d22]">Clients</Link></li>
          <li><Link to="/contact" className="no-underline text-[#1e1e1e] font-semibold text-[13px] uppercase tracking-wide transition-colors hover:text-[#f45d22]">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Trusted Companies Content */}
      <TrustedCompanies />
      
      <WhatWeOffer />

      <Testimonials />

      <OurCertificates />

      <LetsTalk />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Clients;