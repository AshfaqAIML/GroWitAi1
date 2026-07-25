'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2,
  Sparkles,
  Calendar,
  FileText,
  Star,
  Zap,
  Globe,
  RefreshCw,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SERVICES = {
  chatbots: 'AI Chatbots — 24/7 customer support. Reduce costs by 60%. Starting ₹25K/month.',
  voice: 'AI Voice Agents — Handle calls 24/7. Never miss a call. Starting ₹35K/month.',
  receptionist: 'AI Receptionists — Virtual front desk. Book appointments automatically. Starting ₹20K/month.',
  sales: 'AI Sales Assistants — Qualify leads & close deals 3x faster. Starting ₹40K/month.',
  whatsapp: 'WhatsApp Automation — 98% open rates. Sell & support on WhatsApp. Starting ₹15K/month.',
  crm: 'CRM Automation — Auto-sync data, never lose a lead. Starting ₹30K/month.',
  workflow: 'Workflow Automation — Eliminate repetitive tasks. Custom pricing.',
  analytics: 'AI Analytics — Real-time dashboards & insights. Starting ₹40K/month.',
};

const PRICING = `
**Starter:** ₹25,000/month — 1 AI solution, basic support
**Growth:** ₹75,000/month — 3 AI solutions, priority support
**Enterprise:** Custom — Unlimited solutions, dedicated manager
✨ All plans include a 14-day free trial!`;

const INDUSTRIES = `We serve: Education, Hospitality, Healthcare, Professional Services, Commerce, Real Estate, and more!`;

const PROCESS = `1. Discovery Call → 2. Business Analysis → 3. AI Strategy → 4. Development → 5. Deployment → 6. Optimization
Most solutions go live in 2-4 weeks!`;

const TECH = `We use: OpenAI GPT-4, Claude, Gemini, Llama, LangChain, Next.js, React, Node.js, AWS, Azure.
You don't need to know any of this — we handle everything!`;

const COMPANY = `**GroWithAI** — India's AI Growth Partner
We combine AI + Automation + Strategy to deliver measurable business growth.
200+ businesses trust us across India.`;

const CONTACT = `hello@growithai.com
+91-XXXXX-XXXXX
Or book a free 30-min consultation right now!`;

function detectIntent(message: string): string {
  const m = message.toLowerCase();

  if (m.includes('price') || m.includes('cost') || m.includes('pricing') || m.includes('how much') || m.includes('plan')) return 'pricing';
  if (m.includes('demo') || m.includes('book') || m.includes('consultation') || m.includes('schedule') || m.includes('meeting') || m.includes('appointment')) return 'booking';
  if (m.includes('chatbot')) return 'chatbot';
  if (m.includes('voice') || m.includes('call')) return 'voice';
  if (m.includes('receptionist') || m.includes('front desk')) return 'receptionist';
  if (m.includes('sales') || m.includes('lead') || m.includes('close')) return 'sales';
  if (m.includes('whatsapp') || m.includes('wa')) return 'whatsapp';
  if (m.includes('crm')) return 'crm';
  if (m.includes('workflow') || m.includes('automation') || m.includes('process')) return 'workflow';
  if (m.includes('analytics') || m.includes('dashboard') || m.includes('report') || m.includes('data')) return 'analytics';
  if (m.includes('technology') || m.includes('tech stack') || m.includes('platform') || m.includes('build with')) return 'tech';
  if (m.includes('industry') || m.includes('sector') || m.includes('who do you serve')) return 'industry';
  if (m.includes('case') || m.includes('portfolio') || m.includes('example') || m.includes('previous') || m.includes('client')) return 'portfolio';
  if (m.includes('about') || m.includes('company') || m.includes('who are you') || m.includes('mission')) return 'company';
  if (m.includes('contact') || m.includes('email') || m.includes('phone') || m.includes('reach')) return 'contact';
  if (m.includes('how') && (m.includes('work') || m.includes('process') || m.includes('step'))) return 'process';
  if (m.includes('which') && (m.includes('best') || m.includes('recommend') || m.includes('right') || m.includes('need'))) return 'recommend';
  if (m.includes('hi') || m.includes('hello') || m.includes('hey') || m.includes('help')) return 'greeting';

  return 'general';
}

