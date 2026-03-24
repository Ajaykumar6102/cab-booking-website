import React, { useState, useEffect, useRef } from 'react';
import entrexAdPic from '../asserts/entrex_ad_pic.png';

const AnimatedCounter = ({ targetValue, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startAnimation = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <span ref={elementRef} className="inline-block">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const PreferredPartner = () => {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * 68) / 100;

  return (
    <div className="py-20 px-[5%] bg-[#f8f6e8] text-[#1a1a4b] text-center font-sans">
      <div className="mb-[60px]">
        <h2 className="text-[36px] font-extrabold text-[#0d0a2b] leading-[1.3] m-0 mb-6">Why ENTREX Is the Preferred Partner<br />for Premium Tourist Travel in India</h2>
        <p className="text-[15px] text-[#4a4a4a] max-w-[800px] mx-auto leading-[1.6] m-0">Whether you're an international traveler, a corporate guest, or an expat exploring India, ENTREX delivers a<br className="hidden md:block" />seamless journey with professional chauffeurs, luxury vehicles, and end-to-end travel solutions.</p>
      </div>

      <div className="relative max-w-[900px] mx-auto flex flex-col md:block items-center">
        <img src={entrexAdPic} alt="Family enjoying a trip with Entrex" className="w-full h-auto rounded-[20px] block object-cover shadow-[0_20px_40px_rgba(0,0,0,0.1)]" />

        {/* Left Floating Card */}
        <div className="static md:absolute bg-white rounded-xl py-[25px] px-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] text-left z-10 md:top-1/2 md:left-[-20px] lg:left-[-80px] md:-translate-y-1/2 min-w-[260px] my-5 md:my-0 w-[90%] md:w-auto max-w-[320px] md:max-w-none">
          <h4 className="text-[13px] font-extrabold text-[#0d0a2b] m-0 mb-4">Tours Completed</h4>
          <div className="flex items-baseline gap-[15px] mb-1.5">
            <span className="text-[32px] font-extrabold text-[#0d0a2b] leading-[1]">
              <AnimatedCounter targetValue={27632} />
            </span>
            <span className="text-[11px] font-bold text-[#00b48f] bg-[#00b48f]/10 py-1 px-2 rounded">+2.5% &uarr;</span>
          </div>
          <p className="text-[12px] text-[#888] m-0 font-medium">Compared to (21340 last year)</p>
        </div>

        {/* Right Floating Card */}
        <div className="static md:absolute bg-white rounded-xl py-[25px] px-[30px] shadow-[0_15px_40px_rgba(0,0,0,0.1)] text-left z-10 md:top-[60%] md:right-[-20px] lg:right-[-50px] md:-translate-y-1/2 flex items-center gap-5 min-w-[220px] my-5 md:my-0 w-[90%] md:w-auto max-w-[320px] md:max-w-none">
          <div className="relative w-[60px] h-[60px] flex justify-center items-center">
            <svg width="60" height="60" viewBox="0 0 60 60" className="absolute top-0 left-0">
              <circle cx="30" cy="30" r={radius} fill="none" stroke="#e6f7f3" strokeWidth="5" />
              <circle cx="30" cy="30" r={radius} fill="none" stroke="#00b48f" strokeWidth="5"
                strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
                strokeLinecap="round" transform="rotate(-90 30 30)" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px] text-[#00b48f] z-[2]">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[32px] font-extrabold text-[#0d0a2b] leading-[1]">
              <AnimatedCounter targetValue={68} suffix="%" />
            </span>
            <p className="text-[12px] text-[#888] m-0 font-medium">Hit Rate this year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreferredPartner;
