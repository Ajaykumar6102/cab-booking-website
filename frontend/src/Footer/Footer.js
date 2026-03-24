import React from 'react';
import entrexLogo from '../asserts/entrex_logo.png';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 px-5 pb-[30px] font-sans">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-[70px]">
          
          {/* Column 1 */}
          <div className="flex flex-col">
            <img src={entrexLogo} alt="Entrex Logo" className="h-12 mb-6 block w-max" />
            <p className="text-sm text-gray-500 leading-[1.6] pr-5 m-0">
              We are one of the leading Travel operators in South India with our 
              registered office at Madipakkam, Chennai. We serve leading corporate 
              clients in Chennai and Bangalore regions.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold text-gray-800 m-0 mb-6">Company</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li><a href="#home" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Home</a></li>
              <li><a href="#about" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">About</a></li>
              <li><a href="#services" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Services</a></li>
              <li><a href="#contact" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Contact</a></li>
              <li><a href="#compliance" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Compliance Control</a></li>
              <li><a href="#security" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Security Control</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold text-gray-800 m-0 mb-6">Tours</h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              <li><a href="#sales" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Sales software</a></li>
              <li><a href="#features" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Features</a></li>
              <li><a href="#privacy" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Privacy and security</a></li>
              <li><a href="#marketplace" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Marketplace</a></li>
              <li><a href="#status" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">Status</a></li>
              <li><a href="#api" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">API</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h3 className="text-base font-bold text-gray-800 m-0 mb-6">Contact</h3>
            <div className="flex flex-col">
              <p className="text-sm text-gray-600 leading-[1.6] m-0 mb-6">
                ASK Towers 1st floor, 183-184, 3rd Main Rd, <br/>
                Sri Sai Nagar, Thoraipakkam, Tamil Nadu 600096
              </p>
              
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0119.5 19.5h-15a2.25 2.25 0 01-2.25-2.25V6.75zM22.5 6.75a.75.75 0 00-.51-.71L12 11.25 2.01 6.04a.75.75 0 00-.51.71v10.5a.75.75 0 00.75.75h15a.75.75 0 00.75-.75V6.75z" />
                </svg>
                <a href="mailto:bookings@entrex.in" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">bookings@entrex.in</a>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-5 h-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.25 6.75C2.25 5.23 3.48 4 5 4h1a.75.75 0 01.71.5l1.45 4.36a.75.75 0 01-.22.8l-2.03 1.62c1.46 2.9 3.8 5.24 6.7 6.7l1.62-2.03a.75.75 0 01.8-.22l4.36 1.45c.29.1.5.38.5.71v1c0 1.52-1.23 2.75-2.75 2.75C9.44 21 3 14.56 3 6.75z" />
                </svg>
                <a href="tel:+914449530055" className="no-underline text-gray-600 text-sm transition-colors duration-200 hover:text-gray-900">+91 44 4953 0055</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-[30px] flex justify-between items-center flex-wrap gap-5 min-[600px]:flex-row flex-col min-[600px]:text-left text-center">
          <p className="text-sm text-gray-500 m-0">Copyright © 2025 Entrex. All Rights Reserved.</p>
          
          <div className="flex gap-6 min-[600px]:justify-end justify-center flex-wrap">
            <a href="#terms" className="no-underline text-gray-500 text-sm transition-colors duration-200 hover:text-gray-900">Terms of Service</a>
            <a href="#privacy-policy" className="no-underline text-gray-500 text-sm transition-colors duration-200 hover:text-gray-900">Privacy Policy</a>
            <a href="#cookies" className="no-underline text-gray-500 text-sm transition-colors duration-200 hover:text-gray-900">Cookies</a>
          </div>
          
          <div className="flex gap-3 min-[600px]:justify-end justify-center">
            <a href="#twitter" aria-label="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-200 hover:opacity-80 bg-[#55acee]">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#facebook" aria-label="Facebook" className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-200 hover:opacity-80 bg-[#3b5998]">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn" className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-200 hover:opacity-80 bg-[#007bb5]">
              <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
