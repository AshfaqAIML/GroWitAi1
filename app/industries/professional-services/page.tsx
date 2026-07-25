import { Metadata } from 'next';
import { SolutionHero } from '@/components/solutions/solution-hero';
import { SolutionFeatures } from '@/components/solutions/solution-features';
import { SolutionUseCases } from '@/components/solutions/solution-use-cases';
import { SolutionROI } from '@/components/solutions/solution-roi';
import { SolutionFAQ } from '@/components/solutions/solution-faq';
import { SolutionCTA } from '@/components/solutions/solution-cta';
import { SolutionIntegrations } from '@/components/solutions/solution-integrations';

export const metadata: Metadata = {
  title: 'AI for Professional Services — Automate Client Work & Grow Your Practice',
  description: 'AI-powered client intake, document automation, and intelligent scheduling for law firms, CA firms, and consultants.',
};

const features = [
  {
    icon: 'Briefcase',
    title: 'AI Client Intake',
    description: 'Automate client onboarding — collect information, verify documents, check conflicts, and create engagement letters automatically via conversational AI.',
    benefit: 'Reduce client onboarding from 3 days to 2 hours',
  },
  {
    icon: 'FileText',
    title: 'Document Automation',
    description: 'AI-powered document generation for contracts, agreements, petitions, and reports. Templates auto-filled with client data from intake conversations.',
    benefit: 'Generate standard documents in under 5 minutes',
  },
  {
    icon: 'CalendarCheck',
    title: 'Intelligent Scheduling',
    description: 'AI receptionist that schedules consultations, court dates, filing deadlines, and client meetings. Sends automated reminders to reduce no-shows.',
    benefit: '100% appointment attendance with smart reminders',
  },
  {
    icon: 'Phone',
    title: 'AI Call Handling',
    description: 'Handle client calls 24/7. Qualify inquiries, answer FAQs about services and fees, and schedule consultations — all without a receptionist.',
    benefit: 'Never miss a potential client call',
  },
  {
    icon: 'Clock',
    title: 'Time Tracking & Billing',
    description: 'Automated time tracking based on calendar, emails, and calls. Generate invoices automatically and send payment reminders via WhatsApp.',
    benefit: 'Recover 15% more billable hours',
  },
  {
    icon: 'Search',
    title: 'AI Legal/Financial Research',
    description: 'AI-powered research assistant that analyzes case law, regulations, and precedents. Summarizes findings and drafts research memos.',
    benefit: 'Reduce research time by 70%',
  },
];

const useCases = [
  {
    industry: 'Law Firm',
    icon: 'Scale',
    challenge: '15-lawyer firm spending 20+ hours/week on client intake, document drafting, and scheduling. Missing after-hours client calls.',
    solution: 'AI intake chatbot + document automation for standard agreements + AI receptionist for calls and scheduling.',
    results: [
      { label: 'Intake Time', value: '-85%' },
      { label: 'Billable Hours', value: '+15%' },
      { label: 'Client Acquisition', value: '+30%' },
    ],
  },
  {
    industry: 'CA Firm',
    icon: 'Calculator',
    challenge: 'Tax season overwhelm — 500+ clients, manual document collection, constant follow-up calls, and missed filing deadlines.',
    solution: 'WhatsApp automation for document collection + automated reminders for deadlines + AI chatbot for tax FAQs.',
    results: [
      { label: 'Document Collection', value: '3x faster' },
      { label: 'Deadline Compliance', value: '100%' },
      { label: 'Client Satisfaction', value: '4.9/5' },
    ],
  },
  {
    industry: 'Consulting Firm',
    icon: 'LineChart',
    challenge: 'Consultants spending 30% of time on admin — scheduling, proposal creation, follow-ups. Losing leads due to slow response.',
    solution: 'AI sales assistant for lead qualification + automated proposal generation + AI scheduling for consultant calendars.',
    results: [
      { label: 'Admin Time', value: '-70%' },
      { label: 'Proposals Sent', value: '3x' },
      { label: 'Win Rate', value: '+25%' },
    ],
  },
];

const integrations = [
  { name: 'Clio', category: 'Legal Practice Mgmt' },
  { name: 'PracticePanther', category: 'Legal Practice Mgmt' },
  { name: 'Tally', category: 'Accounting' },
  { name: 'QuickBooks', category: 'Accounting' },
  { name: 'Zoho Books', category: 'Accounting' },
  { name: 'WhatsApp Business', category: 'Communication' },
  { name: 'Google Workspace', category: 'Productivity' },
  { name: 'Microsoft 365', category: 'Productivity' },
  { name: 'DocuSign', category: 'E-Signature' },
  { name: 'Calendly', category: 'Scheduling' },
];

const faqs = [
  {
    question: 'How does AI handle confidential client information?',
    answer: 'All client data is encrypted end-to-end. We comply with attorney-client privilege requirements, CA profession confidentiality standards, and DPDP Act 2023. Data is stored on India-based servers.',
  },
  {
    question: 'Can the AI understand legal/accounting terminology?',
    answer: 'Yes. Our AI is fine-tuned on professional services vocabulary — legal terminology, tax code references, accounting standards, and consulting frameworks. It understands and uses professional language accurately.',
  },
  {
    question: 'Will AI replace our paralegals or junior staff?',
    answer: 'No. AI handles routine, repetitive tasks so your skilled professionals can focus on high-value work that requires human judgment, strategy, and client relationships.',
  },
  {
    question: 'How does document automation work with our templates?',
    answer: 'We import your existing templates and configure the AI to auto-populate them with client data from intake conversations. Your documents, your language, your formatting — just generated automatically.',
  },
  {
    question: 'What about compliance with Bar Council/ICAI regulations?',
    answer: 'All AI communications are transparent. We configure the system to include required disclaimers and follow professional conduct guidelines. The AI does not provide legal or financial advice — it facilitates your practice.',
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <SolutionHero
        icon="Briefcase"
        title="AI Solutions for Professional Services"
        subtitle="Automate client work, generate documents, and grow your practice"
        description="Purpose-built AI for law firms, CA firms, and consultants. Reduce administrative burden and focus on high-value client work."
        metrics={[
          { label: 'Admin Time Saved', value: '70%' },
          { label: 'Billable Hours Up', value: '+15%' },
          { label: 'Client Growth', value: '+30%' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '/#demo' }}
        secondaryCTA={{ label: 'Calculate Your Savings', href: '/#calculator' }}
      />
      <SolutionFeatures title="AI-Powered Professional Practice" subtitle="Automate routine tasks and focus on what you do best" features={features} />
      <SolutionUseCases title="Professional Firms Transformed" subtitle="See how law firms, CA firms, and consultants are scaling with AI" useCases={useCases} />
      <SolutionIntegrations title="Integrates With Your Practice Tools" subtitle="Works with legal, accounting, and productivity software" integrations={integrations} />
      <SolutionROI title="The ROI of AI for Professional Services" description="Firms using AI recover 15% more billable hours and reduce administrative costs by 70%." savings={[
        { label: 'Annual Savings', value: '₹25L+' },
        { label: 'Billable Recovery', value: '+15%' },
        { label: 'Client Intake Speed', value: '10x' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Scale Your Practice?" description="Book a free demo and see how AI can transform your firm's operations." primaryCTA={{ label: 'Book Free Demo', href: '/#contact' }} secondaryCTA={{ label: 'Talk to Professional Services Team', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}
