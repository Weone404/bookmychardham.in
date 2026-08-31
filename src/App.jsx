import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { BackgroundVideo } from './components/BackgroundVideo.jsx';
import { HomePage } from './components/pages/HomePage.jsx';
import { ChardhamPage } from './components/pages/ChardhamPage.jsx';
import { FlowerDroppingPage } from './components/pages/FlowerDroppingPage.jsx';
import { CharterPage } from './components/pages/CharterPage.jsx';
import { AboutPage } from './components/pages/AboutPage.jsx';
import { BookingPage } from './components/pages/BookingPage.jsx';
import { ContactPage } from './components/pages/ContactPage.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('kedarnath-sameday');
  const [selectedPackageIdForBooking, setSelectedPackageIdForBooking] = useState(undefined);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForBooking = (serviceType, packageId) => {
    setSelectedServiceForBooking(serviceType);
    setSelectedPackageIdForBooking(packageId);
  };

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen text-[#6B4E3D] flex flex-col justify-between relative overflow-x-hidden font-sans bg-[#F3E9D0]">
      {/* Background Video (Present on Homepage Hero) */}
      {currentPage === 'home' && (
        <BackgroundVideo
          initialVideoUrl="https://console.cloudinary.com/app/c-01761eb9eda93aa675327b3650493b/assets/media_library/asset/9667cb3da5508ae4ca18bc6cfb2c1805/video"
          posterUrl="/airplane-sunset-bg.jpg"
        />
      )}

      {/* Sticky Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area Routing */}
      <main className="flex-1 w-full relative z-10">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectServiceForBooking={handleSelectServiceForBooking}
          />
        )}

        {currentPage === 'chardham' && (
          <ChardhamPage
            onNavigate={handleNavigate}
            onSelectServiceForBooking={handleSelectServiceForBooking}
          />
        )}

        {currentPage === 'flower-dropping' && (
          <FlowerDroppingPage
            onNavigate={handleNavigate}
            onSelectServiceForBooking={handleSelectServiceForBooking}
          />
        )}

        {currentPage === 'charter' && (
          <CharterPage
            onNavigate={handleNavigate}
            onSelectServiceForBooking={handleSelectServiceForBooking}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'booking' && (
          <BookingPage
            initialServiceType={selectedServiceForBooking}
            initialPackageId={selectedPackageIdForBooking}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
