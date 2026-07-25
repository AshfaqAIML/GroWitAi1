import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Blog — AI Growth Insights',
  description: 'Expert insights on AI, automation, and business growth.',
};

const articles = [
  {
    slug: 'ai-chatbots-roi',
    title: 'The Real ROI of AI Chatbots: A Data-Backed Analysis',
    excerpt: 'Discover how businesses are achieving 300%+ ROI with intelligent conversational AI.',
    category: 'AI',
    readTime: '8 min read',
    date: '2024-12-15',
    image: '/blog/chatbot-roi.jpg',
  },
  {
    slug: 'automation-small-business',
    title: '5 Automation Workflows Every Small Business Needs in 2025',
    excerpt: 'Practical automation strategies that save 20+ hours per week without breaking the bank.',
    category: 'Automation',
    readTime: '6 min read',
    date: '2024-12-10',
    image: '/blog/automation-smb.jpg',
  },
  {
    slug: 'voice-ai-future',
    title: 'Voice AI Is Transforming Customer Service — Here\'s How',
    excerpt: 'Why voice agents are the next frontier in customer experience and how to prepare.',
    category: 'AI',
    readTime: '10 min read',
    date: '2024-12-05',
    image: '/blog/voice-ai.jpg',
  },
  {
    slug: 'ai-healthcare-india',
    title: 'How AI Is Revolutionizing Healthcare in India',
    excerpt: 'From appointment scheduling to patient triage — AI use cases transforming Indian healthcare.',
    category: 'Industry',
    readTime: '7 min read',
    date: '2024-11-28',
    image: '/blog/ai-healthcare.jpg',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-max px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            AI Growth <span className="gradient-text">Insights</span>
          </h1>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Expert articles on leveraging AI for business growth, automation strategies, and industry trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group glass-card rounded-2xl p-6 hover:border-brand-purple/30 transition-all"
            >
              <Badge variant="purple" className="mb-3">{article.category}</Badge>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-brand-purple transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-text-secondary mb-4">{article.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readTime}
                </span>
              </div>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-brand-purple">
                Read article <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}