import React from 'react';

const services = [
  {
    id: 1,
    title: 'Executive Chauffeur Services',
    description: 'Discreet, professional chauffeurs for directors, VIPs, and senior leadership.',
    colorClass: 'bg-sky-200',
    iconSVG: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"></path></svg>
  },
  {
    id: 2,
    title: 'Airport Transfers',
    description: 'Punctual pickups and drop-offs with live flight tracking and zero waiting time.',
    colorClass: 'bg-yellow-300',
    iconSVG: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 6.8-8 11.8-5.33-5-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"></path></svg>
  },
  {
    id: 3,
    title: 'Employee Commute Programs',
    description: 'Safe, app-tracked transportation for staff with route optimization and rostering.',
    colorClass: 'bg-orange-300',
    iconSVG: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4v18M13 3l8 4v14M7 11h2v2H7zM7 15h2v2H7zM15 11h2v2h-2zM15 15h2v2h-2z"></path></svg>
  },
  {
    id: 4,
    title: 'Expat & Guest Handling',
    description: 'Hospitality-trained chauffeurs and multilingual support for global visitors and delegations.',
    colorClass: 'bg-purple-200',
    iconSVG: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
  },
  {
    id: 5,
    title: 'Centralized Billing & MIS Reports',
    description: 'Transparent invoicing with detailed ride history, analytics, and corporate summaries.',
    colorClass: 'bg-cyan-200',
    iconSVG: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path></svg>
  },
  {
    id: 6,
    title: 'App-Based Booking & Trip Management',
    description: 'Real-time tracking, instant bookings, and secure ride monitoring via our digital platform.',
    colorClass: 'bg-yellow-200',
    iconSVG: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path></svg>
  }
];

const WhatWeOffer = () => {
  return (
    <section className="py-20 px-10 bg-white font-sans">
      <div className="text-center max-w-[800px] mx-auto mb-[60px]">
        <h2 className="text-[32px] sm:text-[40px] font-bold text-slate-900 m-0 mb-4">What We Offer</h2>
        <p className="text-base text-slate-800 leading-[1.6] font-medium m-0">
          Our services are designed to simplify business mobility while delivering consistent, comfortable, and compliant ground transportation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {services.map((service) => (
          <div key={service.id} className="bg-transparent p-2.5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-slate-800 ${service.colorClass}`}>
              {service.iconSVG}
            </div>
            <h3 className="text-lg font-bold text-slate-800 m-0 mb-3">{service.title}</h3>
            <p className="text-sm text-slate-600 leading-[1.6] m-0">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
