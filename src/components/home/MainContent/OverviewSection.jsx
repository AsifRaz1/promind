// Overview Section Component

import { OVERVIEW_SECTION } from '@/constants/content.constant';

export default function OverviewSection() {
  return (
    <section className="content-section overview-section">
      <div className="content-container">
        {/* Header */}
        <div className="content-header">
          <span className="content-tagline">{OVERVIEW_SECTION.tagline}</span>
          <h2 className="content-title">{OVERVIEW_SECTION.title}</h2>
          <p className="content-description">{OVERVIEW_SECTION.description}</p>
        </div>

        {/* Highlights Grid */}
        <div className="highlights-grid">
          {OVERVIEW_SECTION.highlights.map((highlight) => (
            <div key={highlight.id} className="highlight-card">
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
