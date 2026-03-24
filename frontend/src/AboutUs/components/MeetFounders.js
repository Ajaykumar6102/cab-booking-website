import React from 'react';
import founder1 from '../../asserts/founder1.png';
import founder2 from '../../asserts/founder2.png';

const MeetFounders = () => {
  return (
    <section className="py-20 px-10 bg-white font-sans text-center">
      <div className="mb-[60px]">
        <span className="bg-green-100 text-green-800 text-[11px] font-extrabold py-1.5 px-4 rounded-full tracking-[0.5px] inline-block mb-6">OUR TEAM</span>
        <h2 className="text-[46px] font-extrabold text-slate-900 m-0 mb-4">Meet the Founders</h2>
        <p className="text-[15px] font-semibold text-gray-700 m-0">Vision-Driven. Execution-Focused.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-[60px] max-w-[1000px] mx-auto mb-20 md:px-5 md:text-left text-center">

        {/* Founder 1 */}
        <div className="flex-1 flex flex-col md:items-start items-center">
          <img
            src={founder1}
            alt="Mugundhan Sankar"
            className="w-full h-[350px] object-cover rounded-3xl mb-6 bg-yellow-400"
          />
          <h3 className="text-[20px] font-bold text-gray-900 m-0 mb-1">Mugundhan Sankar</h3>
          <p className="text-[13px] font-medium text-gray-500 m-0 mb-5">Founder & Managing Director</p>
          <p className="text-[14px] leading-[1.6] text-gray-600 m-0 mb-6 flex-grow">
            With 15+ years in logistics and operations, Mugundhan built ENTREX to redefine
            Indian ground transport with global standards and Indian values. His vision
            continues to guide the company's expansion and operational discipline.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a href="#linkedin" className="flex items-center justify-center w-7 h-7 bg-gray-100 text-gray-400 rounded-md no-underline text-xs font-bold transition-colors duration-200 hover:bg-gray-200 hover:text-gray-600">in</a>
            <a href="#twitter" className="flex items-center justify-center w-7 h-7 bg-gray-100 text-gray-400 rounded-md no-underline text-xs font-bold transition-colors duration-200 hover:bg-gray-200 hover:text-gray-600">𝕏</a>
          </div>
        </div>

        {/* Founder 2 */}
        <div className="flex-1 flex flex-col md:items-start items-center mt-10 md:mt-0">
          <img
            src={founder2}
            className="w-full h-[350px] object-cover rounded-3xl mb-6 bg-red-500"
          />
          <h3 className="text-[20px] font-bold text-gray-900 m-0 mb-1">Balaji A</h3>
          <p className="text-[13px] font-medium text-gray-500 m-0 mb-5">Director – Strategy & Partnerships</p>
          <p className="text-[14px] leading-[1.6] text-gray-600 m-0 mb-6 flex-grow">
            Focused on client growth and digital transformation, Balaji leads ENTREX's
            enterprise engagements, tech roadmap, and innovation-driven service model.
          </p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a href="#linkedin" className="flex items-center justify-center w-7 h-7 bg-gray-100 text-gray-400 rounded-md no-underline text-xs font-bold transition-colors duration-200 hover:bg-gray-200 hover:text-gray-600">in</a>
            <a href="#twitter" className="flex items-center justify-center w-7 h-7 bg-gray-100 text-gray-400 rounded-md no-underline text-xs font-bold transition-colors duration-200 hover:bg-gray-200 hover:text-gray-600">𝕏</a>
          </div>
        </div>

      </div>

      {/* Join Team Banner */}
      <div className="bg-gray-50 rounded-3xl p-[40px_30px] md:p-[60px] max-w-[1000px] mx-auto flex flex-col md:flex-row gap-[30px] md:gap-[60px] md:text-left text-center items-center">
        <div className="flex-1">
          <h3 className="text-[40px] font-extrabold text-gray-700 m-0 tracking-[-1px]">Join our team</h3>
        </div>
        <div className="flex-[1.5]">
          <p className="text-base leading-[1.6] text-gray-900 font-medium m-0 mb-6">
            We believe it takes great people to make a great product. That's why we
            hire not only the perfect professional fits, but people who embody our
            company values.
          </p>
          <a href="#careers" className="text-[15px] font-bold text-teal-500 no-underline inline-flex items-center transition-colors duration-200 hover:text-teal-700 group">
            Explore integrations <span className="ml-[6px] transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MeetFounders;
