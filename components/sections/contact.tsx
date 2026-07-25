'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  User,
  Mail,
  Building2,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0, 'Bot detected'), // hidden field
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  'AI Chatbots',
  'AI Voice Agents',
  'WhatsApp Automation',
  'CRM Automation',
  'Workflow Automation',
  'AI Analytics',
  'Custom AI Solution',
  'Other',
];

export function ContactSection() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      honeypot: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send');

      // Backup to localStorage
      const existing = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      existing.push({ ...data, timestamp: new Date().toISOString() });
      localStorage.setItem('contactSubmissions', JSON.stringify(existing));

      setIsSuccess(true);
      toast.success('Message sent successfully! We\'ll respond within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof ContactFormData)[] = [];
    if (step === 1) fieldsToValidate = ['name', 'email'];
    if (step === 2) fieldsToValidate = ['company', 'phone', 'service'];
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  if (isSuccess) {
    return (
      <section id="contact" className="section-padding">
        <div className="container-max px-4 md:px-8 max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex h-20 w-20 rounded-full bg-brand-green/10 items-center justify-center mb-6"
          >
            <CheckCircle2 className="h-10 w-10 text-brand-green" />
          </motion.div>
          <h2 className="text-3xl font-display font-bold mb-4">Message Sent!</h2>
          <p className="text-text-secondary mb-6">
            Thank you for reaching out. Our team will review your inquiry and respond within 24 hours.
          </p>
          <Button variant="gold" onClick={() => { setIsSuccess(false); setStep(1); }}>
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent pointer-events-none" />
      
      <div className="container-max px-4 md:px-8 max-w-2xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Let&apos;s <span className="gradient-text">Grow Together</span>
          </h2>
          <p className="mt-4 text-text-secondary">
            Tell us about your business goals, and we&apos;ll show you how AI can help.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  'h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors',
                  step >= s
                    ? 'bg-brand-purple text-white'
                    : 'bg-white/5 text-text-muted'
                )}
              >
                {step > s ? <CheckCircle2 className="h-4 w-4" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={cn(
                    'h-0.5 w-8 md:w-16 transition-colors',
                    step > s ? 'bg-brand-purple' : 'bg-white/10'
                  )}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-3xl p-6 md:p-8">
          {/* Honeypot - hidden from users */}
          <input
            type="text"
            {...register('honeypot')}
            className="absolute opacity-0 top-0 left-0 h-0 w-0"
            tabIndex={-1}
            autoComplete="off"
          />

          <AnimatePresence mode="wait">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4">Tell us about yourself</h3>
                
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                    <input
                      {...register('name')}
                      className={cn(
                        'w-full h-12 pl-10 pr-4 rounded-xl glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple/50 transition-colors',
                        errors.name && 'border-red-500/50'
                      )}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                    <input
                      {...register('email')}
                      type="email"
                      className={cn(
                        'w-full h-12 pl-10 pr-4 rounded-xl glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple/50 transition-colors',
                        errors.email && 'border-red-500/50'
                      )}
                      placeholder="john@company.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>

                <Button
                  type="button"
                  variant="primary"
                  className="w-full"
                  showArrow
                  onClick={nextStep}
                >
                  Next Step
                </Button>
              </motion.div>
            )}

            {/* Step 2: Company & Service */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4">About your business</h3>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                    <input
                      {...register('company')}
                      className="w-full h-12 pl-10 pr-4 rounded-xl glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple/50 transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted" />
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full h-12 pl-10 pr-4 rounded-xl glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple/50 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Service Interested In *
                  </label>
                  <select
                    {...register('service')}
                    className={cn(
                      'w-full h-12 px-4 rounded-xl glass text-text-primary focus:outline-none focus:border-brand-purple/50 transition-colors appearance-none cursor-pointer',
                      errors.service && 'border-red-500/50'
                    )}
                  >
                    <option value="" className="bg-surface-base">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-surface-base">
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="secondary" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button type="button" variant="primary" className="flex-1" showArrow onClick={nextStep}>
                    Next Step
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Message */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold mb-4">How can we help?</h3>

                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-1.5">
                    Your Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-text-muted" />
                    <textarea
                      {...register('message')}
                      rows={5}
                      className={cn(
                        'w-full pl-10 pr-4 py-3 rounded-xl glass text-text-primary placeholder:text-text-muted focus:outline-none focus:border-brand-purple/50 transition-colors resize-none',
                        errors.message && 'border-red-500/50'
                      )}
                      placeholder="Tell us about your business challenges and goals..."
                    />
                  </div>
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex gap-3">
                  <Button type="button" variant="secondary" onClick={prevStep}>
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="gold"
                    className="flex-1"
                    showArrow
                    isLoading={isSubmitting}
                  >
                    Send Message
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}