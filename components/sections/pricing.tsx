'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, HelpCircle, Zap, Star, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn, getStaggerDelay } from '@/lib/utils';

interface PricingTier {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    icon: Zap,
    description: 'Perfect for small businesses getting started with AI automation.',
    monthlyPrice: 25000,
    annualPrice: 22500,
    features: [
      '1 AI Chatbot or Voice Agent',
      'Up to 1,000 conversations/month',
      'WhatsApp Integration',
      'Basic Analytics Dashboard',
      'Email Support',
      '2 Team Members',
      '1-week deployment',
    ],
  },
  {
    name: 'Growth',
    icon: Star,
    description: 'For growing businesses ready to scale with intelligent automation.',
    monthlyPrice: 75000,
    annualPrice: 67500,
    features: [
      '3 AI Solutions (Chatbot + Voice + WhatsApp)',
      'Up to 10,000 conversations/month',
      'CRM Integration',
      'Advanced Analytics & Reports',
      'Priority Support',
      '10 Team Members',
      'Custom Workflows',
      'API Access',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    icon: Building2,
    description: 'For large organizations requiring bespoke AI solutions at scale.',
    monthlyPrice: 250000,
    annualPrice: 225000,
    features: [
      'Unlimited AI Solutions',
      'Unlimited conversations',
      'Full System Integration',
      'Custom AI Model Training',
      'Dedicated Account Manager',
      '24/7 Premium Support',
      'Unlimited Team Members',
      'SLA Guarantee',
      'On-premise deployment',
      'Custom Security & Compliance',
    ],
  },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const formatPrice = (price: number) => {
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L`;
    return `₹${(price / 1000).toFixed(0)}K`;
  };

  return (
    <section id="pricing" className="section-padding relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 mt-8 glass rounded-full p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all',
                !isAnnual ? 'bg-brand-purple text-white' : 'text-text-muted hover:text-text-primary'
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5',
                isAnnual ? 'bg-brand-purple text-white' : 'text-text-muted hover:text-text-primary'
              )}
            >
              Annual
              <span className="text-xs bg-brand-green/20 text-brand-green px-1.5 py-0.5 rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={cn(
                'glass-card rounded-3xl p-6 md:p-8 relative',
                tier.highlighted && 'border-brand-purple/30 shadow-lg shadow-brand-purple/10'
              )}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: getStaggerDelay(index, 0.12), duration: 0.5 }}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-purple text-white text-xs font-medium">
                  {tier.badge}
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                  <tier.icon className="h-5 w-5 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold">{tier.name}</h3>
              </div>

              <p className="text-sm text-text-secondary mb-6">{tier.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {formatPrice(isAnnual ? tier.annualPrice : tier.monthlyPrice)}
                  </span>
                  <span className="text-text-muted">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-xs text-brand-green mt-1">
                    Billed annually ({formatPrice(tier.annualPrice * 12)}/year)
                  </p>
                )}
              </div>

              <Button
                variant={tier.highlighted ? 'gold' : 'secondary'}
                className="w-full mb-6"
                showArrow
                href="#contact"
              >
                Start Free Trial
              </Button>

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-brand-green mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-8 text-sm text-text-muted flex items-center justify-center gap-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <HelpCircle className="h-3.5 w-3.5" />
          Need a custom plan? <a href="#contact" className="text-brand-purple hover:underline">Contact our sales team</a>
        </motion.p>
      </div>
    </section>
  );
}