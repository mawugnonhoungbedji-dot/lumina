'use client';

import { motion, useScroll, useSpring } from 'motion/react';
import { Button } from './Button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fr';

  const toggleLang = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const savedTheme = localStorage.getItem('lumina-theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = prefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.setAttribute('data-theme', initialTheme);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('lumina-theme', newTheme);
  };

  const navLinks = [
    { name: t('nav.projets'), href: '/projets' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.studio'), href: '/studio' },
    { name: t('nav.insights'), href: '/insights' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-ink z-[100] origin-left"
        style={{ scaleX }}
      />
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className={`flex items-center justify-between transition-all duration-500 rounded-full px-4 md:px-6 py-2 ${isScrolled ? 'glass shadow-lg' : ''}`}>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold tracking-tighter font-display text-ink">Lumina.</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${pathname === link.href ? 'text-ink' : 'text-ink/60 hover:text-ink'}`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center bg-ink/5 border border-ink/10 rounded-full px-3 py-1.5 gap-1.5 text-[11px] font-black tracking-widest uppercase hover:bg-ink/10 transition-all"
                aria-label={currentLang === 'fr' ? 'Switch to English' : 'Passer en Français'}
              >
                <span className={currentLang === 'fr' ? 'text-ink' : 'text-ink/30'}>FR</span>
                <span className="text-ink/20">|</span>
                <span className={currentLang === 'en' ? 'text-ink' : 'text-ink/30'}>EN</span>
              </button>

              <div className="flex items-center bg-ink/5 border border-ink/10 rounded-full p-1">
                <button
                  onClick={() => toggleTheme('light')}
                  className={`p-1.5 rounded-full transition-all ${theme === 'light' ? 'bg-ink text-bg shadow-sm' : 'text-ink/40 hover:text-ink'}`}
                  aria-label={t('nav.light')}
                >
                  <Sun className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => toggleTheme('dark')}
                  className={`p-1.5 rounded-full transition-all ${theme === 'dark' ? 'bg-ink text-bg shadow-sm' : 'text-ink/40 hover:text-ink'}`}
                  aria-label={t('nav.dark')}
                >
                  <Moon className="w-3.5 h-3.5" />
                </button>
              </div>

              <Link href="/contact">
                <Button size="sm">{t('nav.cta')}</Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-3 md:hidden">
              {/* Language Toggle Mobile */}
              <button
                onClick={toggleLang}
                className="flex items-center bg-ink/5 border border-ink/10 rounded-full px-2.5 py-1.5 gap-1 text-[10px] font-black tracking-widest uppercase"
                aria-label={currentLang === 'fr' ? 'Switch to English' : 'Passer en Français'}
              >
                <span className={currentLang === 'fr' ? 'text-ink' : 'text-ink/30'}>FR</span>
                <span className="text-ink/20">|</span>
                <span className={currentLang === 'en' ? 'text-ink' : 'text-ink/30'}>EN</span>
              </button>
              <div className="flex items-center bg-ink/5 border border-ink/10 rounded-full p-1">
                <button
                  onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}
                  className="p-1.5 rounded-full text-ink"
                  aria-label={theme === 'light' ? t('nav.dark') : t('nav.light')}
                >
                  {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                </button>
              </div>
              <button
                className="p-2 text-ink"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? t('nav.closeMenu') || 'Close menu' : t('nav.openMenu') || 'Open menu'}
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-bg border-b border-ink/5 p-6 flex flex-col gap-4 md:hidden glass"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium ${pathname === link.href ? 'text-ink' : 'text-ink/60'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className="w-full">
              <Button className="w-full">{t('nav.cta')}</Button>
            </Link>
          </motion.div>
        )}
      </nav>
    </>
  );
};
