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
  title: 'AI Chatbots — Intelligent 24/7 Customer Engagement',
  description: 'Reduce support costs by 60% and respond to customers instantly with AI-powered chatbots that understand your business. Deploy in 7 days.',
};

const features = [
  {
    icon: "Brain",
    title: 'Natural Language Understanding',
    description: 'Our chatbots don\'t just match keywords — they truly understand customer intent, context, and sentiment. Powered by GPT-4 and fine-tuned on your business data, they handle complex conversations naturally.',
    benefit: '90%+ query resolution without human intervention',
  },
  {
    icon: "Globe",
    title: 'Multilingual Support',
    description: 'Communicate with customers in 50+ languages including Hindi, English, Tamil, Telugu, Marathi, and more. Automatic language detection and culturally appropriate responses.',
    benefit: 'Expand your reach across India\'s diverse market',
  },
  {
    icon: "Shield",
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 compliant infrastructure with end-to-end encryption. Your customer data never leaves India\'s borders. GDPR and DPDP Act compliant.',
    benefit: 'Bank-grade security for customer conversations',
  },
  {
    icon: "BarChart3",
    title: 'Real-Time Analytics',
    description: 'Track every conversation, measure customer satisfaction, identify trending issues, and get AI-powered insights to continuously improve your service.',
    benefit: 'Data-driven decisions for better CX',
  },
  {
    icon: "Clock",
    title: '24/7 Instant Response',
    description: 'No wait times, no business hours. Your AI chatbot responds in under 1 second, every time. Handle peak loads of 10,000+ simultaneous conversations.',
    benefit: 'Zero wait time, 100% availability',
  },
  {
    icon: "Headset",
    title: 'Seamless Human Handoff',
    description: 'When conversations need a human touch, the chatbot intelligently escalates with full context. Your team sees the entire conversation history instantly.',
    benefit: 'Smooth transitions, no customer frustration',
  },
];

const steps = [
  {
    step: 1,
    title: 'Business Discovery',
    description: 'We analyze your customer journey, common queries, support tickets, and business goals. This creates the blueprint for your chatbot.',
    duration: '2-3 days',
  },
  {
    step: 2,
    title: 'Knowledge Base Training',
    description: 'We ingest your product docs, FAQs, support history, and business rules. The AI learns your business inside out.',
    duration: '3-5 days',
  },
  {
    step: 3,
    title: 'Conversation Design',
    description: 'Our UX team designs natural conversation flows, personality, and tone that reflect your brand voice.',
    duration: '2-3 days',
  },
  {
    step: 4,
    title: 'Integration & Testing',
    description: 'We connect your chatbot to your website, WhatsApp, CRM, and other systems. Rigorous testing across scenarios.',
    duration: '2-3 days',
  },
  {
    step: 5,
    title: 'Launch & Optimize',
    description: 'Go live with confidence. We monitor the first 1,000 conversations and fine-tune responses for maximum accuracy.',
    duration: 'Ongoing',
  },
];

