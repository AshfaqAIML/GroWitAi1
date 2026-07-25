'use client';

import { motion } from 'framer-motion';
import { CASE_STUDIES } from '@/lib/constants';
import { getStaggerDelay } from '@/lib/utils';
import { TrendingUp, Clock, Users, DollarSign } from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

export function SuccessStories() {
  return (
    <section id="case-studies" className="section-padding bg-white/[0.02]">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            <span className="gradient-text">Success Stories</span> That Speak
            for Themselves
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Real results from businesses that grew with AI.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              className="glass-card rounded-3xl p-6 md:p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: getStaggerDelay(index, 0.12), duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-brand-purple/10 flex items-center justify-center text-sm font-bold text-brand-purple">
                  {study.company.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{study.company}</p>
                  <p className="text-xs text-text-muted">{study.industry}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Challenge</p>
                  <p className="text-sm text-text-secondary">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-sm text-text-secondary">{study.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <div className="text-lg font-bold text-brand-purple">
                      <AnimatedCounter value={result.value} />
                    </div>
                    <p className="text-[10px] text-text-muted leading-tight mt-1">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}