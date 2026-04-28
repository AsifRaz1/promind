// Footer Social Links Component

import Link from 'next/link';
import { SOCIAL_URLS } from '@/constants/global.constant';
import { Icon } from '@/icons';

// Social media links data
const SOCIAL_LINKS = [
  {
    id: 'facebook',
    name: 'Facebook',
    url: SOCIAL_URLS.FACEBOOK,
    icon: 'facebook',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: SOCIAL_URLS.TWITTER,
    icon: 'twitter',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: SOCIAL_URLS.LINKEDIN,
    icon: 'linkedin',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: SOCIAL_URLS.INSTAGRAM,
    icon: 'instagram',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: SOCIAL_URLS.YOUTUBE,
    icon: 'youtube',
  },
];

export default function FooterSocial() {
  return (
    <div className="footer-social">
      <h4 className="footer-section-title">Follow Us</h4>
      <div className="footer-social-links">
        {SOCIAL_LINKS.map((social) => (
          <Link
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label={social.name}
          >
            <Icon name={social.icon} size={20} />
          </Link>
        ))}
      </div>
    </div>
  );
}
