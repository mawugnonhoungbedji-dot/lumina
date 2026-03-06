'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Clock, User, Share2, ArrowRight } from 'lucide-react';
import { FadeIn } from '@/src/components/FadeIn';
import { Button } from '@/src/components/Button';
import Link from 'next/link';

export function ArticleClient() {
    const params = useParams();
    const slug = params?.slug as string;
    const { t } = useTranslation();
    const router = useRouter();

    const articles = t('insights_page.articles', { returnObjects: true }) as any[];
    const article = articles.find((a) => a.slug === slug);

    useEffect(() => {
        if (!article) {
            router.push('/insights');
        }
    }, [article, router]);

    if (!article) return null;

    return (
        <div className="pt-40 pb-32 px-6 lg:px-12 bg-bg transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <Link
                        href="/insights"
                        className="inline-flex items-center gap-2 text-ink/40 hover:text-ink transition-colors mb-12 group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">{t('portfolio.modal.close')}</span>
                    </Link>

                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40 px-3 py-1 rounded-full border border-border">
                            {article.category}
                        </span>
                        <span className="text-[10px] font-bold text-ink/20 uppercase tracking-widest">
                            {article.date}
                        </span>
                    </div>

                    <h1 className="display mb-12 text-left">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-8 mb-16 py-8 border-y border-border">
                        {article.readTime && (
                            <div className="flex items-center gap-2 text-ink/40">
                                <Clock className="w-4 h-4" />
                                <span className="text-[11px] font-bold uppercase tracking-wider">{article.readTime}</span>
                            </div>
                        )}
                        {article.author && (
                            <div className="flex items-center gap-2 text-ink/40">
                                <User className="w-4 h-4" />
                                <span className="text-[11px] font-bold uppercase tracking-wider">{article.author}</span>
                            </div>
                        )}
                        <button aria-label="Partager l'article" className="ml-auto text-ink/40 hover:text-ink transition-colors">
                            <Share2 className="w-4 h-4" />
                        </button>
                    </div>
                </FadeIn>

                {article.content ? (
                    <div className="space-y-16">
                        <FadeIn delay={0.2}>
                            <p className="text-xl lg:text-2xl text-ink/80 leading-relaxed font-medium whitespace-pre-line">
                                {article.content.intro}
                            </p>
                        </FadeIn>

                        <div className="space-y-24">
                            {article.content.sections.map((section: any, idx: number) => (
                                <FadeIn key={idx} delay={0.1 * idx}>
                                    <div className="group">
                                        <h2 className="h2 mb-8 group-hover:translate-x-2 transition-transform duration-500">
                                            {section.title}
                                        </h2>
                                        <p className="text-lg text-ink/60 leading-relaxed mb-10">{section.text}</p>
                                        {section.action && (
                                            <div className="p-8 lg:p-10 rounded-apple-xl bg-card border border-border relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-ink/10" />
                                                <p className="text-ink font-bold leading-relaxed italic">"{section.action}"</p>
                                            </div>
                                        )}
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.5}>
                            <div className="py-20 border-t border-border mt-20">
                                <p className="text-xl text-ink/40 leading-relaxed italic mb-20 text-center max-w-2xl mx-auto">
                                    {article.content.conclusion}
                                </p>
                                <div className="bg-card border border-border rounded-apple-xl p-12 lg:p-20 text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-[0.01] transition-opacity duration-700" />
                                    <h3 className="h2 mb-8">{t('portfolio.cta_similar')}</h3>
                                    <div className="flex justify-center">
                                        <Link href="/contact">
                                            <Button size="lg" className="px-12 group">
                                                {t('nav.cta')}
                                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                ) : (
                    <FadeIn delay={0.2}>
                        <div className="h-64 flex items-center justify-center border border-dashed border-border rounded-apple-xl italic text-ink/20">
                            Contenu en cours de rédaction...
                        </div>
                    </FadeIn>
                )}
            </div>
        </div>
    );
}
