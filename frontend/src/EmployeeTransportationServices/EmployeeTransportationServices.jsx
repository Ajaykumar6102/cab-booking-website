import React from 'react';
import { Link } from 'react-router-dom';
import entrexLogo from '../asserts/entrex_logo.png';
import shieldIcon from '../asserts/approval_image.png';
import WhyEntrexCommute from './components/WhyEntrexCommute';
import FleetOptions from './components/FleetOptions';
import HowItWorks from './components/HowItWorks';
import WhoWeServe from './components/WhoWeServe';
import WhatWeOffer from '../ContactUs/components/WhatWeOffer';
import Footer from '../Footer/Footer';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';
import Testimonials from '../AboutUs/components/Testimonials';
import OurCertifications from '../OurCertifications/OurCertifications';
import FAQ from '../FAQ/FAQ';
import NewsAndUpdates from '../NewsAndUpdates/NewsAndUpdates';
import LetsTalk from '../LetsTalk/LetsTalk';

const EmployeeTransportationServices = () => {
    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const bookingData = Object.fromEntries(formData.entries());

        const missingFields = [];
        if (!bookingData.fullName) missingFields.push('Full Name');
        if (!bookingData.phoneNumber) missingFields.push('Phone Number');
        if (!bookingData.email) missingFields.push('Email');
        if (!bookingData.date) missingFields.push('Date');
        if (!bookingData.time) missingFields.push('Time');
        if (!bookingData.adults) missingFields.push('Adults');
        if (!bookingData.children) missingFields.push('Children');

        if (missingFields.length > 0) {
            alert(`You are missing the following required fields:\n- ${missingFields.join('\n- ')}\n\nPlease fill them out before booking.`);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData)
            });
            if (response.ok) {
                alert('Ride booked successfully!');
                e.target.reset();
            } else {
                const errData = await response.json().catch(() => ({}));
                alert(`Error: ${errData.message || 'Failed to book ride. Please check required fields.'}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert(`Server error: ${error.message} (Make sure backend is running)`);
        }
    };

    const inputClasses = "w-full p-3.5 border border-slate-200 rounded-lg text-[15px] text-slate-800 bg-slate-50 transition-all duration-200 outline-none focus:border-brand-orange focus:ring-[3px] focus:ring-brand-orange/10 focus:bg-white box-border";

    return (
        <div className="w-full font-sans bg-white">
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
                    <li><Link to="/tour_packages" className="text-brand-orange text-sm font-medium transition-colors duration-300">Tour Packages</Link></li>
                    <li><Link to="/luxury_car_rentals" className="text-slate-900 text-sm font-medium transition-colors duration-300 hover:text-brand-orange">Luxury Car Rentals</Link></li>
                    <li><Link to="/clients" className="text-slate-900 text-sm font-medium transition-colors duration-300 hover:text-brand-orange">Clients</Link></li>
                    <li><Link to="/contact" className="text-slate-900 text-sm font-medium transition-colors duration-300 hover:text-brand-orange">Contact Us</Link></li>
                </ul>
            </nav>

            {/* Tailwind Migrated Hero Section */}
            <section className="flex flex-col lg:flex-row min-h-[80vh] bg-slate-900 text-white py-20 px-[5%] items-center justify-between gap-10 relative overflow-hidden">
                {/* Simulated background gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.15)_0%,_transparent_70%)] pointer-events-none -z-0"></div>

                <div className="flex-1 max-w-[600px] relative z-10">
                    <div className="mb-6 inline-block p-3 bg-white/10 rounded-xl backdrop-blur-md">
                        <img src={shieldIcon} alt="Shield Approval" className="w-10 h-10" />
                    </div>
                    <p className="text-sm font-bold tracking-[0.1em] text-brand-orange mb-4 uppercase">EMPLOYEE TRANSPORTATION SERVICES</p>
                    <h1 className="text-[56px] font-extrabold leading-[1.1] mb-6 tracking-tight">
                        Seamless, Safe, and Smart<br />
                        Commute Solutions for<br />
                        Your Workforce
                    </h1>
                    <p className="text-[18px] leading-relaxed text-slate-300 m-0">
                        ENTREX delivers tech-enabled employee transport solutions that<br />
                        ensure your workforce arrives on time<br />
                        — safely, reliably, and at scale.
                    </p>
                </div>

                <div className="flex-1 flex justify-end relative z-10 w-full">
                    <div className="p-[3px] rounded-[24px] bg-gradient-to-br from-brand-orange to-brand-red w-full max-w-[500px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                        <div className="bg-white rounded-[21px] p-10 w-full box-border">
                            <h2 className="text-[24px] font-extrabold text-slate-900 mb-6 text-center">Book Your Ride Instantly</h2>
                            <form className="flex flex-col gap-4" onSubmit={handleBookingSubmit}>
                                <div className="flex gap-4">
                                    <input type="text" name="fullName" placeholder="Full Name" className={inputClasses} />
                                    <input type="tel" name="phoneNumber" placeholder="Phone Number" className={inputClasses} />
                                </div>
                                <div className="flex flex-col">
                                    <input type="email" name="email" placeholder="Email Address" className={inputClasses} />
                                </div>
                                <div className="flex gap-4">
                                    <select name="date" defaultValue="" className={`${inputClasses} cursor-pointer text-slate-600`}>
                                        <option value="" disabled>Select Date</option>
                                        <option value="today">Today</option>
                                        <option value="tomorrow">Tomorrow</option>
                                    </select>
                                    <select name="time" defaultValue="" className={`${inputClasses} cursor-pointer text-slate-600`}>
                                        <option value="" disabled>Select Time</option>
                                        <option value="morning">Morning</option>
                                        <option value="afternoon">Afternoon</option>
                                        <option value="evening">Evening</option>
                                    </select>
                                </div>
                                <div className="flex gap-4">
                                    <select name="adults" defaultValue="" className={`${inputClasses} cursor-pointer text-slate-600`}>
                                        <option value="" disabled>Adults</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                    <select name="children" defaultValue="" className={`${inputClasses} cursor-pointer text-slate-600`}>
                                        <option value="" disabled>Children</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                                <div className="flex flex-col">
                                    <textarea name="message" placeholder="Message" rows="3" className={`${inputClasses} resize-y min-h-[100px]`}></textarea>
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <button type="reset" className="flex-1 py-3.5 bg-transparent border border-slate-300 text-slate-600 rounded-lg font-bold text-sm tracking-wide transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 cursor-pointer">RESET</button>
                                    <button type="submit" className="flex-[2] py-3.5 bg-gradient-to-br from-brand-red to-brand-orange text-white border-none rounded-lg font-bold text-sm tracking-wide shadow-[0_4px_14px_rgba(249,115,22,0.3)] transition-opacity duration-300 hover:opacity-90 cursor-pointer">LET'S BOOK NOW</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <WhatWeOffer />
            <WhyEntrexCommute />
            <FleetOptions />
            <HowItWorks />
            <WhoWeServe />
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

export default EmployeeTransportationServices;
