'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/lib/constants';

export function TechEcosystem() {
  return (
    <section className="section-padding">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Powered by the{' '}
            <span className="gradient-text">World&apos;s Best AI</span> Technology
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            We select the right technology for your specific needs — not the other way around.
          </p>
        </motion.div>

        <div className="space-y-8">
          {(Object.entries(TECH_STACK) as unknown as [string, string[]][]).map(([category, technologies], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15 }}
            >
              <p className="text-xs uppercase tracking-widest text-text-muted mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-xl glass text-sm text-text-secondary hover:text-text-primary hover:border-brand-purple/30 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}