'use client';

import React, { useState } from 'react';
import { Button } from '@/src/components/Button';
import Link from 'next/link';
import { FadeIn } from '@/src/components/FadeIn';
import { ProjectCard } from '@/src/components/ProjectCard';
import { ProjectModal } from '@/src/components/ProjectModal';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export function ProjetsClient() {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openProject = (project: any) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const projectImages = [
        'https://picsum.photos/seed/aura/1200/800',
        'https://picsum.photos/seed/nexus/1200/800',
        'https://picsum.photos/seed/watch/1200/800',
        'https://picsum.photos/seed/horizon/1200/800',
        'https://picsum.photos/seed/stellar/1200/800',
        'https://picsum.photos/seed/oasis/1200/800'
    ];

    return (
        <div className="pt-32 md:pt-40 pb-32 px-4 md:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 block">{t('portfolio.eyebrow')}</span>
                    <h1 className="display mb-16 whitespace-pre-line text-left">
                        {t('portfolio.title')}
                    </h1>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16 md:gap-y-24">
                    {(t('portfolio.projects', { returnObjects: true }) as any[]).map((project, i) => {
                        const projectData = {
                            ...project,
                            img: project.img || projectImages[i]
                        };
                        return (
                            <ProjectCard
                                key={i}
                                {...projectData}
                                delay={i * 0.1}
                                onClick={() => openProject(projectData)}
                                priority={i < 2}
                            />
                        );
                    })}
                </div>

                <ProjectModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    project={selectedProject}
                />

                <FadeIn delay={0.5}>
                    <div className="mt-20 md:mt-40 p-8 md:p-16 lg:p-24 rounded-apple-xl bg-card border border-border text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700" />
                        <h2 className="h2 mb-8 relative z-10">{t('portfolio.cta_similar')}</h2>
                        <div className="flex justify-center relative z-10">
                            <Link href="/contact">
                                <Button size="lg" className="px-12 group" aria-label={t('portfolio.cta')}>
                                    {t('portfolio.cta')}
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
