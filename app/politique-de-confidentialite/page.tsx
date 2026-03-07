import React from 'react';
import { FadeIn } from '@/src/components/FadeIn';

export const metadata = {
    title: 'Politique de Confidentialité | Lumina',
    description: 'Comment Lumina protège vos données personnelles.',
};

export default function PolitiqueConfidentialite() {
    return (
        <div className="pt-40 pb-32 px-6 lg:px-12 bg-bg">
            <div className="max-w-4xl mx-auto">
                <FadeIn>
                    <h1 className="display mb-12">Politique de Confidentialité</h1>

                    <div className="space-y-12 text-ink/70 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">1. Collecte des données</h2>
                            <p>
                                Nous collectons les informations que vous nous communiquez directement via nos formulaires de contact ou par e-mail. Ces informations peuvent inclure votre nom, adresse e-mail, nom d'entreprise et les détails de votre projet.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">2. Utilisation des données</h2>
                            <p>
                                Les données collectées sont utilisées exclusivement pour :
                            </p>
                            <ul className="list-disc ml-6 mt-4 space-y-2">
                                <li>Répondre à vos demandes de renseignements ou de devis</li>
                                <li>Assurer le suivi de notre relation commerciale</li>
                                <li>Améliorer l'expérience utilisateur sur notre site</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">3. Conservation des données</h2>
                            <p>
                                Vos données sont conservées pour la durée nécessaire à la finalité du traitement, dans le respect des délais légaux de conservation.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">4. Cookies</h2>
                            <p>
                                Notre site utilise des cookies techniques pour assurer son bon fonctionnement. Nous pouvons également utiliser des outils d'analyse d'audience (comme Google Analytics) pour comprendre comment les visiteurs utilisent le site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold font-display text-ink mb-4">5. Vos droits</h2>
                            <p>
                                Conformément à la législation sur la protection des données, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à : contact@lumina.agency.
                            </p>
                        </section>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
