'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import * as Icons from 'lucide-react';

interface Metric {
  label: string;
  value: string;
}

interface SolutionHeroProps {
  icon: string;  // Now accepts string name
  title: string;
  subtitle: string;
  description: string;
  metrics: Metric[];
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

export function SolutionHero({
  icon,
  title,
  subtitle,
  description,
  metrics,
  primaryCTA,
  secondaryCTA,
}: SolutionHeroProps) {
  // Resolve icon from string name
  const IconComponent = (Icons as any)[icon] || Icons.Zap;

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-purple/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-gold/8 rounded-full blur-[100px]" />
      </div>

      <div className="container-max px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="purple" className="mb-6">
              <IconComponent className="h-3.5 w-3.5" />
              AI Solution
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight text-balance">
              {title}
            </h1>

            <p className="mt-4 text-xl text-brand-gold font-medium">{subtitle}</p>

            <p className="mt-4 text-lg text-text-secondary max-w-lg">{description}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" showArrow href={primaryCTA.href}>
                {primaryCTA.label}
              </Button>
              <Button variant="secondary" size="xl" href={secondaryCTA.href}>
                <Play className="h-4 w-4" />
                {secondaryCTA.label}
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-xl md:text-2xl font-bold gradient-text">
                    <AnimatedCounter value={metric.value} />
                  </div>
                  <p className="text-xs text-text-muted mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/10 glass flex items-center justify-center">
                <IconComponent className="h-32 w-32 text-brand-purple/30" />
              </div>
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-2xl bg-brand-gold/10 glass flex items-center justify-center animate-float">
                <span className="text-2xl font-bold text-brand-gold">+60%</span>
              </div>
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl bg-brand-green/10 glass flex items-center justify-center animate-float-delayed">
                <span className="text-lg font-bold text-brand-green">24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}