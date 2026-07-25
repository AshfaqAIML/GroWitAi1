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
  title: 'Workflow Automation — Free Your Team from Repetitive Work',
  description: 'Automate end-to-end business processes. Connect your tools, eliminate manual tasks, and scale operations without hiring.',
};

const features = [
  {
    icon: 'GitMerge',
    title: 'Multi-Step Process Automation',
    description: 'Automate complex workflows that span multiple departments and tools — from lead capture to invoice generation, all connected and automatic.',
    benefit: 'End-to-end process automation, zero gaps',
  },
  {
    icon: "Zap",
    title: 'Trigger-Based Automation',
    description: 'Set up triggers based on events — new form submission, payment received, contract signed, ticket created. Actions fire automatically.',
    benefit: 'Instant response to business events',
  },
  {
    icon: "Layers",
    title: 'Conditional Logic & Branching',
    description: 'Build smart workflows with if-then rules. Different paths for different scenarios — approvals, escalations, notifications based on conditions.',
    benefit: 'Intelligent routing, no manual decisions',
  },
  {
    icon: "Clock",
    title: 'Scheduled & Recurring Tasks',
    description: 'Automate daily, weekly, monthly tasks — report generation, data backups, invoice reminders, performance summaries.',
    benefit: 'Never miss a recurring task again',
  },
  {
    icon: "Repeat",
    title: 'Cross-Platform Integration',
    description: 'Connect 5000+ apps and tools. Your CRM talks to your accounting software, your email talks to your project management — seamlessly.',
    benefit: 'One unified automated workflow',
  },
  {
    icon: "GanttChart",
    title: 'Visual Workflow Builder',
    description: 'Drag-and-drop workflow designer. See your entire business process visually. No coding required to create or modify workflows.',
    benefit: 'Anyone can build automations, no developers needed',
  },
];

const steps = [
  { step: 1, title: 'Process Discovery', description: 'We map your current workflows, identify bottlenecks, repetitive tasks, and automation opportunities across departments.', duration: '2-3 days' },
  { step: 2, title: 'Automation Design', description: 'Design the automated workflow with all triggers, conditions, actions, and integrations mapped out visually.', duration: '2-3 days' },
  { step: 3, title: 'Build & Integration', description: 'Build the automation workflows, connect all tools and systems, configure triggers and conditional logic.', duration: '3-5 days' },
  { step: 4, title: 'Testing & Validation', description: 'Test every scenario, edge case, and failure mode. Ensure data flows correctly and error handling works.', duration: '2-3 days' },
  { step: 5, title: 'Deploy & Train', description: 'Launch the automation, train your team, and monitor for 2 weeks. Document all workflows for future reference.', duration: '2 days + ongoing' },
];

