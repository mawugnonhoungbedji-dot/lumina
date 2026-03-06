import { Metadata } from 'next';
import { ServicesClient } from './ServicesClient';

export const metadata: Metadata = {
    title: 'Services | Lumina — Design UI/UX & Développement de Sites Web Premium',
    description: 'Découvrez nos services d\'excellence : Conseil Stratégique, Design UI/UX Ultra-Premium, Développement Web de Haute Précision et Optimisation de Performance.',
    keywords: ['design ui ux', 'développement nextjs', 'création site vitrine luxe', 'agence digitale geneve'],
};

export default function Services() {
    return <ServicesClient />;
}
