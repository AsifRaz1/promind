// Footer Constants

import { BRAND, CONTACT, NAV_URLS } from './global.constant';

// Footer stats/achievements
export const FOOTER_STATS = [
  {
    id: 1,
    value: '73',
    label: 'Happy Clients',
  },
  {
    id: 2,
    value: '212',
    label: 'Projects',
  },
  {
    id: 3,
    value: '4,144',
    label: 'Hours of Work',
  },
];

// Footer company info
export const FOOTER_COMPANY_INFO = {
  tagline: BRAND.TAGLINE,
  description: 'Re-defining rules for consultancy market',
  headquarters: {
    title: 'Headquarters:',
    address: CONTACT.ADDRESS,
  },
  phone: {
    label: 'Phone:',
    value: CONTACT.PHONE,
    display: CONTACT.PHONE_DISPLAY,
  },
  email: {
    label: 'Email:',
    value: CONTACT.EMAIL,
  },
};

// Newsletter section
export const FOOTER_NEWSLETTER = {
  title: 'Subscribe to Our Newsletter to get Important News & Job Openings inside Scoops',
  placeholder: 'Enter your Email',
  buttonText: 'Subscribe',
};

// Footer legal links
export const FOOTER_LEGAL_LINKS = [
  {
    id: 1,
    label: 'Terms of Use',
    href: NAV_URLS.TERMS_OF_SERVICE,
  },
  {
    id: 2,
    label: 'Privacy Policy',
    href: NAV_URLS.PRIVACY_POLICY,
  },
];

// Footer copyright
export const FOOTER_COPYRIGHT = {
  year: new Date().getFullYear(),
  text: `Copyrights © ${new Date().getFullYear()} All Rights Reserved by ${BRAND.NAME}`,
};
