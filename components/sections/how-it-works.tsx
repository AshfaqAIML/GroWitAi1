'use client';

import { motion } from 'framer-motion';
import { TIMELINE_STEPS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { PhoneCall, Search, Lightbulb, Code2, Rocket, RefreshCw, type LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  PhoneCall,
  Search,
  Lightbulb,
  Code2,
  Rocket,
  RefreshCw,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            From Discovery to{' '}
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            A proven six-step process to deploy AI that delivers results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple/50 via-brand-gold/30 to-brand-purple/50 md:-translate-x-px" />

          {TIMELINE_STEPS.map((step, index) => {
            const IconComponent = ICON_MAP[step.icon];
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step.step}
                className={cn(
                  'relative flex gap-6 mb-12 md:mb-16',
                  'md:flex-row',
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                )}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-deep-purple flex items-center justify-center shadow-lg shadow-brand-purple/20">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={cn(
                  'glass-card rounded-2xl p-6 flex-1 max-w-lg',
                  isLeft ? 'md:mr-auto' : 'md:ml-auto'
                )}>
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-5 w-5 text-brand-gold" />
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}