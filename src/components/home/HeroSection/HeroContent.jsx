// Hero Content Component

import Link from 'next/link';
import { Icon } from '@/icons';
import { HERO_CONTENT, HERO_CTA_BUTTONS } from '@/constants/hero.constant';

export default function HeroContent() {
  return (
    <div className="hero-content">
      <div className="hero-content-inner">
        {/* Title */}
        <h1 className="hero-title">{HERO_CONTENT.title}</h1>

        {/* Subtitle */}
        <p className="hero-subtitle">{HERO_CONTENT.subtitle}</p>

        {/* CTA Buttons */}
        <div className="hero-cta-buttons">
          {HERO_CTA_BUTTONS.map((button) => (
            <Link
              key={button.id}
              href={button.href}
              className={`hero-cta-button hero-cta-button-${button.variant}`}
            >
              {button.label}
              <Icon name="arrowRight" size={18} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
