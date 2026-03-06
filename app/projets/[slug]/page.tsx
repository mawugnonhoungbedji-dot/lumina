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
        title: `${project.title} | Étude de Cas Lumina`,
        description: project.description || `Découvrez comment Lumina a transformé la présence digitale de ${project.title}.`,
        openGraph: {
            title: `${project.title} | Étude de Cas Lumina`,
            description: project.description,
            images: [project.img || '/og-image.jpg'],
            url: `https://lumina.agency/projets/${slug}`,
        },
    };
}

export default function CaseStudy() {
    return <CaseStudyClient />;
}