function generateResponse(message: string): string {
  const intent = detectIntent(message);

  switch (intent) {
    case 'greeting':
      return `Hello! I'm your **AI Growth Consultant** at GroWithAI.

I can help you:
- Discover the right AI solution
- Get pricing & plans
- Book a free consultation
- See case studies
- Learn about our technology

What would you like to explore?`;

    case 'pricing':
      return `Here's our pricing overview:\n\n${PRICING}\n\nWhich plan fits your needs? I can help you decide!`;

    case 'booking':
      return `Great choice! I'd love to set up your **free 30-minute consultation**.

You can book directly at: **/contact**
Or email: **hello@growithai.com**

Would you prefer a quick 15-min intro or a detailed 30-min demo?`;

    case 'chatbot':
      return `🤖 ${SERVICES.chatbots}\n\nWould you like to:\n→ See a live demo?\n→ Get a custom quote?\n→ Compare with other solutions?`;

    case 'voice':
      return `📞 ${SERVICES.voice}\n\nWould you like to:\n→ Hear a sample call?\n→ Get a custom quote?\n→ See case studies?`;

    case 'receptionist':
      return `👩‍💼 ${SERVICES.receptionist}\n\nWould you like to:\n→ See how it works?\n→ Get pricing details?\n→ Book a demo?`;

    case 'sales':
      return `💼 ${SERVICES.sales}\n\nWould you like to:\n→ See conversion stats?\n→ Get a custom quote?\n→ Book a strategy session?`;

    case 'whatsapp':
      return `💬 ${SERVICES.whatsapp}\n\nWould you like to:\n→ See a WhatsApp demo?\n→ Get pricing?\n→ Learn about integration?`;

    case 'crm':
      return `📊 ${SERVICES.crm}\n\nWould you like to:\n→ See CRM integrations?\n→ Get pricing?\n→ Book a demo?`;

    case 'workflow':
      return `⚙️ ${SERVICES.workflow}\n\nWould you like to:\n→ See examples?\n→ Get a custom quote?\n→ Book a process audit?`;

    case 'analytics':
      return `📈 ${SERVICES.analytics}\n\nWould you like to:\n→ See sample dashboards?\n→ Get pricing?\n→ Book a data audit?`;

    case 'tech':
      return `🔧 Our Technology Stack:\n\n${TECH}\n\nAny specific technology you'd like to know more about?`;

    case 'industry':
      return `🏢 Industries We Serve:\n\n${INDUSTRIES}\n\nWhich industry are you in? I'll share relevant case studies!`;

    case 'portfolio':
      return `📁 Here are some results we've delivered:\n\n🏥 **Healthcare** — Reduced no-shows by 80%\n🏨 **Hospitality** — Increased bookings by 40%\n🎓 **Education** — Handled 15,000+ inquiries\n🏢 **Real Estate** — Generated ₹2.8Cr additional revenue\n\nWant details on a specific industry?`;

    case 'company':
      return `${COMPANY}\n\nWhat would you like to know about us?`;

    case 'contact':
      return `📬 Get in Touch:\n\n${CONTACT}\n\nOr I can help you right here! What do you need?`;

    case 'process':
      return `⚡ Our Process:\n\n${PROCESS}\n\nReady to start? Book a free discovery call!`;

    case 'recommend':
      return `To recommend the best solution, I'd love to know:\n\n1. What's your business type?\n2. What's your biggest challenge?\n3. How many customers/leads do you handle monthly?\n\nShare these and I'll give you a personalized recommendation!`;

    default:
      return `I'd love to help! Here's what I can assist with:\n\n- **Discover solutions** — Tell me about your business\n- **Get pricing** — Ask about plans & costs\n- **Book a demo** — Schedule a free consultation\n- **Case studies** — See real results\n- **Technology** — Learn about our stack\n\nWhat interests you most?`;
  }
}

