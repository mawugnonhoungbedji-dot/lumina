'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';

export function ProblemSection() {
    const { t } = useTranslation();

    return (
        <section className="py-40 px-6 lg:px-12 bg-bg relative overflow-hidden">
            <div className="max-w-5xl mx-auto text-center relative z-10">
                <FadeIn>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ink/30 mb-8 block">{t('problem.eyebrow')}</span>
                    <h2 className="h2 mb-16 whitespace-pre-line">{t('problem.title')}</h2>
                    <div className="max-w-4xl mx-auto space-y-12 text-center lg:text-left">
                        <p className="text-xl lg:text-2xl text-ink/80 leading-relaxed font-medium transition-all duration-700">
                            {t('problem.p1')}
                        </p>
                        <div className="grid md:grid-cols-2 gap-12 pt-8 border-t border-border">
                            <p className="text-ink/60 leading-relaxed text-[16px]">{t('problem.p2')}</p>
                            <p className="text-ink/60 leading-relaxed text-[16px]">{t('problem.p3')}</p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
