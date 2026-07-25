import { Metadata } from 'next';
import { SolutionHero } from '@/components/solutions/solution-hero';
import { SolutionFeatures } from '@/components/solutions/solution-features';
import { SolutionHowItWorks } from '@/components/solutions/solution-how-it-works';
import { SolutionUseCases } from '@/components/solutions/solution-use-cases';
import { SolutionROI } from '@/components/solutions/solution-roi';
import { SolutionFAQ } from '@/components/solutions/solution-faq';
import { SolutionCTA } from '@/components/solutions/solution-cta';
import { SolutionIntegrations } from '@/components/solutions/solution-integrations';


export const metadata: Metadata = {
  title: 'AI Sales Assistants — Close More Deals, Faster',
  description: 'AI-powered sales agents that qualify leads, follow up persistently, and close deals while your team sleeps.',
};

const features = [
  {
    icon: "Target",
    title: 'Intelligent Lead Qualification',
    description: 'The AI engages leads in natural conversation, asks qualifying questions, scores leads based on your criteria, and prioritizes hot prospects for your team.',
    benefit: 'Sales team focuses only on qualified, ready-to-buy leads',
  },
  {
    icon: "PhoneCall",
    title: 'Automated Multi-Channel Outreach',
    description: 'Your AI sales assistant reaches out via phone, WhatsApp, email, and SMS — coordinating follow-ups across channels based on lead preference and behavior.',
    benefit: '7x more touchpoints with zero extra effort',
  },
  {
    icon: "MessageSquare",
    title: 'Conversational Selling',
    description: 'Trained on your product catalog, pricing, and sales playbook. The AI handles objections, answers product questions, and guides leads toward purchase decisions.',
    benefit: 'Consistent, perfect sales pitch every time',
  },
  {
    icon: "Brain",
    title: 'Behavioral Intent Detection',
    description: 'Analyzes lead behavior — email opens, link clicks, website visits, response patterns — to identify buying signals and time outreach perfectly.',
    benefit: 'Reach leads when they\'re most likely to buy',
  },
  {
    icon: "BarChart3",
    title: 'Sales Pipeline Analytics',
    description: 'Real-time dashboard showing lead status, conversion rates, revenue forecasts, and AI-driven recommendations to improve close rates.',
    benefit: 'Data-driven sales management',
  },
  {
    icon: "Zap",
    title: 'CRM Auto-Sync',
    description: 'Every interaction is automatically logged in your CRM. No manual data entry. Complete activity history for every lead.',
    benefit: 'CRM always up-to-date, zero admin work',
  },
];

const steps = [
  { step: 1, title: 'Sales Process Audit', description: 'We analyze your current sales process, lead sources, qualification criteria, and conversion metrics.', duration: '2 days' },
  { step: 2, title: 'Playbook Development', description: 'Build the AI\'s sales playbook — scripts, objection handling, qualification questions, and escalation rules.', duration: '3 days' },
  { step: 3, title: 'CRM & Tool Integration', description: 'Connect to your CRM, email, phone system, WhatsApp, and any other sales tools you use.', duration: '2 days' },
  { step: 4, title: 'AI Training & Testing', description: 'Train on your products, pricing, competitors, and run through hundreds of sales scenarios.', duration: '3-4 days' },
  { step: 5, title: 'Launch & Pipeline Review', description: 'Go live with monitoring. Weekly pipeline reviews to optimize conversion rates.', duration: 'Ongoing' },
];

