
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormateursHero from '@/components/FormateursHero';

const Formateurs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <FormateursHero />
      <Footer />
    </div>
  );
};

export default Formateurs;
