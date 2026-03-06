'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectCardProps {
  title: string;
  sector: string;
  result: string;
  img: string;
  delay?: number;
  onClick?: () => void;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, sector, result, img, delay = 0, onClick, priority = false }) => {
  return (
    <motion.div
      initial={priority ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={priority ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={priority ? { duration: 0 } : { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      {/* The "Box" / Frame */}
      <div className="relative aspect-[16/11] rounded-[48px] overflow-hidden bg-card border border-border group-hover:shadow-3xl group-hover:shadow-ink/10 transition-all duration-700">
        <Image
          src={img}
          alt={title}
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
          priority={priority}
          width={800}
          height={550}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />

        {/* Bottom Right "Form" / Cut-out style */}
        <div className="absolute bottom-0 right-0 w-24 h-32 lg:w-28 lg:h-36 bg-bg transition-colors duration-300 rounded-tl-[32px] lg:rounded-tl-[48px] flex items-end justify-center pb-6 lg:pb-8 z-20">
          {/* Inverted corner radius effect */}
          <div className="absolute bottom-0 right-full w-8 h-8 lg:w-12 lg:h-12 bg-transparent pointer-events-none">
            <div className="w-full h-full rounded-br-[32px] lg:rounded-br-[48px] shadow-[20px_20px_0_0_var(--sec-a)]" />
          </div>
          <div className="absolute bottom-full right-0 w-8 h-8 lg:w-12 lg:h-12 bg-transparent pointer-events-none">
            <div className="w-full h-full rounded-br-[32px] lg:rounded-br-[48px] shadow-[20px_20px_0_0_var(--sec-a)]" />
          </div>

          <button
            onClick={onClick}
            className="w-12 h-12 lg:w-16 lg:h-16 bg-ink text-bg rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl relative z-30 cursor-pointer"
            aria-label={`Voir le projet ${title}`}
          >
            <ArrowUpRight size={24} className="lg:w-7 lg:h-7" strokeWidth={2.5} />
          </button>
        </div>

        {/* Overlay Info (Subtle gradient at bottom, shifted left to avoid cut-out) */}
        <div className="absolute bottom-0 left-0 right-24 lg:right-28 p-8 lg:p-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">{sector}</p>
              <h4 className="h2 text-white">{title}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* External Info (Visible by default) */}
      <div className="mt-10 flex justify-between items-center px-6">
        <div>
          <h4 className="h2 group-hover:translate-x-3 transition-transform duration-500">{title}</h4>
          <p className="text-ink/40 text-sm font-medium mt-1">{sector}</p>
        </div>
        <div className="h-px flex-grow mx-10 bg-border opacity-0 group-hover:opacity-100 transition-all duration-700 scale-x-0 group-hover:scale-x-100 origin-left" />
        <div className="text-right">
          <span className="text-[10px] font-black text-ink/20 uppercase tracking-[0.3em] group-hover:text-ink/60 transition-colors">Explorer</span>
        </div>
      </div>
    </motion.div>
  );
};
