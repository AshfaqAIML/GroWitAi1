'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggle = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle('light', !newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggle}
      className="relative h-9 w-9 rounded-lg glass flex items-center justify-center hover:border-brand-purple/30 transition-colors"
      whileTap={{ scale: 0.9 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4 }}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </motion.div>
    </motion.button>
  );
}