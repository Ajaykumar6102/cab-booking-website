import React from 'react';

import imgIT from '../../asserts/IT_companies_image.png';
import imgBPO from '../../asserts/callCentre_image.png';
import imgHospital from '../../asserts/Hospital_clinic_image.png';
import imgManufacturing from '../../asserts/manufacturingUints_image.png';
import imgUniversity from '../../asserts/university_image.png';
import imgBusiness from '../../asserts/businessParks_image.png';
import imgSharedspace from '../../asserts/shared_workspace_image.png';
import imgHotel from '../../asserts/hotel_hospitality_image.png';
import imgWarehouse from '../../asserts/warehouselogistics_image.png';
import imgGovt from '../../asserts/governmentPSU_image.png';

const industries = [
  { id: 1, label: 'IT Companies', img: imgIT },
  { id: 2, label: 'BPO & Call Centers', img: imgBPO },
  { id: 3, label: 'Hospitals & Clinics', img: imgHospital },
  { id: 4, label: 'Manufacturing Units', img: imgManufacturing },
  { id: 5, label: 'Colleges & Universities', img: imgUniversity },
  { id: 6, label: 'Business Parks', img: imgBusiness },
  { id: 7, label: 'Shared Workspaces', img: imgSharedspace },
  { id: 8, label: 'Hotels & Hospitality', img: imgHotel },
  { id: 9, label: 'Warehousing & Logistics', img: imgWarehouse },
  { id: 10, label: 'Government & PSU', img: imgGovt }
];

const WhoWeServe = () => {
  return (
    <section className="py-20 px-10 bg-white text-center font-sans">
      <div className="max-w-[800px] mx-auto mb-12">
        <h2 className="text-[42px] font-extrabold text-slate-900 mb-4 tracking-tight">Who We Serve</h2>
        <p className="text-[15px] text-gray-600 leading-relaxed m-0">
          Every ENTREX ride comes with thoughtful in-car provisions to ensure your comfort, safety, and satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-6 max-w-[1200px] mx-auto">
        {industries.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.08)] hover:border-slate-300 cursor-default">
            <div className="w-full h-auto min-h-[120px] flex items-center justify-center">
              <img src={item.img} alt={item.label} className="w-full max-w-[160px] h-auto object-contain" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-gradient-to-br from-brand-red to-brand-orange text-white px-10 py-[14px] text-[15px] font-semibold border-none rounded-full shadow-[0_4px_14px_rgba(249,115,22,0.4)] transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer">
          Book Your Journey Now
        </button>
      </div>
    </section>
  );
};

export default WhoWeServe;
