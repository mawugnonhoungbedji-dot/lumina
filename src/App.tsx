import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, useScroll, useSpring, useMotionValue } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { useTranslation } from 'react-i18next';

import { Home } from './pages/Home';

// Lazy load other pages
const Projets = lazy(() => import('./pages/Projets').then(module => ({ default: module.Projets })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const Studio = lazy(() => import('./pages/Studio').then(module => ({ default: module.Studio })));
const Insights = lazy(() => import('./pages/Insights').then(module => ({ default: module.Insights })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const CaseStudy = lazy(() => import('./pages/CaseStudy').then(module => ({ default: module.CaseStudy })));
const Article = lazy(() => import('./pages/Article').then(module => ({ default: module.Article })));

export default function App() {
  const { t } = useTranslation();
  const [isHovering, setIsHovering] = useState(false);
  // ... (rest of simple logic unchanged)

  // Motion values for smooth mouse movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-smooth and lazy springs for the outer ring
  const ringX = useSpring(mouseX, { stiffness: 60, damping: 25, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 60, damping: 25, mass: 0.5 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .mcard, .vitem, .sw, .ccard, .theme-toggle')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <Router>
      <div className={`min-h-screen selection:bg-ink selection:text-bg overflow-x-hidden bg-bg transition-colors duration-300 ${isHovering ? 'hov' : ''}`}>
        <motion.div
          className="cursor-dot"
          style={{ x: mouseX, y: mouseY }}
        />
        <motion.div
          className="cursor-ring"
          style={{ x: ringX, y: ringY }}
        />

        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-ink z-[200] origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        <Suspense fallback={<div className="h-screen bg-bg" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/projets/:slug" element={<CaseStudy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<Article />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        {/* Footer */}
        <footer className="py-12 px-6 lg:px-12 border-t border-border bg-bg transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Link to="/" className="flex items-center">
              <span className="text-lg font-bold tracking-tighter font-display text-ink">Lumina.</span>
            </Link>

            <p className="text-[12px] font-medium text-ink/40">
              {t('footer.copyright')}
            </p>

            <div className="flex gap-8 text-[12px] font-bold uppercase tracking-widest text-ink/40">
              <Link to="/contact" className="hover:text-ink transition-colors">{t('footer.legal')}</Link>
              <Link to="/contact" className="hover:text-ink transition-colors">{t('footer.privacy')}</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
