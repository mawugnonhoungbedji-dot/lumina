'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { ReactNode, useEffect, useState } from 'react';

import fr from '../src/locales/fr.json';
import en from '../src/locales/en.json';

if (!i18n.isInitialized) {
    i18n
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            resources: {
                fr: { translation: fr },
                en: { translation: en },
            },
            fallbackLng: 'fr',
            supportedLngs: ['fr', 'en'],
            detection: {
                order: ['navigator', 'localStorage'],
                caches: ['localStorage'],
            },
            interpolation: {
                escapeValue: false,
            },
        });
}

export function Providers({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // During SSR and first paint, we don't want to show inconsistent translations
    // But we still want to render the skeleton/structure.
    // For now, simple mounting check is common for i18n in Next.js
    if (!mounted) {
        return <div className="invisible">{children}</div>;
    }

    return <>{children}</>;
}
