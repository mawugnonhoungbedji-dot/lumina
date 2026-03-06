import { Metadata } from 'next';
import { CaseStudyClient } from './CaseStudyClient';
import fr from '@/src/locales/fr.json';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = fr.portfolio.projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: 'Projet introuvable',
        };
    }

    return {
        title: project.title,
        description: project.description || `Étude de cas détaillée du projet ${project.title} réalisé par Lumina.`,
        openGraph: {
            title: `${project.title} | Lumina`,
            description: project.description,
            images: [project.img || '/og-image.jpg'],
        },
    };
}

export default function CaseStudy() {
    return <CaseStudyClient />;
}
