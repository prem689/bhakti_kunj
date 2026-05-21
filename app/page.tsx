import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroductionSection } from '@/components/sections/IntroductionSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { MasterPlanSection } from '@/components/sections/MasterPlanSection';
import { PaymentPlanSection } from '@/components/sections/PaymentPlanSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { AmenitiesSection } from '@/components/sections/AmenitiesSection';
import { LifestyleSection } from '@/components/sections/LifestyleSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { ContactSection } from '@/components/sections/ContactSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { CarouselSection } from '@/components/sections/CarouselSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <IntroductionSection />
      <TeamSection />
      <MasterPlanSection />
      <PaymentPlanSection />
      <VideoSection />
      <LocationSection />
      <VisionSection />
      <AmenitiesSection />
      <LifestyleSection />
      <CarouselSection />
      <GallerySection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
