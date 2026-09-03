'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Phone, Calendar, Menu, X, Shield, ArrowRight, LogIn } from 'lucide-react';
import { BookMyChardhamLogo } from './BookMyChardhamLogo';
import { LoginModal } from './modals/LoginModal';

export const Navbar = ({ currentPage: propCurrentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const getPageIdFromPath = (path) => {
    if (!path || path === '/') return 'home';
    const clean = path.replace('/', '');
    return clean;
  };

  const activePage = propCurrentPage || getPageIdFromPath(pathname);

  const navItems = [
    { id: 'home', label: 'HOME', href: '/' },
    { id: 'chardham', label: 'CHARDHAM & KEDARNATH', href: '/char-dham-yatra-by-helicopter' },
    { id: 'flower-dropping', label: 'FLOWER DROPPING', href: '/helicopter-flower-dropping' },
    { id: 'charter', label: 'CHARTER SERVICES', href: '/private-helicopter-charter' },
    { id: 'about', label: 'ABOUT US', href: '/about' },
    { id: 'contact', label: 'CONTACT', href: '/contact' },
  ];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(item.id);
    } else {
      router.push(item.href);
    }
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#E6D5C1]/80 backdrop-blur-md border-b border-[#A67C52]/20 select-none transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-10 lg:px-12 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo */}
        <div className="min-w-0 flex-shrink-0">
          <BookMyChardhamLogo onClick={() => handleNavClick(navItems[0])} />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item)}
                className={`text-[11.5px] xl:text-[12.5px] font-bold tracking-[0.14em] uppercase transition-colors cursor-pointer relative py-1 ${
                  isActive
                    ? 'text-[#6B4E3D]'
                    : 'text-[#A67C52] hover:text-[#6B4E3D]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#A67C52]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Phone, Login, Book Now CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Phone Dispatch Link (Desktop) */}
          <a
            href="tel:+919355611996"
            className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#A67C52]/10 hover:bg-[#A67C52]/20 border border-[#A67C52]/30 transition-colors text-[#A67C52] hover:text-[#6B4E3D]"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <Phone className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-[12px] font-bold tracking-wider">
              +91 93556 11996
            </span>
          </a>

          {/* Login Button (Desktop) */}
          <button
            onClick={() => setLoginModalOpen(true)}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#A67C52] hover:text-[#6B4E3D] border border-[#A67C52]/30 hover:border-[#A67C52]/50 rounded-xs text-[11.5px] font-bold tracking-[0.14em] uppercase transition-all cursor-pointer"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>LOGIN</span>
          </button>

          {/* Primary Book Now CTA Button */}
          <button
            id="header-book-now-btn"
            onClick={() => handleNavClick({ id: 'booking', href: '/booking' })}
            className="flex items-center gap-2 bg-[#c8102e] hover:bg-red-700 active:scale-95 text-white px-3 sm:px-5 py-2 rounded-xs text-[10px] sm:text-[11.5px] font-bold tracking-[0.12em] uppercase transition-all shadow-md cursor-pointer border border-red-500/30"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK NOW</span>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-xs bg-[#A67C52]/10 hover:bg-[#A67C52]/20 border border-[#A67C52]/20 text-[#6B4E3D] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bg-black/95 backdrop-blur-xl border-b border-white/15 p-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`flex items-center justify-between p-3 rounded-xs text-left text-xs font-bold tracking-[0.16em] uppercase transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#181818] text-white border-l-2 border-[#c8102e]'
                      : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setLoginModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-xs text-xs font-bold tracking-wider text-neutral-200 transition-colors cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-[#A67C52]" />
                <span>LOGIN</span>
              </button>

              <a
                href="tel:+919355611996"
                className="flex items-center justify-center gap-2 p-3 bg-white/5 rounded-xs text-xs font-bold tracking-wider text-neutral-200"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call 24/7 Operations: +91 93556 11996</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-500 uppercase tracking-widest pt-2">
                <Shield className="w-3.5 h-3.5 text-red-500" />
                <span>Flown by DGCA NSOP-certified operators</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </header>
  );
};

