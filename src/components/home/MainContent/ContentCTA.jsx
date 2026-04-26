// Content CTA Section Component

import Link from 'next/link';
import { Icon } from '@/icons';
import { CONTENT_CTA } from '@/constants/content.constant';

export default function ContentCTA() {
  return (
    <section className="content-section cta-section">
      <div className="content-container">
        <div className="cta-wrapper">
          <h2 className="cta-title">{CONTENT_CTA.title}</h2>
          <p className="cta-description">{CONTENT_CTA.description}</p>
          
          <div className="cta-buttons">
            <Link
              href={CONTENT_CTA.primaryButton.href}
              className="cta-button cta-button-primary"
            >
              {CONTENT_CTA.primaryButton.text}
              <Icon name="arrowRight" size={18} />
            </Link>
            <Link
              href={CONTENT_CTA.secondaryButton.href}
              className="cta-button cta-button-secondary"
            >
              {CONTENT_CTA.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
