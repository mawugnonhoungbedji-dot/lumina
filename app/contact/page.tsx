import { Metadata } from 'next';
import { ContactClient } from './ContactClient';

export const metadata: Metadata = {
    title: 'Contact | Lumina — Lancez votre projet Web au Bénin',
    description: 'Prêt à transformer votre présence digitale ? Contactez nos experts à Cotonou pour un site web d\'exception. Réponse sous 48h pour vos projets au Bénin et ailleurs.',
    keywords: ['contact agence cotonou', 'devis création site web', 'agence web bénin contact', 'projet digital lumina'],
};

export default function Contact() {
    return <ContactClient />;
}
