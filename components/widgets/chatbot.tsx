'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Loader2,
  Minimize2,
  Maximize2,
  Sparkles,
  ArrowRight,
  Calendar,
  FileText,
  Paperclip,
  Star,
  Zap,
  Building2,
  Phone,
  Mail,
  Globe,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Types
interface Message {
  id: string;
  role: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
  type?: 'text' | 'card' | 'options' | 'file' | 'booking';
  metadata?: any;
}

interface Suggestion {
  text: string;
  icon: string;
}

// Knowledge Base
const KNOWLEDGE_BASE = {
  company: {
    name: 'GroWithAI',
    tagline: 'Helping Businesses Grow with Artificial Intelligence',
    mission: 'Empower businesses with intelligent AI-powered systems that increase revenue, automate operations, improve customer experiences, and accelerate digital transformation.',
    vision: "Become India's most trusted AI Growth Partner, starting from Jammu & Kashmir and expanding globally.",
    founded: '2024',
    headquarters: 'Jammu & Kashmir, India',
  },
  services: {
    chatbots: {
      name: 'AI Chatbots',
      description: 'Intelligent conversational agents that understand your customers and respond instantly, 24/7. Reduce support costs by 60% while improving response times.',
      price: 'Starting from ₹25,000/month',
      duration: '7-10 days deployment',
      features: ['Natural language understanding', 'Multilingual support (50+ languages)', 'CRM integration', 'Analytics dashboard', 'Human handoff'],
    },
    voiceAgents: {
      name: 'AI Voice Agents',
      description: 'Natural-sounding voice AI that handles inbound and outbound calls with human-like understanding. Never miss a call again.',
      price: 'Starting from ₹35,000/month',
      duration: '2 weeks deployment',
      features: ['Natural speech recognition', 'Human-like voice synthesis', 'Multi-language support', 'Call analytics', 'Intelligent routing'],
    },
    receptionists: {
      name: 'AI Receptionists',
      description: 'Virtual front-desk agents that greet visitors, schedule appointments, and route inquiries intelligently. Eliminate missed appointments.',
      price: 'Starting from ₹20,000/month',
      duration: '2 weeks deployment',
      features: ['Appointment scheduling', 'Visitor management', 'Multi-channel presence', 'Professional representation', 'Privacy compliant'],
    },
    salesAssistants: {
      name: 'AI Sales Assistants',
      description: 'AI-powered sales agents that qualify leads, follow up persistently, and close deals faster. Increase conversion by 3x.',
      price: 'Starting from ₹40,000/month',
      duration: '2 weeks deployment',
      features: ['Lead qualification', 'Multi-channel outreach', 'Conversational selling', 'Behavioral intent detection', 'CRM auto-sync'],
    },
    whatsapp: {
      name: 'WhatsApp Automation',
      description: 'Automated WhatsApp messaging for marketing, support, and customer engagement at scale. 98% open rates.',
      price: 'Starting from ₹15,000/month',
      duration: '10 days deployment',
      features: ['Instant auto-replies', 'WhatsApp commerce', 'Broadcast messaging', 'Automated notifications', 'Official Business API'],
    },
    crm: {
      name: 'CRM Automation',
      description: 'Seamlessly connect your CRM with AI to automate data entry, follow-ups, and pipeline management.',
      price: 'Starting from ₹30,000/month',
      duration: '2-3 weeks deployment',
      features: ['Auto-sync across systems', 'Intelligent lead assignment', 'Smart follow-up reminders', 'Pipeline analytics', 'Data enrichment'],
    },
    workflow: {
      name: 'Workflow Automation',
      description: 'End-to-end business process automation that connects your tools and eliminates repetitive tasks.',
      price: 'Starting from ₹50,000 (one-time setup)',
      duration: '2-3 weeks deployment',
      features: ['Multi-step process automation', 'Trigger-based actions', 'Conditional logic', 'Cross-platform integration', 'Visual workflow builder'],
    },
    analytics: {
      name: 'AI Analytics',
      description: 'Real-time business intelligence dashboards powered by AI to uncover insights and predict trends.',
      price: 'Starting from ₹40,000/month',
      duration: '3-4 weeks deployment',
      features: ['AI-powered insights', 'Predictive analytics', 'Custom dashboards', 'Real-time monitoring', 'Automated reporting'],
    },
  },
  industries: ['Education', 'Hospitality', 'Healthcare', 'Professional Services', 'Commerce', 'Real Estate', 'Startups', 'SMEs', 'Enterprises'],
  technologies: ['OpenAI GPT-4', 'Claude', 'Gemini', 'Llama', 'LangChain', 'Pinecone', 'Next.js', 'React', 'Node.js', 'FastAPI', 'AWS', 'Azure', 'Vercel'],
  pricing: {
    starter: '₹25,000/month',
    growth: '₹75,000/month',
    enterprise: 'Custom pricing',
    freeTrial: '14-day free trial available',
  },
  process: [
    'Discovery Call',
    'Business Analysis',
    'AI Strategy Design',
    'Development & Testing',
    'Deployment',
    'Continuous Optimization',
  ],
  contact: {
    email: 'hello@growithai.com',
    phone: '+91-XXXXX-XXXXX',
    demo: 'Free 30-minute consultation',
  },
};

