import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

export const Projets = () => {
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
    <div className="pt-40 pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 block">{t('portfolio.eyebrow')}</span>
          <h1 className="text-5xl lg:text-8xl font-black font-display text-ink mb-16 tracking-tight whitespace-pre-line">
            {t('portfolio.title')}
          </h1>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
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
          <div className="mt-40 p-16 lg:p-24 rounded-apple-xl bg-card border border-border text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700" />
            <h2 className="text-3xl lg:text-5xl font-black font-display text-ink mb-8 relative z-10">{t('portfolio.cta_similar')}</h2>
            <div className="flex justify-center relative z-10">
              <Link to="/contact">
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
};

