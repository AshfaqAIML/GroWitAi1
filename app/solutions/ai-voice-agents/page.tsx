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
  title: 'AI Voice Agents — Human-Like Phone AI That Never Misses a Call',
  description: 'Handle unlimited calls simultaneously with natural-sounding AI voice agents. Convert every call into a qualified lead, 24/7.',
};

const features = [
  {
    icon: "Mic",
    title: 'Natural Speech Recognition',
    description: 'Our voice AI understands natural speech patterns, accents, and dialects including Indian English, Hindi, and regional languages. No robotic menus — just natural conversation.',
    benefit: '95%+ speech recognition accuracy',
  },
  {
    icon: "Volume2",
    title: 'Human-Like Voice Synthesis',
    description: 'Neural text-to-speech that sounds indistinguishable from a human agent. Choose from natural male/female voices in multiple languages with appropriate tone and emotion.',
    benefit: 'Callers don\'t realize they\'re talking to AI',
  },
  {
    icon: "PhoneForwarded",
    title: 'Intelligent Call Routing',
    description: 'The AI understands caller intent and routes calls to the right department or person. Warm transfers with full context so customers never repeat themselves.',
    benefit: 'Zero misrouted calls, 100% context preservation',
  },
  {
    icon: "Voicemail",
    title: 'Smart Voicemail & Transcription',
    description: 'When calls can\'t be answered, the AI takes detailed messages, transcribes them, and sends summaries via email, SMS, or WhatsApp with priority tagging.',
    benefit: 'Never miss important information again',
  },
  {
    icon: "Languages",
    title: 'Multilingual Voice Support',
    description: 'Speak to customers in 30+ languages. The AI automatically detects language and switches seamlessly mid-conversation if needed.',
    benefit: 'Serve India\'s diverse linguistic market effortlessly',
  },
  {
    icon: "BarChart3",
    title: 'Call Analytics & Insights',
    description: 'Track call volumes, sentiment analysis, common inquiries, conversion rates, and agent performance. AI-powered insights to continuously improve.',
    benefit: 'Data-driven optimization of every call',
  },
];

const steps = [
  { step: 1, title: 'Voice Flow Design', description: 'We map out every possible call scenario — greetings, FAQs, booking flows, escalations, and voicemail handling.', duration: '2-3 days' },
  { step: 2, title: 'Voice AI Training', description: 'Train the AI on your business vocabulary, product names, pricing, and common customer phrases with your accent patterns.', duration: '3-4 days' },
  { step: 3, title: 'Phone System Integration', description: 'Connect to your existing phone system (IVR, PBX, cloud telephony) or set up new virtual numbers.', duration: '1-2 days' },
  { step: 4, title: 'Testing & Fine-Tuning', description: 'Run hundreds of test calls across scenarios, accents, and background noise conditions. Fine-tune responses.', duration: '2-3 days' },
  { step: 5, title: 'Go Live & Monitor', description: 'Launch with live call monitoring. Our team listens to the first 100 calls and optimizes the AI for perfection.', duration: 'Ongoing' },
];

