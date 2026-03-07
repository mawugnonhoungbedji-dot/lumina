import { Metadata } from 'next';
import { ArticleClient } from '../ArticleClient';
import fr from '@/src/locales/fr.json';

export async function generateStaticParams() {
    return fr.insights_page.articles.map((article: any) => ({
        slug: article.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = fr.insights_page.articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: 'Article introuvable',
        };
    }

    return {
        title: `${article.title} | Lumina Insights`,
        description: article.content?.intro || `Lisez notre dernier article sur ${article.title} par les experts de Lumina.`,
        openGraph: {
            title: `${article.title} | Lumina Insights`,
            description: article.content?.intro,
            type: 'article',
            publishedTime: article.date,
            url: `https://lumina-agency.netlify.app/insights/${slug}`,
        },
    };
}

export default async function Article({ params }: Props) {
    const { slug } = await params;
    const article = fr.insights_page.articles.find((a) => a.slug === slug);

    if (!article) {
        return <ArticleClient />;
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.content?.intro,
        author: {
            '@type': 'Organization',
            name: 'Lumina',
        },
        publisher: {
            '@type': 'Organization',
            name: 'Lumina',
            logo: {
                '@type': 'ImageObject',
                url: 'https://lumina-agency.netlify.app/og-image.jpg',
            },
        },
        datePublished: article.date,
        url: `https://lumina-agency.netlify.app/insights/${slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ArticleClient />
        </>
    );
}
