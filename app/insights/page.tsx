import { Metadata } from 'next';
import { InsightsClient } from './InsightsClient';

export const metadata: Metadata = {
    title: 'Insights & Blog | Lumina — Design, Tech & SEO au Bénin',
    description: 'Analyses, tendances et conseils d\'experts sur le design web, le SEO et la stratégie digitale pour les entreprises au Bénin et en Afrique Francophone.',
    keywords: ['blog agence web', 'conseils seo cotonou', 'tendances design 2026', 'lumina insights'],
};

export default function Insights() {
    return <InsightsClient />;
}
