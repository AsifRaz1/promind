// Our Values Component

import { OUR_VALUES } from '@/constants/about.constant';

export default function OurValues() {
  return (
    <section className="about-section values-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Our Core Values</h2>
          <p className="about-description">
            These values guide everything we do and shape how we work with our clients.
          </p>
        </div>

        <div className="values-grid">
          {OUR_VALUES.map((value) => (
            <div key={value.id} className="value-card">
              <div className="value-number">{value.id}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
