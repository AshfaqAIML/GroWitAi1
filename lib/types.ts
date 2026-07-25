export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Solution {
  id: string;
  icon: string;
  title: string;
  description: string;
  outcome: string;
  metric?: string;
  href: string;
}

export interface Industry {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  href: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  logo?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  quote: string;
  result: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Challenge {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface CompetitiveAdvantage {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  category: 'ai' | 'infrastructure' | 'framework' | 'database' | 'cloud';
  logo?: string;
}

export interface BusinessMetric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}