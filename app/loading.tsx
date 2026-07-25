export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-deep">
      <div className="relative">
        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-deep-purple animate-pulse-soft" />
        <div className="absolute inset-0 rounded-2xl bg-brand-purple blur-xl opacity-30 animate-pulse-soft" />
      </div>
    </div>
  );
}