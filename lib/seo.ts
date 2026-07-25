import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function generateMetadata({
  title,
  description,
  path = '',
  image,
}: SEOProps = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;

  const metaDescription = description || SITE_CONFIG.brandStatement;
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || SITE_CONFIG.ogImage;

  return {
    title: metaTitle,
    description: metaDescription,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: SITE_CONFIG.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // Add your verification codes here
    },
  };
}

export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.tagline,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE_CONFIG.contact.email,
      contactType: 'sales',
    },
    sameAs: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.twitter,
      SITE_CONFIG.social.youtube,
    ],
  };
}