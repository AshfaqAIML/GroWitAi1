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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const QUICK_REPLIES = [
  'What services do you offer?',
  'How much does it cost?',
  'How long does implementation take?',
  'Do you offer a free trial?',
  'I want to book a demo',
];

const BOT_RESPONSES: Record<string, string> = {
  'What services do you offer?':
    'We offer a full suite of AI-powered business solutions including:\n\n• AI Chatbots & Voice Agents\n• WhatsApp Automation\n• CRM & Workflow Automation\n• AI Analytics & Business Intelligence\n• Lead Generation Systems\n• Custom AI Development\n\nWhich solution interests you most?',
  'How much does it cost?':
    'Our pricing is customized based on your business needs. Most solutions start from ₹25,000/month for small businesses, with enterprise plans scaling based on usage.\n\nWant a detailed quote? I can connect you with our sales team, or you can try our ROI Calculator to estimate your potential savings!',
  'How long does implementation take?':
    'Most solutions go live in 2-4 weeks! Simple chatbots can be deployed in as little as 7 days. Complex enterprise integrations typically take 6-8 weeks.\n\nWe handle everything from setup to training, ensuring zero disruption to your business.',
  'Do you offer a free trial?':
    'Yes! We offer a free 14-day trial for most solutions, and every engagement starts with a complimentary discovery call and AI opportunity assessment.\n\nWant to start? Book a demo and we\'ll set up a trial environment for your business.',
  'I want to book a demo':
    'Great choice! You can book a demo directly through our scheduling system. I\'ll help you find the best time.\n\nWould you prefer:\n• A quick 15-minute intro call\n• A detailed 30-minute solution demo\n• A full 60-minute AI strategy session',
  default:
    'Thanks for your message! I\'m GroWithAI\'s virtual assistant. I can help with:\n\n• Our services & solutions\n• Pricing & plans\n• Implementation timeline\n• Booking a demo\n• Technical questions\n\nWhat would you like to know about?',
};

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'bot',
      content: '👋 Hi! I\'m GroWithAI\'s AI assistant. How can I help you explore AI solutions for your business?',
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
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));
    setIsTyping(false);
    
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        role: 'bot',
        content: response,
        timestamp: new Date(),
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

    // Find matching response
    const matchedKey = Object.keys(BOT_RESPONSES).find((key) =>
      messageText.toLowerCase().includes(key.toLowerCase())
    );
    const response = matchedKey ? BOT_RESPONSES[matchedKey] : BOT_RESPONSES.default;

    await simulateTyping(response);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-2xl bg-brand-purple text-white shadow-lg shadow-brand-purple/30 hover:shadow-brand-purple/50 transition-all flex items-center justify-center"
          >
            <MessageCircle className="h-6 w-6" />
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
              height: isMinimized ? 'auto' : 500,
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={cn(
              'fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl glass shadow-2xl flex flex-col overflow-hidden',
              isMinimized && 'h-auto'
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-brand-purple flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">GroWithAI Assistant</p>
                  <p className="text-xs text-brand-green">● Online</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-7 w-7 rounded-lg hover:bg-white/5 flex items-center justify-center"
                >
                  {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="h-7 w-7 rounded-lg hover:bg-white/5 flex items-center justify-center"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={cn(
                        'flex gap-2',
                        msg.role === 'user' && 'flex-row-reverse'
                      )}
                    >
                      <div
                        className={cn(
                          'h-7 w-7 rounded-lg flex items-center justify-center flex-shrink-0',
                          msg.role === 'bot' ? 'bg-brand-purple/20' : 'bg-brand-gold/20'
                        )}
                      >
                        {msg.role === 'bot' ? (
                          <Bot className="h-3.5 w-3.5 text-brand-purple" />
                        ) : (
                          <User className="h-3.5 w-3.5 text-brand-gold" />
                        )}
                      </div>
                      <div
                        className={cn(
                          'rounded-2xl px-3 py-2 text-sm max-w-[75%] whitespace-pre-wrap',
                          msg.role === 'bot'
                            ? 'glass text-text-primary'
                            : 'bg-brand-purple text-white'
                        )}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-2">
                      <div className="h-7 w-7 rounded-lg bg-brand-purple/20 flex items-center justify-center">
                        <Bot className="h-3.5 w-3.5 text-brand-purple" />
                      </div>
                      <div className="glass rounded-2xl px-4 py-2 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce" />
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0.1s]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-text-muted animate-bounce [animation-delay:0.2s]" />
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Replies */}
                {messages.length <= 1 && (
                  <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                    {QUICK_REPLIES.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleSend(reply)}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-text-secondary hover:border-brand-purple/30 hover:text-brand-purple transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-white/5">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 h-10 rounded-xl glass px-3 text-sm focus:outline-none focus:border-brand-purple/50"
                    />
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleSend()}
                      disabled={!input.trim()}
                    >
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