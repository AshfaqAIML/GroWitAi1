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
  title: 'AI Analytics — Turn Data into Decisions That Grow Your Business',
  description: 'Real-time business intelligence dashboards powered by AI. Spot trends, predict outcomes, and make confident decisions.',
};

const features = [
  {
    icon: "Brain",
    title: 'AI-Powered Insights',
    description: 'Our AI analyzes your business data and automatically surfaces insights — trends you didn\'t notice, anomalies that need attention, and opportunities to capture.',
    benefit: 'Discover insights your team would miss',
  },
  {
    icon: "LineChart",
    title: 'Predictive Analytics',
    description: 'Forecast sales, customer churn, inventory needs, and revenue with AI models trained on your historical data. Know what\'s coming before it happens.',
    benefit: 'Make proactive decisions, not reactive ones',
  },
  {
    icon: "PieChart",
    title: 'Custom Dashboards',
    description: 'Beautiful, real-time dashboards tailored to every role — CEO overview, sales pipeline, marketing performance, operations efficiency.',
    benefit: 'The right data for every stakeholder',
  },
  {
    icon: "Eye",
    title: 'Real-Time Monitoring',
    description: 'Live data feeds from all your systems. Set alerts for metrics that matter — when sales drop, when inventory runs low, when a campaign underperforms.',
    benefit: 'Instant awareness of what matters',
  },
  {
    icon: "Target",
    title: 'Goal Tracking & OKRs',
    description: 'Set business goals and track progress in real-time. AI analyzes whether you\'re on track and suggests corrective actions when you\'re falling behind.',
    benefit: 'Never lose sight of your targets',
  },
  {
    icon: "Download",
    title: 'Automated Reporting',
    description: 'Schedule reports to be generated and emailed to stakeholders automatically — daily summaries, weekly performance, monthly board decks.',
    benefit: 'Reports ready before anyone asks',
  },
];

const steps = [
  { step: 1, title: 'Data Source Audit', description: 'We identify all your data sources — CRM, accounting, website, social media, operations — and assess data quality.', duration: '2 days' },
  { step: 2, title: 'Data Pipeline Setup', description: 'Build automated data pipelines that collect, clean, and consolidate data from all sources into a unified data warehouse.', duration: '3-5 days' },
  { step: 3, title: 'Dashboard Design', description: 'Design custom dashboards for each role and department. Choose metrics, visualizations, and alert thresholds.', duration: '2-3 days' },
  { step: 4, title: 'AI Model Training', description: 'Train AI models on your data for predictions, anomaly detection, and automated insights.', duration: '3-5 days' },
  { step: 5, title: 'Launch & Train', description: 'Deploy dashboards, train your team on interpreting insights, and set up automated reporting.', duration: '2 days + ongoing' },
];

const useCases = [
  {
    industry: 'Retail',
    icon: 'ShoppingCart',
    challenge: 'Multiple stores with no unified view of performance. Inventory decisions based on gut feel, leading to stockouts and overstocking.',
    solution: 'AI analytics dashboard consolidating all store data. Predictive inventory forecasting, real-time sales tracking, and automated replenishment alerts.',
    results: [
      { label: 'Stockouts Reduced', value: '-70%' },
      { label: 'Inventory Costs', value: '-25%' },
      { label: 'Revenue Increase', value: '+18%' },
    ],
  },
  {
    industry: 'Healthcare',
    icon: 'HeartPulse',
    challenge: 'Hospital administration making decisions without real-time visibility into bed occupancy, staff utilization, and revenue leakage.',
    solution: 'Real-time hospital analytics — bed occupancy dashboards, revenue cycle analytics, staff productivity tracking, and patient flow optimization.',
    results: [
      { label: 'Bed Utilization', value: '+30%' },
      { label: 'Revenue Leakage', value: '-40%' },
      { label: 'Admin Decisions', value: 'Data-driven' },
    ],
  },
  {
    industry: 'Education',
    icon: 'GraduationCap',
    challenge: 'University struggling to track enrollment trends, student performance, and marketing ROI across 50+ programs.',
    solution: 'AI analytics platform with enrollment forecasting, student success prediction, marketing attribution, and program profitability analysis.',
    results: [
      { label: 'Enrollment Accuracy', value: '95%' },
      { label: 'Marketing ROI', value: '+60%' },
      { label: 'Student Retention', value: '+25%' },
    ],
  },
];

