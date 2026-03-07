'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';
import { Button } from '../Button';

export function CTAIntermediateSection() {
    const { t } = useTranslation();

    return (
        <section className="py-32 px-6 lg:px-12 bg-bg border-y border-border relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <FadeIn>
                    <h2 className="text-4xl lg:text-6xl font-black mb-12 font-display text-ink tracking-tighter leading-tight whitespace-pre-line">{t('cta_mid.title')}</h2>
                    <div className="flex justify-center">
                        <Link href="/contact">
                            <Button size="lg" className="px-8 lg:px-16 py-6 lg:py-8 text-lg lg:text-xl shadow-2xl shadow-ink/10 group" aria-label={t('cta_mid.btn')}>
                                {t('cta_mid.btn')}
                                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-10 text-[10px] font-black text-ink/20 uppercase tracking-[0.3em]">{t('cta_mid.disclaimer')}</p>
                </FadeIn>
            </div>
        </section>
    );
}
