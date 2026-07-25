'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, UtensilsCrossed, HeartPulse, Briefcase, ShoppingCart, Building2, type LucideIcon } from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';
import { getStaggerDelay } from '@/lib/utils';

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  UtensilsCrossed,
  HeartPulse,
  Briefcase,
  ShoppingCart,
  Building2,
};

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-white/[0.01]">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            <span className="gradient-text">Industries</span> We Transform
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Purpose-built AI solutions for the unique challenges of your industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((industry, index) => {
            const IconComponent = ICON_MAP[industry.icon];
            return (
              <motion.div
                key={industry.id}
                className="group glass-card rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: getStaggerDelay(index, 0.08), duration: 0.5 }}
              >
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-7 w-7 text-brand-purple" />
                </div>

                <h3 className="font-semibold text-xl mb-2">{industry.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{industry.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {industry.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-text-muted border border-white/5"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                <Link
                  href={industry.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-purple hover:text-brand-gold transition-colors"
                >
                  Explore solutions
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="text-center mt-8 text-sm text-text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Don&apos;t see your industry?{' '}
          <Link href="#contact" className="text-brand-purple hover:underline">
            Contact us
          </Link>{' '}
          — we build custom solutions for any sector.
        </motion.p>
      </div>
    </section>
  );
}