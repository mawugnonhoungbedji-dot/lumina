import { Metadata } from 'next';
import { InsightsClient } from './InsightsClient';

export const metadata: Metadata = {
    title: 'Insights',
    description: 'Actualités, tendances design et analyses techniques par les experts de Lumina.',
};

export default function Insights() {
    return <InsightsClient />;
}
