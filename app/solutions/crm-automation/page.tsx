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
  title: 'CRM Automation — Never Lose a Lead Again',
  description: 'Automate CRM data entry, lead tracking, follow-ups, and pipeline management. Keep your CRM always updated with zero manual work.',
};

const features = [
  {
    icon: "RefreshCw",
    title: 'Auto-Sync Across Systems',
    description: 'Automatically sync leads, contacts, and deals between your website, WhatsApp, email, and CRM. No more copy-pasting or CSV imports.',
    benefit: '100% data accuracy, zero manual entry',
  },
  {
    icon: "Users",
    title: 'Intelligent Lead Assignment',
    description: 'AI-powered lead routing based on territory, expertise, availability, and lead score. The right lead goes to the right rep instantly.',
    benefit: '3x faster lead response time',
  },
  {
    icon: "Bell",
    title: 'Smart Follow-Up Reminders',
    description: 'The system tracks every interaction and automatically creates follow-up tasks. Never forget to follow up on a hot lead again.',
    benefit: '100% follow-up compliance',
  },
  {
    icon: "BarChart3",
    title: 'Pipeline Analytics & Forecasting',
    description: 'Real-time dashboards showing pipeline health, conversion rates, revenue forecasts, and rep performance. AI-powered insights to improve close rates.',
    benefit: 'Data-driven sales decisions',
  },
  {
    icon: "Zap",
    title: 'Workflow Automation',
    description: 'Automate repetitive CRM tasks — lead scoring, email sequences, deal stage updates, quote generation, and contract creation.',
    benefit: 'Save 20+ hours per rep per week',
  },
  {
    icon: "Shield",
    title: 'Data Enrichment & Deduplication',
    description: 'AI automatically enriches lead data with company info, social profiles, and industry. Detects and merges duplicate records.',
    benefit: 'Clean, complete CRM data always',
  },
];

const steps = [
  { step: 1, title: 'CRM Audit & Mapping', description: 'We analyze your current CRM setup, data quality, sales process, and identify automation opportunities.', duration: '2 days' },
  { step: 2, title: 'Integration Setup', description: 'Connect your CRM with all lead sources — website forms, WhatsApp, email, phone system, and marketing tools.', duration: '2-3 days' },
  { step: 3, title: 'Automation Rules Configuration', description: 'Set up lead scoring, routing rules, follow-up sequences, deal stage automation, and notification triggers.', duration: '3 days' },
  { step: 4, title: 'Data Cleanup & Migration', description: 'Clean existing data, merge duplicates, enrich records, and migrate historical data if needed.', duration: '2-3 days' },
  { step: 5, title: 'Training & Go Live', description: 'Train your team on the new workflows. Go live with monitoring and optimization for the first 2 weeks.', duration: '2 days + ongoing' },
];

const useCases = [
  {
    industry: 'Real Estate',
    icon: 'Building2',
    challenge: '15 agents using spreadsheets instead of CRM. Leads falling through cracks, no follow-up system, zero pipeline visibility.',
    solution: 'Implemented CRM automation with auto-lead capture from website and WhatsApp, intelligent routing to agents, and automated follow-up sequences.',
    results: [
      { label: 'Lead Response Time', value: '<2 min' },
      { label: 'Follow-up Rate', value: '100%' },
      { label: 'Sales Increase', value: '+55%' },
    ],
  },
  {
    industry: 'B2B Services',
    icon: 'Briefcase',
    challenge: 'CRM outdated with 40% duplicate records. Sales team spending 15 hours/week on data entry instead of selling.',
    solution: 'AI-powered data cleanup, auto-enrichment, deduplication, and automated activity logging from emails and calls.',
    results: [
      { label: 'Data Accuracy', value: '99%' },
      { label: 'Time Saved/Rep', value: '15 hrs/wk' },
      { label: 'Pipeline Visibility', value: '100%' },
    ],
  },
  {
    industry: 'Education',
    icon: 'GraduationCap',
    challenge: 'Admissions team using 3 different tools. No single view of student journey from inquiry to enrollment.',
    solution: 'Unified CRM with automated inquiry capture, lead scoring, counselor assignment, and enrollment pipeline tracking.',
    results: [
      { label: 'Enrollment Rate', value: '+40%' },
      { label: 'Response Time', value: '<5 min' },
      { label: 'Conversion Rate', value: '+65%' },
    ],
  },
];

const integrations = [
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zoho CRM', category: 'CRM' },
  { name: 'Pipedrive', category: 'CRM' },
  { name: 'Freshsales', category: 'CRM' },
  { name: 'WhatsApp Business', category: 'Messaging' },
  { name: 'Gmail/Google Workspace', category: 'Email' },
  { name: 'Microsoft 365', category: 'Email' },
  { name: 'LinkedIn Sales Navigator', category: 'Prospecting' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Slack', category: 'Communication' },
];

const faqs = [
  {
    question: 'Can you work with our existing CRM?',
    answer: 'Absolutely! We work with all major CRMs including Salesforce, HubSpot, Zoho, Pipedrive, Freshsales, and custom CRMs. We can automate your existing setup without migrating to a new platform.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most CRM automation projects go live in 2-3 weeks. Simple setups (like lead capture + auto-assignment) can be done in 5-7 days.',
  },
  {
    question: 'Will my team need training?',
    answer: 'We provide comprehensive training and documentation. The automations work in the background, so your team continues using the CRM they know — just with less manual work.',
  },
  {
    question: 'What about data security?',
    answer: 'All integrations use OAuth and API keys with encryption. We never store your CRM data. We comply with GDPR, DPDP Act, and follow SOC 2 best practices.',
  },
  {
    question: 'What ROI can we expect?',
    answer: 'Most clients save 15-20 hours per sales rep per week and see 30-50% improvement in lead response time and follow-up compliance within the first month.',
  },
];

export default function CRMAutomationPage() {
  return (
    <>
      <SolutionHero
        icon="Database"
        title="CRM Automation That Keeps Your Pipeline Flowing"
        subtitle="Automate data entry, lead tracking, and follow-ups — so your team can focus on closing"
        description="Transform your CRM from a data-entry burden into an intelligent growth engine that works for you 24/7."
        metrics={[
          { label: 'Time Saved', value: '20+ hrs/wk' },
          { label: 'Data Accuracy', value: '99%' },
          { label: 'Follow-up Rate', value: '100%' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '#demo' }}
        secondaryCTA={{ label: 'Calculate Savings', href: '/roi-calculator' }}
      />
      <SolutionFeatures title="Your CRM, on Autopilot" subtitle="Eliminate manual CRM work and let AI handle the busywork" features={features} />
      <SolutionHowItWorks title="From Audit to Automation in 2 Weeks" subtitle="A proven process to transform your CRM operations" steps={steps} />
      <SolutionUseCases title="CRMs Transformed by Automation" subtitle="See how businesses turned their CRM into a growth engine" useCases={useCases} />
      <SolutionIntegrations title="Works With Your CRM & Tools" subtitle="Seamless integration with leading CRM platforms and business tools" integrations={integrations} />
      <SolutionROI title="The ROI of an Automated CRM" description="When your CRM works for you instead of the other way around, the numbers speak for themselves." savings={[
        { label: 'Time Saved/Rep/Month', value: '80+ hrs' },
        { label: 'Lead Response Improvement', value: '10x faster' },
        { label: 'Revenue Uplift', value: '+35%' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Make Your CRM Work for You?" description="Book a free CRM audit and see how much time and revenue you could be saving." primaryCTA={{ label: 'Book Free CRM Audit', href: '#contact' }} secondaryCTA={{ label: 'Talk to Sales', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}