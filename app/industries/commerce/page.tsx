import { Metadata } from 'next';
import { SolutionHero } from '@/components/solutions/solution-hero';
import { SolutionFeatures } from '@/components/solutions/solution-features';
import { SolutionUseCases } from '@/components/solutions/solution-use-cases';
import { SolutionROI } from '@/components/solutions/solution-roi';
import { SolutionFAQ } from '@/components/solutions/solution-faq';
import { SolutionCTA } from '@/components/solutions/solution-cta';
import { SolutionIntegrations } from '@/components/solutions/solution-integrations';

export const metadata: Metadata = {
  title: 'AI for Commerce — Boost Sales & Automate Customer Service',
  description: 'AI-powered product recommendations, order automation, and 24/7 customer support for retail, wholesale, and e-commerce businesses.',
};

const features = [
  {
    icon: 'ShoppingCart',
    title: 'AI Shopping Assistant',
    description: 'AI chatbot that helps customers find products, compare options, check availability, and complete purchases — like having a personal shopper for every visitor.',
    benefit: 'Increase conversion rate by 3x',
  },
  {
    icon: 'MessageCircle',
    title: 'WhatsApp Commerce',
    description: 'Sell directly on WhatsApp. Share catalogs, take orders, send payment links, and provide order tracking — complete shopping experience in chat.',
    benefit: 'Reach customers where they spend 2+ hours daily',
  },
  {
    icon: 'Truck',
    title: 'Order & Shipping Automation',
    description: 'Automated order confirmation, shipping updates, delivery notifications, and feedback requests. Keep customers informed at every step.',
    benefit: 'Reduce "where is my order?" inquiries by 80%',
  },
  {
    icon: 'RotateCcw',
    title: 'Cart Abandonment Recovery',
    description: 'AI-powered cart recovery via WhatsApp — personalized messages with product images, offers, and one-click checkout links.',
    benefit: 'Recover 35% of abandoned carts',
  },
  {
    icon: 'BarChart3',
    title: 'Inventory Intelligence',
    description: 'AI predicts demand, optimizes stock levels, and automatically generates purchase orders when inventory runs low.',
    benefit: 'Reduce stockouts by 70%, overstock by 40%',
  },
  {
    icon: 'Headset',
    title: '24/7 Customer Support',
    description: 'AI handles all customer inquiries — order status, returns, product questions, complaints — instantly and in multiple languages.',
    benefit: 'Resolve 90% of queries without human intervention',
  },
];

const useCases = [
  {
    industry: 'E-commerce Brand',
    icon: 'Globe',
    challenge: '5,000+ monthly orders. Support team overwhelmed with "where is my order?" inquiries. Cart abandonment at 70%.',
    solution: 'WhatsApp order tracking + AI support chatbot + cart recovery automation + post-purchase review collection.',
    results: [
      { label: 'Support Tickets', value: '-75%' },
      { label: 'Cart Recovery', value: '+₹8L/mo' },
      { label: 'Customer Rating', value: '4.7/5' },
    ],
  },
  {
    industry: 'Retail Chain',
    icon: 'Store',
    challenge: '25 stores, no unified customer view. In-store staff can\'t check online inventory. Losing sales when items out of stock.',
    solution: 'Omnichannel AI assistant — store inventory lookup, online order placement in-store, WhatsApp catalog browsing.',
    results: [
      { label: 'Lost Sales Recovered', value: '+₹25L/yr' },
      { label: 'Customer Experience', value: 'Unified' },
      { label: 'Staff Efficiency', value: '+50%' },
    ],
  },
  {
    industry: 'Wholesale Distributor',
    icon: 'Package',
    challenge: 'Manual order taking via phone and WhatsApp. Sales reps spending hours on repeat orders. Pricing errors due to manual entry.',
    solution: 'AI order-taking chatbot with customer-specific pricing + automated reorder reminders + invoice generation.',
    results: [
      { label: 'Order Processing', value: '5x faster' },
      { label: 'Order Errors', value: 'Zero' },
      { label: 'Repeat Orders', value: '+40%' },
    ],
  },
];

