import { Metadata } from 'next';
import { HomeClient } from './HomeClient';

export const metadata: Metadata = {
    title: 'Lumina | Agence Web Premium à Cotonou, Bénin — Design & SEO',
    description: 'Lumina est une agence web d\'élite basée au Bénin, spécialisée dans la création de sites web sur-mesure, le design premium et l\'optimisation SEO pour les marques d\'exception.',
    keywords: ['agence web cotonou', 'création site web bénin', 'design premium', 'seo bénin', 'lumina agency'],
};

export default function Home() {
    return <HomeClient />;
}
