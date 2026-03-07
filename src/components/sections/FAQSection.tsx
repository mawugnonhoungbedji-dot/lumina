'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-border rounded-apple-lg overflow-hidden transition-all duration-300 bg-bg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-sec-b/50 transition-colors"
            >
                <h3 className="font-bold text-ink text-left">{question}</h3>
                <ChevronDown className={`w-5 h-5 text-ink/40 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="overflow-hidden"
            >
                <div className="px-8 pb-6 text-ink/60 leading-relaxed text-sm">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
};

export function FAQSection() {
    const { t } = useTranslation();

    return (
        <section className="py-40 px-6 lg:px-12 bg-sec-b transition-colors duration-300 relative overflow-hidden">
            <div className="max-w-3xl mx-auto relative z-10">
                <FadeIn>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ink/30 mb-8 block text-center">{t('faq.eyebrow')}</span>
                    <h2 className="h2 mb-20 text-center whitespace-pre-line">{t('faq.title')}</h2>
                    <div className="space-y-4">
                        {(t('faq.items', { returnObjects: true }) as any[]).map((item: any, i: number) => (
                            <FAQItem key={i} question={item.q} answer={item.a} />
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