const integrations = [
  { name: 'Shopify', category: 'E-commerce Platform' },
  { name: 'WooCommerce', category: 'E-commerce Platform' },
  { name: 'Magento', category: 'E-commerce Platform' },
  { name: 'WhatsApp Business', category: 'Messaging' },
  { name: 'Razorpay', category: 'Payments' },
  { name: 'PayU', category: 'Payments' },
  { name: 'Shiprocket', category: 'Logistics' },
  { name: 'Delhivery', category: 'Logistics' },
  { name: 'Zoho Inventory', category: 'Inventory' },
  { name: 'Tally', category: 'Accounting' },
];

const faqs = [
  {
    question: 'Can customers complete purchases entirely through WhatsApp?',
    answer: 'Yes! Our WhatsApp commerce solution supports the full buying journey — product browsing, cart building, payment via integrated payment links, and order confirmation — all within WhatsApp.',
  },
  {
    question: 'How does AI product recommendation work?',
    answer: 'The AI analyzes customer browsing behavior, purchase history, and similar customer patterns to recommend products they\'re most likely to buy. Recommendations improve automatically as more data is collected.',
  },
  {
    question: 'What about returns and refunds?',
    answer: 'The AI can handle the entire returns process — initiate return requests, generate return labels, provide refund status updates, and answer policy questions. Complex cases are escalated to your team.',
  },
  {
    question: 'Can it handle peak sale periods?',
    answer: 'Absolutely. The AI scales automatically to handle unlimited simultaneous conversations. Unlike human teams, it never gets overwhelmed during flash sales or festive seasons.',
  },
  {
    question: 'How long does integration with our e-commerce platform take?',
    answer: 'Shopify/WooCommerce integration takes 3-5 days. Custom platforms take 1-2 weeks. You can be live with basic automation within a week.',
  },
];

export default function CommerceIndustryPage() {
  return (
    <>
      <SolutionHero
        icon="ShoppingCart"
        title="AI Solutions That Sell More, 24/7"
        subtitle="Automate customer service, recover abandoned carts, and boost sales"
        description="Purpose-built AI for retail, wholesale, and e-commerce. Convert browsers into buyers with intelligent automation."
        metrics={[
          { label: 'Conversion Rate', value: '3x' },
          { label: 'Cart Recovery', value: '35%' },
          { label: 'Support Automated', value: '90%' },
        ]}
        primaryCTA={{ label: 'Book Free Demo', href: '/#demo' }}
        secondaryCTA={{ label: 'Calculate Revenue Impact', href: '/#calculator' }}
      />
      <SolutionFeatures title="AI-Powered Commerce" subtitle="Sell more, support better, and automate everything" features={features} />
      <SolutionUseCases title="Commerce Businesses Transformed" subtitle="See how retailers and e-commerce brands are growing with AI" useCases={useCases} />
      <SolutionIntegrations title="Integrates With Your Commerce Stack" subtitle="Works with your e-commerce platform, payment gateway, and logistics" integrations={integrations} />
      <SolutionROI title="The ROI of AI in Commerce" description="E-commerce businesses using AI see 3x conversion improvement and recover 35% of abandoned carts." savings={[
        { label: 'Revenue Increase', value: '+₹40L/yr' },
        { label: 'Support Cost Reduction', value: '-75%' },
        { label: 'Customer LTV', value: '+45%' },
      ]} />
      <SolutionFAQ faqs={faqs} />
      <SolutionCTA title="Ready to Transform Your Commerce Business?" description="Book a free demo and see how AI can boost your sales starting this week." primaryCTA={{ label: 'Book Free Demo', href: '/#contact' }} secondaryCTA={{ label: 'Talk to Commerce Team', href: 'mailto:hello@growithai.com' }} />
    </>
  );
}
