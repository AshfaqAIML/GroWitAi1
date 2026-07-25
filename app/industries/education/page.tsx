import { Metadata } from 'next';
import { SolutionHero } from '@/components/solutions/solution-hero';
import { SolutionFeatures } from '@/components/solutions/solution-features';
import { SolutionUseCases } from '@/components/solutions/solution-use-cases';
import { SolutionROI } from '@/components/solutions/solution-roi';
import { SolutionFAQ } from '@/components/solutions/solution-faq';
import { SolutionCTA } from '@/components/solutions/solution-cta';
import { SolutionIntegrations } from '@/components/solutions/solution-integrations';

export const metadata: Metadata = {
  title: 'AI for Education — Transform Student Experience & Admissions',
  description: 'AI-powered solutions for universities, colleges, schools, and coaching institutes. Automate admissions, engage students 24/7, and improve outcomes.',
};

const features = [
  {
    icon: 'GraduationCap',
    title: 'AI Admissions Assistant',
    description: 'Handle thousands of admission inquiries simultaneously. Answer questions about courses, fees, eligibility, and deadlines — in multiple languages, 24/7.',
    benefit: 'Reduce admission inquiry response time from 48 hours to instant',
  },
  {
    icon: 'MessageSquare',
    title: 'Student Support Chatbot',
    description: 'AI chatbot that helps students with exam schedules, assignment deadlines, campus navigation, and general queries. Integrated with your LMS.',
    benefit: '80% of student queries resolved without staff intervention',
  },
  {
    icon: 'Phone',
    title: 'AI Voice Agent for Admissions',
    description: 'Handle admission calls automatically. Qualify leads, schedule campus visits, and follow up with prospective students via phone.',
    benefit: 'Capture 100% of admission calls, even after hours',
  },
  {
    icon: 'Bell',
    title: 'Automated Notifications',
    description: 'Send exam reminders, fee deadlines, event updates, and result notifications via WhatsApp, SMS, and email automatically.',
    benefit: '95% open rate on WhatsApp notifications',
  },
  {
    icon: 'BarChart3',
    title: 'Student Performance Analytics',
    description: 'AI-powered analytics to track student performance, identify at-risk students early, and provide personalized intervention recommendations.',
    benefit: 'Improve student retention by 25%',
  },
  {
    icon: 'CalendarCheck',
    title: 'Automated Counseling & Scheduling',
    description: 'AI counselors that help students choose courses, schedule guidance sessions, and provide career path recommendations.',
    benefit: '3x more students counseled with same staff',
  },
];

const useCases = [
  {
    industry: 'University Admissions',
    icon: 'Building2',
    challenge: '50,000+ admission inquiries during enrollment season. 5-day response backlog. Losing top applicants to faster-responding competitors.',
    solution: 'Multilingual AI chatbot + voice agent handling all admission queries, course recommendations, and application assistance 24/7.',
    results: [
      { label: 'Response Time', value: 'Instant' },
      { label: 'Applications Completed', value: '+45%' },
      { label: 'Staff Hours Saved', value: '12,000/yr' },
    ],
  },
  {
    industry: 'Coaching Institute',
    icon: 'School',
    challenge: 'Managing inquiries for 20+ courses across 5 branches. Missed calls during peak hours. Manual fee follow-ups taking 15 hours/week.',
    solution: 'AI receptionist for calls + WhatsApp automation for fee reminders, class schedules, and result notifications.',
    results: [
      { label: 'Missed Calls', value: '0%' },
      { label: 'Fee Collection', value: '40% faster' },
      { label: 'Student Satisfaction', value: '4.8/5' },
    ],
  },
  {
    industry: 'Online Education Platform',
    icon: 'Laptop',
    challenge: 'High course drop-out rate (60%). Students not engaged after enrollment. Support team overwhelmed with technical queries.',
    solution: 'AI student success chatbot + automated engagement sequences via WhatsApp. Proactive check-ins at critical milestones.',
    results: [
      { label: 'Course Completion', value: '+50%' },
      { label: 'Support Tickets', value: '-70%' },
      { label: 'Student NPS', value: '85' },
    ],
  },
];

const integrations = [
  { name: 'Moodle', category: 'LMS' },
  { name: 'Canvas', category: 'LMS' },
  { name: 'Blackboard', category: 'LMS' },
  { name: 'Google Classroom', category: 'LMS' },
  { name: 'WhatsApp Business', category: 'Communication' },
  { name: 'Zoom', category: 'Video' },
  { name: 'Google Meet', category: 'Video' },
  { name: 'Salesforce Education Cloud', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Tally', category: 'Finance' },
  { name: 'Google Calendar', category: 'Scheduling' },
];

const faqs = [
  {
    question: 'Can the AI handle inquiries in regional languages?',
    answer: 'Yes! Our AI supports 50+ languages including Hindi, Tamil, Telugu, Marathi, Bengali, and more. It automatically detects the student\'s language and responds appropriately with cultural context.',
  },
  {
    question: 'How does this integrate with our existing LMS?',
    answer: 'We integrate with all major LMS platforms — Moodle, Canvas, Blackboard, Google Classroom, and custom systems. Students can get instant answers about their courses, grades, and assignments directly through the chatbot.',
  },
  {
    question: 'What about data privacy for student information?',
    answer: 'We are fully compliant with India\'s DPDP Act 2023 and international education data standards. All student data is encrypted and stored on India-based servers. We never use student data for AI training.',
  },
  {
    question: 'How quickly can this be deployed before admission season?',
    answer: 'Basic admission chatbots can go live in 3-5 days. Full integration with LMS and voice agents takes 2-3 weeks. We recommend starting at least 4 weeks before peak admission season.',
  },
  {
    question: 'What ROI can educational institutions expect?',
    answer: 'Our education clients typically see 60% reduction in inquiry response time, 30-45% increase in completed applications, and save 8,000-12,000 staff hours annually through automation.',
  },
];

export default function EducationIndustryPage() {
  return (
    <>
      <SolutionHero
        icon="GraduationCap"
        title="AI Solutions That Transform Education"
        subtitle="Automate admissions, engage students 24/7, and improve outcomes"
        description="Purpose-built AI for universities, colleges, schools, and coaching institutes. Handle admission season effortlessly and provide instant student support."
        metrics={[
          { label: 'Response Time', value: 'Instant' },
          { label: 'Inquiries Handled', value: '50,000+' },
          { label: 'Staff Time Saved', value: '12,000 hrs/yr' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '/#demo' }}
        secondaryCTA={{ label: 'See Case Studies', href: '/#case-studies' }}
      />
      <SolutionFeatures title="AI-Powered Education Solutions" subtitle="Transform every touchpoint of the student journey" features={features} />
      <SolutionUseCases title="Educational Institutions Transformed" subtitle="See how schools, colleges, and universities are using AI" useCases={useCases} />
      <SolutionIntegrations title="Integrates With Your EdTech Stack" subtitle="Works with your existing LMS, CRM, and communication tools" integrations={integrations} />
      <SolutionROI title="The ROI of AI in Education" description="Educational institutions using AI report 3x faster admissions and 25% improvement in student retention." savings={[
        { label: 'Admission Growth', value: '+45%' },
        { label: 'Staff Hours Saved/Yr', value: '12,000' },
        { label: 'Student Satisfaction', value: '4.8/5' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Transform Your Institution?" description="Book a free demo and see how AI can handle your next admission season effortlessly." primaryCTA={{ label: 'Book Free Demo', href: '/#contact' }} secondaryCTA={{ label: 'Talk to Education Team', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}