const integrations = [
  { name: 'Google Analytics', category: 'Analytics' },
  { name: 'Meta Ads', category: 'Advertising' },
  { name: 'Google Ads', category: 'Advertising' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'QuickBooks', category: 'Accounting' },
  { name: 'Tally', category: 'Accounting' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Google Sheets', category: 'Spreadsheets' },
  { name: 'Excel', category: 'Spreadsheets' },
  { name: 'Power BI', category: 'BI Tools' },
  { name: 'Tableau', category: 'BI Tools' },
  { name: 'Looker', category: 'BI Tools' },
];

const faqs = [
  {
    question: 'Do I need a data team to use AI analytics?',
    answer: 'No. We handle everything — from data pipeline setup to dashboard design. You get beautiful, easy-to-understand dashboards that anyone in your organization can use.',
  },
  {
    question: 'How is this different from Google Analytics or Excel?',
    answer: 'AI analytics goes beyond basic charts. It consolidates data from ALL your systems, uses AI to find patterns and predict outcomes, and provides actionable recommendations — not just pretty charts.',
  },
  {
    question: 'How long until we see value?',
    answer: 'Most clients see their first insights within 2 weeks. Full dashboards with AI-powered predictions are live within 3-4 weeks.',
  },
  {
    question: 'Is our data secure?',
    answer: 'Absolutely. All data is encrypted in transit and at rest. We use India-based servers, comply with DPDP Act, and follow enterprise security best practices. Your data is never used to train public AI models.',
  },
  {
    question: 'Can it integrate with our existing systems?',
    answer: 'Yes! We integrate with virtually any system that has an API or database. If it stores data, we can pull it into your analytics dashboard.',
  },
];

export default function AIAnalyticsPage() {
  return (
    <>
      <SolutionHero
        icon="BarChart3"
        title="AI Analytics That Turn Data into Growth"
        subtitle="Real-time insights, predictive intelligence, and automated reporting"
        description="Stop guessing and start knowing. AI-powered analytics that reveal hidden opportunities and predict what's coming next."
        metrics={[
          { label: 'Data Sources', value: 'Unlimited' },
          { label: 'Real-Time', value: 'Live' },
          { label: 'Setup Time', value: '2-3 Weeks' },
        ]}
        primaryCTA={{ label: 'Book Free Data Audit', href: '#demo' }}
        secondaryCTA={{ label: 'See Sample Dashboard', href: '#demo' }}
      />
      <SolutionFeatures title="See What Others Miss" subtitle="AI-powered analytics that reveal the story behind your numbers" features={features} />
      <SolutionHowItWorks title="From Raw Data to Insights in 3 Weeks" subtitle="A structured approach to building your AI analytics platform" steps={steps} />
      <SolutionUseCases title="Businesses Transformed by Data" subtitle="See how companies turned scattered data into decisive action" useCases={useCases} />
      <SolutionIntegrations title="Connects to All Your Data Sources" subtitle="Pull data from every tool, platform, and database you use" integrations={integrations} />
      <SolutionROI title="The ROI of Knowing vs. Guessing" description="Companies using AI analytics report 5-6% higher productivity and 3-5% higher profitability than peers." savings={[
        { label: 'Productivity Gain', value: '+6%' },
        { label: 'Profitability', value: '+5%' },
        { label: 'Decision Speed', value: '10x' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to See What Your Data Is Hiding?" description="Book a free data audit and we'll show you 3 insights from your own data that can drive growth." primaryCTA={{ label: 'Book Free Data Audit', href: '#contact' }} secondaryCTA={{ label: 'Talk to Sales', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}