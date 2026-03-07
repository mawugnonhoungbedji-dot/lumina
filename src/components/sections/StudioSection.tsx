'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';
import { Button } from '../Button';

export function StudioSection() {
    const { t } = useTranslation();

    return (
        <section className="py-24 md:py-40 px-4 md:px-6 lg:px-12 bg-bg transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <FadeIn className="text-center lg:text-left">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ink/30 mb-8 block">{t('studio.eyebrow')}</span>
                        <h2 className="h2 mb-10 text-balance leading-tight tracking-tighter">{t('studio.title')}</h2>
                        <p className="text-xl lg:text-2xl text-ink leading-relaxed font-medium mb-10">{t('studio.p1')}</p>
                        <p className="text-ink/60 leading-relaxed text-[16px] mb-12">{t('studio.p2')}</p>
                        <div className="flex justify-center lg:justify-start">
                            <Link href="/studio">
                                <Button variant="glass" className="group" aria-label={t('studio.btn')}>
                                    {t('studio.btn')}
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2} className="relative group">
                        <div className="aspect-square rounded-apple-xl overflow-hidden border border-border bg-card flex items-center justify-center p-12 relative group shadow-2xl shadow-ink/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-ink/[0.02] to-transparent" />
                            <div className="relative z-10 flex flex-col items-center gap-4">
                                <span className="text-5xl lg:text-[80px] font-black font-display text-ink tracking-tighter select-none group-hover:scale-105 transition-transform duration-1000">Lumina.</span>
                                <div className="w-8 h-1 bg-ink/10 rounded-full group-hover:scale-x-2 transition-transform duration-700 origin-left" />
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 glass p-10 rounded-apple-lg border border-border max-w-[280px] shadow-2xl">
                            <div className="text-4xl font-black font-display text-ink mb-2">10+ ans</div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/30">{t('studio.badge')}</div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
