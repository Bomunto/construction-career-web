
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ContactHero />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
