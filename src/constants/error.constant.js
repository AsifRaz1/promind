// Error and Error Boundary Constants

import { NAV_URLS } from './global.constant';

export const ERROR_MSG = {
  DEFAULT_TITLE: 'Oops! Something went wrong',
  DEFAULT_MESSAGE: 'We encountered an unexpected error. Our team has been notified and we\'re working on a fix.',
  SECTION_TITLE: 'Unable to load this section',
  SECTION_MESSAGE: 'Please try refreshing the page.',
  INLINE_TITLE: 'Error loading content',
  INLINE_MESSAGE: 'Please try again.',
  CRITICAL_TITLE: 'Critical Error',
  CRITICAL_MESSAGE: 'We encountered a critical error. Please try reloading the page or contact support.',
  SUPPORT_TEXT: 'Need help? Contact us at',
};

export const NOT_FOUND_MSG = {
  TITLE: '404',
  HEADING: 'Page Not Found',
  MESSAGE: 'Sorry, we couldn\'t find the page you\'re looking for. It might have been moved, deleted, or never existed.',
  SUGGESTIONS_TITLE: 'Quick Links:',
};

export const ERROR_CTA_BUTTONS = {
  TRY_AGAIN: {
    id: 'try-again',
    label: 'Try Again',
    variant: 'primary',
    action: 'reset',
  },
  RELOAD_PAGE: {
    id: 'reload-page',
    label: 'Reload Page',
    variant: 'secondary',
    action: 'reload',
  },
  GO_HOME: {
    id: 'go-home',
    label: 'Go to Homepage',
    variant: 'outline',
    action: 'navigate',
    href: NAV_URLS.HOME,
  },
};

export const NOT_FOUND_CTA_BUTTONS = [
  {
    id: 'back-home',
    label: 'Back to Home',
    icon: 'arrowLeft',
    iconSize: 18,
    variant: 'primary',
    href: NAV_URLS.HOME,
  },
  {
    id: 'contact-support',
    label: 'Contact Support',
    variant: 'outline',
    href: NAV_URLS.CONTACT,
  },
];

export const NOT_FOUND_QUICK_LINKS = [
  {
    id: 'about',
    label: 'About Us',
    href: NAV_URLS.ABOUT,
  },
  {
    id: 'services',
    label: 'Services',
    href: NAV_URLS.SERVICES,
  },
  {
    id: 'portfolio',
    label: 'Portfolio',
    href: NAV_URLS.PORTFOLIO,
  },
  {
    id: 'blog',
    label: 'Blog',
    href: NAV_URLS.BLOG,
  },
];

export const LOADING_MSG = {
  DEFAULT: 'Loading...',
  PAGE: 'Loading page...',
  CONTENT: 'Loading content...',
};

export const ERROR_VARIANTS = {
  PAGE: 'page',
  SECTION: 'section',
  INLINE: 'inline',
};

export const DEV_ERROR_LABELS = {
  DETAILS_TITLE: '🔧 Error Details (Development Only)',
  ERROR_MESSAGE: 'Error Message:',
  COMPONENT_STACK: 'Component Stack:',
  STACK_TRACE: 'Stack Trace:',
  ERROR_DIGEST: 'Error Digest:',
};