// Intent Recognition
function detectIntent(message: string): string {
  const msg = message.toLowerCase();
  
  if (msg.includes('price') || msg.includes('cost') || msg.includes('pricing') || msg.includes('how much')) return 'pricing';
  if (msg.includes('demo') || msg.includes('consultation') || msg.includes('book') || msg.includes('schedule') || msg.includes('meeting')) return 'booking';
  if (msg.includes('chatbot') || msg.includes('voice') || msg.includes('receptionist') || msg.includes('sales assistant') || msg.includes('whatsapp')) return 'service_inquiry';
  if (msg.includes('portfolio') || msg.includes('case study') || msg.includes('example') || msg.includes('previous work')) return 'portfolio';
  if (msg.includes('technology') || msg.includes('tech stack') || msg.includes('platform') || msg.includes('build with')) return 'technology';
  if (msg.includes('industry') || msg.includes('sector') || msg.includes('business type')) return 'industry';
  if (msg.includes('process') || msg.includes('how does it work') || msg.includes('steps') || msg.includes('timeline')) return 'process';
  if (msg.includes('about') || msg.includes('company') || msg.includes('mission') || msg.includes('who are you')) return 'company';
  if (msg.includes('contact') || msg.includes('email') || msg.includes('phone') || msg.includes('reach')) return 'contact';
  if (msg.includes('career') || msg.includes('job') || msg.includes('hiring') || msg.includes('work with')) return 'careers';
  if (msg.includes('help') || msg.includes('support') || msg.includes('issue') || msg.includes('problem')) return 'support';
  
  return 'general';
}

