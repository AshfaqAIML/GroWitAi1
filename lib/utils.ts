import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-IN').format(num);
}

export function generateId(prefix: string = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substring(2, 9)}`;
}

export function getAnimationProps(
  delay: number = 0,
  duration: number = 0.6
) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration, delay, ease: [0.25, 0.1, 0.25, 1] },
  };
}

export function getStaggerDelay(index: number, baseDelay: number = 0.1): number {
  return baseDelay * index;
}