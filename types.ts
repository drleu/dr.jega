import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface DoctorProfile {
  name: string;
  title: string;
  cedula: string;
  university: string;
}

export type PageView = 'home' | 'privacy' | 'practice';

export interface NavigationProps {
  onNavigate: (page: PageView) => void;
}

export interface HeroProps {
  onNavigate: (page: PageView) => void;
}