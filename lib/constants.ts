import type {
  NavItem,
  Solution,
  Industry,
  CaseStudy,
  Testimonial,
  FAQItem,
  TimelineStep,
  Challenge,
  CompetitiveAdvantage,
  BusinessMetric,
} from './types';

export const SITE_CONFIG = {
  name: 'GroWithAI',
  tagline: 'Helping Businesses Grow with Artificial Intelligence',
  brandStatement: 'Smarter insights. Faster growth. Better business.',
  url: 'https://growithai.com',
  ogImage: '/og-image.png',
  locale: 'en_IN',
  contact: {
    email: 'hello@growithai.com',
    phone: '+91-XXXXXXXXXX',
  },
  social: {
    linkedin: 'https://linkedin.com/company/growithai',
    twitter: 'https://twitter.com/growithai',
    youtube: 'https://youtube.com/@growithai',
  },
} as const;

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Solutions',
    href: '/#solutions',
    children: [
      { label: 'AI Chatbots', href: '/solutions/ai-chatbots' },
      { label: 'AI Voice Agents', href: '/solutions/ai-voice-agents' },
      { label: 'AI Receptionists', href: '/solutions/ai-receptionists' },
      { label: 'AI Sales Assistants', href: '/solutions/ai-sales-assistants' },
      { label: 'WhatsApp Automation', href: '/solutions/whatsapp-automation' },
      { label: 'CRM Automation', href: '/solutions/crm-automation' },
      { label: 'Workflow Automation', href: '/solutions/workflow-automation' },
      { label: 'AI Analytics', href: '/solutions/ai-analytics' },
    ],
  },
  {
    label: 'Industries',
    href: '/#industries',
    children: [
      { label: 'Education', href: '/industries/education' },
      { label: 'Hospitality', href: '/industries/hospitality' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Professional Services', href: '/industries/professional-services' },
      { label: 'Commerce', href: '/industries/commerce' },
      { label: 'Real Estate', href: '/industries/real-estate' },
    ],
  },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Contact', href: '/#contact' },
];

export const BUSINESS_METRICS: BusinessMetric[] = [
  { label: 'Revenue Growth', value: '40', suffix: '%' },
  { label: 'Cost Reduction', value: '35', suffix: '%' },
  { label: 'Time Saved', value: '60', suffix: '%' },
  { label: 'Client Retention', value: '95', suffix: '%' },
];

