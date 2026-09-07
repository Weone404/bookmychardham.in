import React from 'react';
import { motion } from 'framer-motion';

export const HeroTitle = () => {
  return (
    <div className="select-none mb-10 md:mb-14">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)]"
      >
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal tracking-[0.06em] text-white leading-tight uppercase">
          WHERE
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-[0.05em] text-white leading-tight mt-1 uppercase">
          DO YOU WANT TO
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] max-w-3xl font-black tracking-tight text-white leading-tight mt-2 uppercase font-sans">
          Explore Kedarnath &amp; Char Dham by Helicopter Charter
        </h1>
      </motion.div>
    </div>
  );
};