const useCases = [
  {
    industry: 'Professional Services',
    icon: 'Briefcase',
    challenge: 'Law firm spending 30+ hours/week on manual client onboarding, document generation, and billing follow-ups.',
    solution: 'End-to-end workflow automation — client intake forms → document generation → e-signature → invoice creation → payment reminders.',
    results: [
      { label: 'Time Saved', value: '120 hrs/mo' },
      { label: 'Billing Cycle', value: '50% faster' },
      { label: 'Client Onboarding', value: 'From 5 days to 2 hours' },
    ],
  },
  {
    industry: 'E-commerce',
    icon: 'ShoppingCart',
    challenge: 'Manual order processing, inventory updates, and shipping notifications taking 4 hours daily.',
    solution: 'Automated order → inventory sync → shipping label generation → tracking notification → review request workflow.',
    results: [
      { label: 'Processing Time', value: '-90%' },
      { label: 'Orders/Day', value: '3x capacity' },
      { label: 'Errors', value: 'Zero' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: 'HeartPulse',
    challenge: 'Patient records, lab results, and prescriptions manually transferred between departments causing delays.',
    solution: 'Automated patient data flow — registration → doctor assignment → lab orders → result notification → prescription → pharmacy.',
    results: [
      { label: 'Patient Wait Time', value: '-60%' },
      { label: 'Data Errors', value: 'Eliminated' },
      { label: 'Staff Productivity', value: '+200%' },
    ],
  },
];

const integrations = [
  { name: 'Zapier', category: 'Automation Platform' },
  { name: 'Make (Integromat)', category: 'Automation Platform' },
  { name: 'n8n', category: 'Automation Platform' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Google Workspace', category: 'Productivity' },
  { name: 'Microsoft 365', category: 'Productivity' },
  { name: 'Slack', category: 'Communication' },
  { name: 'QuickBooks', category: 'Accounting' },
  { name: 'Tally', category: 'Accounting' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'Zendesk', category: 'Support' },
  { name: 'Jira', category: 'Project Management' },
  { name: 'Asana', category: 'Project Management' },
];

const faqs = [
  {
    question: 'What kind of processes can be automated?',
    answer: 'Virtually any repetitive business process — lead management, client onboarding, invoicing, reporting, data entry, email sequences, approval workflows, inventory management, and more. If it follows a pattern, it can be automated.',
  },
  {
    question: 'Do I need technical skills to use workflow automation?',
    answer: 'No. We build the automations for you. After deployment, we provide a visual dashboard where you can monitor and make simple adjustments. For complex changes, our team is always available.',
  },
  {
    question: 'How reliable are automated workflows?',
    answer: 'Very. We build in error handling, notifications for failures, and backup processes. Our automations include monitoring and alerting so you\'re immediately notified if anything needs attention.',
  },
  {
    question: 'What if I need to change a workflow later?',
    answer: 'Workflows are designed to be flexible. Simple changes can be made through the visual builder. We also offer ongoing support plans for continuous optimization as your business evolves.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Workflow automation projects typically range from ₹50,000 to ₹5,00,000 depending on complexity and number of integrations. Most clients see ROI within 2-3 months through time savings alone.',
  },
];

export default function WorkflowAutomationPage() {
  return (
    <>
      <SolutionHero
        icon="Workflow"
        title="Workflow Automation That Eliminates Repetitive Work"
        subtitle="Connect your tools, automate processes, and scale without hiring"
        description="Transform chaotic manual processes into smooth, automated workflows that save hundreds of hours and eliminate errors."
        metrics={[
          { label: 'Time Saved', value: '120+ hrs/mo' },
          { label: 'Error Reduction', value: '99%' },
          { label: 'ROI Timeline', value: '2-3 months' },
        ]}
        primaryCTA={{ label: 'Book Free Process Audit', href: '#demo' }}
        secondaryCTA={{ label: 'See Examples', href: '#examples' }}
      />
      <SolutionFeatures title="Your Business, on Autopilot" subtitle="Automate any repetitive process across any department" features={features} />
      <SolutionHowItWorks title="From Chaos to Automation in 2-3 Weeks" subtitle="We analyze, design, build, and deploy your automated workflows" steps={steps} />
      <SolutionUseCases title="Businesses Running on Autopilot" subtitle="See how companies eliminated hundreds of hours of manual work" useCases={useCases} />
      <SolutionIntegrations title="Connects 5,000+ Apps & Tools" subtitle="Your entire tech stack working together seamlessly" integrations={integrations} />
      <SolutionROI title="The ROI of Eliminating Manual Work" description="At an average salary of ₹500/hour, saving 120 hours/month means ₹60,000/month back in your pocket." savings={[
        { label: 'Monthly Savings', value: '₹60,000+' },
        { label: 'Annual Savings', value: '₹7.2L+' },
        { label: 'Productivity Gain', value: '+300%' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Automate Your Business?" description="Book a free process audit and discover how many hours we can save your team every month." primaryCTA={{ label: 'Book Free Audit', href: '#contact' }} secondaryCTA={{ label: 'Talk to Sales', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}