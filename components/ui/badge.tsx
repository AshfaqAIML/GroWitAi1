import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'purple' | 'gold' | 'green' | 'blue';
  className?: string;
}

const variants = {
  default: 'bg-white/5 text-text-secondary border-white/10',
  purple: 'bg-brand-purple/10 text-brand-purple border-brand-purple/20',
  gold: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
  green: 'bg-brand-green/10 text-brand-green border-brand-green/20',
  blue: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
      {children}
    </span>
  );
}