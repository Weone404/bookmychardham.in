'use client';

import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Placeholder for actual authentication logic
      if (!email || !password) {
        setError('Please fill in all fields');
        setIsLoading(false);
        return;
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Here you would typically make an API call to authenticate
      console.log('Login attempt:', { email, password });
      setEmail('');
      setPassword('');
      onClose();
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#F3E9D0] w-full max-w-md mx-4 rounded-lg shadow-2xl border border-[#A67C52]/20">
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-[#A67C52]/20">
          <div className="flex items-center gap-3">
            <img
              src="/logo.webp"
              alt="BookMyChardham Logo"
              className="w-8 h-8 object-contain"
            />
            <h2 className="text-lg font-black text-[#6B4E3D] tracking-tight uppercase">
              Sign In
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#A67C52]/10 rounded-xs transition-colors text-[#6B4E3D]"
            aria-label="Close login modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-100 border border-red-300 rounded-xs text-sm text-red-700">
              {error}
            </div>
          )}

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#A67C52] uppercase tracking-wider mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A67C52]" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#A67C52]/30 rounded-xs text-[#6B4E3D] placeholder-[#A67C52]/50 focus:outline-none focus:border-[#A67C52] focus:ring-1 focus:ring-[#A67C52] transition-all text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-xs font-bold text-[#A67C52] uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A67C52]" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-[#A67C52]/30 rounded-xs text-[#6B4E3D] placeholder-[#A67C52]/50 focus:outline-none focus:border-[#A67C52] focus:ring-1 focus:ring-[#A67C52] transition-all text-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A67C52] hover:text-[#6B4E3D] transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-[#A67C52]/30 accent-[#A67C52]"
              />
              <span className="text-[#A67C52]">Remember me</span>
            </label>
            <a href="#" className="text-[#A67C52] hover:text-[#6B4E3D] font-bold uppercase tracking-wider">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-[#A67C52] hover:bg-[#8B6639] disabled:bg-[#A67C52]/50 text-white font-bold uppercase tracking-widest rounded-xs transition-all active:scale-95 text-sm"
          >
            {isLoading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>

          {/* Divider */}
          <div className="relative py-2">
            <div className="absolute inset-x-0 top-1/2 h-px bg-[#A67C52]/20" />
            <div className="relative flex justify-center">
              <span className="px-3 text-xs text-[#A67C52] bg-[#F3E9D0] uppercase font-bold tracking-wider">OR</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-xs text-[#6B4E3D]">
            Don't have an account?{' '}
            <a href="#" className="font-bold text-[#A67C52] hover:text-[#8B6639] uppercase tracking-wider">
              Sign Up
            </a>
          </p>
        </form>

        {/* Footer Info */}
        <div className="px-6 py-4 bg-[#E6D5C1] border-t border-[#A67C52]/20 rounded-b-lg">
          <p className="text-[10px] text-[#A67C52] uppercase tracking-widest text-center font-bold">
            🔒 Secure Login • DGCA Certified
          </p>
        </div>
      </div>
    </div>
  );
};
