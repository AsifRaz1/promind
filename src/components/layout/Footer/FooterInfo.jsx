// Footer Company Info Component

import Image from 'next/image';
import { BRAND } from '@/constants/global.constant';
import { FOOTER_COMPANY_INFO } from '@/constants/footer.constant';

export default function FooterInfo() {
  const { tagline, description, headquarters, phone, email } = FOOTER_COMPANY_INFO;

  return (
    <div className="footer-info">
      {/* Logo */}
      <div className="footer-logo">
        <Image
          src={BRAND.LOGO_URL}
          alt={BRAND.LOGO_ALT}
          width={150}
          height={50}
          priority
        />
      </div>

      {/* Description */}
      <p className="footer-description">{description}</p>

      {/* Headquarters */}
      <div className="footer-contact-section">
        <h4 className="contact-title">{headquarters.title}</h4>
        <p className="contact-text">{headquarters.address}</p>
      </div>

      {/* Phone */}
      <div className="footer-contact-item">
        <span className="contact-label">{phone.label}</span>
        <a href={`tel:${phone.value}`} className="contact-link">
          {phone.display}
        </a>
      </div>

      {/* Email */}
      <div className="footer-contact-item">
        <span className="contact-label">{email.label}</span>
        <a href={`mailto:${email.value}`} className="contact-link">
          {email.value}
        </a>
      </div>
    </div>
  );
}