export const SOLUTIONS: Solution[] = [
  {
    id: 'ai-chatbots',
    icon: 'MessageSquare',
    title: 'AI Chatbots',
    description: 'Intelligent conversational agents that understand your customers and respond instantly, 24/7.',
    outcome: 'Reduce customer support costs by up to 60% while improving response times.',
    metric: '60% cost reduction',
    href: '/solutions/ai-chatbots',
  },
  {
    id: 'ai-voice-agents',
    icon: 'Phone',
    title: 'AI Voice Agents',
    description: 'Natural-sounding voice AI that handles inbound and outbound calls with human-like understanding.',
    outcome: 'Never miss a call again — convert every inquiry into a qualified lead.',
    metric: '24/7 availability',
    href: '/solutions/ai-voice-agents',
  },
  {
    id: 'ai-receptionists',
    icon: 'Headset',
    title: 'AI Receptionists',
    description: 'Virtual front-desk agents that greet visitors, schedule appointments, and route inquiries intelligently.',
    outcome: 'Eliminate missed appointments and reduce front-desk workload by 80%.',
    metric: '80% workload reduction',
    href: '/solutions/ai-receptionists',
  },
  {
    id: 'ai-sales-assistants',
    icon: 'TrendingUp',
    title: 'AI Sales Assistants',
    description: 'AI-powered sales agents that qualify leads, follow up persistently, and close deals faster.',
    outcome: 'Increase sales conversion rates and shorten your sales cycle significantly.',
    metric: '3x conversion rate',
    href: '/solutions/ai-sales-assistants',
  },
  {
    id: 'whatsapp-automation',
    icon: 'MessageCircle',
    title: 'WhatsApp Automation',
    description: 'Automated WhatsApp messaging for marketing, support, and customer engagement at scale.',
    outcome: 'Engage customers on the platform they already use — with zero manual effort.',
    metric: '90% open rate',
    href: '/solutions/whatsapp-automation',
  },
  {
    id: 'crm-automation',
    icon: 'Database',
    title: 'CRM Automation',
    description: 'Seamlessly connect your CRM with AI to automate data entry, follow-ups, and pipeline management.',
    outcome: 'Keep your CRM updated automatically and never lose track of a lead again.',
    metric: '100% data accuracy',
    href: '/solutions/crm-automation',
  },
  {
    id: 'workflow-automation',
    icon: 'Workflow',
    title: 'Workflow Automation',
    description: 'End-to-end business process automation that connects your tools and eliminates repetitive tasks.',
    outcome: 'Free your team from manual work so they can focus on strategic growth.',
    metric: '50+ hours saved/week',
    href: '/solutions/workflow-automation',
  },
  {
    id: 'ai-analytics',
    icon: 'BarChart3',
    title: 'AI Analytics',
    description: 'Real-time business intelligence dashboards powered by AI to uncover insights and predict trends.',
    outcome: 'Make data-driven decisions with confidence and spot opportunities before competitors.',
    metric: 'Real-time insights',
    href: '/solutions/ai-analytics',
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'education',
    icon: 'GraduationCap',
    title: 'Education',
    description: 'AI-powered student engagement, automated admissions, and 24/7 campus support.',
    benefits: ['Automated admissions', 'Student support bots', 'Personalized learning'],
    href: '/industries/education',
  },
  {
    id: 'hospitality',
    icon: 'UtensilsCrossed',
    title: 'Hospitality',
    description: 'Intelligent booking systems, AI concierge, and personalized guest experiences.',
    benefits: ['AI concierge', 'Smart bookings', 'Guest personalization'],
    href: '/industries/hospitality',
  },
  {
    id: 'healthcare',
    icon: 'HeartPulse',
    title: 'Healthcare',
    description: 'AI appointment scheduling, patient triage, and automated follow-up systems.',
    benefits: ['Smart scheduling', 'Patient triage', 'Automated follow-ups'],
    href: '/industries/healthcare',
  },
  {
    id: 'professional-services',
    icon: 'Briefcase',
    title: 'Professional Services',
    description: 'Intelligent document processing, client intake automation, and AI research assistants.',
    benefits: ['Document automation', 'Client intake AI', 'Research assistance'],
    href: '/industries/professional-services',
  },
  {
    id: 'commerce',
    icon: 'ShoppingCart',
    title: 'Commerce',
    description: 'AI product recommendations, inventory intelligence, and automated customer service.',
    benefits: ['Smart recommendations', 'Inventory AI', 'Customer service bots'],
    href: '/industries/commerce',
  },
  {
    id: 'real-estate',
    icon: 'Building2',
    title: 'Real Estate',
    description: 'AI property matching, automated lead nurturing, and virtual property tours.',
    benefits: ['Property matching AI', 'Lead nurturing', 'Virtual tours'],
    href: '/industries/real-estate',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    company: 'Global University',
    industry: 'Education',
    challenge: 'Struggling with 48-hour response times to student inquiries during admission season.',
    solution: 'Deployed AI Chatbot + WhatsApp Automation handling 10,000+ conversations simultaneously.',
    results: [
      { label: 'Response Time', value: 'Under 30 seconds' },
      { label: 'Admission Inquiries Handled', value: '10,000+' },
      { label: 'Staff Hours Saved', value: '2,400/year' },
    ],
  },
  {
    id: 'case-2',
    company: 'Premier Hospitality Group',
    industry: 'Hospitality',
    challenge: 'Missing 40% of after-hours booking calls, losing significant revenue.',
    solution: 'Implemented AI Voice Agent + AI Receptionist handling all calls 24/7.',
    results: [
      { label: 'Booking Increase', value: '35%' },
      { label: 'Missed Calls', value: '0%' },
      { label: 'Revenue Growth', value: '₹42L/year' },
    ],
  },
  {
    id: 'case-3',
    company: 'MediCare Clinics',
    industry: 'Healthcare',
    challenge: 'High no-show rate of 25% for appointments, causing scheduling chaos.',
    solution: 'AI Appointment Booking + Automated Reminders + WhatsApp Integration.',
    results: [
      { label: 'No-Show Reduction', value: '80%' },
      { label: 'Patient Satisfaction', value: '4.8/5' },
      { label: 'Admin Time Saved', value: '35 hrs/week' },
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Rajesh Kumar',
    role: 'Director',
    company: 'Global University',
    rating: 5,
    quote: 'GroWithAI transformed our admission process completely. What used to take days now happens in seconds. Our team can finally focus on what matters — helping students.',
    result: '2,400 staff hours saved annually',
  },
  {
    id: 'test-2',
    name: 'Priya Sharma',
    role: 'CEO',
    company: 'Premier Hospitality Group',
    rating: 5,
    quote: 'The AI voice agent paid for itself in the first month. We recovered ₹3.5 lakhs in bookings we would have missed. This is not a tool — it\'s a growth engine.',
    result: '₹42L additional annual revenue',
  },
  {
    id: 'test-3',
    name: 'Dr. Anil Mehta',
    role: 'Medical Director',
    company: 'MediCare Clinics',
    rating: 5,
    quote: 'Our no-show rate dropped from 25% to just 5%. Patients love the WhatsApp reminders, and our staff can breathe again. GroWithAI understands healthcare.',
    result: '80% reduction in no-shows',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What makes GroWithAI different from other AI companies?',
    answer: 'Unlike traditional agencies that simply implement tools, we take an AI-First, business-outcome approach. We don\'t just deploy technology — we engineer measurable growth. Every solution is custom-built for your specific business challenges and designed to deliver ROI from day one.',
  },
  {
    id: 'faq-2',
    question: 'How long does it take to deploy an AI solution?',
    answer: 'Most solutions go live within 2-4 weeks. Simple chatbots can be deployed in as little as 7 days. Enterprise-grade custom AI systems typically take 6-8 weeks. We prioritize rapid deployment without compromising on quality or reliability.',
  },
  {
    id: 'faq-3',
    question: 'Do I need technical expertise to use GroWithAI solutions?',
    answer: 'Not at all. Our solutions are designed with business users in mind. We handle all the technical complexity — you get a simple, intuitive interface. Plus, we provide comprehensive training and ongoing support to ensure your team feels confident from day one.',
  },
  {
    id: 'faq-4',
    question: 'How do you ensure data security and privacy?',
    answer: 'Security is foundational to everything we build. We use enterprise-grade encryption, follow SOC 2 best practices, comply with GDPR and India\'s DPDP Act, and ensure all data is stored securely. We never train AI models on your proprietary business data.',
  },
  {
    id: 'faq-5',
    question: 'What kind of ROI can I expect?',
    answer: 'Our clients typically see ROI within the first 30-60 days. On average, businesses experience 30-40% cost reduction in automated processes, 3x faster response times, and significant revenue uplift from improved customer engagement. We track and report all metrics transparently.',
  },
  {
    id: 'faq-6',
    question: 'Can GroWithAI integrate with our existing software?',
    answer: 'Absolutely. We specialize in seamless integrations with CRMs (Salesforce, HubSpot, Zoho), ERPs, help desks, WhatsApp Business API, and virtually any system with an API. Our team handles the entire integration process end-to-end.',
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: 'Discovery Call',
    description: 'We learn about your business, challenges, and growth goals in a focused 30-minute session.',
    icon: 'PhoneCall',
  },
  {
    step: 2,
    title: 'Business Analysis',
    description: 'Our AI strategists analyze your workflows, identify automation opportunities, and quantify potential ROI.',
    icon: 'Search',
  },
  {
    step: 3,
    title: 'AI Strategy',
    description: 'We design a custom AI roadmap with clear milestones, timelines, and success metrics.',
    icon: 'Lightbulb',
  },
  {
    step: 4,
    title: 'Design & Development',
    description: 'Our engineers build, train, and fine-tune your AI solution with rigorous quality assurance.',
    icon: 'Code2',
  },
  {
    step: 5,
    title: 'Deployment',
    description: 'We launch your solution with zero disruption, comprehensive testing, and team training.',
    icon: 'Rocket',
  },
  {
    step: 6,
    title: 'Continuous Optimization',
    description: 'We monitor performance, gather feedback, and continuously improve your AI systems.',
    icon: 'RefreshCw',
  },
];

export const CHALLENGES: Challenge[] = [
  { id: 'ch-1', label: 'Low Sales', icon: 'TrendingDown', description: '...' },
  { id: 'ch-2', label: 'Manual Processes', icon: 'Repeat', description: '...' },
  { id: 'ch-3', label: 'High Costs', icon: 'DollarSign', description: '...' },
  { id: 'ch-4', label: 'Poor Support', icon: 'Frown', description: '...' },
  { id: 'ch-5', label: 'Slow Response', icon: 'Clock', description: '...' },
  { id: 'ch-6', label: 'Missed Leads', icon: 'UserX', description: '...' },
  { id: 'ch-7', label: 'Inefficient Workflows', icon: 'GitBranch', description: '...' },
  { id: 'ch-8', label: 'Limited Growth', icon: 'Ban', description: '...' }, // was 'BarrierBlock'
];

export const COMPETITIVE_ADVANTAGES: CompetitiveAdvantage[] = [
  {
    id: 'adv-1',
    icon: 'Brain',
    title: 'AI-First Thinking',
    description: 'We don\'t bolt AI onto existing processes. We reimagine your workflows with intelligence at the core.',
  },
  {
    id: 'adv-2',
    icon: 'Target',
    title: 'Business-Focused Solutions',
    description: 'Every solution is engineered to deliver measurable business outcomes, not just technical features.',
  },
  {
    id: 'adv-3',
    icon: 'Zap',
    title: 'Rapid Deployment',
    description: 'Go live in weeks, not months. Our streamlined methodology delivers value at startup speed.',
  },
  {
    id: 'adv-4',
    icon: 'Settings2',
    title: 'Custom AI Systems',
    description: 'No cookie-cutter solutions. Every AI system is purpose-built for your unique business needs.',
  },
  {
    id: 'adv-5',
    icon: 'Maximize2',
    title: 'Scalable Architecture',
    description: 'Built to grow with you. Our solutions handle 100 or 100,000 interactions without breaking stride.',
  },
  {
    id: 'adv-6',
    icon: 'LineChart',
    title: 'Data-Driven Decisions',
    description: 'Real-time dashboards and AI-powered insights give you clarity and confidence in every move.',
  },
  {
    id: 'adv-7',
    icon: 'Handshake',
    title: 'Long-Term Partnership',
    description: 'We stay with you beyond deployment, continuously optimizing and evolving your AI systems.',
  },
  {
    id: 'adv-8',
    icon: 'Shield',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, compliance-ready, and built with data privacy as a foundational principle.',
  },
];

export const TECH_STACK = {
  ai: ['OpenAI', 'Claude', 'Gemini', 'Llama', 'LangChain', 'Pinecone'],
  infrastructure: ['Next.js', 'React', 'Node.js', 'FastAPI', 'Docker'],
  database: ['Supabase', 'PostgreSQL', 'Redis'],
  cloud: ['AWS', 'Azure', 'Vercel'],
} as const;

export const TRUSTED_BY = [
  { name: 'Global University', industry: 'Education' },
  { name: 'Premier Hospitality', industry: 'Hospitality' },
  { name: 'MediCare Clinics', industry: 'Healthcare' },
  { name: 'LegalCorp LLP', industry: 'Legal' },
  { name: 'RetailMax India', industry: 'Retail' },
  { name: 'TechVentures', industry: 'Technology' },
  { name: 'BuildRight Properties', industry: 'Real Estate' },
  { name: 'EduPrime Coaching', industry: 'Education' },
];