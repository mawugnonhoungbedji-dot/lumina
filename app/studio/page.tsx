import { Metadata } from 'next';
import { StudioClient } from './StudioClient';

export const metadata: Metadata = {
    title: 'Studio | Lumina — L\'excellence du Design et de l\'Ingénierie',
    description: 'Découvrez l\'approche, le manifeste et les statistiques de Lumina. Une fusion unique entre design ultra-premium et ingénierie de pointe.',
    keywords: ['studio design', 'agence créative', 'manifesto lumina', 'expertise web premium'],
};

export default function Studio() {
    return <StudioClient />;
}
