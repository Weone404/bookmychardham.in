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
        initialVideoUrl="https://console.cloudinary.com/app/c-01761eb9eda93aa675327b3650493b/assets/media_library/asset/9667cb3da5508ae4ca18bc6cfb2c1805/video"
        posterUrl="/airplane-sunset-bg.jpg"
      />

      <HomePage
        onNavigate={handleNavigate}
        onSelectServiceForBooking={handleSelectServiceForBooking}
      />
    </div>
  );
}
