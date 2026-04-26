// Main Footer Component

import FooterInfo from './FooterInfo';
import FooterStats from './FooterStats';
import FooterNewsletter from './FooterNewsletter';
import FooterBottom from './FooterBottom';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Left: Company Info */}
          <div className="footer-column footer-column-info">
            <FooterInfo />
          </div>

          {/* Right: Stats & Newsletter */}
          <div className="footer-column footer-column-content">
            <FooterStats />
            <FooterNewsletter />
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <FooterBottom />
      </div>
    </footer>
  );
}
