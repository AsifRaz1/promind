// Contact Hero Component

import { CONTACT_HERO } from '@/constants/contact.constant';

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-container">
        <h1 className="contact-hero-title">{CONTACT_HERO.title}</h1>
        <p className="contact-hero-subtitle">{CONTACT_HERO.subtitle}</p>
        <p className="contact-hero-description">{CONTACT_HERO.description}</p>
      </div>
    </section>
  );
}
