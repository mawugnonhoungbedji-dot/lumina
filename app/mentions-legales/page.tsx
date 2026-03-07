import React from 'react';
import { FadeIn } from '@/src/components/FadeIn';

export const metadata = {
    title: 'Mentions Légales | Lumina',
    description: 'Informations légales concernant l’agence Lumina.',
};

export default function MentionsLegales() {
    return (
        <div className="pt-40 pb-32 px-6 lg:px-12 bg-bg">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="display mb-12">Mentions Légales</h1>

                    <div className="space-y-12 text-ink/70 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">1. Édition du site</h2>
                            <p>
                                Le présent site, accessible à l’URL https://lumina.agency (le « Site »), est édité par :<br />
                                <strong>Lumina Studio</strong>, basé à Cotonou, Bénin.<br />
                                Contact : contact@lumina.agency
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">2. Hébergement</h2>
                            <p>
                                Le Site est hébergé par la société <strong>Render</strong>, situé à San Francisco, USA.<br />
                                Site web : https://render.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">3. Propriété intellectuelle</h2>
                            <p>
                                L’ensemble des éléments constitutifs du Site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, noms, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le Site lui-même, relèvent des législations internationales sur le droit d’auteur et la propriété intellectuelle.
                            </p>
                            <p className="mt-4">
                                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Lumina.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">4. Limitation de responsabilité</h2>
                            <p>
                                Lumina ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site https://lumina.agency.
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
