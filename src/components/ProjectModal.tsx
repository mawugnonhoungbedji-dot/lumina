'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from 'next/navigation';
import { X, ArrowRight, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import { getWhatsAppLink } from '@/src/lib/contact';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    sector: string;
    result: string;
    img: string;
    description?: string;
    slug?: string;
  } | null;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (showControls) {
      timerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [showControls]);

  useEffect(() => {
    if (isOpen) {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
      setIsAutoScrolling(true);
      setImageLoaded(false);
      setShowControls(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && scrollContainerRef.current && isAutoScrolling && imageLoaded) {
      const container = scrollContainerRef.current;
      let animationFrameId: number;
      let startTime: number | null = null;

      // Calculate duration based on content height for consistent speed
      const scrollHeight = container.scrollHeight - container.clientHeight;
      if (scrollHeight <= 0) {
        setIsAutoScrolling(false);
        return;
      }

      const velocity = 50; // pixels per second
      const duration = (scrollHeight / velocity) * 1000;

      const animate = (timestamp: number) => {
        if (!isOpen || !isAutoScrolling) return;
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;

        if (progress < 1) {
          container.scrollTop = scrollHeight * progress;
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setIsAutoScrolling(false);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isOpen, isAutoScrolling, imageLoaded]);

  if (!project) return null;

  const handleManualScroll = () => {
    if (isAutoScrolling) setIsAutoScrolling(false);
  };

  const resetToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsAutoScrolling(false);
  };

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollTo({
        top: container.scrollHeight - container.clientHeight,
        behavior: 'smooth'
      });
    }
    setIsAutoScrolling(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 lg:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-bg rounded-[32px] lg:rounded-[48px] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-border/50"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute top-8 right-8 z-50 w-12 h-12 bg-bg/20 hover:bg-bg/40 backdrop-blur-md text-white rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>

            {/* Image Section Wrapper */}
            <div
              className="w-full lg:w-[55%] h-[40vh] lg:h-auto relative bg-card overflow-hidden group/container border-b lg:border-b-0 lg:border-r border-border/50"
              onClick={() => {
                setShowControls(!showControls);
                resetTimer();
              }}
              onMouseMove={resetTimer}
              onTouchMove={resetTimer}
            >
              {/* Scrollable Content */}
              <div
                ref={scrollContainerRef}
                onMouseDown={handleManualScroll}
                onWheel={handleManualScroll}
                onTouchStart={handleManualScroll}
                className="absolute inset-0 overflow-y-auto scrollbar-hide cursor-ns-resize"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  onLoad={() => setImageLoaded(true)}
                  className="w-full h-auto sm:grayscale hover:grayscale-0 transition-all duration-1000 origin-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Floating Controls - FIXED AT BOTTOM of section */}
              <AnimatePresence>
                {showControls && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 20, x: '-50%' }}
                    className="absolute bottom-10 left-1/2 flex items-center gap-2 pointer-events-auto z-[60]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-1 p-1 bg-ink/90 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          resetToTop();
                        }}
                        className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all group/btn"
                        title={t('portfolio.modal.scroll_top', 'Retour en haut')}
                      >
                        <ArrowRight className="w-5 h-5 -rotate-90 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsAutoScrolling(!isAutoScrolling);
                        }}
                        className="px-6 py-3 bg-bg text-ink rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 dark:hover:bg-emerald-500 hover:text-bg transition-colors flex items-center gap-3"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${isAutoScrolling ? 'bg-emerald-500 animate-pulse' : 'bg-ink/20'}`} />
                        {isAutoScrolling ? t('portfolio.modal.scroll_pause', 'Pause') : t('portfolio.modal.scroll_play', 'Lecture')}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToBottom();
                        }}
                        className="p-3 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-all group/btn"
                        title={t('portfolio.modal.scroll_bottom', 'Aller en bas')}
                      >
                        <ArrowRight className="w-5 h-5 rotate-90 group-hover/btn:translate-y-0.5 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Progress Bar - Pinned to top of section */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-ink/10 z-[60]">
                <motion.div
                  className="h-full bg-ink/40 origin-left"
                  style={{
                    scaleX: scrollContainerRef.current ? (scrollContainerRef.current.scrollTop / (scrollContainerRef.current.scrollHeight - scrollContainerRef.current.clientHeight)) : 0
                  }}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-[45%] p-8 lg:p-16 overflow-y-auto bg-bg relative">
              {/* Background Accents (matching Contact page) */}
              <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-ink/5 rounded-full blur-[80px] -mr-20 -mt-20" />
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-ink/5 rounded-full blur-[60px] -ml-10 -mb-10" />
              </div>

              <div className="relative z-10 scrollbar-hide">
                <div className="mb-12">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-ink/20 mb-6 block">
                    {t('portfolio.modal.eyebrow', 'Étude de cas')}
                  </span>
                  <h2 className="text-3xl lg:text-5xl font-bold font-display tracking-tight text-ink mb-6 leading-[1.1]">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-border" />
                    <p className="text-ink/40 text-[10px] font-black uppercase tracking-widest leading-none">{project.sector}</p>
                  </div>
                </div>

                <div className="space-y-10">
                  <div>
                    <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-ink/20 mb-4">
                      {t('portfolio.modal.challenge', 'Le Défi')}
                    </h4>
                    <p className="text-ink/60 leading-relaxed">
                      {project.description || `Accompagner ${project.title} dans une transition numérique majeure. L'objectif était de redéfinir les standards de leur secteur à travers une interface qui respire l'autorité et la précision.`}
                    </p>
                  </div>

                  <div className="p-8 lg:p-10 rounded-apple-xl bg-card/30 backdrop-blur-sm border border-border/50 relative overflow-hidden group/result">
                    <div className="absolute inset-0 bg-gradient-to-br from-ink/[0.02] to-transparent pointer-events-none" />
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/20 mb-4 relative z-10">
                      {t('portfolio.modal.result_label', 'Résultat Clé')}
                    </h4>
                    <div className="text-4xl lg:text-5xl font-bold font-display text-emerald-600 dark:text-emerald-400 relative z-10 tracking-tight">
                      {project.result}
                    </div>
                    <p className="text-ink/40 text-[10px] mt-4 font-black uppercase tracking-widest relative z-10">
                      {t('portfolio.modal.result_sub', 'Mesuré sur les 6 premiers mois post-lancement.')}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 pt-8">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group"
                      onClick={() => {
                        const msg = `Bonjour Lumina ! 👋 Je souhaite discuter du projet *${project.title}*.`;
                        window.open(getWhatsAppLink(msg), '_blank');
                      }}
                    >
                      {t('portfolio.modal.cta', 'Discuter de mon projet')}
                      <MessageCircle className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                    </Button>

                    {project.slug && (
                      <Button
                        variant="secondary"
                        size="lg"
                        className="w-full group"
                        onClick={() => {
                          onClose();
                          router.push(`/projets/${project.slug}`);
                        }}
                      >
                        {t('portfolio.modal.read_more', "Lire l'histoire complète")}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    )}

                    <Button variant="glass" size="lg" className="w-full group" onClick={onClose}>
                      {t('portfolio.modal.close', 'Fermer')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
