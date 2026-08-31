'use client';

import React, { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { BookingPage } from '../../components/pages/BookingPage';

function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const service = searchParams.get('service') || 'kedarnath-sameday';
  const pkg = searchParams.get('package') || undefined;

  const handleNavigate = (page) => {
    const route = page === 'home' ? '/' : `/${page}`;
    router.push(route);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <BookingPage
      initialServiceType={service}
      initialPackageId={pkg}
      onNavigate={handleNavigate}
    />
  );
}

export default function Booking() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center text-white bg-black">
          <div className="text-xs uppercase tracking-widest text-[#c8102e] animate-pulse">
            Loading BookMyChardham Reservation Desk...
          </div>
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
