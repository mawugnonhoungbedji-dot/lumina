import { Metadata } from 'next';
import { ArticleClient } from '../ArticleClient';
import fr from '@/src/locales/fr.json';

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
            url: `https://lumina.agency/insights/${slug}`,
        },
    };
}

export default function Article() {
    return <ArticleClient />;
}
