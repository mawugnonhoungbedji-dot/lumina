import { Metadata } from 'next';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
    title: 'Nos Services | Lumina — Création de Sites Web & SEO au Bénin',
    description: 'De la stratégie à la mise en ligne : Design UI/UX ultra-premium, développement Next.js haute performance et optimisation SEO pour dominer votre marché depuis Cotonou.',
    keywords: ['création site web cotonou', 'seo bénin expert', 'design haut de gamme africain', 'développement sur-mesure'],
};

export default function Services() {
    return <ServicesClient />;
}
