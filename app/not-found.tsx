import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-deep px-4">
      <div className="text-center">
        <div className="text-8xl font-display font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-semibold mb-2">Page Not Found</h1>
        <p className="text-text-muted mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button variant="gold" size="lg" href="/" icon={ArrowLeft}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}