'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  Download,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export function ROICalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState(1000000); // ₹10L default
  const [employees, setEmployees] = useState(20);
  const [supportTickets, setSupportTickets] = useState(200);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const results = useMemo(() => {
    const revenueIncrease = monthlyRevenue * 0.15; // 15% revenue boost
    const costSavings = (employees * 5000) + (supportTickets * 50); // Automation savings
    const timeSaved = employees * 10; // Hours saved per month
    const roi = ((revenueIncrease + costSavings) / (costSavings * 0.3)) * 100; // ROI calculation

    return {
      revenueIncrease: Math.round(revenueIncrease),
      costSavings: Math.round(costSavings),
      timeSaved: Math.round(timeSaved),
      roi: Math.round(Math.min(roi, 500)), // Cap at 500% for realism
    };
  }, [monthlyRevenue, employees, supportTickets]);

  const handleDownloadReport = async () => {
    if (!email) {
      toast.error('Please enter your email to receive the report.');
      return;
    }
    
    setIsSending(true);
    
    // Simulate report generation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success('Report sent to your email! Check your inbox.');
    setShowEmailCapture(false);
    setEmail('');
    setIsSending(false);
  };

  const formatINR = (value: number) => {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    return `₹${value.toLocaleString('en-IN')}`;
  };

  return (
    <section id="roi-calculator" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 via-transparent to-brand-gold/5 pointer-events-none" />
      
      <div className="container-max px-4 md:px-8 max-w-5xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            Interactive ROI Calculator
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Calculate Your{' '}
            <span className="gradient-text">AI Growth Potential</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            Adjust the sliders to see how much AI can save and grow your business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div
            className="glass-card rounded-3xl p-6 md:p-8 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-brand-gold" />
              Your Business Metrics
            </h3>

            {/* Monthly Revenue Slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-text-secondary">Monthly Revenue</label>
                <span className="text-sm font-medium text-brand-purple">
                  {formatINR(monthlyRevenue)}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="100000"
                value={monthlyRevenue}
                onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-brand-purple
                  [&::-webkit-slider-thumb]:shadow-lg
                  [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-xs text-text-muted mt-1">
                <span>₹1L</span>
                <span>₹1Cr</span>
              </div>
            </div>

            {/* Employees Slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-text-secondary">Number of Employees</label>
                <span className="text-sm font-medium text-brand-purple">{employees}</span>
              </div>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-brand-purple
                  [&::-webkit-slider-thumb]:shadow-lg
                  [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>

            {/* Support Tickets Slider */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm text-text-secondary">Monthly Support Tickets</label>
                <span className="text-sm font-medium text-brand-purple">{supportTickets}</span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={supportTickets}
                onChange={(e) => setSupportTickets(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none bg-white/10 cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:h-5
                  [&::-webkit-slider-thumb]:w-5
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-brand-purple
                  [&::-webkit-slider-thumb]:shadow-lg
                  [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            className="glass-card rounded-3xl p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-brand-green" />
              Your Estimated Results
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="glass rounded-2xl p-4 text-center">
                <TrendingUp className="h-5 w-5 text-brand-green mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-green">
                  <AnimatedCounter
                    value={results.revenueIncrease >= 10000000 ? (results.revenueIncrease / 10000000).toString() : (results.revenueIncrease / 100000).toString()}
                    prefix="₹"
                    suffix={results.revenueIncrease >= 10000000 ? 'Cr' : 'L'}
                  />
                </div>
                <p className="text-xs text-text-muted mt-1">Revenue Increase /mo</p>
              </div>

              <div className="glass rounded-2xl p-4 text-center">
                <DollarSign className="h-5 w-5 text-brand-gold mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-gold">
                  <AnimatedCounter
                    value={results.costSavings >= 10000000 ? (results.costSavings / 10000000).toString() : (results.costSavings / 100000).toString()}
                    prefix="₹"
                    suffix={results.costSavings >= 10000000 ? 'Cr' : 'L'}
                  />
                </div>
                <p className="text-xs text-text-muted mt-1">Cost Savings /mo</p>
              </div>

              <div className="glass rounded-2xl p-4 text-center">
                <Clock className="h-5 w-5 text-brand-blue mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-blue">
                  <AnimatedCounter value={results.timeSaved.toString()} suffix="hrs" />
                </div>
                <p className="text-xs text-text-muted mt-1">Time Saved /mo</p>
              </div>

              <div className="glass rounded-2xl p-4 text-center">
                <TrendingUp className="h-5 w-5 text-brand-purple mx-auto mb-2" />
                <div className="text-2xl font-bold text-brand-purple">
                  <AnimatedCounter value={results.roi.toString()} suffix="%" />
                </div>
                <p className="text-xs text-text-muted mt-1">Estimated ROI</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!showEmailCapture ? (
                <motion.div key="cta">
                  <Button
                    variant="gold"
                    className="w-full"
                    showArrow
                    onClick={() => setShowEmailCapture(true)}
                  >
                    <Download className="h-4 w-4" />
                    Get Detailed Report
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="email"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3"
                >
                  <p className="text-sm text-text-secondary">
                    Enter your email to receive a detailed AI growth report:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 h-11 rounded-xl glass px-4 text-sm focus:outline-none focus:border-brand-purple/50"
                    />
                    <Button
                      variant="primary"
                      onClick={handleDownloadReport}
                      isLoading={isSending}
                    >
                      <Send className="h-4 w-4" />
                      Send
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}