// Footer Bottom Component (Copyright & Legal Links)

import Link from 'next/link';
import { Icon } from '@/icons';
import { FOOTER_COPYRIGHT, FOOTER_LEGAL_LINKS } from '@/constants/footer.constant';
import { CONTACT } from '@/constants/global.constant';

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="footer-bottom-left">
        {/* Copyright */}
        <p className="copyright-text">{FOOTER_COPYRIGHT.text}</p>

        {/* Legal Links */}
        <div className="legal-links">
          {FOOTER_LEGAL_LINKS.map((link, index) => (
            <span key={link.id}>
              <Link href={link.href} className="legal-link">
                {link.label}
              </Link>
              {index < FOOTER_LEGAL_LINKS.length - 1 && (
                <span className="link-separator"> / </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="footer-bottom-right">
        {/* Email */}
        <a href={`mailto:${CONTACT.EMAIL}`} className="footer-contact-link">
          <Icon name="email" size={16} className="contact-icon" />
          <span>{CONTACT.EMAIL}</span>
        </a>

        {/* Phone */}
        <a href={`tel:${CONTACT.PHONE}`} className="footer-contact-link">
          <Icon name="phone" size={16} className="contact-icon" />
          <span>{CONTACT.PHONE_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
}
