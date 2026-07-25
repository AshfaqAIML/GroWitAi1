import { Metadata } from 'next';
import { SolutionHero } from '@/components/solutions/solution-hero';
import { SolutionFeatures } from '@/components/solutions/solution-features';
import { SolutionUseCases } from '@/components/solutions/solution-use-cases';
import { SolutionROI } from '@/components/solutions/solution-roi';
import { SolutionFAQ } from '@/components/solutions/solution-faq';
import { SolutionCTA } from '@/components/solutions/solution-cta';
import { SolutionIntegrations } from '@/components/solutions/solution-integrations';

export const metadata: Metadata = {
  title: 'AI for Healthcare — Better Patient Care, Lower Costs',
  description: 'AI-powered patient engagement, appointment scheduling, and automated follow-ups for hospitals, clinics, and medical centers.',
};

const features = [
  {
    icon: 'HeartPulse',
    title: 'AI Appointment Booking',
    description: 'Patients book, reschedule, and cancel appointments 24/7 via phone, WhatsApp, or website. Integrated with your HMS for real-time doctor availability.',
    benefit: 'Reduce no-shows by 80% with automated reminders',
  },
  {
    icon: 'Phone',
    title: 'AI Patient Triage Agent',
    description: 'AI voice agent that asks symptom-based questions, assesses urgency, and routes to the right department or schedules appropriate appointments.',
    benefit: 'Reduce unnecessary ER visits by 30%',
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Health Assistant',
    description: 'Send appointment reminders, test results, prescription refill reminders, and post-consultation follow-ups via WhatsApp.',
    benefit: '98% patient engagement rate on WhatsApp',
  },
  {
    icon: 'FileText',
    title: 'Automated Report Delivery',
    description: 'Lab results and diagnostic reports automatically delivered to patients via WhatsApp or email with secure access links.',
    benefit: 'Eliminate report pickup queues and phone calls',
  },
  {
    icon: 'Bell',
    title: 'Medication & Follow-Up Reminders',
    description: 'Automated reminders for medication schedules, follow-up appointments, and preventive health check-ups based on doctor recommendations.',
    benefit: 'Improve medication adherence by 60%',
  },
  {
    icon: 'Shield',
    title: 'HIPAA-Compliant Security',
    description: 'All patient data is encrypted, stored on Indian servers, and fully compliant with DPDP Act and international healthcare privacy standards.',
    benefit: 'Enterprise-grade security for patient data',
  },
];

const useCases = [
  {
    industry: 'Multi-Specialty Hospital',
    icon: 'Building2',
    challenge: '200+ daily appointment calls overwhelming reception. No-show rate of 25%. Patients waiting 10+ minutes on hold.',
    solution: 'AI voice agent for calls + WhatsApp booking + automated reminders via SMS and WhatsApp + post-visit follow-up.',
    results: [
      { label: 'No-Show Rate', value: '4%' },
      { label: 'Call Wait Time', value: '0 min' },
      { label: 'Patient Satisfaction', value: '4.8/5' },
    ],
  },
  {
    industry: 'Diagnostic Center',
    icon: 'Microscope',
    challenge: 'Patients calling repeatedly for test results. Manual report delivery taking staff 4 hours daily. Long queues for report collection.',
    solution: 'Automated WhatsApp report delivery + AI chatbot for test information, preparation instructions, and result FAQs.',
    results: [
      { label: 'Report Queries', value: '-80%' },
      { label: 'Staff Time Saved', value: '4 hrs/day' },
      { label: 'Patient Wait', value: 'Eliminated' },
    ],
  },
  {
    industry: 'Dental Clinic Chain',
    icon: 'Smile',
    challenge: '10 clinics, manual appointment scheduling. High no-show rate for follow-up procedures. No recall system for regular check-ups.',
    solution: 'Centralized AI booking + automated recall system via WhatsApp + treatment plan follow-ups with educational content.',
    results: [
      { label: 'Recall Rate', value: '+70%' },
      { label: 'Revenue/Patient', value: '+40%' },
      { label: 'Administrative Cost', value: '-50%' },
    ],
  },
];

const integrations = [
  { name: 'Practo', category: 'HMS' },
  { name: 'DocEngage', category: 'HMS' },
  { name: 'Lybrate', category: 'HMS' },
  { name: 'CrelioHealth', category: 'LIS' },
  { name: 'WhatsApp Business', category: 'Communication' },
  { name: 'Google Calendar', category: 'Scheduling' },
  { name: 'Razorpay', category: 'Payments' },
  { name: 'PharmEasy', category: 'Pharmacy' },
  { name: '1mg', category: 'Pharmacy' },
  { name: 'Zoom', category: 'Telemedicine' },
];

const faqs = [
  {
    question: 'Is the AI compliant with healthcare regulations in India?',
    answer: 'Yes. We comply with DPDP Act 2023, NABH digital health standards, and follow HIPAA-equivalent security practices. All patient data is encrypted and stored on India-based servers.',
  },
  {
    question: 'Can the AI handle emergency situations?',
    answer: 'The AI is programmed to recognize emergency keywords (chest pain, bleeding, breathing difficulty) and immediately provides emergency numbers while alerting your on-call staff.',
  },
  {
    question: 'How does it integrate with our existing hospital management system?',
    answer: 'We integrate with all major HMS platforms including Practo, DocEngage, Lybrate, and custom systems. The AI checks real-time doctor availability and appointment slots directly from your HMS.',
  },
  {
    question: 'Can patients book appointments directly through WhatsApp?',
    answer: 'Yes! Patients can message your WhatsApp number, and the AI will show available slots, book appointments, and send confirmation — all within WhatsApp.',
  },
  {
    question: 'What about patient data privacy?',
    answer: 'Patient data is encrypted end-to-end. We never store medical records permanently. All data transmission uses 256-bit encryption. We are fully DPDP Act compliant.',
  },
];

export default function HealthcareIndustryPage() {
  return (
    <>
      <SolutionHero
        icon="HeartPulse"
        title="AI Solutions for Smarter Healthcare"
        subtitle="Reduce no-shows, automate appointments, and improve patient care"
        description="Purpose-built AI for hospitals, clinics, diagnostic centers, and medical practices. Streamline operations and focus on what matters — patient care."
        metrics={[
          { label: 'No-Show Reduction', value: '80%' },
          { label: 'Staff Time Saved', value: '35 hrs/wk' },
          { label: 'Patient Rating', value: '4.8/5' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '/#demo' }}
        secondaryCTA={{ label: 'See Case Studies', href: '/#case-studies' }}
      />
      <SolutionFeatures title="AI-Powered Healthcare" subtitle="Automate operations so your staff can focus on patients" features={features} />
      <SolutionUseCases title="Healthcare Providers Transformed" subtitle="See how hospitals and clinics improved patient care with AI" useCases={useCases} />
      <SolutionIntegrations title="Integrates With Your Healthcare Stack" subtitle="Works with your HMS, LIS, and pharmacy systems" integrations={integrations} />
      <SolutionROI title="The ROI of AI in Healthcare" description="Healthcare providers using AI report 80% fewer no-shows and 35 hours/week saved in administrative work." savings={[
        { label: 'Annual Cost Savings', value: '₹18L+' },
        { label: 'Patient Throughput', value: '+40%' },
        { label: 'Staff Satisfaction', value: '+85%' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Transform Patient Care?" description="Book a free demo and see how AI can streamline your practice operations." primaryCTA={{ label: 'Book Free Demo', href: '/#contact' }} secondaryCTA={{ label: 'Talk to Healthcare Team', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}