// Generate contextual responses
function generateResponse(message: string, conversationHistory: Message[]): string {
  const intent = detectIntent(message);
  const msg = message.toLowerCase();
  
  switch (intent) {
    case 'pricing':
      return `Great question! Here's our pricing overview:

**Starter Plan:** ${KNOWLEDGE_BASE.pricing.starter}/month
- 1 AI solution
- Up to 1,000 conversations/month
- Basic analytics & email support

**Growth Plan:** ${KNOWLEDGE_BASE.pricing.growth}/month
- 3 AI solutions
- Up to 10,000 conversations/month
- Advanced analytics & priority support

**Enterprise:** ${KNOWLEDGE_BASE.pricing.enterprise}
- Unlimited solutions & conversations
- Custom AI training & dedicated manager

All plans include a **${KNOWLEDGE_BASE.pricing.freeTrial}**!

Want me to recommend the best plan for your business? Tell me about your needs!`;

    case 'booking':
      return `I'd love to set up a **${KNOWLEDGE_BASE.contact.demo}** for you!

You can book directly through our scheduling system. Would you prefer:

1. **Quick 15-min intro call** - Overview of our solutions
2. **30-min detailed demo** - See a live AI solution in action
3. **60-min strategy session** - Deep dive into your business needs

Which works best for you? Or I can collect your details and have our team reach out within 24 hours.`;

    case 'service_inquiry':
      if (msg.includes('chatbot')) {
        return `**AI Chatbots** - Our most popular solution!

${KNOWLEDGE_BASE.services.chatbots.description}

**Key Features:**
- Natural language understanding
- 50+ languages including Hindi & regional languages
- CRM & WhatsApp integration
- Real-time analytics dashboard

**Starting at:** ${KNOWLEDGE_BASE.services.chatbots.price}
**Deployment:** ${KNOWLEDGE_BASE.services.chatbots.duration}

Would you like to:
See a **live demo** of our chatbot?
Get a **custom quote** for your business?
Learn about **other solutions**?`;

      } else if (msg.includes('voice')) {
        return `**AI Voice Agents** - Never miss a call again!

${KNOWLEDGE_BASE.services.voiceAgents.description}

**Key Features:**
- Human-like voice synthesis
- 30+ languages supported
- Handles unlimited simultaneous calls
- Intelligent call routing

**Starting at:** ${KNOWLEDGE_BASE.services.voiceAgents.price}
**Deployment:** ${KNOWLEDGE_BASE.services.voiceAgents.duration}

Want to hear a sample call? Book a demo!`;

      } else {
        return `We offer a comprehensive range of AI solutions! Here are some popular ones:

**AI Chatbots** - 24/7 customer engagement
**AI Voice Agents** - Handle calls automatically
**AI Receptionists** - Virtual front desk
**AI Sales Assistants** - Close more deals
**WhatsApp Automation** - Engage on WhatsApp
**AI Analytics** - Data-driven insights

Which interests you most? I can provide detailed information on any solution!`;
      }

    case 'portfolio':
      return `We've delivered impactful solutions across industries! Here are some highlights:

**Healthcare:** Reduced no-shows by 80% for MediCare Clinics
**Hospitality:** Increased bookings by 40% for Premier Hotels
**Education:** Automated 15,000+ admission inquiries for Global University
**Real Estate:** Generated ₹2.8Cr additional revenue for a developer
**Legal:** Saved 120 hours/month for a law firm

Want to see a detailed case study for your industry? Let me know which sector interests you!`;

    case 'technology':
      return `We use the **world's best AI technology** to build your solutions:

**AI/ML:**
- OpenAI GPT-4, Claude, Gemini, Llama
- LangChain, Pinecone (vector database)

**Development:**
- Next.js, React, Node.js, FastAPI
- TypeScript, Python

**Infrastructure:**
- AWS, Azure, Vercel
- Docker, Kubernetes

**Security:**
- Enterprise-grade encryption
- DPDP Act & GDPR compliant
- India-based servers available

The best part? **You don't need to know any of this!** We handle all the technology - you get a simple, powerful solution.`;

    case 'industry':
      return `We serve **6+ industries** with specialized AI solutions:

**Education** - Admissions automation, student support
**Hospitality** - Booking AI, guest concierge
**Healthcare** - Patient scheduling, report delivery
**Professional Services** - Client intake, document automation
**Commerce** - WhatsApp commerce, order automation
**Real Estate** - Lead capture, property matching

Which industry are you in? I'll share relevant case studies and solutions!`;

    case 'process':
      return `Our proven **6-step process** gets you live in weeks, not months:

1. **Discovery Call** - We learn your business & goals
2. **Business Analysis** - Identify automation opportunities
3. **AI Strategy** - Custom roadmap with clear milestones
4. **Development** - Build, train & test your AI
5. **Deployment** - Launch with zero disruption
6. **Optimization** - Continuous improvement

Most solutions go live in **2-4 weeks!**

Ready to start? Book a free discovery call!`;

    case 'company':
      return `**GroWithAI** - India's Trusted AI Growth Partner

**Our Mission:** ${KNOWLEDGE_BASE.company.mission}

**Our Vision:** ${KNOWLEDGE_BASE.company.vision}

**Headquarters:** ${KNOWLEDGE_BASE.company.headquarters}

We're not a digital agency or software house. We're an **AI Growth Company** that combines AI, automation, business strategy, and modern engineering to deliver measurable business outcomes.

**Trusted by 200+ businesses** across Education, Healthcare, Hospitality, Real Estate, and more!

What would you like to know about us?`;

    case 'contact':
      return `**Email:** ${KNOWLEDGE_BASE.contact.email}
**Phone:** ${KNOWLEDGE_BASE.contact.phone}

Or let me help you right now! What can I assist you with?

Book a **free consultation**
Get a **custom quote**
See a **live demo**
Ask about **specific solutions**`;

    case 'careers':
      return `We're always looking for talented individuals passionate about AI!

Check our **Careers page** for current openings. We hire:
- AI/ML Engineers
- Full-Stack Developers
- Solutions Architects
- Sales & Business Development

Want to be part of India's fastest-growing AI company? Visit our careers page or send your resume to ${KNOWLEDGE_BASE.contact.email}!`;

    case 'support':
      return `I'm here to help! What seems to be the issue?

You can also:
Email us at **${KNOWLEDGE_BASE.contact.email}**
Call us at **${KNOWLEDGE_BASE.contact.phone}**

Or describe your issue and I'll either resolve it or connect you with the right person on our team.`;

    default:
      return `Thanks for reaching out!

I'm GroWithAI's AI consultant. I can help with:

**Discover the right AI solution** for your business
**Get pricing** & find the best plan
**Book a free consultation** or demo
**Learn about our work** & case studies
**Understand our technology** & process

What brings you here today? Feel free to ask me anything!`;
  }
}

