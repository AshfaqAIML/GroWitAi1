import { Hero } from '@/components/sections/hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { BusinessChallenges } from '@/components/sections/business-challenges';
import { AISolutions } from '@/components/sections/ai-solutions';
import { Industries } from '@/components/sections/industries';
import { ROICalculator } from '@/components/sections/roi-calculator';
import { HowItWorks } from '@/components/sections/how-it-works';
import { WhyGroWithAI } from '@/components/sections/why-growithai';
import { PricingSection } from '@/components/sections/pricing';
import { TechEcosystem } from '@/components/sections/tech-ecosystem';
import { SuccessStories } from '@/components/sections/success-stories';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact';
import { FinalCTA } from '@/components/sections/final-cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <BusinessChallenges />
      <AISolutions />
      <Industries />
      <ROICalculator />
      <HowItWorks />
      <WhyGroWithAI />
      <PricingSection />
      <TechEcosystem />
      <SuccessStories />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
