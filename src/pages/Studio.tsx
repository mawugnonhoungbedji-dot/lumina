import React from 'react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { useTranslation } from 'react-i18next';
import { Award, Briefcase, Zap, Sparkles, Star, Shield, ArrowRight } from 'lucide-react';

export const Studio = () => {
  const { t } = useTranslation();

  const manifestoIcons = [Zap, Sparkles, Star, Shield];

  return (
    <div className="pt-40 pb-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-6 block">{t('studio_page.eyebrow')}</span>
          <h1 className="text-5xl lg:text-8xl font-black font-display text-ink mb-16 tracking-tight whitespace-pre-line">
            {t('studio_page.title')}
          </h1>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
          <FadeIn>
            <div className="aspect-[4/5] rounded-apple-xl overflow-hidden border border-border bg-card flex items-center justify-center p-12 lg:p-24 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-ink/[0.02] to-transparent" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <span className="text-6xl lg:text-[120px] font-black font-display text-ink tracking-tighter select-none">
                  Lumina.
                </span>
                <div className="w-12 h-1 bg-ink/10 rounded-full group-hover:w-24 transition-all duration-700" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-12 left-12 w-2 h-2 rounded-full bg-ink/5" />
              <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-ink/5" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold font-display text-ink mb-8">{t('studio_page.hero.title')}</h2>
            <p className="text-lg text-ink/80 leading-relaxed mb-8">
              {t('studio_page.hero.p1')}
            </p>
            <p className="text-ink/60 leading-relaxed mb-12">
              {t('studio_page.hero.p2')}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Award className="w-6 h-6 text-ink/40" strokeWidth={1.5} />
                  <div className="text-4xl font-black font-display text-ink">{t('studio_page.stats.years')}</div>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-ink/40">{t('studio_page.stats.years_label')}</div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <Briefcase className="w-6 h-6 text-ink/40" strokeWidth={1.5} />
                  <div className="text-4xl font-black font-display text-ink">{t('studio_page.stats.projects')}</div>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-ink/40">{t('studio_page.stats.projects_label')}</div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.4}>
          <div className="p-12 lg:p-24 rounded-apple-xl bg-sec-b border border-border">
            <h2 className="text-3xl lg:text-5xl font-black font-display text-ink mb-16 text-center">{t('studio_page.manifesto.title')}</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {(t('studio_page.manifesto.items', { returnObjects: true }) as any[]).map((m, i) => {
                const Icon = manifestoIcons[i % manifestoIcons.length];
                return (
                  <div key={i} className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-ink/5 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-ink" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-xl font-bold font-display text-ink">{m.title}</h4>
                    <p className="text-ink/60 leading-relaxed">{m.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="mt-32 flex flex-col items-center text-center">
            <h2 className="text-3xl lg:text-5xl font-black font-display text-ink mb-12">{t('studio_page.cta.title')}</h2>
            <Link to="/contact" className="inline-block">
              <Button size="lg" className="px-12 group" aria-label={t('studio_page.cta.btn')}>
                {t('studio_page.cta.btn')}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

