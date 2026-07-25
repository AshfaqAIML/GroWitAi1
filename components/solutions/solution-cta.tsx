'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SolutionCTAProps {
  title: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

export function SolutionCTA({ title, description, primaryCTA, secondaryCTA }: SolutionCTAProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-brand-gold/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[120px]" />

      <div className="container-max px-4 md:px-8 max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{title}</h2>
          <p className="text-text-secondary text-lg mb-8">{description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" showArrow href={primaryCTA.href} icon={Calendar}>
              {primaryCTA.label}
            </Button>
            <Button variant="secondary" size="xl" href={secondaryCTA.href} icon={Mail}>
              {secondaryCTA.label}
            </Button>
          </div>

          <p className="mt-4 text-sm text-text-muted">
            No commitment • Free 30-minute session • Tailored to your business
          </p>
        </motion.div>
      </div>
    </section>
  );
}