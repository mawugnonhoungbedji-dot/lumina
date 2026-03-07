'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowRight, Users, Clock, Award, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';
import { Button } from '../Button';

export function HeroSection() {
    const { t } = useTranslation();
    const statIcons = [Users, Clock, Award, MessageCircle];

    return (
        <section className="pt-32 md:pt-40 lg:pt-56 pb-20 px-4 md:px-6 lg:px-12 bg-bg relative min-h-[90vh] flex items-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ink/5 rounded-full blur-[120px] -mr-40 -mt-40" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ink/5 rounded-full blur-[100px] -ml-20 -mb-20" />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                className="absolute inset-0 z-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"
            />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <FadeIn>
                    <div className="flex justify-center lg:justify-start mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-[10px] font-bold tracking-[0.2em] uppercase text-ink/60 border border-border">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_12px_rgba(52,199,89,0.8)] animate-pulse" />
                            <span>{t('hero.eyebrow')}</span>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn instant>
                    <h1 className="display mb-10 whitespace-pre-line text-center lg:text-left">
                        {t('hero.title')}
                    </h1>
                </FadeIn>

                <FadeIn instant>
                    <p className="lead mb-14 max-w-[640px] text-balance text-center lg:text-left mx-auto lg:mx-0">
                        {t('hero.subtitle')}
                    </p>
                </FadeIn>

                <FadeIn instant>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                        <Link href="/contact/">
                            <Button size="lg" className="px-10 lg:px-12 py-7 text-lg shadow-2xl shadow-ink/10 group w-full lg:w-auto" aria-label={t('hero.cta_primary')}>
                                {t('hero.cta_primary')}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/projets/" className="w-full lg:w-auto">
                            <Button variant="glass" size="lg" className="group px-10 py-7 text-lg w-full" aria-label={t('hero.cta_secondary')}>
                                {t('hero.cta_secondary')}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                </FadeIn>

                <div className="mt-20 md:mt-28 lg:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-apple-lg overflow-hidden shadow-2xl shadow-ink/5">
                    {[
                        { label: t('hero.stats.satisfaction'), value: '100%' },
                        { label: t('hero.stats.delais'), value: '97%' },
                        { label: t('hero.stats.expertise'), value: '10+' },
                        { label: t('hero.stats.dispo'), value: '7j/7' },
                    ].map((stat, i) => {
                        const Icon = statIcons[i];
                        return (
                            <FadeIn key={i} delay={0.6 + i * 0.1} className="bg-bg p-8 lg:p-14 transition-colors hover:bg-sec-b/50 group flex flex-col items-center">
                                <div className="flex items-center gap-4 mb-4">
                                    <Icon className="w-6 h-6 text-ink/20 group-hover:text-ink/40 transition-colors" strokeWidth={1.5} />
                                    <h4 className="text-4xl lg:text-5xl font-black font-display text-ink tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-center">{stat.value}</h4>
                                </div>
                                <p className="text-[10px] lg:text-[12px] font-bold text-ink/30 uppercase tracking-[0.2em] text-center">{stat.label}</p>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
