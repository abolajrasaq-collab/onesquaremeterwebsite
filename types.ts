import * as React from 'react';

export enum SectionId {
  HOME = 'home',
  STRATEGY = 'strategy',
  IDENTITY = 'identity',
  SIGNATURE = 'signature',
  TOOLKIT = 'toolkit',
  OFFERINGS = 'offerings',
  STATIONERY = 'stationery',
  APPLICATIONS = 'applications',
  EXPERIENTIAL = 'experiential',
  EVOLUTION = 'evolution'
}

export interface ColorInfo {
  name: string;
  hex: string;
  type: 'primary' | 'secondary' | 'neutral';
  description: string;
}

export interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
}