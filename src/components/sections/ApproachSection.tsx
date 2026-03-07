'use client';

import React from 'react';
import { Layout, Search, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';

export function ApproachSection() {
    const { t } = useTranslation();
    const approachIcons = [Layout, Search, Users];

    return (
        <section id="services" className="py-40 px-6 lg:px-12 bg-sec-b transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <FadeIn>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ink/30 mb-8 block text-center lg:text-left">{t('approach.eyebrow')}</span>
                    <h2 className="h2 mb-20 whitespace-pre-line text-center lg:text-left">{t('approach.title')}</h2>
                    <p className="lead mb-20 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">{t('approach.subtitle')}</p>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(t('approach.cards', { returnObjects: true }) as any[]).map((sol, i) => {
                        const Icon = approachIcons[i];
                        return (
                            <FadeIn key={i} delay={i * 0.1} className="mcard group bg-bg/50 backdrop-blur-sm flex flex-col items-center lg:items-start text-center lg:text-left">
                                <div className={`w-16 h-16 rounded-2xl ${['bg-blue-500/10 text-blue-500', 'bg-emerald-500/10 text-emerald-500', 'bg-orange-500/10 text-orange-500'][i]} flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                                    <Icon strokeWidth={1.5} className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-5 font-display leading-tight">{sol.title}</h3>
                                <p className="text-ink/60 text-[15px] leading-relaxed mb-8">{sol.desc}</p>
                                <div className="h-px w-12 bg-border group-hover:scale-x-[8.33] origin-left transition-transform duration-700" />
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
