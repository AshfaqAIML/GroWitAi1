'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';

interface Saving {
  label: string;
  value: string;
}

interface SolutionROIProps {
  title: string;
  description: string;
  savings: Saving[];
}

export function SolutionROI({ title, description, savings }: SolutionROIProps) {
  return (
    <section className="section-padding">
      <div className="container-max px-4 md:px-8 max-w-4xl mx-auto">
        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-6">
            <TrendingUp className="h-4 w-4" />
            ROI Analysis
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
          <p className="text-text-secondary mb-8">{description}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {savings.map((saving) => (
              <div key={saving.label} className="glass rounded-2xl p-6">
                <div className="text-2xl font-bold gradient-text mb-1">
                  <AnimatedCounter value={saving.value} />
                </div>
                <p className="text-sm text-text-muted">{saving.label}</p>
              </div>
            ))}
          </div>

          <Button variant="gold" size="lg" showArrow href="#contact">
            Get Your Personalized ROI Report
          </Button>
        </motion.div>
      </div>
    </section>
  );
}