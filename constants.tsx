import * as React from 'react';
import {
  Shield,
  Target,
  Palette,
  Briefcase,
  Layout,
  PenTool,
  CheckCircle,
  Lightbulb,
  Maximize,
  Home,
  RefreshCw,
  Compass,
  Waves
} from 'lucide-react';
import { SectionId, NavItem, ColorInfo } from './types';

export const BRAND_COLORS: (ColorInfo & { pantone?: string, cmyk?: string, rgb?: string })[] = [
  // PRIMARY PALETTE
  {
    name: 'ONE SQUARE METER Gold',
    hex: '#FEC12C',
    type: 'primary',
    description: 'Our primary signature hue, #FEC12C, captures the brilliant essence of the "Gold Standard" in luxury real estate. This warm, radiant gold inspires optimism, ambition, and the energy of a rising legacy.'
  },
  {
    name: 'ONE SQUARE METER Navy',
    hex: '#325074',
    type: 'primary',
    description: 'The foundation of our identity, #325074, communicates absolute authority, architectural stability, and institutional trust.'
  },
  {
    name: 'Gold Light',
    hex: '#FED872',
    type: 'primary',
    description: 'A lighter tint of our signature gold, perfect for highlights and subtle background applications.'
  },
  {
    name: 'Gold Dark',
    hex: '#E8A500',
    type: 'primary',
    description: 'A deeper shade of our primary gold, ideal for creating depth and richness.'
  },
  {
    name: 'Navy Light',
    hex: '#4A6B91',
    type: 'primary',
    description: 'A softer variation of our navy, perfect for secondary text and borders.'
  },
  {
    name: 'Navy Dark',
    hex: '#1E3145',
    type: 'primary',
    description: 'A deeper navy shade for maximum contrast and foundation elements.'
  },
  // SECONDARY PALETTE
  {
    name: 'True White',
    hex: '#FFFFFF',
    type: 'secondary',
    description: 'A vital neutral representing pure clarity and modern architectural canvas.'
  },
  {
    name: 'Warm White',
    hex: '#FFFBf5',
    type: 'secondary',
    description: 'A subtle warm white that complements our gold palette for premium backgrounds.'
  },
  {
    name: 'Slate Gray',
    hex: '#475569',
    type: 'secondary',
    description: 'A sophisticated neutral that bridges bold heritage and contemporary innovation.'
  },
  {
    name: 'Light Gray',
    hex: '#E2E8F0',
    type: 'secondary',
    description: 'A subtle gray for borders, dividers, and background elements.'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { id: SectionId.HOME, label: '00 Home', icon: <Compass className="w-5 h-5" /> },
  { id: SectionId.STRATEGY, label: '01 Strategy', icon: <Target className="w-5 h-5" /> },
  { id: SectionId.IDENTITY, label: '02 Our Brand', icon: <Shield className="w-5 h-5" /> },
  { id: SectionId.SIGNATURE, label: '03 Brand Signature', icon: <Palette className="w-5 h-5" /> },
  { id: SectionId.TOOLKIT, label: '04 Brand Toolkit', icon: <PenTool className="w-5 h-5" /> },
  { id: SectionId.OFFERINGS, label: '05 Our Offerings', icon: <Home className="w-5 h-5" /> },
  { id: SectionId.STATIONERY, label: '06 Stationery', icon: <Briefcase className="w-5 h-5" /> },
  { id: SectionId.APPLICATIONS, label: '07 Applications', icon: <Layout className="w-5 h-5" /> },
  { id: SectionId.EXPERIENTIAL, label: '08 Experiential', icon: <Waves className="w-5 h-5" /> },
  { id: SectionId.EVOLUTION, label: '09 Evolution', icon: <RefreshCw className="w-5 h-5" /> }
];

export const BRAND_PILLARS = [
  {
    title: 'Innovative Design',
    desc: 'Luxury begins with vision. We create spaces that combine timeless elegance with cutting-edge functionality.',
    icon: <Lightbulb className="w-6 h-6 text-[#FEC12C]" />
  },
  {
    title: 'Ethical Excellence',
    desc: 'Doing luxury right. We are committed to integrity, transparency, and responsible development.',
    icon: <CheckCircle className="w-6 h-6 text-[#FEC12C]" />
  },
  {
    title: 'Smart Investment',
    desc: 'Legacy meets value. Our properties are future-proof investments built for sustained growth.',
    icon: <Maximize className="w-6 h-6 text-[#FEC12C]" />
  },
  {
    title: 'Personal Empowerment',
    desc: 'We craft spaces that recognize how far our clients have come, reflecting their ambition and lifestyle.',
    icon: <Target className="w-6 h-6 text-[#FEC12C]" />
  }
];

export const ARCHETYPES = [
  {
    role: 'Primary',
    name: 'The Hero',
    desc: 'The master builder of legacy. Defined by decisive action, strength, and the architectural heritage of Dantata & Sawoe.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    role: 'Secondary',
    name: 'The Magician',
    desc: 'The orchestrator of transformation. They turn cold structural vision into warm, lived luxury experiences.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
  }
];