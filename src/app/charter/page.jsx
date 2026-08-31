'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { CharterPage } from '../../components/pages/CharterPage';

export default function Charter() {
  const router = useRouter();

  const handleNavigate = (page) => {
    const route = page === 'home' ? '/' : `/${page}`;
    router.push(route);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceType, packageId) => {
    const params = new URLSearchParams();
    if (serviceType) params.set('service', serviceType);
    if (packageId) params.set('package', packageId);
    router.push(`/booking?${params.toString()}`);
  };

  return (
    <CharterPage
      onNavigate={handleNavigate}
      onSelectServiceForBooking={handleSelectServiceForBooking}
    />
  );
}
