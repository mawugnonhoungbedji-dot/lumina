'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useSpring } from 'motion/react';
import {
    ArrowLeft,
    ArrowRight,
    CheckCircle2,
    Target,
    Zap,
    ChevronRight
} from 'lucide-react';
import { Button } from '@/src/components/Button';
import Link from 'next/link';

export function CaseStudyClient() {
    const params = useParams();
    const slug = params?.slug as string;
    const { t } = useTranslation();
    const router = useRouter();
    const [project, setProject] = useState<any>(null);
    const [nextProject, setNextProject] = useState<any>(null);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const allProjects = t('portfolio.projects', { returnObjects: true }) as any[];
        const currentProject = allProjects.find(p => p.slug === slug);

        if (!currentProject) {
            router.push('/projets');
            return;
        }

        setProject(currentProject);

        const currentIndex = allProjects.indexOf(currentProject);
        const nextIndex = (currentIndex + 1) % allProjects.length;
        setNextProject(allProjects[nextIndex]);
    }, [slug, t, router]);

    if (!project) return null;

    return (
        <div className="min-h-screen bg-bg pt-32 pb-24">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-ink z-[201] origin-left"
                style={{ scaleX }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                {/* Header / Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 flex items-center justify-between"
                >
                    <Link
                        href="/projets"
                        className="group flex items-center gap-3 text-ink/40 hover:text-ink transition-colors text-sm font-black uppercase tracking-widest"
                    >
                        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:scale-110 group-hover:bg-ink group-hover:text-bg transition-all duration-500">
                            <ArrowLeft size={18} />
                        </div>
                        {t('portfolio.modal.close', 'Retour')}
                    </Link>

                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-ink/20">
                        <span>{t('portfolio.modal.eyebrow', 'Étude de cas')}</span>
                        <ChevronRight size={12} />
                        <span className="text-ink">{project.title}</span>
                    </div>
                </motion.div>

                {/* Hero Section */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="display mb-8 text-left">
                            {project.title}
                        </h1>
                        <p className="text-ink/40 text-xl font-bold uppercase tracking-widest mb-12">{project.sector}</p>

                        <div className="p-10 rounded-[48px] bg-card border border-border relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
                                <Zap size={120} strokeWidth={1} />
                            </div>
                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-ink/20 mb-6">
                                {t('portfolio.modal.result_label', 'Résultat Clé')}
                            </h4>
                            <div className="text-4xl lg:text-7xl font-black text-emerald-600 dark:text-emerald-500 tracking-tight leading-none mb-4">
                                {project.result}
                            </div>
                            <p className="text-ink/40 text-sm font-medium">
                                {t('portfolio.modal.result_sub', 'Mesuré sur les 6 premiers mois post-lancement.')}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative aspect-[4/5] lg:aspect-square rounded-[64px] overflow-hidden bg-card border border-border shadow-2xl"
                    >
                        <img
                            src={project.img || '/images/project-placeholder.jpg'}
                            alt={project.title}
                            className="w-full h-full object-cover object-top sm:grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </motion.div>
                </div>

                {/* Narrative Section */}
                <div className="max-w-4xl mx-auto mb-32">
                    <div className="grid md:grid-cols-3 gap-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="md:col-span-2 space-y-12"
                        >
                            <div>
                                <h3 className="h2 mb-6 flex items-center gap-4">
                                    <div className="w-12 h-1 bg-ink/10 rounded-full" />
                                    {t('portfolio.modal.challenge', 'Le Défi')}
                                </h3>
                                <p className="text-xl text-ink/60 leading-relaxed font-medium">
                                    {project.context || project.description || "Un défi d'excellence numérique pour redéfinir les standards du secteur."}
                                    {" "}Découvrez comment notre <Link href="/services" className="text-ink font-bold border-b border-ink/20 hover:border-ink transition-colors">expertise sur-mesure</Link> peut s'adapter à vos besoins.
                                </p>
                            </div>

                            <div>
                                <h3 className="h2 mb-6 flex items-center gap-4">
                                    <div className="w-12 h-1 bg-ink/10 rounded-full" />
                                    {t('casestudy.strategy')}
                                </h3>
                                <div className="grid gap-6">
                                    {(project.strategy || [
                                        "Audit approfondi & Architecture de l'information",
                                        "Design System sur mesure & Ultra-premium",
                                        "Ingénierie de pointe & Optimisation Performance",
                                        "Copywriting stratégique & SEO sémantique"
                                    ]).map((item: string, idx: number) => (
                                        <div key={idx} className="flex items-start gap-4 p-6 rounded-3xl bg-card border border-border/50 transition-all hover:bg-bg group/item">
                                            <div className="w-8 h-8 rounded-full bg-ink/5 flex items-center justify-center shrink-0 group-hover/item:bg-ink group-hover/item:text-bg transition-colors">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            </div>
                                            <span className="text-ink/80 font-bold leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {project.impact && (
                                <div>
                                    <h3 className="h2 mb-6 flex items-center gap-4">
                                        <div className="w-12 h-1 bg-ink/10 rounded-full" />
                                        {t('casestudy.impact')}
                                    </h3>
                                    <div className="p-8 lg:p-12 rounded-[48px] bg-emerald-50 border border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20">
                                        <p className="text-xl text-emerald-900/80 dark:text-emerald-400 font-medium leading-relaxed italic">
                                            "{project.impact}"
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="p-8 rounded-[40px] bg-ink text-bg">
                                <Target className="w-8 h-8 mb-6 text-emerald-400" />
                                <h4 className="text-lg font-black mb-4 leading-tight">{t('casestudy.cta.title')}</h4>
                                <p className="text-bg/60 text-sm mb-8 leading-relaxed">{t('casestudy.cta.subtitle')}</p>
                                <Button
                                    variant="primary"
                                    className="w-full justify-center bg-bg text-ink hover:bg-emerald-500 hover:text-white border-none shadow-xl"
                                    onClick={() => router.push('/contact')}
                                >
                                    {t('casestudy.cta.btn')}
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Next Project */}
                {nextProject && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-t border-border pt-32 text-center"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-ink/20 mb-8 block">
                            {t('casestudy.next')}
                        </span>
                        <Link href={`/projets/${nextProject.slug}`} className="group inline-block">
                            <h2 className="display mb-12 group-hover:scale-95 transition-transform duration-700">
                                {nextProject.title}
                            </h2>
                            <div className="flex items-center justify-center gap-4">
                                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-ink group-hover:text-bg transition-all duration-500">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
