'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { BUSINESS_METRICS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-max px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Badge variant="purple" className="mb-6">
              India&apos;s Trusted AI Growth Partner
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.05] tracking-tight text-balance">
              Grow Your Business with{' '}
              <span className="gradient-text">Intelligent AI</span> Systems
            </h1>

            <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed">
              Smarter insights. Faster growth. Better business. We engineer AI solutions
              that increase revenue, automate operations, and transform customer experiences.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="xl" showArrow href="#demo">
                Book Free Consultation
              </Button>
              <Button variant="secondary" size="xl" href="#case-studies" icon={Play}>
                See Case Studies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-brand-green" />
                Enterprise Security
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-brand-gold" />
                2-Week Deployment
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                ))}
                <span className="ml-1">4.9/5</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Central AI Orb */}
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-purple/30 via-brand-purple/10 to-transparent animate-pulse-soft" />
              <div className="absolute inset-8 rounded-full glass flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold gradient-text">AI</div>
                  <div className="text-sm text-text-muted mt-2">Growth Engine</div>
                </div>
              </div>
              {/* Orbiting dots */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div
                  key={deg}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `rotate(${deg}deg) translateY(-150px)`,
                  }}
                >
                  <motion.div
                    className="h-3 w-3 rounded-full bg-brand-purple shadow-lg shadow-brand-purple/50"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
                  />
                </div>
              ))}
            </div>

            {/* Floating Metric Cards */}
            <motion.div
              className="absolute top-0 right-0 glass-card rounded-2xl px-4 py-3 shadow-lg"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-xs text-text-muted">Revenue Growth</div>
              <div className="text-xl font-bold text-brand-green">
                <AnimatedCounter value="40" suffix="%" />
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-0 glass-card rounded-2xl px-4 py-3 shadow-lg"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="text-xs text-text-muted">Cost Reduction</div>
              <div className="text-xl font-bold text-brand-gold">
                <AnimatedCounter value="35" suffix="%" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-text-muted animate-pulse-soft" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}