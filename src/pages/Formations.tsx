
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormationsHero from '@/components/FormationsHero';
import FormationsSection from '@/components/FormationsSection';

const Formations = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FormationsHero />
      <FormationsSection />
      <Footer />
    </div>
  );
};

export default Formations;
