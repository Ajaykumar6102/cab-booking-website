import React from 'react';
import { Link } from 'react-router-dom';
import entrexLogo from '../asserts/entrex_logo.png';
import ContactForm from './components/ContactForm';
import WhatWeOffer from './components/WhatWeOffer';
import Footer from '../Footer/Footer';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';

const ContactUs = () => {
  return (
    <div className="w-full font-sans bg-white min-h-screen">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-10 py-2.5 bg-slate-50 border-b border-slate-200 text-[13px] font-medium text-slate-600 gap-2 md:gap-0">
        <div className="flex gap-4">bookings@entrex.in</div>
        <div className="flex gap-4">
          +91 44 4953 0055 | +91 98400 27990 | +91 91767 81444
        </div>
      </div>

      {/* Nav Bar */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-10 py-6 bg-white gap-4 md:gap-0">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={entrexLogo} alt="Entrex Logo" className="h-10" />
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 md:gap-10 m-0 p-0 list-none">
          <li><Link to="/about" className="text-slate-900 text-sm font-medium transition-colors duration-300 hover:text-brand-orange">About Us</Link></li>
          <li><Link to="/#services" className="text-slate-900 text-sm font-medium transition-colors duration-300 hover:text-brand-orange">Services</Link></li>
          <li><Link to="/#tour" className="text-slate-900 text-sm font-medium transition-colors duration-300 hover:text-brand-orange">Tour Packages</Link></li>
          <li><Link to="/#luxury" className="text-slate-900 text-sm font-medium transition-colors duration-300 hover:text-brand-orange">Luxury Car Rentals</Link></li>
          <li><Link to="/clients" className="text-slate-900 text-sm font-medium transition-colors duration-300 hover:text-brand-orange">Clients</Link></li>
          <li><Link to="/contact" className="text-brand-orange text-sm font-medium transition-colors duration-300">Contact Us</Link></li>
        </ul>
      </nav>

      <ContactForm />
      <WhatWeOffer />
      <TrustedCompanies />
      <Footer />
    </div>
  );
};

export default ContactUs;
