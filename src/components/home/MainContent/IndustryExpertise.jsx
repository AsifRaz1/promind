// Industry Expertise Section Component

import { INDUSTRY_EXPERTISE } from '@/constants/content.constant';

export default function IndustryExpertise() {
  return (
    <section className="content-section industry-section">
      <div className="content-container">
        {/* Header */}
        <div className="content-header">
          <span className="content-tagline">{INDUSTRY_EXPERTISE.tagline}</span>
          <h2 className="content-title">{INDUSTRY_EXPERTISE.title}</h2>
        </div>

        {/* Industries Grid */}
        <div className="industries-grid">
          {INDUSTRY_EXPERTISE.industries.map((industry) => (
            <div key={industry.id} className="industry-card">
              <h3 className="industry-name">{industry.name}</h3>
              <p className="industry-description">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
