'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Step {
  step: number;
  title: string;
  description: string;
  duration: string;
}

interface SolutionHowItWorksProps {
  title: string;
  subtitle: string;
  steps: Step[];
}

export function SolutionHowItWorks({ title, subtitle, steps }: SolutionHowItWorksProps) {
  return (
    <section className="section-padding bg-white/[0.02]">
      <div className="container-max px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">{title}</h2>
          <p className="mt-4 text-text-secondary">{subtitle}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple/50 via-brand-gold/30 to-brand-purple/50" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative flex gap-6 mb-8 pl-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="relative z-10 flex-shrink-0">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-deep-purple flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-brand-purple/20">
                  {step.step}
                </div>
              </div>
              <div className="glass-card rounded-2xl p-5 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{step.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-brand-purple/10 text-brand-purple font-medium">
                    {step.duration}
                  </span>
                </div>
                <p className="text-sm text-text-secondary">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}