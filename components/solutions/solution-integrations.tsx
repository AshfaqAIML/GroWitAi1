'use client';

import { motion } from 'framer-motion';

interface Integration {
  name: string;
  category: string;
}

interface SolutionIntegrationsProps {
  title: string;
  subtitle: string;
  integrations: Integration[];
}

export function SolutionIntegrations({ title, subtitle, integrations }: SolutionIntegrationsProps) {
  const categories = [...new Set(integrations.map((i) => i.category))];

  return (
    <section className="section-padding bg-white/[0.02]">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">{title}</h2>
          <p className="mt-4 text-text-secondary">{subtitle}</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-text-muted mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {integrations
                  .filter((i) => i.category === category)
                  .map((integration) => (
                    <span
                      key={integration.name}
                      className="px-4 py-2 rounded-xl glass text-sm text-text-secondary hover:text-text-primary hover:border-brand-purple/30 transition-all cursor-default"
                    >
                      {integration.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}