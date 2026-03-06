import { Metadata } from 'next';
import { ProjetsClient } from './ProjetsClient';

export const metadata: Metadata = {
    title: 'Nos Réalisations | Lumina — Agence Web & Design au Bénin',
    description: 'Découvrez nos derniers projets : refontes stratégiques, sites e-commerce et identités visuelles d\'autorité pour clients au Bénin et à l\'international.',
    keywords: ['portfolio agence web', 'réalisations design', 'études de cas seo', 'lumina projets'],
};

export default function Projets() {
    return <ProjetsClient />;
}
