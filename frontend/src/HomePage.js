import React from 'react';
import Home from './Home/Home';
import WhyEntrex from './WhyEntrex/WhyEntrex';
import PreferredPartner from './PreferredPartner/PreferredPartner';
import OurServices from './OurServices/OurServices';
import InCarProvisions from './InCarProvisions/InCarProvisions';
import KeyHighlights from './KeyHighlights/KeyHighlights';
import TrustedCompanies from './TrustedCompanies/TrustedCompanies';
import OurCertifications from './OurCertifications/OurCertifications';
import FAQ from './FAQ/FAQ';
import NewsAndUpdates from './NewsAndUpdates/NewsAndUpdates';
import LetsTalk from './LetsTalk/LetsTalk';
import Footer from './Footer/Footer';

const HomePage = () => {
  return (
    <div className="HomePage">
      <Home />
      <WhyEntrex />
      <OurServices />
      <InCarProvisions />
      <PreferredPartner />
      <KeyHighlights />
      <TrustedCompanies />
      <OurCertifications />
      <FAQ />
      <NewsAndUpdates />
      <LetsTalk />
      <Footer />
    </div>
  );
};

export default HomePage;
