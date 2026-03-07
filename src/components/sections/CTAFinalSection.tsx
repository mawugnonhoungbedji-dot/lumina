'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';
import { Button } from '../Button';
import { CONTACT_EMAIL } from '../../lib/contact';

export function CTAFinalSection() {
    const { t } = useTranslation();

    return (
        <section className="py-24 md:py-32 px-4 md:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <FadeIn className="bg-card border border-border rounded-apple-xl p-8 md:p-16 lg:p-28 text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-ink/5 rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000" />
                        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-ink/5 rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-5 block">{t('cta_final.eyebrow')}</span>
                    <h2 className="text-[36px] lg:text-[72px] font-black text-ink tracking-[-0.03em] mb-4.5 font-display leading-none whitespace-pre-line">
                        {t('cta_final.title')}
                    </h2>
                    <p className="text-ink/60 max-w-xl mx-auto text-[14px] lg:text-[17px] mb-11 font-medium">{t('cta_final.subtitle')}</p>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <Link href="/contact">
                            <Button size="lg" className="px-10 group" aria-label={t('cta_final.btn_primary')}>
                                {t('cta_final.btn_primary')}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/projets">
                            <Button variant="glass" size="lg" className="px-10 group" aria-label={t('cta_final.btn_secondary')}>
                                {t('cta_final.btn_secondary')}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <div className="inline-flex items-center gap-2 text-sm font-bold text-ink/40 hover:text-ink transition-colors group cursor-pointer">
                            <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                            <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-8">{CONTACT_EMAIL}</a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