// Quick Suggestions
const WELCOME_SUGGESTIONS: Suggestion[] = [
  { text: 'What AI solutions do you offer?', icon: 'Sparkles' },
  { text: 'How much does it cost?', icon: 'Star' },
  { text: 'Book a free consultation', icon: 'Calendar' },
  { text: 'Show me case studies', icon: 'FileText' },
  { text: 'Which solution is best for my business?', icon: 'Zap' },
  { text: 'What technology do you use?', icon: 'Globe' },
];

// Icon mapping
const suggestionIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="h-3.5 w-3.5" />,
  Star: <Star className="h-3.5 w-3.5" />,
  Calendar: <Calendar className="h-3.5 w-3.5" />,
  FileText: <FileText className="h-3.5 w-3.5" />,
  Zap: <Zap className="h-3.5 w-3.5" />,
  Globe: <Globe className="h-3.5 w-3.5" />,
};

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'bot',
      content: `Hi! I'm your **AI Growth Consultant** at GroWithAI.

I can help you discover the perfect AI solution for your business, provide pricing, schedule demos, and answer any questions.

How can I assist you today?`,
      timestamp: new Date(),
      type: 'text',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [conversationStage, setConversationStage] = useState<'welcome' | 'discovery' | 'recommendation' | 'booking' | 'contact'>('welcome');
  const [collectedInfo, setCollectedInfo] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    interest: '',
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 1200));
    setIsTyping(false);
    
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: 'bot',
        content: response,
        timestamp: new Date(),
        type: 'text',
      },
    ]);
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setShowSuggestions(false);

    if (messageText.toLowerCase().includes('book') || messageText.toLowerCase().includes('demo') || messageText.toLowerCase().includes('consultation')) {
      setConversationStage('booking');
    } else if (messageText.toLowerCase().includes('price') || messageText.toLowerCase().includes('cost')) {
      setConversationStage('recommendation');
    }

    const response = generateResponse(messageText, messages);
    await simulateTyping(response);
    
    setShowSuggestions(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSend(suggestion);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'bot',
        content: `Hi! I'm your **AI Growth Consultant** at GroWithAI.

I can help you discover the perfect AI solution for your business, provide pricing, schedule demos, and answer any questions.

How can I assist you today?`,
        timestamp: new Date(),
        type: 'text',
      },
    ]);
    setConversationStage('welcome');
    setShowSuggestions(true);
    setCollectedInfo({ name: '', email: '', company: '', industry: '', interest: '' });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Open AI Consultant"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-brand-purple blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white shadow-lg flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-brand-green border-2 border-surface-deep animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              height: isMinimized ? 'auto' : 600,
              width: isMinimized ? 'auto' : 420,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 max-w-[calc(100vw-2rem)] rounded-2xl glass shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5 bg-gradient-to-r from-brand-purple/5 to-transparent">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-deep-purple flex items-center justify-center shadow-lg shadow-brand-purple/20">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-brand-green border-2 border-surface-base" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">GroWithAI Consultant</p>
                  <p className="text-xs text-brand-green flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
                    Online - Ready to help
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={resetChat}
                  className="h-8 w-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                  title="Reset conversation"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={cn(
                        'flex gap-2.5',
                        msg.role === 'user' && 'flex-row-reverse'
                      )}
                    >
                      {/* Avatar */}
                      <div
                        className={cn(
                          'h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0',
                          msg.role === 'bot'
                            ? 'bg-gradient-to-br from-brand-purple/20 to-brand-purple/10'
                            : 'bg-gradient-to-br from-brand-gold/20 to-brand-gold/10'
                        )}
                      >
                        {msg.role === 'bot' ? (
                          <Bot className="h-4 w-4 text-brand-purple" />
                        ) : (
                          <User className="h-4 w-4 text-brand-gold" />
                        )}
                      </div>

                      {/* Message Bubble */}
                      <div className="flex-1 max-w-[80%]">
                        <div
                          className={cn(
                            'rounded-2xl px-4 py-3 text-sm leading-relaxed',
                            msg.role === 'bot'
                              ? 'glass text-text-primary'
                              : 'bg-brand-purple text-white'
                          )}
                        >
                          <div
                            className="whitespace-pre-wrap [&>strong]:text-brand-gold [&>strong]:font-semibold"
                            dangerouslySetInnerHTML={{
                              __html: msg.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/\n/g, '<br/>')
                                .replace(/->/g, '<span class="text-brand-purple">-></span>'),
                            }}
                          />
                        </div>
                        
                        {/* Message Actions */}
                        {msg.role === 'bot' && (
                          <div className="flex items-center gap-1 mt-1 px-1">
                            <button
                              className="h-6 w-6 rounded-md hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                              title="Copy"
                            >
                              <Copy className="h-3 w-3" />
                            </button>
                            <button
                              className="h-6 w-6 rounded-md hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-brand-green transition-colors"
                              title="Helpful"
                            >
                              <ThumbsUp className="h-3 w-3" />
                            </button>
                            <button
                              className="h-6 w-6 rounded-md hover:bg-white/5 flex items-center justify-center text-text-muted hover:text-red-400 transition-colors"
                              title="Not helpful"
                            >
                              <ThumbsDown className="h-3 w-3" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-2.5">
                      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-purple/20 to-brand-purple/10 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-brand-purple" />
                      </div>
                      <div className="glass rounded-2xl px-4 py-3 flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-brand-purple/50 animate-bounce" />
                        <span className="h-2 w-2 rounded-full bg-brand-purple/50 animate-bounce [animation-delay:0.15s]" />
                        <span className="h-2 w-2 rounded-full bg-brand-purple/50 animate-bounce [animation-delay:0.3s]" />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                {showSuggestions && messages.length <= 3 && (
                  <div className="px-4 pb-3">
                    <p className="text-xs text-text-muted mb-2 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-brand-gold" />
                      Suggested questions
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {WELCOME_SUGGESTIONS.slice(0, 6).map((suggestion) => (
                        <button
                          key={suggestion.text}
                          onClick={() => handleSuggestionClick(suggestion.text)}
                          className="text-left text-xs px-3 py-2 rounded-xl border border-white/5 hover:border-brand-purple/30 hover:bg-brand-purple/5 text-text-secondary hover:text-text-primary transition-all flex items-center gap-1.5"
                        >
                          <span className="text-brand-purple flex-shrink-0">
                            {suggestionIcons[suggestion.icon] || <ChevronRight className="h-3 w-3" />}
                          </span>
                          <span className="line-clamp-1">{suggestion.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                {conversationStage === 'booking' && (
                  <div className="px-4 pb-3">
                    <div className="glass-card rounded-xl p-3 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-brand-green/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-brand-green" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-text-primary">Ready to book?</p>
                        <p className="text-xs text-text-muted">Schedule your free consultation</p>
                      </div>
                      <Button variant="gold" size="sm" showArrow href="/#contact">
                        Book Now
                      </Button>
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-3 border-t border-white/5">
                  <div className="flex items-end gap-2">
                    <div className="flex-1 relative">
                      <textarea
                        ref={inputRef as any}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleSend();
                          }
                        }}
                        placeholder="Ask me anything about AI solutions..."
                        rows={1}
                        className="w-full resize-none rounded-xl glass px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple/50 transition-colors"
                        style={{ maxHeight: '120px' }}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement;
                          target.style.height = 'auto';
                          target.style.height = Math.min(target.scrollHeight, 120) + 'px';
                        }}
                      />
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleSend()}
                      disabled={!input.trim()}
                      className="h-10 w-10 rounded-xl flex-shrink-0"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between mt-2 px-1">
                    <p className="text-[10px] text-text-muted flex items-center gap-1">
                      <Sparkles className="h-2.5 w-2.5 text-brand-gold" />
                      Powered by AI - Responses may vary
                    </p>
                    <p className="text-[10px] text-text-muted">
                      Press Enter to send
                    </p>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
