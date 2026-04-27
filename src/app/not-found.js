
import Link from 'next/link';
import { Icon } from '@/icons';
import { NOT_FOUND_MSG, NOT_FOUND_CTA_BUTTONS, NOT_FOUND_QUICK_LINKS } from '@/constants/error.constant';
import '@/components/common/ErrorBoundary/errorBoundary.css';

export default function NotFound() {
  return (
    <div className="error-boundary-page">
      <div className="error-boundary-content">
        {/* 404 Icon/Number */}
        <div style={{
          fontSize: '8rem',
          fontWeight: '900',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
          lineHeight: '1'
        }}>
          {NOT_FOUND_MSG.TITLE}
        </div>

        {/* Title */}
        <h1 className="error-boundary-title">{NOT_FOUND_MSG.HEADING}</h1>

        {/* Message */}
        <p className="error-boundary-message">
          {NOT_FOUND_MSG.MESSAGE}
        </p>

        {/* Action Buttons */}
        <div className="error-boundary-actions">
          {NOT_FOUND_CTA_BUTTONS.map((button) => (
            <Link
              key={button.id}
              href={button.href}
              className={`error-boundary-btn error-boundary-btn-${button.variant}`}
            >
              {button.icon && (
                <Icon
                  name={button.icon}
                  size={button.iconSize}
                  style={{ marginRight: '0.5rem' }}
                />
              )}
              {button.label}
            </Link>
          ))}
        </div>

        {/* Quick Links */}
        <div style={{ marginTop: '3rem' }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#666666',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            {NOT_FOUND_MSG.SUGGESTIONS_TITLE}
          </p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center'
          }}>
            {NOT_FOUND_QUICK_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                style={{
                  color: '#1a1a1a',
                  textDecoration: 'underline',
                  fontSize: '0.95rem'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
