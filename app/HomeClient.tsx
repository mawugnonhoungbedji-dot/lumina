'use client';

import { motion } from 'motion/react';
import { Button } from '@/src/components/Button';
import {
    ArrowRight,
    Quote,
    ChevronDown,
    Users,
    Clock,
    Award,
    MessageCircle,
    Layout,
    Search,
    Send
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/src/components/FadeIn';
import { ProjectCard } from '@/src/components/ProjectCard';
import { ProjectModal } from '@/src/components/ProjectModal';
import { useTranslation } from 'react-i18next';
import { CONTACT_EMAIL } from '../src/lib/contact';

const FAQItem = ({ question, answer }: { question: string; answer: string;[key: string]: any }) => {
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
                className="overflow-hidden"
            >
                <div className="px-8 pb-6 text-ink/60 leading-relaxed text-sm">
                    {answer}
                </div>
            </motion.div>
        </div>
    );
};

export function HomeClient() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const openProject = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const statIcons = [Users, Clock, Award, MessageCircle];
    const approachIcons = [Layout, Search, Users];

    return (
        <>
            {/* SECTION 1 — Hero */}
            <section className="pt-32 md:pt-40 lg:pt-56 pb-20 px-4 md:px-6 lg:px-12 bg-bg relative min-h-[90vh] flex items-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ink/5 rounded-full blur-[120px] -mr-40 -mt-40" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ink/5 rounded-full blur-[100px] -ml-20 -mb-20" />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.05 }}
                    className="absolute inset-0 z-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]"
                />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <FadeIn>
                        <div className="flex justify-center lg:justify-start mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-[10px] font-bold tracking-[0.2em] uppercase text-ink/60 border border-border">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_12px_rgba(52,199,89,0.8)] animate-pulse" />
                                <span>{t('hero.eyebrow')}</span>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn instant>
                        <h1 className="display mb-10 whitespace-pre-line text-center lg:text-left">
                            {t('hero.title')}
                        </h1>
                    </FadeIn>

                    <FadeIn instant>
                        <p className="lead mb-14 max-w-[640px] text-balance text-center lg:text-left mx-auto lg:mx-0">
                            {t('hero.subtitle')}
                        </p>
                    </FadeIn>

                    <FadeIn instant>
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                            <Link href="/contact">
                                <Button size="lg" className="px-10 lg:px-12 py-7 text-lg shadow-2xl shadow-ink/10 group w-full lg:w-auto" aria-label={t('hero.cta_primary')}>
                                    {t('hero.cta_primary')}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/projets" className="w-full lg:w-auto">
                                <Button variant="glass" size="lg" className="group px-10 py-7 text-lg w-full" aria-label={t('hero.cta_secondary')}>
                                    {t('hero.cta_secondary')}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>

                    <div className="mt-20 md:mt-28 lg:mt-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border rounded-apple-lg overflow-hidden shadow-2xl shadow-ink/5">
                        {[
                            { label: t('hero.stats.satisfaction'), value: '100%' },
                            { label: t('hero.stats.delais'), value: '97%' },
                            { label: t('hero.stats.expertise'), value: '10+' },
                            { label: t('hero.stats.dispo'), value: '7j/7' },
                        ].map((stat, i) => {
                            const Icon = statIcons[i];
                            return (
                                <FadeIn key={i} delay={0.6 + i * 0.1} className="bg-bg p-8 lg:p-14 transition-colors hover:bg-sec-b/50 group flex flex-col items-center lg:items-start">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Icon className="w-6 h-6 text-ink/20 group-hover:text-ink/40 transition-colors" strokeWidth={1.5} />
                                        <h4 className="text-4xl lg:text-5xl font-black font-display text-ink tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">{stat.value}</h4>
                                    </div>
                                    <p className="text-[10px] lg:text-[12px] font-bold text-ink/30 uppercase tracking-[0.2em] text-center lg:text-left">{stat.label}</p>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 2 — Bande de logos */}
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

            {/* SECTION 3 — Le problème */}
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

            {/* SECTION 4 — Notre approche */}
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
                                    <div className="h-px w-12 bg-border group-hover:w-full transition-all duration-700" />
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* SECTION 5 — Sélection de projets */}
            <section className="py-40 px-6 lg:px-12 bg-bg relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 gap-10">
                        <FadeIn className="text-center lg:text-left flex-1 w-full">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-ink/30 mb-8 block">{t('portfolio.eyebrow')}</span>
                            <h2 className="h2 whitespace-pre-line">{t('portfolio.title')}</h2>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <Link href="/projets">
                                <Button variant="glass" className="group" aria-label={t('portfolio.cta')}>
                                    {t('portfolio.cta')}
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                        {(t('portfolio.projects', { returnObjects: true }) as any[]).map((project, i) => {
                            const projectData = {
                                ...project,
                                img: project.img || ['https://picsum.photos/seed/aura/1200/800', 'https://picsum.photos/seed/nexus/1200/800', 'https://picsum.photos/seed/watch/1200/800', 'https://picsum.photos/seed/horizon/1200/800'][i]
                            };
                            const isLCP = i < 2;
                            return (
                                <ProjectCard
                                    key={i}
                                    {...projectData}
                                    delay={isLCP ? 0 : i * 0.1}
                                    onClick={() => openProject(projectData)}
                                    priority={isLCP}
                                />
                            );
                        })}
                    </div>

                    <ProjectModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        project={selectedProject}
                    />
                </div>
            </section>

            {/* SECTION 6 — Témoignages */}
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
                                        <img
                                            src={["https://picsum.photos/seed/p1/100/100", "https://picsum.photos/seed/p2/100/100"][i]}
                                            alt={testimonial.author}
                                            className="w-14 h-14 rounded-full border border-border grayscale group-hover:grayscale-0 transition-all duration-500"
                                            referrerPolicy="no-referrer"
                                            loading="lazy"
                                            width="56"
                                            height="56"
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

            {/* SECTION 7 — CTA Intermédiaire */}
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

            {/* SECTION 8 — À propos rapide */}
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
                                    <div className="w-8 h-1 bg-ink/10 rounded-full group-hover:w-16 transition-all duration-700" />
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

            {/* SECTION 9 — FAQ */}
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

            {/* SECTION 10 — CTA Final */}
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
        </>
    );
}