const SUGGESTIONS = [
  { text: 'What solutions do you offer?', icon: Sparkles },
  { text: 'How much does it cost?', icon: Star },
  { text: 'Book a free consultation', icon: Calendar },
  { text: 'Show me case studies', icon: FileText },
  { text: 'Which solution is best for me?', icon: Zap },
  { text: 'What technology do you use?', icon: Globe },
];

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'bot',
      content: "Hi! I'm your **AI Growth Consultant** at GroWithAI.\n\nI can help you discover AI solutions, get pricing, book demos, and answer questions.\n\nHow can I assist you today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) inputRef.current?.focus();
  }, [isOpen, isMinimized]);

  const handleSend = async (text?: string) => {
    const messageText = text || input;
    if (!messageText.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error('API error');

      const data = await response.json();

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: data.reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallback = generateResponse(messageText);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: fallback,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'bot',
        content: "Hi! I'm your **AI Growth Consultant** at GroWithAI.\n\nI can help you discover AI solutions, get pricing, book demos, and answer questions.\n\nHow can I assist you today?",
        timestamp: new Date(),
      },
    ]);
  };

  const renderMarkdown = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-brand-gold font-semibold">$1</strong>')
      .replace(/\n/g, '<br/>');
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-deep-purple text-white shadow-lg shadow-brand-purple/30 hover:shadow-brand-purple/50 transition-all flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-brand-green border-2 border-surface-deep" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1, height: isMinimized ? 'auto' : 550 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] rounded-2xl glass shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-purple to-brand-deep-purple flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">AI Consultant</p>
                  <p className="text-xs text-brand-green">Online</p>
                </div>
              </div>
              <div className="flex gap-1">
                <button onClick={resetChat} className="h-7 w-7 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted">
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
                <button onClick={() => setIsMinimized(!isMinimized)} className="h-7 w-7 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted">
                  {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="h-7 w-7 rounded-lg hover:bg-white/5 flex items-center justify-center text-text-muted">
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div key={msg.id} className={cn('flex gap-2', msg.role === 'user' && 'flex-row-reverse')}>
                      <div className={cn('h-7 w-7 rounded-lg flex items-center justify-center flex-shrink-0', msg.role === 'bot' ? 'bg-brand-purple/20' : 'bg-brand-gold/20')}>
                        {msg.role === 'bot' ? <Bot className="h-3.5 w-3.5 text-brand-purple" /> : <User className="h-3.5 w-3.5 text-brand-gold" />}
                      </div>
                      <div className={cn('rounded-2xl px-3.5 py-2.5 text-sm max-w-[80%]', msg.role === 'bot' ? 'glass text-text-primary' : 'bg-brand-purple text-white')}>
                        <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }} />
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-2">
                      <div className="h-7 w-7 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                        <Bot className="h-3.5 w-3.5 text-brand-purple" />
                      </div>
                      <div className="glass rounded-2xl px-4 py-2.5 flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce" />
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0.15s]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0.3s]" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions */}
                {messages.length <= 1 && (
                  <div className="px-4 pb-2">
                    <p className="text-xs text-text-muted mb-2 flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-brand-gold" /> Try asking:
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {SUGGESTIONS.map((s) => (
                        <button
                          key={s.text}
                          onClick={() => handleSend(s.text)}
                          className="text-left text-xs px-3 py-2 rounded-xl border border-white/5 hover:border-brand-purple/30 text-text-secondary hover:text-text-primary transition-all flex items-center gap-1.5"
                        >
                          <s.icon className="h-3 w-3 text-brand-purple flex-shrink-0" />
                          <span className="line-clamp-1">{s.text}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-3 border-t border-white/5">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Type your message..."
                      className="flex-1 h-10 rounded-xl glass px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple/50"
                    />
                    <Button variant="primary" size="sm" onClick={() => handleSend()} disabled={!input.trim()} className="h-10 w-10 rounded-xl">
                      <Send className="h-4 w-4" />
                    </Button>
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
