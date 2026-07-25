'use client';

import { motion } from 'framer-motion';
import { TRUSTED_BY } from '@/lib/constants';
import { Building2, GraduationCap, Heart, Scale, ShoppingBag, Cpu, Home, BookOpen } from 'lucide-react';

const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Education: GraduationCap,
  Hospitality: Building2,
  Healthcare: Heart,
  Legal: Scale,
  Retail: ShoppingBag,
  Technology: Cpu,
  'Real Estate': Home,
};

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5">
      <div className="container-max px-4 md:px-8">
        <motion.p
          className="text-center text-sm text-text-muted mb-8 tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trusted by Industry Leaders Across Sectors
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center justify-items-center">
          {TRUSTED_BY.map((company, index) => {
            const Icon = industryIcons[company.industry] || Building2;
            return (
              <motion.div
                key={company.name}
                className="flex flex-col items-center gap-2 text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-12 w-12 rounded-xl glass flex items-center justify-center group-hover:border-brand-purple/30 transition-colors">
                  <Icon className="h-5 w-5 text-text-muted group-hover:text-brand-purple transition-colors" />
                </div>
                <div>
                  <p className="text-xs font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                    {company.name}
                  </p>
                  <p className="text-[10px] text-text-muted">{company.industry}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}