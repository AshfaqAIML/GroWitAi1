'use client';

import { motion } from 'framer-motion';
import { getStaggerDelay } from '@/lib/utils';
import * as Icons from 'lucide-react';

interface Feature {
  icon: string;  // Now accepts string name
  title: string;
  description: string;
  benefit: string;
}

interface SolutionFeaturesProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export function SolutionFeatures({ title, subtitle, features }: SolutionFeaturesProps) {
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            // Resolve icon from string name
            const IconComponent = (Icons as any)[feature.icon] || Icons.Zap;
            
            return (
              <motion.div
                key={feature.title}
                className="glass-card rounded-2xl p-6 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getStaggerDelay(index, 0.08), duration: 0.5 }}
              >
                <div className="h-12 w-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4 group-hover:bg-brand-purple/20 transition-colors">
                  <IconComponent className="h-6 w-6 text-brand-purple" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-text-secondary mb-3">{feature.description}</p>
                <div className="text-xs font-medium text-brand-green bg-brand-green/5 rounded-lg px-3 py-2">
                  ✓ {feature.benefit}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}