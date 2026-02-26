import React, { useState } from 'react';
import { Button } from '../components/Button';
import { FadeIn } from '../components/FadeIn';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Send } from 'lucide-react';
import { getWhatsAppLink } from '../lib/contact';

export const Insights = () => {
  const { t } = useTranslation();
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const articleImages = [
    'https://picsum.photos/seed/i1/800/600',
    'https://picsum.photos/seed/i2/800/600',
    'https://picsum.photos/seed/i3/800/600',
    'https://picsum.photos/seed/i4/800/600'
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    const msg = `Bonjour Lumina ! 👋 Je souhaite m'inscrire à votre newsletter.\n\n*Email:* ${newsletterEmail}`;
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <div className="pt-40 pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 block">{t('insights_page.eyebrow')}</span>
          <h1 className="text-5xl lg:text-8xl font-black font-display text-ink mb-16 tracking-tight whitespace-pre-line" dangerouslySetInnerHTML={{ __html: t('insights_page.title') }} />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {(t('insights_page.articles', { returnObjects: true }) as any[]).map((article, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link to={`/insights/${article.slug}`} className="group cursor-pointer block">
                <div className="aspect-[16/9] rounded-apple-lg overflow-hidden mb-8 border border-border">
                  <img
                    src={articleImages[i % articleImages.length]}
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40 px-3 py-1 rounded-full border border-border">{article.category}</span>
                  <span className="text-[10px] font-bold text-ink/20 uppercase tracking-widest">{article.date}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold font-display text-ink group-hover:text-ink/60 transition-colors leading-tight flex items-start gap-2">
                  {article.title}
                  <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="mt-32 p-8 sm:p-12 lg:p-24 rounded-apple-xl bg-card border border-border flex flex-col items-center text-center group/newsletter">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black font-display text-ink mb-6 sm:mb-8">{t('insights_page.newsletter.title')}</h2>
            <p className="text-ink/60 max-w-xl mb-8 sm:mb-12 text-sm sm:text-base">
              {t('insights_page.newsletter.subtitle')}
            </p>
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row w-full max-w-md gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t('insights_page.newsletter.placeholder')}
                className="flex-1 bg-bg border border-border rounded-xl px-6 py-3 text-sm focus:outline-none focus:border-ink transition-colors w-full"
                required
              />
              <Button type="submit" className="group/btn w-full sm:w-auto">
                {t('insights_page.newsletter.btn')}
                <Send className="w-4 h-4 ml-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

