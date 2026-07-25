'use client';

import { motion } from 'framer-motion';
import { Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-brand-purple/10 via-brand-gold/5 to-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-max px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-balance">
            Ready to{' '}
            <span className="gradient-text">Grow Smarter</span> with AI?
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto">
            Transform your business with intelligent AI systems built for measurable growth.
            Start with a free, no-obligation consultation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" showArrow href="#contact" icon={Calendar}>
              Book Free Consultation
            </Button>
            <Button variant="secondary" size="xl" href="mailto:hello@growithai.com" icon={Mail}>
              Contact Sales
            </Button>
          </div>

          <p className="mt-6 text-sm text-text-muted">
            No commitment required. Free 30-minute discovery call.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
