import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { VideoSection } from '@/components/sections/VideoSection';
import { AmenitiesSection } from '@/components/sections/AmenitiesSection';
import { VisionSection } from '@/components/sections/VisionSection';
import { CarouselSection } from '@/components/sections/CarouselSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { LocationSection } from '@/components/sections/LocationSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { CTASection } from '@/components/sections/CTASection';
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat';

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <VideoSection />
      <AmenitiesSection />
      <VisionSection />
      <CarouselSection />
      <GallerySection />
      <LocationSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
