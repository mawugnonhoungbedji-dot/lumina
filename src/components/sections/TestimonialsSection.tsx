'use client';

import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';

export function TestimonialsSection() {
    const { t } = useTranslation();

    return (
        <section className="py-40 px-6 lg:px-12 bg-sec-b transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <FadeIn className="text-center lg:text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ink/30 mb-8 block">{t('testimonials.eyebrow')}</span>
                    <h2 className="h2 mb-20 whitespace-pre-line">{t('testimonials.title')}</h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {(t('testimonials.items', { returnObjects: true }) as any[]).map((testimonial, i) => (
                        <FadeIn key={i} delay={i * 0.1} className="mcard bg-bg flex flex-col justify-between group hover:shadow-2xl transition-all duration-700 p-6 md:p-8 lg:p-11">
                            <div>
                                <Quote className="w-12 h-12 text-ink/5 mb-10 group-hover:text-ink/10 transition-colors duration-500" />
                                <p className="text-xl lg:text-2xl font-medium text-ink leading-relaxed mb-16 italic font-serif">"{testimonial.quote}"</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="relative">
                                    <Image
                                        src={["https://picsum.photos/seed/p1/100/100", "https://picsum.photos/seed/p2/100/100"][i]}
                                        alt={testimonial.author}
                                        className="w-14 h-14 rounded-full border border-border grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
                                        width={56}
                                        height={56}
                                        quality={80}
                                    />
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-bg flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-base font-bold text-ink">{testimonial.author}</div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-ink/30">{testimonial.role}</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
