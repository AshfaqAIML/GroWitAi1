'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding">
      <div className="container-max px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Active Testimonial */}
          <motion.div
            key={activeIndex}
            className="glass-card rounded-3xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Quote className="h-10 w-10 text-brand-purple/30 mx-auto mb-6" />

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 italic">
              &ldquo;{TESTIMONIALS[activeIndex].quote}&rdquo;
            </p>

            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>

            <div>
              <p className="font-semibold">{TESTIMONIALS[activeIndex].name}</p>
              <p className="text-sm text-text-muted">
                {TESTIMONIALS[activeIndex].role}, {TESTIMONIALS[activeIndex].company}
              </p>
            </div>

            <div className="mt-4 inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium">
              {TESTIMONIALS[activeIndex].result}
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === activeIndex
                    ? 'w-8 bg-brand-purple'
                    : 'w-2 bg-white/10 hover:bg-white/20'
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}