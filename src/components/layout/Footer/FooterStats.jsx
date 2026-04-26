// Footer Stats Component

import { FOOTER_STATS } from '@/constants/footer.constant';

export default function FooterStats() {
  return (
    <div className="footer-stats">
      {FOOTER_STATS.map((stat) => (
        <div key={stat.id} className="stat-item">
          <h3 className="stat-value">{stat.value}</h3>
          <p className="stat-label">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
