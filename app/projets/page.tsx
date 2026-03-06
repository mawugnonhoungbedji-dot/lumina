import { Metadata } from 'next';
import { ProjetsClient } from './ProjetsClient';

export const metadata: Metadata = {
    title: 'Nos Projets',
    description: 'Découvrez nos dernières réalisations : design digital, identités de marque et plateformes e-commerce.',
};

export default function Projets() {
    return <ProjetsClient />;
}
