import { Metadata } from 'next';
import { HomeClient } from './HomeClient';

export const metadata: Metadata = {
    title: 'Lumina | Agence Web Premium & Design Ultra-Premium',
    description: 'Lumina est une agence web spécialisée dans la création de sites web ultra-premium, le design minimaliste et le développement de pointe pour les marques d\'exception.',
    keywords: ['agence web premium', 'design ultra-premium', 'sites web luxe', 'développement next.js', 'lumina agency'],
};

export default function Home() {
    return <HomeClient />;
}
