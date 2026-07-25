import Link from 'next/link';
import { SITE_CONFIG, SOLUTIONS, INDUSTRIES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ArrowRight, Linkedin, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 px-4 md:px-8">
      <div className="container-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-purple to-brand-deep-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="font-display font-bold text-lg">
                GroWith<span className="text-brand-purple">AI</span>
              </span>
            </Link>
            <p className="text-sm text-text-muted max-w-sm mb-6">
              {SITE_CONFIG.tagline}. We engineer AI solutions that deliver measurable business growth.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-11 rounded-xl glass px-4 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple/50"
              />
              <Button variant="primary" size="md" showArrow>
                Subscribe
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-text-primary">Solutions</h4>
            <ul className="space-y-2.5">
              {SOLUTIONS.slice(0, 6).map((solution) => (
                <li key={solution.id}>
                  <Link
                    href={solution.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-text-primary">Industries</h4>
            <ul className="space-y-2.5">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id}>
                  <Link
                    href={industry.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-text-primary">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'About', href: '#about' },
                { label: 'Blog', href: '#blog' },
                { label: 'Careers', href: '#careers' },
                { label: 'Contact', href: '#contact' },
                { label: 'Privacy Policy', href: '#privacy' },
                { label: 'Terms of Service', href: '#terms' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href={SITE_CONFIG.social.linkedin} className="text-text-muted hover:text-brand-purple transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link href={SITE_CONFIG.social.twitter} className="text-text-muted hover:text-brand-purple transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href={SITE_CONFIG.social.youtube} className="text-text-muted hover:text-brand-purple transition-colors" aria-label="YouTube">
              <Youtube className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}