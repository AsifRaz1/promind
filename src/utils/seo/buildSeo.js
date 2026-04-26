// SEO Builder Utility - Dynamic metadata generator for Next.js generateMetadata

import {
  DEFAULT_SEO,
  DEFAULT_OG,
  DEFAULT_TWITTER,
  CANONICAL_BASE_URL,
  ROBOTS,
} from '@/constants/seo.constant';
import { BRAND } from '@/constants/global.constant';

/**
 * Build dynamic SEO metadata for Next.js pages
 * 
 * @param {Object} config - SEO configuration object
 * @param {string} config.title - Page title (will use template from DEFAULT_SEO)
 * @param {string} config.description - Page description
 * @param {string} config.keywords - Page keywords (comma-separated or array)
 * @param {string} config.canonical - Canonical URL path (e.g., '/about')
 * @param {string} config.ogImage - Open Graph image URL
 * @param {string} config.ogType - Open Graph type (default: 'website')
 * @param {string} config.twitterImage - Twitter image URL
 * @param {string} config.robots - Robots meta tag (default: 'index, follow')
 * @param {boolean} config.noIndex - Set to true to prevent indexing
 * @param {Object} config.openGraph - Custom Open Graph data
 * @param {Object} config.twitter - Custom Twitter data
 * @param {Object} config.alternates - Alternate URLs (languages, etc.)
 * @param {Object} config.jsonLd - Additional JSON-LD structured data
 * 
 * @returns {Object} Next.js metadata object
 */
export function buildSeo(config = {}) {
  const {
    title,
    description = DEFAULT_SEO.DESCRIPTION,
    keywords,
    canonical,
    ogImage,
    ogType = 'website',
    twitterImage,
    robots,
    noIndex = false,
    openGraph = {},
    twitter = {},
    alternates = {},
    jsonLd,
  } = config;

  // Build title
  const pageTitle = title 
    ? DEFAULT_SEO.TITLE_TEMPLATE.replace('%s', title)
    : DEFAULT_SEO.TITLE;

  // Build keywords
  const pageKeywords = keywords
    ? Array.isArray(keywords) ? keywords.join(', ') : keywords
    : DEFAULT_SEO.KEYWORDS;

  // Build canonical URL
  const canonicalUrl = canonical
    ? `${CANONICAL_BASE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : CANONICAL_BASE_URL;

  // Build robots
  const robotsValue = noIndex 
    ? ROBOTS.NO_INDEX_NO_FOLLOW 
    : robots || ROBOTS.INDEX_FOLLOW;

  // Build Open Graph
  const ogImageUrl = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${BRAND.WEBSITE_URL}${ogImage}`)
    : DEFAULT_OG.IMAGE;

  const openGraphData = {
    title: title || DEFAULT_OG.TITLE,
    description: description,
    url: canonicalUrl,
    siteName: DEFAULT_OG.SITE_NAME,
    images: [
      {
        url: ogImageUrl,
        width: DEFAULT_OG.IMAGE_WIDTH,
        height: DEFAULT_OG.IMAGE_HEIGHT,
        alt: openGraph.imageAlt || DEFAULT_OG.IMAGE_ALT,
      },
    ],
    locale: DEFAULT_OG.LOCALE,
    type: ogType,
    ...openGraph,
  };

  // Build Twitter
  const twitterImageUrl = twitterImage
    ? (twitterImage.startsWith('http') ? twitterImage : `${BRAND.WEBSITE_URL}${twitterImage}`)
    : DEFAULT_TWITTER.IMAGE;

  const twitterData = {
    card: DEFAULT_TWITTER.CARD,
    site: DEFAULT_TWITTER.SITE,
    creator: DEFAULT_TWITTER.CREATOR,
    title: title || DEFAULT_TWITTER.TITLE,
    description: description,
    images: [twitterImageUrl],
    ...twitter,
  };

  // Build metadata object
  const metadata = {
    title: pageTitle,
    description,
    keywords: pageKeywords,
    robots: robotsValue,
    openGraph: openGraphData,
    twitter: twitterData,
    alternates: {
      canonical: canonicalUrl,
      ...alternates,
    },
  };

  // Add JSON-LD if provided
  if (jsonLd) {
    metadata.other = {
      'application/ld+json': JSON.stringify(jsonLd),
    };
  }

  return metadata;
}

/**
 * Build SEO for article/blog post pages
 */
export function buildArticleSeo(config = {}) {
  const {
    title,
    description,
    author,
    publishedTime,
    modifiedTime,
    tags = [],
    image,
    ...rest
  } = config;

  return buildSeo({
    title,
    description,
    keywords: tags.join(', '),
    ogType: 'article',
    ogImage: image,
    openGraph: {
      article: {
        publishedTime,
        modifiedTime,
        author,
        tags,
      },
    },
    ...rest,
  });
}
