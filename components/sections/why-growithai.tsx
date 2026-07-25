'use client';

import { motion } from 'framer-motion';
import { COMPETITIVE_ADVANTAGES } from '@/lib/constants';
import { getStaggerDelay } from '@/lib/utils';
import { Brain, Target, Zap, Settings2, Maximize2, LineChart, Handshake, Shield, type LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Brain,
  Target,
  Zap,
  Settings2,
  Maximize2,
  LineChart,
  Handshake,
  Shield,
};

export function WhyGroWithAI() {
  return (
    <section id="why-us" className="section-padding bg-white/[0.02]">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Why Businesses Choose{' '}
            <span className="gradient-text">GroWithAI</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            We&apos;re not an agency. We&apos;re your AI growth partner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMPETITIVE_ADVANTAGES.map((advantage, index) => {
            const IconComponent = ICON_MAP[advantage.icon];
            return (
              <motion.div
                key={advantage.id}
                className="glass-card rounded-2xl p-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getStaggerDelay(index, 0.06), duration: 0.5 }}
              >
                <div className="h-12 w-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-text-secondary">{advantage.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}