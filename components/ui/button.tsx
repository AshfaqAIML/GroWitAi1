// components/ui/button.tsx
import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight, Loader2, type LucideIcon } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-purple text-white hover:bg-brand-deep-purple shadow-lg shadow-brand-purple/20 hover:shadow-brand-purple/30',
        secondary:
          'glass text-text-primary hover:border-brand-purple/30 hover:shadow-lg',
        gold: 'bg-brand-gold text-surface-deep hover:bg-brand-gold-highlight shadow-lg shadow-brand-gold/20',
        outline:
          'border border-white/10 text-text-primary hover:border-brand-purple/50 hover:text-brand-purple',
        ghost: 'text-text-secondary hover:text-text-primary hover:bg-white/5',
        link: 'text-brand-purple underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  showArrow?: boolean;
  href?: string;          // if provided, renders as a Next.js Link
  target?: string;
  rel?: string;
  icon?: LucideIcon;      // optional icon before the text
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      showArrow,
      href,
      target,
      rel,
      icon: Icon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Shared class and content
    const classNames = cn(buttonVariants({ variant, size, className }));
    const content = (
      <>
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {!isLoading && Icon && <Icon className="h-4 w-4" />}
        {children}
        {showArrow && !isLoading && (
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </>
    );

    // Render as Next.js Link if href exists
    if (href) {
      return (
        <Link
          href={href}
          target={target}
          rel={rel}
          className={classNames}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as any)}
        >
          {content}
        </Link>
      );
    }

    // Render as a regular button
    return (
      <button
        className={classNames}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || isLoading}
        type="button"
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };