// Navbar Constants

import { NAV_URLS } from './global.constant';

// Main navigation menu items
export const NAV_MENU_ITEMS = [
  {
    id: 1,
    label: 'Home',
    href: NAV_URLS.HOME,
  },
  {
    id: 2,
    label: 'About',
    href: NAV_URLS.ABOUT,
  },
  {
    id: 3,
    label: 'Services',
    href: NAV_URLS.SERVICES,
    hasDropdown: true,
    dropdownItems: [
      { id: 31, label: 'Business Consulting', href: `${NAV_URLS.SERVICES}/business-consulting` },
      { id: 32, label: 'Digital Transformation', href: `${NAV_URLS.SERVICES}/digital-transformation` },
      { id: 33, label: 'Strategy & Planning', href: `${NAV_URLS.SERVICES}/strategy-planning` },
      { id: 34, label: 'Management', href: `${NAV_URLS.SERVICES}/management` },
    ],
  },
  {
    id: 4,
    label: 'Portfolio',
    href: NAV_URLS.PORTFOLIO,
  },
  {
    id: 5,
    label: 'Team',
    href: NAV_URLS.TEAM,
  },
  {
    id: 6,
    label: 'Blog',
    href: NAV_URLS.BLOG,
  },
  {
    id: 7,
    label: 'Contact',
    href: NAV_URLS.CONTACT,
  },
];

// CTA Button
export const NAV_CTA = {
  label: 'Get Started',
  href: NAV_URLS.CONTACT,
};
