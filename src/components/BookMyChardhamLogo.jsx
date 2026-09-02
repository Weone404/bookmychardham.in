import React from 'react';

export const BookMyChardhamLogo = ({
  className = '',
  showText = true,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 select-none cursor-pointer group ${className}`}
    >
      {/* Crimson Round Badge with Stylized Aerodynamic Star & Rotor */}
      <div className="relative w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#c8102e] flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 100 100"
          className="w-5 h-5 md:w-6 md:h-6 text-white fill-current"
        >
          {/* Aerodynamic 4-point Aviation Rotor Star & Wing Motif */}
          <path d="M 50 14 C 52 28, 62 38, 76 40 C 62 42, 52 52, 50 66 C 48 52, 38 42, 24 40 C 38 38, 48 28, 50 14 Z" />
          <path d="M 50 56 C 58 64, 72 74, 86 78 C 70 80, 56 76, 50 70 C 44 76, 30 80, 14 78 C 28 74, 42 64, 50 56 Z" opacity="0.9" />
          <circle cx="50" cy="40" r="4.5" className="fill-white" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-black tracking-[0.2em] text-[15px] md:text-[17px] text-white uppercase font-sans leading-none flex items-center gap-1.5">
            BOOKMYCHARDHAM
            <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] inline-block"></span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.24em] text-neutral-400 uppercase leading-tight mt-0.5">
            HELICOPTER CHARTERS
          </span>
        </div>
      )}
    </div>
  );
};
