import { Metadata } from 'next';
import { SolutionHero } from '@/components/solutions/solution-hero';
import { SolutionFeatures } from '@/components/solutions/solution-features';
import { SolutionUseCases } from '@/components/solutions/solution-use-cases';
import { SolutionROI } from '@/components/solutions/solution-roi';
import { SolutionFAQ } from '@/components/solutions/solution-faq';
import { SolutionCTA } from '@/components/solutions/solution-cta';
import { SolutionIntegrations } from '@/components/solutions/solution-integrations';

export const metadata: Metadata = {
  title: 'AI for Hospitality — Delight Guests & Increase Revenue',
  description: 'AI concierge, smart booking systems, and 24/7 guest support for hotels, restaurants, cafes, and resorts.',
};

const features = [
  {
    icon: 'UtensilsCrossed',
    title: 'AI Restaurant Reservation Agent',
    description: 'Handle table bookings 24/7 via phone, WhatsApp, and website. Check availability in real-time, confirm reservations, and send reminders automatically.',
    benefit: 'Capture 40% more reservations, reduce no-shows by 75%',
  },
  {
    icon: 'ConciergeBell',
    title: 'AI Hotel Concierge',
    description: 'Virtual concierge that handles room service orders, spa bookings, local recommendations, and guest requests — available 24/7 in multiple languages.',
    benefit: 'Improve guest satisfaction scores to 4.9/5',
  },
  {
    icon: 'Phone',
    title: 'AI Voice Agent for Bookings',
    description: 'Never miss a booking call again. AI voice agent handles all incoming calls, checks availability, confirms bookings, and processes payments.',
    benefit: 'Zero missed calls, even at 3 AM',
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Guest Communication',
    description: 'Send booking confirmations, check-in reminders, special offers, and post-stay feedback requests via WhatsApp automatically.',
    benefit: '98% message open rate, 45% response rate',
  },
  {
    icon: 'Star',
    title: 'Reputation Management',
    description: 'AI monitors reviews across Google, TripAdvisor, Zomato, and social media. Alerts you to negative reviews instantly and suggests responses.',
    benefit: 'Respond to reviews in under 30 minutes',
  },
  {
    icon: 'BarChart3',
    title: 'Revenue Analytics',
    description: 'AI-powered insights on occupancy trends, peak booking times, menu item performance, and guest preferences to maximize revenue.',
    benefit: 'Increase revenue per guest by 25%',
  },
];

const useCases = [
  {
    industry: 'Restaurant Chain',
    icon: 'UtensilsCrossed',
    challenge: '15-location restaurant chain missing 40% of reservation calls during peak hours. No-shows costing ₹8L/month in lost revenue.',
    solution: 'AI voice agent handling all reservation calls + WhatsApp confirmation with one-tap confirm + automated reminder 2 hours before.',
    results: [
      { label: 'No-Show Rate', value: '3%' },
      { label: 'Revenue Increase', value: '+₹42L/yr' },
      { label: 'Bookings Captured', value: '+40%' },
    ],
  },
  {
    industry: 'Boutique Hotel',
    icon: 'Building2',
    challenge: 'Small team unable to respond to guest inquiries quickly. Losing direct bookings to OTAs due to slow response.',
    solution: 'AI chatbot on website + WhatsApp handling FAQs, room availability, pricing, and direct booking assistance 24/7.',
    results: [
      { label: 'Direct Bookings', value: '+55%' },
      { label: 'OTA Commission Saved', value: '₹15L/yr' },
      { label: 'Guest Response Time', value: '<1 min' },
    ],
  },
  {
    industry: 'Resort',
    icon: 'Palmtree',
    challenge: 'Guests frustrated waiting for concierge during peak hours. Room service orders delayed. Activity bookings manual and slow.',
    solution: 'In-room AI tablet + WhatsApp concierge for room service, spa bookings, activity reservations, and instant service requests.',
    results: [
      { label: 'Room Service Revenue', value: '+35%' },
      { label: 'Spa Bookings', value: '+60%' },
      { label: 'Guest Satisfaction', value: '4.9/5' },
    ],
  },
];

const integrations = [
  { name: 'OpenTable', category: 'Reservations' },
  { name: 'Dineout', category: 'Reservations' },
  { name: 'Zomato Book', category: 'Reservations' },
  { name: 'Booking.com', category: 'OTAs' },
  { name: 'MakeMyTrip', category: 'OTAs' },
  { name: 'Goibibo', category: 'OTAs' },
  { name: 'WhatsApp Business', category: 'Communication' },
  { name: 'Google My Business', category: 'Listings' },
  { name: 'TripAdvisor', category: 'Reviews' },
  { name: 'PMS Systems', category: 'Property Management' },
  { name: 'Razorpay', category: 'Payments' },
];

const faqs = [
  {
    question: 'Can the AI handle complex food orders and modifications?',
    answer: 'Yes! Our AI is trained on your full menu including modifiers, allergens, and special requests. It can handle complex orders, dietary restrictions, and upsell recommendations naturally.',
  },
  {
    question: 'How does the AI know real-time table availability?',
    answer: 'We integrate directly with your reservation system (OpenTable, Dineout, or your custom POS). The AI checks live availability and confirms bookings instantly.',
  },
  {
    question: 'What about guests who prefer talking to humans?',
    answer: 'The AI is designed to complement your staff, not replace them. Guests can always request to speak with a human. The AI handles routine tasks so your team can focus on exceptional service.',
  },
  {
    question: 'How quickly can this be set up for a new hotel?',
    answer: 'Basic booking automation goes live in 5-7 days. Full concierge AI with all integrations takes 2-3 weeks.',
  },
  {
    question: 'Can it handle multiple languages for international guests?',
    answer: 'Absolutely! Supports 50+ languages including English, Hindi, French, Spanish, Japanese, Arabic, and more. Automatically detects and responds in the guest\'s preferred language.',
  },
];

export default function HospitalityIndustryPage() {
  return (
    <>
      <SolutionHero
        icon="UtensilsCrossed"
        title="AI Solutions That Delight Every Guest"
        subtitle="Automate bookings, provide 24/7 concierge service, and maximize revenue"
        description="Purpose-built AI for restaurants, hotels, cafes, and resorts. Never miss a booking and deliver exceptional guest experiences."
        metrics={[
          { label: 'Bookings Increase', value: '+40%' },
          { label: 'No-Show Rate', value: '<3%' },
          { label: 'Guest Rating', value: '4.9/5' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '/#demo' }}
        secondaryCTA={{ label: 'Calculate Revenue Impact', href: '/#calculator' }}
      />
      <SolutionFeatures title="AI-Powered Hospitality" subtitle="Every guest interaction, automated and perfected" features={features} />
      <SolutionUseCases title="Hospitality Businesses Transformed" subtitle="See how hotels and restaurants are growing with AI" useCases={useCases} />
      <SolutionIntegrations title="Integrates With Your Hospitality Stack" subtitle="Works with OTAs, reservation systems, and POS" integrations={integrations} />
      <SolutionROI title="The ROI of AI in Hospitality" description="Restaurants and hotels using AI see 40% more bookings and 75% reduction in no-shows." savings={[
        { label: 'Revenue Increase', value: '+₹42L/yr' },
        { label: 'No-Show Reduction', value: '75%' },
        { label: 'Direct Booking Growth', value: '+55%' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Transform Your Guest Experience?" description="Book a free demo and see how AI can handle your next peak season effortlessly." primaryCTA={{ label: 'Book Free Demo', href: '/#contact' }} secondaryCTA={{ label: 'Talk to Hospitality Team', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}
