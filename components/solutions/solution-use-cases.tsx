'use client';

import { motion } from 'framer-motion';
import { getStaggerDelay } from '@/lib/utils';
import * as Icons from 'lucide-react';

interface UseCase {
  industry: string;
  icon: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
}

interface SolutionUseCasesProps {
  title: string;
  subtitle: string;
  useCases: UseCase[];
}

export function SolutionUseCases({ title, subtitle, useCases }: SolutionUseCasesProps) {
  return (
    <section className="section-padding">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">{title}</h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {useCases.map((useCase, index) => {
            const IconComponent = (Icons as any)[useCase.icon] || Icons.Building2;
            return (
              <motion.div
                key={useCase.industry}
                className="glass-card rounded-2xl p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getStaggerDelay(index, 0.1) }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-brand-purple" />
                  </div>
                  <h3 className="font-semibold text-lg">{useCase.industry}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Challenge</p>
                    <p className="text-sm text-text-secondary">{useCase.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wider mb-1">Solution</p>
                    <p className="text-sm text-text-secondary">{useCase.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {useCase.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <div className="text-lg font-bold text-brand-purple">{result.value}</div>
                      <p className="text-xs text-text-muted">{result.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}