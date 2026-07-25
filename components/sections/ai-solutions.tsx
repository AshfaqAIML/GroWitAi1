'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Phone, Headset, TrendingUp, MessageCircle, Database, Workflow, BarChart3, type LucideIcon } from 'lucide-react';
import { SOLUTIONS } from '@/lib/constants';
import { getStaggerDelay } from '@/lib/utils';

const ICON_MAP: Record<string, LucideIcon> = {
  MessageSquare,
  Phone,
  Headset,
  TrendingUp,
  MessageCircle,
  Database,
  Workflow,
  BarChart3,
};

export function AISolutions() {
  return (
    <section id="solutions" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-max px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            AI Solutions That Drive{' '}
            <span className="gradient-text">Real Business Growth</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Not just technology. Measurable business outcomes engineered for your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOLUTIONS.map((solution, index) => {
            const IconComponent = ICON_MAP[solution.icon];
            return (
              <motion.div
                key={solution.id}
                className="group glass-card rounded-2xl p-6 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getStaggerDelay(index, 0.08), duration: 0.5 }}
              >
                <div className="h-12 w-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-brand-purple" />
                </div>

                <h3 className="font-semibold text-lg mb-2 group-hover:text-brand-purple transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-text-secondary mb-3 flex-grow">
                  {solution.description}
                </p>

                <div className="text-xs font-medium text-brand-green bg-brand-green/5 rounded-lg px-3 py-2 mb-4">
                  {solution.outcome}
                </div>

                <Link
                  href={solution.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-purple hover:text-brand-gold transition-colors"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}