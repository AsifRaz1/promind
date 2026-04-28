// Main Footer Component

import FooterInfo from './FooterInfo';
import FooterStats from './FooterStats';
import FooterNewsletter from './FooterNewsletter';
import FooterSocial from './FooterSocial';
import FooterBottom from './FooterBottom';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Stats at Top - Full Width */}
        <FooterStats />

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Three Column Section */}
        <div className="footer-three-columns">
          {/* Left: Company Info */}
          <div className="footer-column-left">
            <FooterInfo />
          </div>

          {/* Middle: Newsletter */}
          <div className="footer-column-middle">
            <FooterNewsletter />
          </div>

          {/* Right: Social Links */}
          <div className="footer-column-right">
            <FooterSocial />
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
