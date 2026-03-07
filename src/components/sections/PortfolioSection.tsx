'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../FadeIn';
import { Button } from '../Button';
import { ProjectCard } from '../ProjectCard';
import { ProjectModal } from '../ProjectModal';

export function PortfolioSection() {
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const openProject = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    return (
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
    );
}
