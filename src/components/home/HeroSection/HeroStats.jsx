// Hero Stats Component

import { HERO_STATS } from '@/constants/hero.constant';

export default function HeroStats() {
  return (
    <div className="hero-stats">
      {HERO_STATS.map((stat, index) => (
        <div key={stat.id} className="hero-stat-item">
          <div className="hero-stat-value">{stat.value}</div>
          <div className="hero-stat-label">{stat.label}</div>
          {index < HERO_STATS.length - 1 && (
            <div className="hero-stat-divider"></div>
          )}
        </div>
      ))}
    </div>
  );
}
