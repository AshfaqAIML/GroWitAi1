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
  title: 'AI Receptionists — Virtual Front Desk That Never Takes a Break',
  description: 'Greet every visitor, answer every call, and schedule every appointment automatically with AI receptionists that work 24/7.',
};

const features = [
  {
    icon: "CalendarCheck",
    title: 'Intelligent Appointment Scheduling',
    description: 'The AI receptionist checks real-time availability, books appointments, sends confirmations, and handles rescheduling — all through natural conversation.',
    benefit: 'Reduce no-shows by 80% with automated reminders',
  },
  {
    icon: "Users",
    title: 'Visitor Management',
    description: 'Greet walk-in visitors, notify the right person, capture visitor details, print badges, and maintain a digital visitor log automatically.',
    benefit: 'Professional first impression every time',
  },
  {
    icon: "DoorOpen",
    title: 'Multi-Channel Presence',
    description: 'Your AI receptionist works across phone calls, website chat, WhatsApp, and a physical kiosk/tablet at your front desk — one unified system.',
    benefit: 'Consistent experience across all touchpoints',
  },
  {
    icon: "MessageSquareText",
    title: 'Inquiry Handling & Triage',
    description: 'Understands complex inquiries, answers FAQs, routes to the right department, and captures lead information for follow-up.',
    benefit: 'Zero missed inquiries, perfect routing',
  },
  {
    icon: "BadgeCheck",
    title: 'Professional Brand Representation',
    description: 'Custom-trained on your business — your AI receptionist knows your team, your services, your pricing, and your brand voice.',
    benefit: 'Represents your brand perfectly, every time',
  },
  {
    icon: "Shield",
    title: 'Privacy & Compliance',
    description: 'HIPAA-compliant for healthcare, client confidentiality for legal firms, and GDPR/DPDP Act compliant. Visitor data is encrypted and secure.',
    benefit: 'Enterprise-grade security and compliance',
  },
];

const steps = [
  { step: 1, title: 'Front Desk Analysis', description: 'We study your current reception workflow — call volumes, visitor patterns, common inquiries, and appointment processes.', duration: '2 days' },
  { step: 2, title: 'Knowledge Base Setup', description: 'We build the AI\'s knowledge base with your team directory, services, pricing, FAQs, and business rules.', duration: '3 days' },
  { step: 3, title: 'System Integration', description: 'Connect to your calendar, CRM, phone system, and visitor management hardware.', duration: '2-3 days' },
  { step: 4, title: 'Training & Testing', description: 'Run through hundreds of scenarios — different visitor types, complex inquiries, difficult situations.', duration: '3 days' },
  { step: 5, title: 'Deployment & Team Training', description: 'Go live with parallel running. Train your team on the system. Optimize based on real interactions.', duration: '2 days + ongoing' },
];

const useCases = [
  {
    industry: 'Professional Services',
    icon: 'Briefcase',
    challenge: 'Law firm receptionist overwhelmed with calls, visitors, and appointment scheduling. Clients waiting too long.',
    solution: 'AI receptionist handles all calls, greets visitors via lobby kiosk, schedules consultations, and routes complex legal inquiries to appropriate attorneys.',
    results: [
      { label: 'Wait Time Reduced', value: '90%' },
      { label: 'Client Satisfaction', value: '4.9/5' },
      { label: 'Staff Cost Saved', value: '₹6L/yr' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: 'HeartPulse',
    challenge: 'Clinic with 4 doctors, 200+ daily patients, and constant phone calls for appointments and reports.',
    solution: 'AI receptionist handles appointment booking, sends reminders, manages walk-in queue, and provides report status updates.',
    results: [
      { label: 'Phone Calls Automated', value: '85%' },
      { label: 'No-Show Rate', value: '3%' },
      { label: 'Staff Freed', value: '3 FTE' },
    ],
  },
  {
    industry: 'Education',
    icon: 'GraduationCap',
    challenge: 'University admissions office overwhelmed during enrollment season with inquiries and campus visits.',
    solution: 'AI receptionist handles admission inquiries, schedules campus tours, manages visitor badges, and routes to counselors.',
    results: [
      { label: 'Inquiries Handled', value: '15,000+' },
      { label: 'Response Time', value: 'Instant' },
      { label: 'Enrollment Increase', value: '+22%' },
    ],
  },
];

const integrations = [
  { name: 'Google Workspace', category: 'Calendar' },
  { name: 'Microsoft 365', category: 'Calendar' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Exotel', category: 'Telephony' },
  { name: 'Twilio', category: 'Telephony' },
  { name: 'WhatsApp Business', category: 'Messaging' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Envoy', category: 'Visitor Management' },
  { name: 'Zapier', category: 'Automation' },
];

const faqs = [
  {
    question: 'Can the AI receptionist handle difficult or angry visitors?',
    answer: 'Yes. The AI is trained on de-escalation techniques and can handle complaints calmly and professionally. It immediately escalates to a human manager when the situation requires empathy beyond its capabilities.',
  },
  {
    question: 'What if the internet goes down?',
    answer: 'The system has an offline fallback mode for visitor check-in. Calls can be automatically routed to a backup number or voicemail. We recommend a 4G backup connection which we can help set up.',
  },
  {
    question: 'How does it know who to route calls to?',
    answer: 'The AI understands the caller\'s intent — whether they need sales, support, accounts, or a specific person. It checks availability and routes accordingly. You can customize routing rules anytime.',
  },
  {
    question: 'Can it integrate with our existing reception desk?',
    answer: 'Absolutely. The AI receptionist complements your human team, not replaces it. It handles routine tasks so your human receptionist can focus on high-value interactions.',
  },
];

export default function AIReceptionistsPage() {
  return (
    <>
      <SolutionHero
        icon="Headset"
        title="AI Receptionists That Welcome Every Visitor, Answer Every Call"
        subtitle="Professional front-desk AI that works 24/7/365"
        description="Deploy a virtual receptionist that greets visitors, schedules appointments, routes calls, and represents your brand perfectly — at a fraction of the cost."
        metrics={[
          { label: 'Cost vs Human', value: '-80%' },
          { label: 'Availability', value: '24/7' },
          { label: 'No-Show Rate', value: '<5%' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '#demo' }}
        secondaryCTA={{ label: 'See It in Action', href: '#demo-video' }}
      />
      <SolutionFeatures title="Your Front Desk, Reimagined" subtitle="Handle every interaction professionally without hiring more staff" features={features} />
      <SolutionHowItWorks title="Deployed in 2 Weeks" subtitle="From analysis to your new AI receptionist going live" steps={steps} />
      <SolutionUseCases title="Front Desks Transformed" subtitle="See how businesses eliminated front-desk bottlenecks" useCases={useCases} />
      <SolutionIntegrations title="Connects With Your Office Systems" subtitle="Seamless integration with calendars, phone systems, and visitor management" integrations={integrations} />
      <SolutionROI title="The Cost of a Missed First Impression" description="An AI receptionist costs less than 20% of a human receptionist while handling 3x the workload." savings={[
        { label: 'Annual Cost Savings', value: '₹18L+' },
        { label: 'Appointments Booked', value: '500+/mo' },
        { label: 'Visitor Satisfaction', value: '4.8/5' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Upgrade Your Front Desk?" description="Book a free demo and see how an AI receptionist would work for your specific business." primaryCTA={{ label: 'Book Free Demo', href: '#contact' }} secondaryCTA={{ label: 'Calculate Savings', href: '/roi-calculator' }} />
    </>
  );
}