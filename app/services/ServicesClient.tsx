'use client';

import React from 'react';
import { Button } from '@/src/components/Button';
import Link from 'next/link';
import { FadeIn } from '@/src/components/FadeIn';
import { useTranslation } from 'react-i18next';
import {
    Check,
    Search,
    Compass,
    PenTool,
    Code,
    Rocket,
    ArrowRight
} from 'lucide-react';

export function ServicesClient() {
    const { t } = useTranslation();
    const processIcons = [Search, Compass, PenTool, Code, Rocket];

    return (
        <div className="pt-40 pb-32 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 block">{t('services.eyebrow')}</span>
                    <h1 className="display mb-16 whitespace-pre-line text-left">
                        {t('services.title')}
                    </h1>
                </FadeIn>

                <div className="grid lg:grid-cols-3 gap-8">
                    {(t('services.cards', { returnObjects: true }) as any[]).map((service, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="mcard h-full flex flex-col justify-between group">
                                <div>
                                    <h3 className="text-2xl font-bold font-display text-ink mb-6">{service.title}</h3>
                                    <p className="text-ink/60 mb-8 leading-relaxed text-sm">{service.desc}</p>
                                    <ul className="space-y-4 mb-12">
                                        {service.features.map((f: string, j: number) => (
                                            <li key={j} className="flex items-start gap-3 text-sm font-medium text-ink/80">
                                                <Check className="w-4 h-4 text-ink flex-shrink-0 mt-0.5" strokeWidth={3} />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="/contact">
                                    <Button variant="glass" className="w-full group/btn" aria-label={service.title}>
                                        {t('services.cta_btn')}
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5}>
                    <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center p-12 lg:p-24 rounded-apple-xl bg-sec-b border border-border">
                        <div>
                            <h2 className="h2 mb-6">{t('services.process.title')}</h2>
                            <p className="text-ink/60 leading-relaxed">{t('services.process.subtitle')}</p>
                        </div>
                        <div className="space-y-10">
                            {(t('services.process.steps', { returnObjects: true }) as any[]).map((s, i) => {
                                const Icon = processIcons[i % processIcons.length];
                                return (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-xl bg-ink/5 flex items-center justify-center shrink-0 group-hover:bg-ink group-hover:text-bg transition-colors duration-500">
                                            <Icon className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3 mb-1">
                                                <span className="text-xs font-black font-display text-ink/20">{s.step}</span>
                                                <h4 className="font-bold text-ink">{s.title}</h4>
                                            </div>
                                            <p className="text-sm text-ink/40 leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
