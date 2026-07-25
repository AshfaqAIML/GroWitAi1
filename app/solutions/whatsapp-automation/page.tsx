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
  title: 'WhatsApp Automation — Engage Customers on India\'s Favorite Platform',
  description: 'Automate marketing, sales, and support on WhatsApp with AI. 98% open rates, instant responses, and massive engagement.',
};

const features = [
  {
    icon: "Zap",
    title: 'Instant Auto-Replies',
    description: 'Respond to customer messages instantly — even at 3 AM. Handle FAQs, share catalogs, take orders, and book appointments automatically.',
    benefit: 'Response time under 1 second, 24/7',
  },
  {
    icon: "ShoppingCart",
    title: 'WhatsApp Commerce',
    description: 'Share product catalogs, send payment links, confirm orders, and provide order tracking — all within WhatsApp. Complete shopping experience.',
    benefit: '3x higher conversion vs website/e-commerce',
  },
  {
    icon: "Users",
    title: 'Broadcast & Bulk Messaging',
    description: 'Send promotional messages, offers, and updates to thousands of customers with one click. Smart segmentation based on customer behavior.',
    benefit: '98% open rate, 45% CTR on campaigns',
  },
  {
    icon: "Bell",
    title: 'Automated Notifications',
    description: 'Order confirmations, shipping updates, appointment reminders, payment confirmations — all automated and delivered to WhatsApp.',
    benefit: 'Reduce support tickets by 60% with proactive updates',
  },
  {
    icon: "Shield",
    title: 'Official WhatsApp Business API',
    description: 'We use the official WhatsApp Business API — not unauthorized tools. Your account gets the green verified badge and never gets blocked.',
    benefit: 'Fully compliant, verified business profile',
  },
  {
    icon: "BarChart3",
    title: 'Conversation Analytics',
    description: 'Track message volumes, response times, customer satisfaction, campaign performance, and sales attribution — all in one dashboard.',
    benefit: 'ROI tracking for every campaign',
  },
];

const steps = [
  { step: 1, title: 'WABA Setup & Verification', description: 'We set up your official WhatsApp Business API account, get your business verified, and configure your profile.', duration: '3-5 days' },
  { step: 2, title: 'Message Template Approval', description: 'Create and submit message templates for WhatsApp approval — order updates, offers, reminders, etc.', duration: '1-2 days' },
  { step: 3, title: 'Automation Flow Design', description: 'Design chatbot flows, auto-reply rules, broadcast segments, and integration with your systems.', duration: '3-4 days' },
  { step: 4, title: 'Integration & Testing', description: 'Connect to your CRM, e-commerce platform, payment gateway, and test all flows end-to-end.', duration: '2-3 days' },
  { step: 5, title: 'Go Live & Campaign Launch', description: 'Launch your WhatsApp automation. Start with welcome messages and scale to full campaigns.', duration: '1 day + ongoing' },
];

const useCases = [
  {
    industry: 'E-commerce',
    icon: 'ShoppingCart',
    challenge: 'Cart abandonment rate of 70%. Customers not returning to complete purchases.',
    solution: 'Automated WhatsApp cart recovery messages with product images, personalized offers, and one-click payment links.',
    results: [
      { label: 'Cart Recovery Rate', value: '35%' },
      { label: 'Revenue Recovered', value: '₹18L/mo' },
      { label: 'ROAS', value: '12x' },
    ],
  },
  {
    industry: 'Education',
    icon: 'GraduationCap',
    challenge: 'Prospective students inquiring but not completing applications.',
    solution: 'WhatsApp nurturing sequence with course info, testimonials, deadline reminders, and one-click application links.',
    results: [
      { label: 'Application Rate', value: '+45%' },
      { label: 'Response Rate', value: '92%' },
      { label: 'Enrollments', value: '+30%' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: 'HeartPulse',
    challenge: 'High no-show rate for appointments, manual reminder calls taking hours.',
    solution: 'Automated WhatsApp appointment reminders with reschedule option, post-visit follow-ups, and report delivery.',
    results: [
      { label: 'No-Show Reduction', value: '75%' },
      { label: 'Staff Time Saved', value: '30 hrs/wk' },
      { label: 'Patient Satisfaction', value: '4.9/5' },
    ],
  },
];

const integrations = [
  { name: 'WhatsApp Business API', category: 'Core' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'Razorpay', category: 'Payments' },
  { name: 'PayU', category: 'Payments' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zoho CRM', category: 'CRM' },
  { name: 'Google Sheets', category: 'Data' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Shiprocket', category: 'Logistics' },
];

const faqs = [
  {
    question: 'What\'s the difference between WhatsApp Business App and API?',
    answer: 'The free WhatsApp Business App is limited to one user, basic auto-replies, and manual messaging. The API (which we use) supports unlimited users, advanced automation, CRM integration, bulk messaging, and chatbots. It\'s built for businesses that want to scale.',
  },
  {
    question: 'Will my WhatsApp account get banned?',
    answer: 'No. We use the official WhatsApp Business API through Meta\'s approved partners. Your account is verified, compliant with WhatsApp policies, and we follow all best practices to maintain high quality ratings.',
  },
  {
    question: 'What are the costs involved?',
    answer: 'WhatsApp charges per conversation (roughly ₹0.50-2 per message depending on type). Our platform fee starts at ₹15,000/month. Combined, it\'s significantly cheaper than SMS with 10x better engagement.',
  },
  {
    question: 'Can I migrate from another WhatsApp tool?',
    answer: 'Yes! We handle the migration of your templates, contacts, and chat history with zero downtime.',
  },
];

export default function WhatsAppAutomationPage() {
  return (
    <>
      <SolutionHero
        icon="MessageCircle"
        title="WhatsApp Automation That Engages Customers Where They Already Are"
        subtitle="98% open rates, instant responses, and automated commerce"
        description="Leverage India's most used messaging platform for marketing, sales, and support — all automated with AI."
        metrics={[
          { label: 'Open Rate', value: '98%' },
          { label: 'CTR', value: '45%' },
          { label: 'ROI', value: '12x' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '#demo' }}
        secondaryCTA={{ label: 'See Campaign Examples', href: '#examples' }}
      />
      <SolutionFeatures title="WhatsApp, Supercharged with AI" subtitle="Automate every customer interaction on the platform they trust most" features={features} />
      <SolutionHowItWorks title="Live in 10 Days" subtitle="From WABA setup to full automation — a guided process" steps={steps} />
      <SolutionUseCases title="WhatsApp Success Stories" subtitle="See how businesses are generating revenue through WhatsApp" useCases={useCases} />
      <SolutionIntegrations title="Works With Your Business Tools" subtitle="Connect WhatsApp to your e-commerce, CRM, and payment systems" integrations={integrations} />
      <SolutionROI title="The ROI of Meeting Customers on WhatsApp" description="With 98% open rates and 45% click-through rates, WhatsApp outperforms email by 10x." savings={[
        { label: 'Avg. Open Rate', value: '98%' },
        { label: 'Campaign CTR', value: '45%' },
        { label: 'Support Cost Reduction', value: '-60%' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Dominate WhatsApp?" description="Book a demo and see how WhatsApp automation can transform your customer engagement." primaryCTA={{ label: 'Book Free Demo', href: '#contact' }} secondaryCTA={{ label: 'WhatsApp Us', href: 'https://wa.me/your-number' }} />
    </>
  );
}