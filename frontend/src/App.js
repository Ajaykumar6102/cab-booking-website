import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs/AboutUs';
import ContactUs from './ContactUs/ContactUs';
import Clients from './Clients/Clients';
import EmployeeTransportationServices from '../src/EmployeeTransportationServices/EmployeeTransportationServices';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/tour_packages" element={<EmployeeTransportationServices />} />
        <Route path="/luxury_car_rentals" element={<EmployeeTransportationServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
