'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MobileNav } from './mobile-nav';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'glass shadow-lg shadow-black/5'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <nav className="container-max flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-brand-purple to-brand-deep-purple flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent" />
              <span className="relative text-white font-bold text-lg">G</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              GroWith<span className="text-brand-purple">AI</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          // Desktop Actions
<div className="hidden lg:flex items-center gap-3">
  <ThemeToggle />
  <Button variant="secondary" size="sm" href="#contact">
    Contact Sales
  </Button>
  <Button variant="gold" size="sm" showArrow href="#demo">
    Book Demo
  </Button>
</div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="h-9 w-9 rounded-lg glass flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  );
}