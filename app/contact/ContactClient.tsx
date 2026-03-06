'use client';

import React, { useState } from 'react';
import { Button } from '@/src/components/Button';
import { FadeIn } from '@/src/components/FadeIn';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Send, ChevronDown, CheckCircle2, MessageCircle } from 'lucide-react';
import { getWhatsAppLink, CONTACT_EMAIL } from '@/src/lib/contact';

export function ContactClient() {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            company: formData.get('company') as string,
            message: formData.get('message') as string,
            budget: formData.get('budget') as string,
        };

        try {
            // 1. Try EmailJS if keys are configured
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

            if (publicKey && serviceId && templateId) {
                const emailjs = await import('@emailjs/browser');
                await emailjs.send(serviceId, templateId, { ...data, to_email: CONTACT_EMAIL }, publicKey);
            } else {
                // 2. Fallback: open mailto: link
                const subject = encodeURIComponent(`[Lumina] Nouveau contact de ${data.name}`);
                const body = encodeURIComponent(
                    `Nom: ${data.name}\nEmail: ${data.email}\nEntreprise: ${data.company || 'N/A'}\nBudget: ${data.budget || 'Non spécifié'}\n\nMessage:\n${data.message}`
                );
                window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_blank');
            }

            setIsSuccess(true);

            // 3. Redirect to WhatsApp with form details
            const whatsappMsg =
                `Bonjour Lumina ! 👋 Je viens de remplir le formulaire de contact.\n\n` +
                `*Nom:* ${data.name}\n` +
                `*Email:* ${data.email}\n` +
                `*Entreprise:* ${data.company || 'N/A'}\n` +
                `*Budget:* ${data.budget || 'Non spécifié'}\n\n` +
                `*Message:*\n${data.message}`;

            setTimeout(() => {
                window.open(getWhatsAppLink(whatsappMsg), '_blank');
            }, 800);

        } catch (error) {
            console.error('Error sending message:', error);
            const whatsappMsg =
                `Bonjour Lumina ! 👋 Je souhaite vous contacter.\n\n` +
                `*Nom:* ${data.name}\n` +
                `*Email:* ${data.email}\n` +
                `*Message:*\n${data.message}`;
            setIsSuccess(true);
            setTimeout(() => {
                window.open(getWhatsAppLink(whatsappMsg), '_blank');
            }, 800);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="pt-32 lg:pt-56 pb-20 lg:pb-40 px-6 lg:px-12 bg-bg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ink/5 rounded-full blur-[120px] -mr-40 -mt-40" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ink/5 rounded-full blur-[100px] -ml-20 -mb-20" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 font-sans items-start">
                    <FadeIn>
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 block text-center lg:text-left">{t('contact.eyebrow')}</span>
                        <h1 className="display mb-12 text-center lg:text-left">
                            {t('contact.title')}
                        </h1>
                        <p className="text-lg text-ink/60 leading-relaxed mb-12 max-w-md font-medium text-center lg:text-left mx-auto lg:mx-0">
                            {t('contact.subtitle')}
                        </p>
                        <div className="space-y-12 flex flex-col items-center lg:items-start pt-8 border-t border-border mt-16 max-w-sm">
                            <div className="group cursor-pointer flex flex-col items-center lg:items-start w-full">
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/20 mb-3 flex items-center gap-2 group-hover:text-ink/40 transition-colors">
                                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                                    {t('contact.email_label')}
                                </div>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="text-lg lg:text-xl font-bold font-display hover:text-ink/60 transition-colors decoration-border underline-offset-[12px] underline decoration-1 break-all text-center lg:text-left">
                                    {CONTACT_EMAIL}
                                </a>
                            </div>
                            <div className="group flex flex-col items-center lg:items-start w-full">
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-ink/20 mb-3 flex items-center gap-2 group-hover:text-ink/40 transition-colors">
                                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                                    {t('contact.location_label')}
                                </div>
                                <p className="text-lg lg:text-xl font-bold font-display text-center lg:text-left">{t('contact.location')}</p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="mcard p-8 lg:p-14 shadow-2xl shadow-ink/5 bg-bg/50 backdrop-blur-sm relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-ink/[0.02] to-transparent pointer-events-none rounded-apple-xl" />
                            {isSuccess ? (
                                <div className="text-center py-12 space-y-6">
                                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="h2">Message envoyé !</h3>
                                    <p className="text-ink/60 max-w-sm mx-auto">
                                        Merci ! WhatsApp s'ouvre automatiquement pour que vous puissiez discuter de votre projet en direct.
                                    </p>
                                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                                        <Button
                                            onClick={() => {
                                                const msg = `Bonjour Lumina ! 👋 Je souhaite discuter d'un projet.`;
                                                window.open(getWhatsAppLink(msg), '_blank');
                                            }}
                                            className="group"
                                        >
                                            <MessageCircle className="w-4 h-4 mr-2" />
                                            Ouvrir WhatsApp
                                        </Button>
                                        <Button variant="glass" onClick={() => setIsSuccess(false)}>
                                            Envoyer un autre message
                                        </Button>
                                    </div>
                                </div>
                            ) : (
                                <form className="space-y-6 lg:space-y-8" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.form.name_label')}</label>
                                            <input name="name" type="text" className="w-full bg-bg border border-border rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-ink transition-colors font-medium" placeholder={t('contact.form.name_placeholder')} required />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[11px] font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.form.email_label')}</label>
                                            <input name="email" type="email" className="w-full bg-bg border border-border rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-ink transition-colors font-medium" placeholder={t('contact.form.email_placeholder')} required />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.form.company_label')}</label>
                                        <input name="company" type="text" className="w-full bg-bg border border-border rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-ink transition-colors font-medium" placeholder={t('contact.form.company_placeholder')} />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.form.message_label')}</label>
                                        <textarea name="message" className="w-full bg-bg border border-border rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-ink transition-colors min-h-[150px] font-medium resize-none" placeholder={t('contact.form.message_placeholder')} required />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[11px] font-bold uppercase tracking-widest text-ink/40 ml-1">{t('contact.form.budget_label')}</label>
                                        <div className="relative">
                                            <select name="budget" aria-label={t('contact.form.budget_label')} className="w-full bg-bg border border-border rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-ink transition-colors appearance-none font-medium cursor-pointer" defaultValue="">
                                                <option value="" disabled>{t('contact.form.budget_placeholder')}</option>
                                                {(t('contact.form.budgets', { returnObjects: true }) as string[]).map((budget, i) => (
                                                    <option key={i} value={budget}>{budget}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                                                <ChevronDown className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                    <Button
                                        className="w-full py-7 text-lg group"
                                        aria-label={t('contact.form.submit')}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? t('contact.form.loading') : t('contact.form.submit')}
                                        {!isSubmitting && <Send className="w-5 h-5 ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
