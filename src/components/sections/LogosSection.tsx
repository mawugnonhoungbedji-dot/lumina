'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

export function LogosSection() {
    const { t } = useTranslation();

    return (
        <section className="py-16 border-y border-border bg-sec-b/20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-ink/20 mb-10 text-center">{t('logos.label')}</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    {['GLOT PRO', 'MindFluence', 'CortexFunnels', 'SOFTKIT'].map((logo) => (
                        <span key={logo} className="text-xl md:text-2xl lg:text-3xl font-black font-display tracking-tighter hover:text-ink transition-colors cursor-default">{logo}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
