'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { AboutPage } from '../../components/pages/AboutPage';

export default function About() {
  const router = useRouter();

  const handleNavigate = (page) => {
    const route = page === 'home' ? '/' : `/${page}`;
    router.push(route);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return <AboutPage onNavigate={handleNavigate} />;
}
