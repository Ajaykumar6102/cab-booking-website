import React from 'react';

// Client avatars
// Based on the mockup, these are small circular profile images.
// Using reliable placeholder images for development/demonstration since local assets aren't specified.
const testimonialsData = [
  {
    id: 1,
    text: "Reliable, courteous, and always on time. ENTREX is more than a transport provider—they're our mobility partner.",
    name: "Ramesh Iyer",
    title: "Cricket Enthusiast, Mumbai",
    image: "https://i.pravatar.cc/100?img=11"
  },
  {
    id: 2,
    text: "As an expat, I felt completely at ease with ENTREX. Every ride was smooth, safe, and incredibly professional.",
    name: "Sneha Pillai",
    title: "Fitness Coach, Bangalore",
    image: "https://i.pravatar.cc/100?img=5"
  },
  {
    id: 3,
    text: "Best fleet I've used in a while. My entire team now orders rides from here - reliable and affordable.",
    name: "Ayaan Khan",
    title: "School Football Coach, Delhi",
    image: "https://i.pravatar.cc/100?img=68"
  }
];

const StarRating = () => (
  <div className="flex gap-1 mb-5">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-20 px-10 bg-white text-center font-sans">
      <div className="inline-block bg-orange-500 text-white text-[13px] font-bold tracking-[1px] py-1.5 px-4 rounded-full mb-5 uppercase">TESTIMONIALS</div>
      <h2 className="text-[32px] md:text-[40px] font-extrabold text-slate-800 m-0 mb-[60px]">What Our Clients Say</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] max-w-[1200px] mx-auto">
        {testimonialsData.map((review) => (
          <div key={review.id} className="bg-white border border-slate-200 rounded-2xl p-[40px_30px] text-left flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <StarRating />
            <p className="text-base leading-[1.6] text-slate-600 m-0 mb-10 flex-grow">"{review.text}"</p>
            
            <div className="flex items-center gap-4">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="flex flex-col">
                <h4 className="text-[15px] font-bold text-slate-700 m-0 mb-1">{review.name}</h4>
                <p className="text-[13px] text-slate-500 m-0">{review.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
