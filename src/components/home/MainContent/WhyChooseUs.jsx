// Why Choose Us Section Component

import { WHY_CHOOSE_US } from '@/constants/content.constant';

export default function WhyChooseUs() {
  return (
    <section className="content-section why-choose-section">
      <div className="content-container">
        {/* Header */}
        <div className="content-header">
          <span className="content-tagline">{WHY_CHOOSE_US.tagline}</span>
          <h2 className="content-title">{WHY_CHOOSE_US.title}</h2>
          <p className="content-description">{WHY_CHOOSE_US.description}</p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {WHY_CHOOSE_US.features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.id}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
