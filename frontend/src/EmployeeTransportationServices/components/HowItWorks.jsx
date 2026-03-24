import React from 'react';

import imgReqMapping from '../../asserts/requirement_mapping_image.png';
import imgDeployPlan from '../../asserts/deployment_plan_image.png';
import imgExecution from '../../asserts/live_execution_image.png';
import imgBilling from '../../asserts/transportation_billing_image.png';

const workSteps = [
  {
    id: '01',
    title: 'Requirement Mapping',
    desc: 'We understand your workforce size, shifts, routes, and security requirements.',
    borderColor: 'border-t-brand-orange',
    img: imgReqMapping
  },
  {
    id: '02',
    title: 'Deployment Plan',
    desc: 'We prepare routing plans, driver assignments, and pickup/drop schedules using AI-based planning tools',
    borderColor: 'border-t-yellow-500',
    img: imgDeployPlan
  },
  {
    id: '03',
    title: 'Live Execution',
    desc: 'Vehicles are dispatched on time with real-time monitoring and backup protocols',
    borderColor: 'border-t-brand-orange',
    img: imgExecution
  },
  {
    id: '04',
    title: 'Transparent Billing',
    desc: 'Automated trip logs, easy reconciliation, and centralized invoicing.',
    borderColor: 'border-t-brand-orange',
    img: imgBilling
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-10 bg-slate-50 font-sans">
      <div className="text-center mb-[60px] max-w-[800px] mx-auto">
        <h2 className="text-[42px] font-extrabold text-slate-900 mb-4 tracking-tight">How It Works</h2>
        <p className="text-[15px] text-gray-600 leading-relaxed m-0">Choose from a wide range of well-maintained vehicles tailored for employee transportation across all business sizes and shift types.</p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center max-w-[1200px] mx-auto">
        {workSteps.map(step => (
          <div key={step.id} className={`bg-white rounded-2xl p-10 flex-1 min-w-[250px] max-w-[280px] relative border-t-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${step.borderColor}`}>
            <div className="flex justify-between items-start mb-8 relative">
              <div className="w-[42px] h-[42px] z-10">
                <img src={step.img} alt={step.title} className="w-full h-full object-contain" />
              </div>
              <div className="text-[60px] font-extrabold text-slate-100 leading-none absolute -right-2.5 -top-5 z-0 tracking-tighter">{step.id}</div>
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-3 relative z-10">{step.title}</h3>
            <p className="text-[14px] text-slate-500 leading-relaxed m-0 relative z-10">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
