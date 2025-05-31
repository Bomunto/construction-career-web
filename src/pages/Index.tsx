
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import FormationsCTA from '@/components/FormationsCTA';
import AtoutsSection from '@/components/AtoutsSection';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <FormationsCTA />
      <AtoutsSection />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