const useCases = [
  {
    industry: 'E-commerce',
    icon: 'ShoppingCart',
    challenge: 'Customers asking "Where is my order?" 200+ times daily, overwhelming support team.',
    solution: 'AI chatbot connected to order management system provides instant order status, tracking links, and delivery updates.',
    results: [
      { label: 'Support Tickets Reduced', value: '65%' },
      { label: 'Response Time', value: '<1 second' },
      { label: 'Customer Satisfaction', value: '4.8/5' },
    ],
  },
  {
    industry: 'Education',
    icon: 'GraduationCap',
    challenge: 'Admission season brings 5,000+ inquiries daily about courses, fees, and eligibility. 48-hour response backlog.',
    solution: 'Multilingual chatbot handles admission queries, course recommendations, and application assistance 24/7.',
    results: [
      { label: 'Inquiries Handled', value: '15,000+' },
      { label: 'Response Time', value: 'Instant' },
      { label: 'Admission Rate', value: '+28%' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: 'HeartPulse',
    challenge: 'Patients calling for appointment booking, creating long phone queues and missed calls.',
    solution: 'HIPAA-compliant chatbot for appointment scheduling, prescription refills, and basic symptom triage.',
    results: [
      { label: 'Phone Volume Reduced', value: '70%' },
      { label: 'Appointments Booked', value: '3,200/mo' },
      { label: 'Patient Satisfaction', value: '4.9/5' },
    ],
  },
];

const integrations = [
  { name: 'WhatsApp Business', category: 'Messaging' },
  { name: 'Facebook Messenger', category: 'Messaging' },
  { name: 'Instagram DM', category: 'Messaging' },
  { name: 'Telegram', category: 'Messaging' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zoho CRM', category: 'CRM' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'E-commerce' },
  { name: 'Zendesk', category: 'Support' },
  { name: 'Freshdesk', category: 'Support' },
  { name: 'Intercom', category: 'Support' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Microsoft Teams', category: 'Communication' },
  { name: 'Google Calendar', category: 'Scheduling' },
];

const faqs = [
  {
    question: 'How quickly can the chatbot be deployed?',
    answer: 'Most chatbots go live within 7-10 days. Simple FAQ chatbots can be deployed in as little as 3 days. Complex integrations with CRMs and custom workflows take 2-3 weeks.',
  },
  {
    question: 'Can the chatbot handle conversations in Hindi and regional languages?',
    answer: 'Absolutely! Our chatbots support 50+ languages including Hindi, Marathi, Tamil, Telugu, Bengali, Gujarati, and more. The AI automatically detects the language and responds appropriately with cultural context.',
  },
  {
    question: 'What happens when the chatbot cannot answer a question?',
    answer: 'The chatbot intelligently escalates to your human team with full conversation context. Your agents see the entire chat history and can take over seamlessly. We also track all escalations to continuously improve the AI\'s knowledge.',
  },
  {
    question: 'How do you ensure the chatbot gives accurate answers?',
    answer: 'We use a combination of techniques: RAG (Retrieval Augmented Generation) to ground responses in your actual business data, regular accuracy testing, and a feedback loop where your team can flag incorrect responses for immediate correction.',
  },
  {
    question: 'Is my customer data secure?',
    answer: 'Yes. All data is encrypted in transit and at rest. We use India-based servers, comply with DPDP Act 2023, and follow SOC 2 security practices. We never use your customer data to train public AI models.',
  },
  {
    question: 'What does pricing look like?',
    answer: 'Pricing depends on conversation volume and complexity. Starter plans begin at ₹25,000/month for up to 1,000 conversations. Enterprise plans with unlimited conversations and custom AI training start at ₹1,50,000/month. All plans include a 14-day free trial.',
  },
];

export default function AIChatbotsPage() {
  return (
    <>
      <SolutionHero
        icon="MessageSquare"
        title="AI Chatbots That Convert Conversations into Customers"
        subtitle="Reduce support costs by 60% and respond instantly, 24/7"
        description="Deploy intelligent chatbots that understand your business, speak your customers' language, and deliver measurable results from day one."
        metrics={[
          { label: 'Cost Reduction', value: '60%' },
          { label: 'Deployment Time', value: '7 Days' },
          { label: 'Resolution Rate', value: '92%' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '#demo' }}
        secondaryCTA={{ label: 'Calculate ROI', href: '/roi-calculator' }}
      />

      {/* Trusted By Section */}
      <section className="py-12 border-y border-white/5">
        <div className="container-max px-4 md:px-8">
          <p className="text-center text-sm text-text-muted mb-6">
            Trusted by 200+ businesses across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['EduPrime', 'MediCare', 'RetailMax', 'LegalCorp', 'TechVentures'].map((name) => (
              <div key={name} className="h-8 w-24 rounded bg-white/5 flex items-center justify-center text-xs text-text-muted">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionFeatures
        title="Why Businesses Choose Our AI Chatbots"
        subtitle="More than just automated responses — intelligent conversations that drive results"
        features={features}
      />

      <SolutionHowItWorks
        title="From Discovery to Live in 7 Days"
        subtitle="Our streamlined process gets your chatbot up and running fast, without cutting corners"
        steps={steps}
      />

      <SolutionUseCases
        title="Real Businesses, Real Results"
        subtitle="See how companies across industries transformed their customer engagement"
        useCases={useCases}
      />

      <SolutionIntegrations
        title="Connects With Your Existing Tools"
        subtitle="Seamless integration with the platforms you already use"
        integrations={integrations}
      />

      <SolutionROI
        title="See Your Potential Savings"
        description="Most businesses recover their investment within the first month."
        savings={[
          { label: 'Support Team Hours Saved', value: '1,200+ hrs/year' },
          { label: 'Revenue from Chat Sales', value: '+₹15L/year' },
          { label: 'Customer Retention Improvement', value: '+35%' },
        ]}
      />

      <SolutionFAQ faqs={faqs} />

      <SolutionCTA
        title="Ready to Transform Your Customer Experience?"
        description="Book a free 30-minute demo and see a live AI chatbot built for your business in action."
        primaryCTA={{ label: 'Book Free Consultation', href: '#contact' }}
        secondaryCTA={{ label: 'Talk to Sales', href: 'mailto:hello@growithai.com' }}
      />
    </>
  );
}