
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import FormationsCTA from '@/components/FormationsCTA';
import AtoutsSection from '@/components/AtoutsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <FormationsCTA />
      <AtoutsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
