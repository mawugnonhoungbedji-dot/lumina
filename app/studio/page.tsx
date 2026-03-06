import { Metadata } from 'next';
import { StudioClient } from './StudioClient';

export const metadata: Metadata = {
    title: 'Le Studio | Lumina — Agence Web de Référence au Bénin',
    description: 'Découvrez l\'histoire et le manifeste de Lumina. Une équipe d\'experts passionnés par le design d\'autorité et l\'ingénierie web de haute précision à Cotonou.',
    keywords: ['studio web bénin', 'expertise design premium', 'manifeste lumina', 'agence digitale international'],
};

export default function Studio() {
    return <StudioClient />;
}
