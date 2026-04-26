// Main Hero Section Component

import HeroVideo from './HeroVideo';
import HeroContent from './HeroContent';
import HeroStats from './HeroStats';
import './hero.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Video Background */}
      <HeroVideo />

      {/* Main Content */}
      <div className="hero-container">
        <HeroContent />
        
        {/* Stats */}
        <HeroStats />
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}
