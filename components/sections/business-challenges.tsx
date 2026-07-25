'use client';

import { motion } from 'framer-motion';
import { CHALLENGES } from '@/lib/constants';
import { cn, getStaggerDelay } from '@/lib/utils';
import {
  TrendingDown,
  Repeat,
  DollarSign,
  Frown,
  Clock,
  UserX,
  GitBranch,
  Ban,
  type LucideIcon,
} from 'lucide-react';
import { useState } from 'react';

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingDown,
  Repeat,
  DollarSign,
  Frown,
  Clock,
  UserX,
  GitBranch,
  Ban,
};

export function BusinessChallenges() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="challenges" className="section-padding">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            What&apos;s Holding Your{' '}
            <span className="gradient-text">Business Back?</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Recognize these challenges? Every one of them can be solved with intelligent AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CHALLENGES.map((challenge, index) => {
            const IconComponent = ICON_MAP[challenge.icon];
            const isActive = activeId === challenge.id;

            return (
              <motion.button
                key={challenge.id}
                className={cn(
                  'glass-card rounded-2xl p-6 text-left transition-all duration-300 cursor-pointer',
                  isActive && 'border-brand-purple/40 shadow-lg shadow-brand-purple/5'
                )}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getStaggerDelay(index, 0.08), duration: 0.5 }}
                onClick={() => setActiveId(isActive ? null : challenge.id)}
                onMouseEnter={() => setActiveId(challenge.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className={cn(
                  'h-10 w-10 rounded-xl flex items-center justify-center mb-3 transition-colors',
                  isActive ? 'bg-brand-purple/20' : 'bg-white/5'
                )}>
                  <IconComponent className={cn(
                    'h-5 w-5 transition-colors',
                    isActive ? 'text-brand-purple' : 'text-text-muted'
                  )} />
                </div>
                <h3 className="font-semibold text-sm mb-1">{challenge.label}</h3>
                <p className={cn(
                  'text-xs transition-all duration-300 overflow-hidden',
                  isActive ? 'text-text-secondary max-h-20 opacity-100' : 'text-text-muted max-h-0 opacity-0'
                )}>
                  {challenge.description}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}