const useCases = [
  {
    industry: 'Hospitality',
    icon: 'UtensilsCrossed',
    challenge: 'Restaurant missing 40% of reservation calls during peak hours and after closing.',
    solution: 'AI voice agent handles all reservation calls 24/7, checks availability in real-time, confirms bookings, and sends SMS confirmations.',
    results: [
      { label: 'Bookings Captured', value: '+40%' },
      { label: 'Missed Calls', value: '0%' },
      { label: 'Revenue Increase', value: '₹12L/yr' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: 'HeartPulse',
    challenge: 'Clinic receiving 300+ calls daily for appointments, overwhelming 2 receptionists.',
    solution: 'AI voice agent handles appointment booking, rescheduling, and cancellations. Integrates with clinic management software for real-time availability.',
    results: [
      { label: 'Call Handling', value: '300+/day' },
      { label: 'Staff Freed', value: '2 FTE' },
      { label: 'Patient Wait', value: '0 min' },
    ],
  },
  {
    industry: 'Real Estate',
    icon: 'Building2',
    challenge: 'Builders losing leads because calls go unanswered during non-business hours.',
    solution: 'AI voice agent qualifies leads, answers property questions, schedules site visits, and captures contact details 24/7.',
    results: [
      { label: 'Lead Capture', value: '+65%' },
      { label: 'Site Visits', value: '+45%' },
      { label: 'Sales Increase', value: '₹28L/yr' },
    ],
  },
];

const integrations = [
  { name: 'Exotel', category: 'Telephony' },
  { name: 'Knowlarity', category: 'Telephony' },
  { name: 'Twilio', category: 'Telephony' },
  { name: 'Ozonetel', category: 'Telephony' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Zoho CRM', category: 'CRM' },
  { name: 'Google Calendar', category: 'Scheduling' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'WhatsApp Business', category: 'Messaging' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Zapier', category: 'Automation' },
];

const faqs = [
  {
    question: 'Can the AI voice agent handle complex conversations?',
    answer: 'Yes! Our voice AI uses advanced language models that understand context, handle interruptions, and manage multi-turn conversations. For very complex scenarios, it intelligently escalates to a human agent with full context.',
  },
  {
    question: 'Will callers know they\'re talking to AI?',
    answer: 'Most callers cannot tell. Our neural voice synthesis is indistinguishable from human speech, complete with natural pauses, intonation, and conversational fillers. We are transparent when legally required.',
  },
  {
    question: 'How many calls can it handle simultaneously?',
    answer: 'Unlimited. Unlike human agents who can handle one call at a time, AI voice agents handle thousands of simultaneous calls without degradation in quality.',
  },
  {
    question: 'What about background noise and poor connections?',
    answer: 'Our AI includes advanced noise cancellation and can understand speech even in noisy environments or over poor connections — often better than humans can.',
  },
  {
    question: 'How quickly can it be set up?',
    answer: 'Most voice AI agents go live in 2 weeks. Simple use cases (like appointment booking) can be live in 5-7 days.',
  },
];

export default function AIVoiceAgentsPage() {
  return (
    <>
      <SolutionHero
        icon="Phone"
        title="AI Voice Agents That Sound Human and Never Miss a Call"
        subtitle="Handle unlimited calls 24/7 with natural-sounding AI"
        description="Deploy voice AI that understands accents, speaks multiple languages, and converts every call into a business opportunity — even when your team is asleep."
        metrics={[
          { label: 'Call Coverage', value: '24/7' },
          { label: 'Cost vs Human', value: '-70%' },
          { label: 'Lead Capture', value: '+65%' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '#demo' }}
        secondaryCTA={{ label: 'Hear a Sample Call', href: '#sample' }}
      />
      <SolutionFeatures title="Voice AI That Feels Human" subtitle="More than IVR — natural conversations that build trust and capture business" features={features} />
      <SolutionHowItWorks title="Live in 2 Weeks" subtitle="From call flow design to going live — a streamlined process" steps={steps} />
      <SolutionUseCases title="Businesses Transformed by Voice AI" subtitle="See how voice AI captures revenue that was being lost" useCases={useCases} />
      <SolutionIntegrations title="Works With Your Phone System" subtitle="Seamless integration with leading telephony and business platforms" integrations={integrations} />
      <SolutionROI title="The ROI of Never Missing a Call" description="Most businesses recover their investment in the first month." savings={[
        { label: 'Calls Handled/mo', value: '5,000+' },
        { label: 'Cost per Call', value: '₹8' },
        { label: 'Revenue Recovered', value: '+₹40L/yr' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Answer Every Call?" description="Book a demo and hear a live AI voice agent handle a real call scenario for your business." primaryCTA={{ label: 'Book Free Demo', href: '#contact' }} secondaryCTA={{ label: 'Talk to Sales', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}