import * as React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    type?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, url, type }) => {
    const fullTitle = `${title} | ONE SQUARE METER`;
    const canonicalUrl = url ? `https://onesquaremeter.com${url}` : undefined;

    const schema = {
        "@context": "https://schema.org",
        "@type": type || "WebSite",
        "name": "ONE SQUARE METER",
        "url": canonicalUrl || "https://onesquaremeter.com",
        "description": description,
    };

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </Helmet>
    );
};

export default SEO;
