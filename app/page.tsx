import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AmenitiesSection } from '@/components/sections/AmenitiesSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { CarouselSection } from '@/components/sections/CarouselSection';
import { LocationSection } from '@/components/sections/LocationSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <AmenitiesSection />
      <VisionSection />
      <CarouselSection />
      <LocationSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