const useCases = [
  {
    industry: 'Real Estate',
    icon: 'Building2',
    challenge: 'Sales team spending 70% of time on unqualified leads, missing follow-ups, and losing hot prospects.',
    solution: 'AI sales assistant qualifies all inbound leads, nurtures cold leads with automated follow-ups, and only routes hot, site-visit-ready leads to agents.',
    results: [
      { label: 'Conversion Rate', value: '+300%' },
      { label: 'Follow-up Rate', value: '100%' },
      { label: 'Revenue Increase', value: '₹42L/yr' },
    ],
  },
  {
    industry: 'Education',
    icon: 'GraduationCap',
    challenge: 'Counselors overwhelmed during admission season, unable to follow up with all inquiries.',
    solution: 'AI sales assistant handles initial inquiries, qualifies based on eligibility, schedules counseling calls, and nurtures undecided students.',
    results: [
      { label: 'Leads Qualified', value: '8,000+' },
      { label: 'Admission Rate', value: '+35%' },
      { label: 'Counselor Time Saved', value: '60%' },
    ],
  },
  {
    industry: 'B2B SaaS',
    icon: 'Cloud',
    challenge: 'Long sales cycles with multiple touchpoints. SDRs spending too much time on outreach instead of closing.',
    solution: 'AI handles top-of-funnel outreach, qualifies MQLs, books meetings, and nurtures cold leads until they\'re ready.',
    results: [
      { label: 'Meetings Booked', value: '+250%' },
      { label: 'Pipeline Growth', value: '+180%' },
      { label: 'SDR Productivity', value: '4x' },
    ],
  },
];

const integrations = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zoho CRM', category: 'CRM' },
  { name: 'Pipedrive', category: 'CRM' },
  { name: 'Outreach.io', category: 'Sales Engagement' },
  { name: 'Apollo.io', category: 'Prospecting' },
  { name: 'LinkedIn Sales Navigator', category: 'Prospecting' },
  { name: 'WhatsApp Business', category: 'Messaging' },
  { name: 'Gmail/Google Workspace', category: 'Email' },
  { name: 'Microsoft 365', category: 'Email' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'Slack', category: 'Communication' },
];

const faqs = [
  {
    question: 'Will the AI replace my sales team?',
    answer: 'No. The AI handles repetitive, time-consuming tasks — lead qualification, initial outreach, follow-ups — freeing your human sales team to focus on building relationships and closing complex deals. Most teams see 3-4x productivity improvement.',
  },
  {
    question: 'How does it handle objections?',
    answer: 'The AI is trained on your specific objection-handling playbook. It can address common objections about pricing, competitors, and timing. When it encounters a new objection, it logs it for your team and escalates.',
  },
  {
    question: 'Can it work with our existing CRM?',
    answer: 'Yes. We integrate with all major CRMs. Every interaction is automatically logged, leads are updated in real-time, and your pipeline is always current.',
  },
  {
    question: 'What kind of results can we expect?',
    answer: 'Our clients typically see 30-50% more qualified meetings, 100% follow-up compliance, and 2-4x improvement in lead response time within the first month.',
  },
];

export default function AISalesAssistantsPage() {
  return (
    <>
      <SolutionHero
        icon="TrendingUp"
        title="AI Sales Assistants That Close Deals Around the Clock"
        subtitle="Qualify leads, follow up persistently, and book more meetings — automatically"
        description="Deploy AI sales agents that handle prospecting, qualification, and nurturing so your team focuses on closing."
        metrics={[
          { label: 'More Meetings', value: '+250%' },
          { label: 'Follow-up Rate', value: '100%' },
          { label: 'Close Rate', value: '+40%' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '#demo' }}
        secondaryCTA={{ label: 'Calculate Pipeline Impact', href: '/roi-calculator' }}
      />
      <SolutionFeatures title="Your Always-On Sales Team" subtitle="AI that prospects, qualifies, and nurtures — 24/7" features={features} />
      <SolutionHowItWorks title="From Setup to Pipeline Growth" subtitle="Deploy your AI sales assistant in under 2 weeks" steps={steps} />
      <SolutionUseCases title="Sales Teams Supercharged" subtitle="See how businesses 3x'd their qualified pipeline" useCases={useCases} />
      <SolutionIntegrations title="Integrates With Your Sales Stack" subtitle="Works with the tools your team already uses" integrations={integrations} />
      <SolutionROI title="The ROI of Perfect Follow-Up" description="Never miss a follow-up again. Every lead gets the attention it deserves." savings={[
        { label: 'Pipeline Increase', value: '+180%' },
        { label: 'Time Saved/Rep', value: '25 hrs/wk' },
        { label: 'Revenue Impact', value: '+₹60L/yr' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Supercharge Your Sales Pipeline?" description="Book a demo and see how an AI sales assistant would work for your specific sales process." primaryCTA={{ label: 'Book Free Demo', href: '#contact' }} secondaryCTA={{ label: 'Talk to Sales', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}