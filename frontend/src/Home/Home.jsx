import React from 'react';
import homepage_image from '../asserts/Homepage_image.png';
import car_logo from '../asserts/car_logo.png';
import entrex_logo from '../asserts/entrex_logo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col text-left font-sans text-white overflow-x-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-[2]"
        style={{ backgroundImage: `url(${homepage_image})` }}
      >
        <div className="absolute inset-0 bg-black/40 -z-[1]"></div>
      </div>

      {/* Top Contact Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-[5%] py-2 bg-white text-slate-800 text-xs font-medium z-10 gap-2.5 sm:gap-0">
        <div className="flex gap-4">bookings@entrex.in</div>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-center sm:text-left">
          +91 44 4953 0055 | +91 98400 27990 | +91 91767 81444
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col lg:flex-row justify-between items-center px-[5%] py-5 bg-black/20 z-50 border-b border-white/10 gap-4 lg:gap-0">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={entrex_logo} alt="Entrex Logo" className="h-10" />
          </Link>
        </div>
        <ul className="flex flex-wrap lg:flex-nowrap justify-center gap-2.5 sm:gap-[25px] m-0 p-0 list-none">
          <li><Link to="/about" className="text-white text-[13px] sm:text-sm font-medium transition-colors duration-300 hover:text-orange-500">About Us</Link></li>
          <li className="relative group">
            <a href="#services" className="text-white text-[13px] sm:text-sm font-medium transition-colors duration-300 hover:text-orange-500">Services</a>
            {/* Mega Dropdown Engine */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[25px] opacity-0 invisible transition-all duration-300 z-[100] group-hover:opacity-100 group-hover:visible">
              <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white"></div>
              <div className="bg-white rounded-2xl py-[30px] px-10 flex flex-col md:flex-row gap-[50px] shadow-[0_10px_40px_rgba(0,0,0,0.15)] text-slate-800">
                <div className="min-w-[200px]">
                  <h3 className="text-[15px] font-bold text-[#1a1a4b] mt-0 mb-6 whitespace-nowrap">Corporate Mobility Solutions</h3>
                  <ul className="flex flex-col gap-4 p-0 m-0 list-none">
                    <li><a href="#corp-1" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Employee Transportation</a></li>
                    <li><a href="#corp-2" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Employee Trips</a></li>
                    <li><a href="#corp-3" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Executive Leasing</a></li>
                    <li><a href="#corp-4" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Roster Planning & Routing</a></li>
                    <li><a href="#corp-5" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Management Reporting</a></li>
                    <li><a href="#corp-6" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Systemized Billing</a></li>
                    <li><a href="#corp-7" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Transport Desk & Ticketing</a></li>
                  </ul>
                </div>
                <div className="min-w-[200px]">
                  <h3 className="text-[15px] font-bold text-[#1a1a4b] mt-0 mb-6 whitespace-nowrap">Event & Custom Travel</h3>
                  <ul className="flex flex-col gap-4 p-0 m-0 list-none">
                    <li><a href="#event-1" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Events & Seminars</a></li>
                    <li><a href="#event-2" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Elite Weddings</a></li>
                    <li><a href="#event-3" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Family Events & Holidays</a></li>
                    <li><a href="#event-4" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Customized Tours</a></li>
                  </ul>
                </div>
                <div className="min-w-[200px]">
                  <h3 className="text-[15px] font-bold text-[#1a1a4b] mt-0 mb-6 whitespace-nowrap">Tour & Rental Services</h3>
                  <ul className="flex flex-col gap-4 p-0 m-0 list-none">
                    <li><a href="#tour-1" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Pilgrim Tours</a></li>
                    <li><a href="#tour-2" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Package Tours</a></li>
                    <li><a href="#tour-3" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Premium Rent-a-Cab</a></li>
                    <li><a href="#tour-4" className="text-[#555] text-sm font-medium transition-colors hover:text-orange-500 block">Ticketing</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><Link to="/tour_packages" className="text-white text-[13px] sm:text-sm font-medium transition-colors duration-300 hover:text-orange-500">Tour Packages</Link></li>
          <li><Link to="/luxury_car_rentals" className="text-white text-[13px] sm:text-sm font-medium transition-colors duration-300 hover:text-orange-500">Luxury Car Rentals</Link></li>
          <li><Link to="/clients" className="text-white text-[13px] sm:text-sm font-medium transition-colors duration-300 hover:text-orange-500">Clients</Link></li>
          <li><Link to="/contact" className="text-white text-[13px] sm:text-sm font-medium transition-colors duration-300 hover:text-orange-500">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Hero Content Area */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-[5%] py-10 flex-1 z-10 gap-10 lg:gap-0">
        
        {/* Left Column */}
        <div className="max-w-full lg:max-w-[600px] text-center lg:text-left">
          <img src={car_logo} alt="Car Icon" className="w-[140px] mb-[25px] block mx-auto lg:mx-0" />
          <h1 className="text-4xl sm:text-[48px] leading-[1.2] font-bold mb-5 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">Premium Chauffeur<br />Services for Every Journey</h1>
          <p className="text-base leading-relaxed mb-[30px] text-slate-200">
            From corporate travel to airport transfers, ENTREX ensures a safe,<br className="hidden lg:block"/>
            punctual, and comfortable ride—every time.
          </p>
          <button className="bg-gradient-to-r from-[#ff5722] to-orange-500 text-white py-3 px-[30px] rounded-full text-base font-semibold shadow-[0_4px_15px_rgba(255,87,34,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,87,34,0.6)] mb-[50px]">Call Us Now</button>

          <div className="flex justify-center lg:justify-start gap-10">
            <div>
              <h4 className="text-[24px] m-0 mb-1 font-semibold">Verified</h4>
              <p className="text-sm m-0 text-slate-300">Chauffeurs</p>
            </div>
            <div>
              <h4 className="text-[24px] m-0 mb-1 font-semibold">Real-time</h4>
              <p className="text-sm m-0 text-slate-300">Tracking</p>
            </div>
            <div>
              <h4 className="text-[24px] m-0 mb-1 font-semibold">24x7</h4>
              <p className="text-sm m-0 text-slate-300">Support</p>
            </div>
          </div>
        </div>

        {/* Right Column: Booking Form */}
        <div className="flex-none w-full max-w-[450px]">
          <div className="bg-gradient-to-br from-[#eb4132d9] to-[#f59628d9] backdrop-blur-md p-8 md:p-[35px] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20">
            <h2 className="mt-0 mb-[25px] text-[22px] font-semibold text-center">Book Your Ride Instantly</h2>

            <form className="flex flex-col gap-[15px]" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col sm:flex-row gap-[15px]">
                <input type="text" placeholder="Full Name" className="w-full bg-transparent border border-white/40 text-white p-3 rounded-md text-sm outline-none focus:border-white placeholder:text-white/80" required />
                <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border border-white/40 text-white p-3 rounded-md text-sm outline-none focus:border-white placeholder:text-white/80" required />
              </div>

              <div className="flex flex-col">
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border border-white/40 text-white p-3 rounded-md text-sm outline-none focus:border-white placeholder:text-white/80" required />
              </div>

              <div className="flex flex-col sm:flex-row gap-[15px]">
                <select required defaultValue="" className="w-full bg-transparent border border-white/40 text-white p-3 rounded-md text-sm outline-none focus:border-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_15px_top_50%] bg-[length:12px_auto] [&>option]:text-slate-800">
                  <option value="" disabled>Select Date</option>
                  <option value="today">Today</option>
                  <option value="tomorrow">Tomorrow</option>
                </select>
                <select required defaultValue="" className="w-full bg-transparent border border-white/40 text-white p-3 rounded-md text-sm outline-none focus:border-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_15px_top_50%] bg-[length:12px_auto] [&>option]:text-slate-800">
                  <option value="" disabled>Select Time</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-[15px]">
                <select required defaultValue="" className="w-full bg-transparent border border-white/40 text-white p-3 rounded-md text-sm outline-none focus:border-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_15px_top_50%] bg-[length:12px_auto] [&>option]:text-slate-800">
                  <option value="" disabled>Adults</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <select required defaultValue="" className="w-full bg-transparent border border-white/40 text-white p-3 rounded-md text-sm outline-none focus:border-white appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_15px_top_50%] bg-[length:12px_auto] [&>option]:text-slate-800">
                  <option value="" disabled>Children</option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              <div className="flex flex-col">
                <textarea placeholder="Message" rows="3" className="w-full bg-transparent border border-white/40 text-white p-3 rounded-md text-sm outline-none focus:border-white placeholder:text-white/80"></textarea>
              </div>

              <div className="flex gap-[15px] mt-2.5">
                <button type="reset" className="flex-1 bg-transparent border border-white text-white p-3 rounded-full font-semibold cursor-pointer transition-colors duration-200 hover:bg-white/10">RESET</button>
                <button type="submit" className="flex-[2] bg-white text-[#e53935] border-none p-3 rounded-full font-semibold cursor-pointer shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]">LET'S BOOK NOW</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;