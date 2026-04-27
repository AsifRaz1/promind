'use client';

// Root Error Page - Catches errors in the entire app
// Next.js automatically uses this for error handling

import { Icon } from '@/icons';
import { CONTACT } from '@/constants/global.constant';
import { ERROR_MSG, ERROR_CTA_BUTTONS, DEV_ERROR_LABELS } from '@/constants/error.constant';
import '@/components/common/ErrorBoundary/errorBoundary.css';

export default function Error({ error, reset }) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Log error in development
  if (isDevelopment) {
    console.error('App Error:', error);
  }

  // Handle different button actions
  const handleAction = (action, href) => {
    switch (action) {
      case 'reset':
        reset();
        break;
      case 'reload':
        window.location.reload();
        break;
      case 'navigate':
        window.location.href = href;
        break;
      default:
        break;
    }
  };

  // Get action buttons for page variant
  const actionButtons = [
    ERROR_CTA_BUTTONS.TRY_AGAIN,
    ERROR_CTA_BUTTONS.RELOAD_PAGE,
    ERROR_CTA_BUTTONS.GO_HOME,
  ];

  return (
    <div className="error-boundary-page">
      <div className="error-boundary-content">
        {/* Error Icon */}
        <div className="error-boundary-icon">
          <Icon name="close" size={64} />
        </div>

        {/* Error Title */}
        <h2 className="error-boundary-title">{ERROR_MSG.DEFAULT_TITLE}</h2>

        {/* Error Message */}
        <p className="error-boundary-message">
          {ERROR_MSG.DEFAULT_MESSAGE}
        </p>

        {/* Action Buttons */}
        <div className="error-boundary-actions">
          {actionButtons.map((button) => (
            <button
              key={button.id}
              className={`error-boundary-btn error-boundary-btn-${button.variant}`}
              onClick={() => handleAction(button.action, button.href)}
            >
              {button.label}
            </button>
          ))}
        </div>

        {/* Error Details (Development Only) */}
        {isDevelopment && error && (
          <details className="error-boundary-details">
            <summary className="error-boundary-details-summary">
              {DEV_ERROR_LABELS.DETAILS_TITLE}
            </summary>
            <div className="error-boundary-details-content">
              <div className="error-detail-section">
                <h4>{DEV_ERROR_LABELS.ERROR_MESSAGE}</h4>
                <pre>{error.message || error.toString()}</pre>
              </div>

              {error.stack && (
                <div className="error-detail-section">
                  <h4>{DEV_ERROR_LABELS.STACK_TRACE}</h4>
                  <pre>{error.stack}</pre>
                </div>
              )}

              {error.digest && (
                <div className="error-detail-section">
                  <h4>{DEV_ERROR_LABELS.ERROR_DIGEST}</h4>
                  <pre>{error.digest}</pre>
                </div>
              )}
            </div>
          </details>
        )}

        {/* Support Contact */}
        <div className="error-boundary-footer">
          <p className="error-boundary-support">
            {ERROR_MSG.SUPPORT_TEXT}{' '}
            <a href={`mailto:${CONTACT.SUPPORT_EMAIL}`}>
              {CONTACT.SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
