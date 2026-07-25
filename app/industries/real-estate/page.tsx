import { Metadata } from 'next';
import { SolutionHero } from '@/components/solutions/solution-hero';
import { SolutionFeatures } from '@/components/solutions/solution-features';
import { SolutionUseCases } from '@/components/solutions/solution-use-cases';
import { SolutionROI } from '@/components/solutions/solution-roi';
import { SolutionFAQ } from '@/components/solutions/solution-faq';
import { SolutionCTA } from '@/components/solutions/solution-cta';
import { SolutionIntegrations } from '@/components/solutions/solution-integrations';

export const metadata: Metadata = {
  title: 'AI for Real Estate — Capture Every Lead, Close More Deals',
  description: 'AI-powered lead capture, property matching, and automated follow-ups for builders, brokers, and property consultants.',
};

const features = [
  {
    icon: 'Building2',
    title: 'AI Property Matching',
    description: 'AI that understands buyer preferences — budget, location, size, amenities — and automatically matches them with the perfect properties from your inventory.',
    benefit: '3x faster property matching, higher conversion',
  },
  {
    icon: 'Phone',
    title: '24/7 Lead Capture Agent',
    description: 'AI voice and chat agent that handles all inquiries, qualifies leads based on budget and intent, and schedules site visits — working around the clock.',
    benefit: 'Capture 65% more leads, zero missed calls',
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Property Showcasing',
    description: 'Share property brochures, virtual tours, location highlights, and pricing via WhatsApp. Automated follow-up sequences keep leads engaged.',
    benefit: '45% response rate on WhatsApp campaigns',
  },
  {
    icon: 'Users',
    title: 'Automated Lead Nurturing',
    description: 'AI-powered drip campaigns that nurture leads over weeks with personalized property suggestions, market updates, and booking incentives.',
    benefit: 'Convert 40% more cold leads to site visits',
  },
  {
    icon: 'CalendarCheck',
    title: 'Automated Site Visit Scheduling',
    description: 'AI schedules site visits based on buyer and agent availability. Sends automated reminders and follow-ups after visits.',
    benefit: 'Reduce no-shows for site visits by 60%',
  },
  {
    icon: 'BarChart3',
    title: 'Sales Pipeline Analytics',
    description: 'Real-time visibility into your entire pipeline — leads by source, conversion rates by agent, project performance, and revenue forecasting.',
    benefit: 'Data-driven decisions for project launches',
  },
];

const useCases = [
  {
    industry: 'Real Estate Developer',
    icon: 'Construction',
    challenge: '5 ongoing projects, 500+ monthly inquiries. Only 20% of leads followed up properly. No system to nurture cold leads.',
    solution: 'AI lead capture + automated WhatsApp nurturing + intelligent lead assignment to agents + pipeline analytics.',
    results: [
      { label: 'Lead Capture', value: '+65%' },
      { label: 'Site Visits', value: '+80%' },
      { label: 'Sales Growth', value: '+₹2.8Cr/yr' },
    ],
  },
  {
    industry: 'Property Broker',
    icon: 'Home',
    challenge: 'Individual broker managing 50+ properties. Struggling to match buyers quickly. Losing deals to faster competitors.',
    solution: 'AI property matching chatbot + automated buyer updates when new matching properties listed + WhatsApp showcasing.',
    results: [
      { label: 'Deal Closure', value: '40% faster' },
      { label: 'Buyer Satisfaction', value: '4.9/5' },
      { label: 'Commission Growth', value: '+55%' },
    ],
  },
  {
    industry: 'Property Portal',
    icon: 'LayoutGrid',
    challenge: '10,000+ listings, buyers overwhelmed with options. Low engagement. Agents manually sending property suggestions.',
    solution: 'AI recommendation engine + personalized WhatsApp digests + automated alert when matching properties listed.',
    results: [
      { label: 'User Engagement', value: '+200%' },
      { label: 'Inquiry Rate', value: '+75%' },
      { label: 'Agent Productivity', value: '3x' },
    ],
  },
];

const integrations = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zoho CRM', category: 'CRM' },
  { name: 'Housing.com', category: 'Portals' },
  { name: 'MagicBricks', category: 'Portals' },
  { name: '99acres', category: 'Portals' },
  { name: 'WhatsApp Business', category: 'Communication' },
  { name: 'Google Calendar', category: 'Scheduling' },
  { name: 'Google Maps', category: 'Location' },
  { name: 'Razorpay', category: 'Payments' },
];

const faqs = [
  {
    question: 'How does AI property matching work?',
    answer: 'The AI analyzes buyer preferences (budget, location, size, configuration, amenities) and matches them against your property database. It learns from buyer feedback to improve recommendations over time.',
  },
  {
    question: 'Can the AI handle NRI buyers in different time zones?',
    answer: 'Absolutely! The AI works 24/7 and supports multiple languages. NRI buyers can get instant responses, virtual tour scheduling, and document assistance regardless of their time zone.',
  },
  {
    question: 'How does lead assignment to agents work?',
    answer: 'We configure rules based on project, location, agent expertise, and workload. The AI automatically assigns qualified leads to the right agent and notifies them via WhatsApp/SMS.',
  },
  {
    question: 'What about RERA compliance in communications?',
    answer: 'All automated communications include mandatory RERA disclaimers. We configure the system to comply with state-specific RERA requirements for property marketing.',
  },
  {
    question: 'How quickly can this be deployed for a new project launch?',
    answer: 'Basic lead capture goes live in 3 days. Full automation with property matching and nurturing takes 2 weeks. We recommend starting 2 weeks before project launch.',
  },
];

export default function RealEstateIndustryPage() {
  return (
    <>
      <SolutionHero
        icon="Building2"
        title="AI Solutions That Sell Properties Faster"
        subtitle="Capture leads 24/7, match buyers perfectly, and close more deals"
        description="Purpose-built AI for builders, brokers, and property consultants. Never miss a lead and convert more inquiries into bookings."
        metrics={[
          { label: 'Lead Capture', value: '+65%' },
          { label: 'Site Visits', value: '+80%' },
          { label: 'Revenue Growth', value: '+₹2.8Cr' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '/#demo' }}
        secondaryCTA={{ label: 'Calculate Revenue Impact', href: '/#calculator' }}
      />
      <SolutionFeatures title="AI-Powered Real Estate" subtitle="Every lead captured, nurtured, and converted" features={features} />
      <SolutionUseCases title="Real Estate Businesses Transformed" subtitle="See how developers and brokers are growing with AI" useCases={useCases} />
      <SolutionIntegrations title="Integrates With Your Real Estate Stack" subtitle="Works with CRMs, property portals, and communication tools" integrations={integrations} />
      <SolutionROI title="The ROI of AI in Real Estate" description="Developers using AI capture 65% more leads and see 80% increase in site visits." savings={[
        { label: 'Revenue Increase', value: '+₹2.8Cr/yr' },
        { label: 'Conversion Rate', value: '+40%' },
        { label: 'Lead Response Time', value: '<1 min' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Sell More Properties?" description="Book a free demo and see how AI can fill your pipeline with qualified leads." primaryCTA={{ label: 'Book Free Demo', href: '/#contact' }} secondaryCTA={{ label: 'Talk to Real Estate Team', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}
