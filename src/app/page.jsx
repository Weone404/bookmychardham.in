'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { BackgroundVideo } from '../components/BackgroundVideo';
import { HomePage } from '../components/pages/HomePage';

export default function Home() {
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
    <div className="relative w-full">
      {/* Background Video for Hero */}
      <BackgroundVideo
        initialVideoUrl="/aircraft-videos.mp4"
        posterUrl="/airplane-sunset-bg.jpg"
      />

      <HomePage
        onNavigate={handleNavigate}
        onSelectServiceForBooking={handleSelectServiceForBooking}
      />
    </div>
  );
}
