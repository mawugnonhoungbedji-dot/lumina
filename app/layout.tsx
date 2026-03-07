import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import '../src/index.css';
import { Navbar } from '../src/components/Navbar';
import { Providers } from './providers';
import { CursorLayer } from './CursorLayer';

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://lumina-agency.netlify.app'),
    title: {
        template: '%s | Lumina — Agence Créative Premium',
        default: 'Lumina — Design, Développement & Stratégie Digitale',
    },
    description:
        'Lumina est une agence créative spécialisée dans la création d’expériences numériques haut de gamme, du design UI/UX au développement Next.js.',
    keywords: ['agence web', 'design premium', 'développement nextjs', 'stratégie digitale', 'luxembourg', 'france', 'belgique'],
    authors: [{ name: 'Lumina Team' }],
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://lumina-agency.netlify.app',
        siteName: 'Lumina',
        title: 'Lumina — Agence Créative Premium',
        description: 'Expériences numériques d’exception pour marques ambitieuses.',
        images: [
            {
                url: 'https://lumina-agency.netlify.app/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Lumina Agence Créative',
            },
        ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" data-theme="dark" suppressHydrationWarning>
            <body className={`${plusJakartaSans.variable} ${montserrat.variable} min-h-screen selection:bg-ink selection:text-bg overflow-x-hidden bg-bg transition-colors duration-300 font-sans`}>
                <Providers>
                    {/* Custom cursor + scroll progress bar (client-only) */}
                    <CursorLayer />

                    {/* Navigation */}
                    <Navbar />

                    {/* Page content */}
                    <main>{children}</main>

                    {/* Footer */}
                    <footer className="py-12 px-6 lg:px-12 border-t border-border bg-bg transition-colors duration-300">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                            <Link href="/" className="flex items-center">
                                <span className="text-lg font-bold tracking-tighter font-display text-ink">
                                    Lumina.
                                </span>
                            </Link>

                            <p className="text-[12px] font-medium text-ink/40 text-center">
                                © {new Date().getFullYear()} Lumina. Tous droits réservés. Agence créative à Cotonou & International.
                            </p>

                            <div className="flex gap-8 text-[12px] font-bold uppercase tracking-widest text-ink/40">
                                <Link href="/mentions-legales" className="hover:text-ink transition-colors">
                                    Mentions légales
                                </Link>
                                <Link href="/politique-de-confidentialite" className="hover:text-ink transition-colors">
                                    Confidentialité
                                </Link>
                            </div>
                        </div>
                    </footer>

                    {/* Structured Data */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'ProfessionalService',
                                name: 'Lumina',
                                image: 'https://lumina-agency.netlify.app/og-image.jpg',
                                '@id': 'https://lumina-agency.netlify.app',
                                url: 'https://lumina-agency.netlify.app',
                                telephone: '',
                                address: {
                                    '@type': 'PostalAddress',
                                    streetAddress: '',
                                    addressLocality: 'Cotonou',
                                    addressCountry: 'BJ',
                                },
                                geo: {
                                    '@type': 'GeoCoordinates',
                                    latitude: 6.3654,
                                    longitude: 2.4183,
                                },
                                openingHoursSpecification: {
                                    '@type': 'OpeningHoursSpecification',
                                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                                    opens: '09:00',
                                    closes: '18:00',
                                },
                                sameAs: [],
                            }),
                        }}
                    />
                </Providers>
            </body>
        </html>
    );
}
