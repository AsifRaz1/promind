// Hero Section Constants

import { NAV_URLS } from './global.constant';

// Hero Section Content
export const HERO_CONTENT = {
  title: 'Transforming Business Through Strategic Consulting',
  subtitle: 'Empowering organizations to achieve excellence by delivering innovative solutions, expert guidance, and strategic insights tailored to drive sustainable growth and success',
  videoUrl: 'https://v.ftcdn.net/07/29/52/58/240_F_729525862_bH4QYsfvcGb3Z1OPiyo5rQFG0XrXU4Gq_ST.mp4',
  videoPoster: '/images/hero-poster.jpg', // Fallback poster image
};

// Hero CTA Buttons
export const HERO_CTA_BUTTONS = [
  {
    id: 1,
    label: 'Get Started',
    href: NAV_URLS.CONTACT,
    variant: 'primary',
  },
  {
    id: 2,
    label: 'Learn More',
    href: NAV_URLS.ABOUT,
    variant: 'secondary',
  },
];

// Hero Stats (optional)
export const HERO_STATS = [
  {
    id: 1,
    value: '10+',
    label: 'Years Experience',
  },
  {
    id: 2,
    value: '200+',
    label: 'Projects Completed',
  },
  {
    id: 3,
    value: '95%',
    label: 'Client Satisfaction',
  },
];
