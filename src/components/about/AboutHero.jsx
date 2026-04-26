// About Hero Component

import { ABOUT_HERO } from '@/constants/about.constant';

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        <h1 className="about-hero-title">{ABOUT_HERO.title}</h1>
        <p className="about-hero-subtitle">{ABOUT_HERO.subtitle}</p>
        <p className="about-hero-description">{ABOUT_HERO.description}</p>
      </div>
    </section>
  );
}
