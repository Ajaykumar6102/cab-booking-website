import React from 'react';

const LetsTalk = () => {
  const handleLetsTalkSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const contactData = Object.fromEntries(formData.entries());
      
      try {
          const response = await fetch('http://localhost:5000/api/contacts', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(contactData)
          });
          
          if (response.ok) {
              alert('Message sent successfully!');
              e.target.reset(); // This clears the space for next data
          } else {
              const errData = await response.json().catch(() => ({}));
              alert(`Error: ${errData.message || 'Failed to send message.'}`);
          }
      } catch (error) {
          console.error('Submission error:', error);
          alert(`Server error: ${error.message} (Make sure backend is running)`);
      }
  };

  return (
    <section className="bg-[#f2f2f2] py-[100px] px-5 font-sans text-black">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row gap-[60px] md:gap-[15%] justify-between">
        
        {/* Left Column = Info */}
        <div className="flex-1 max-w-full md:max-w-[400px]">
          <h1 className="text-[42px] md:text-[56px] font-extrabold m-0 mb-[60px] tracking-[-1.5px]">Let's Talk</h1>
          
          <div className="mb-10">
            <h2 className="text-[22px] font-bold m-0 mb-[15px]">Email</h2>
            <a href="mailto:bookings@entrex.in" className="text-base text-[#333] no-underline font-normal hover:underline">bookings@entrex.in</a>
          </div>
          
          <div className="mb-10">
            <h2 className="text-[22px] font-bold m-0 mb-[15px]">Socials</h2>
            <div className="flex flex-col gap-3">
              <a href="#instagram" className="text-base text-[#333] underline font-medium underline-offset-4 decoration-1 hover:decoration-2">Instagram</a>
              <a href="#twitter" className="text-base text-[#333] underline font-medium underline-offset-4 decoration-1 hover:decoration-2">Twitter</a>
              <a href="#facebook" className="text-base text-[#333] underline font-medium underline-offset-4 decoration-1 hover:decoration-2">Facebook</a>
            </div>
          </div>
        </div>

        {/* Right Column = Form */}
        <div className="flex-[1.5] max-w-full md:max-w-[600px]">
          <form className="flex flex-col gap-5" onSubmit={handleLetsTalkSubmit}>
            <div className="flex flex-col gap-2.5">
              <label htmlFor="fullName" className="text-sm font-semibold text-[#333]">Name</label>
              <input type="text" id="fullName" name="fullName" className="w-full p-4 bg-white border border-transparent rounded-[4px] font-inherit text-[15px] text-[#333] outline-none transition-colors duration-200 box-border focus:border-[#ccc]" required />
            </div>
            
            <div className="flex flex-col gap-2.5">
              <label htmlFor="email" className="text-sm font-semibold text-[#333]">Email</label>
              <input type="email" id="email" name="email" className="w-full p-4 bg-white border border-transparent rounded-[4px] font-inherit text-[15px] text-[#333] outline-none transition-colors duration-200 box-border focus:border-[#ccc]" required />
            </div>
            
            <div className="flex flex-col gap-2.5">
              <label htmlFor="service" className="text-sm font-semibold text-[#333]">What service are you interested in</label>
              <select id="service" name="service" defaultValue="" className="w-full p-4 bg-white border border-transparent rounded-[4px] font-inherit text-[15px] text-[#333] outline-none transition-colors duration-200 box-border focus:border-[#ccc] appearance-none bg-no-repeat bg-[right_15px_center] bg-[length:15px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] invalid:text-gray-400">
                <option value="" disabled hidden>Select project type</option>
                <option value="corporate">Corporate Transport</option>
                <option value="events">Events & Transfers</option>
                <option value="longterm">Long-term Rentals</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2.5">
              <label htmlFor="budget" className="text-sm font-semibold text-[#333]">Budget</label>
              <select id="budget" name="budget" defaultValue="" className="w-full p-4 bg-white border border-transparent rounded-[4px] font-inherit text-[15px] text-[#333] outline-none transition-colors duration-200 box-border focus:border-[#ccc] appearance-none bg-no-repeat bg-[right_15px_center] bg-[length:15px] bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23333%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] invalid:text-gray-400">
                <option value="" disabled hidden>Select project budget</option>
                <option value="low">Under ₹10,000</option>
                <option value="medium">₹10,000 - ₹50,000</option>
                <option value="high">Above ₹50,000</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2.5">
              <label htmlFor="message" className="text-sm font-semibold text-[#333]">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full p-4 bg-white border border-transparent rounded-[4px] font-inherit text-[15px] text-[#333] outline-none transition-colors duration-200 box-border focus:border-[#ccc] resize-y" required></textarea>
            </div>
            
            <button type="submit" className="bg-black text-white font-inherit text-base font-semibold py-[18px] px-0 border-none rounded-[4px] cursor-pointer mt-2.5 transition-colors duration-200 hover:bg-[#333]">Submit</button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default LetsTalk;
