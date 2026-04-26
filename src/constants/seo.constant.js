// Global SEO Constants (Fallback/Default SEO)

import { BRAND, CONTACT, KEYWORDS, SOCIAL_URLS } from './global.constant';

// Default/Fallback SEO metadata
export const DEFAULT_SEO = {
  TITLE: `${BRAND.NAME} - ${BRAND.TAGLINE}`,
  TITLE_TEMPLATE: `%s | ${BRAND.NAME}`,
  DESCRIPTION: BRAND.DESCRIPTION,
  KEYWORDS: KEYWORDS.join(', '),
  SITE_NAME: BRAND.NAME,
  LOCALE: 'en_US',
  TYPE: 'website',
  CHARSET: 'UTF-8',
  VIEWPORT: 'width=device-width, initial-scale=1.0',
  THEME_COLOR: '#000000',
};

// Open Graph (Facebook, LinkedIn) default metadata
export const DEFAULT_OG = {
  TITLE: `${BRAND.NAME} - ${BRAND.TAGLINE}`,
  DESCRIPTION: BRAND.DESCRIPTION,
  IMAGE: BRAND.OG_IMAGE.startsWith('http') ? BRAND.OG_IMAGE : `${BRAND.WEBSITE_URL}${BRAND.OG_IMAGE}`,
  IMAGE_ALT: `${BRAND.NAME} Consultancy`,
  IMAGE_WIDTH: 1200,
  IMAGE_HEIGHT: 630,
  URL: BRAND.WEBSITE_URL,
  SITE_NAME: BRAND.NAME,
  TYPE: 'website',
  LOCALE: 'en_US',
};

// Twitter Card default metadata
export const DEFAULT_TWITTER = {
  CARD: 'summary_large_image',
  SITE: '@promind',
  CREATOR: '@promind',
  TITLE: `${BRAND.NAME} - ${BRAND.TAGLINE}`,
  DESCRIPTION: BRAND.DESCRIPTION,
  IMAGE: BRAND.TWITTER_IMAGE.startsWith('http') ? BRAND.TWITTER_IMAGE : `${BRAND.WEBSITE_URL}${BRAND.TWITTER_IMAGE}`,
  IMAGE_ALT: `${BRAND.NAME} Consultancy`,
};

// Robots meta tags
export const ROBOTS = {
  INDEX_FOLLOW: 'index, follow',
  NO_INDEX_FOLLOW: 'noindex, follow',
  INDEX_NO_FOLLOW: 'index, nofollow',
  NO_INDEX_NO_FOLLOW: 'noindex, nofollow',
};

// Canonical URL base
export const CANONICAL_BASE_URL = BRAND.WEBSITE_URL;

// Additional SEO image dimensions
export const SEO_IMAGE_DIMENSIONS = {
  OG_WIDTH: 1200,
  OG_HEIGHT: 630,
  TWITTER_WIDTH: 1200,
  TWITTER_HEIGHT: 600,
};

// Verification codes for search engines (placeholders)
export const VERIFICATION = {
  GOOGLE: '',
  BING: '',
  YANDEX: '',
  PINTEREST: '',
};

// JSON-LD Organization Schema (Global)
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BRAND.NAME,
  url: BRAND.WEBSITE_URL,
  logo: `${BRAND.WEBSITE_URL}${BRAND.LOGO_URL}`,
  description: BRAND.DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.ADDRESS,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT.PHONE,
    contactType: 'Customer Service',
    email: CONTACT.EMAIL,
  },
  sameAs: [
    SOCIAL_URLS.FACEBOOK,
    SOCIAL_URLS.TWITTER,
    SOCIAL_URLS.LINKEDIN,
    SOCIAL_URLS.INSTAGRAM,
  ],
};
