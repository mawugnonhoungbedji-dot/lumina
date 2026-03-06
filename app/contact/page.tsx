import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact | Lumina — Discutons de votre prochain projet Digital',
    description: 'Vous avez une idée ambitieuse ? Contactez Lumina pour transformer votre vision en une expérience numérique exceptionnelle. Expertise en design et développement premium.',
    keywords: ['contact agence web', 'devis site web', 'partenariat digital', 'lumina contact'],
};

export default function Contact() {
    return <ContactClient />;
}
