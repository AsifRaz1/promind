'use client';

// Error Fallback UI - Shows when an error is caught

import { Icon } from '@/icons';
import { CONTACT } from '@/constants/global.constant';
import {
  ERROR_MSG,
  ERROR_CTA_BUTTONS,
  ERROR_VARIANTS,
  DEV_ERROR_LABELS
} from '@/constants/error.constant';
import './errorBoundary.css';

export default function ErrorFallback({ error, errorInfo, onReset, variant = ERROR_VARIANTS.PAGE }) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Different variants for different contexts
  const variants = {
    [ERROR_VARIANTS.PAGE]: {
      containerClass: 'error-boundary-page',
      title: ERROR_MSG.DEFAULT_TITLE,
      message: ERROR_MSG.DEFAULT_MESSAGE,
      showDetails: isDevelopment,
    },
    [ERROR_VARIANTS.SECTION]: {
      containerClass: 'error-boundary-section',
      title: ERROR_MSG.SECTION_TITLE,
      message: ERROR_MSG.SECTION_MESSAGE,
      showDetails: false,
    },
    [ERROR_VARIANTS.INLINE]: {
      containerClass: 'error-boundary-inline',
      title: ERROR_MSG.INLINE_TITLE,
      message: ERROR_MSG.INLINE_MESSAGE,
      showDetails: false,
    },
  };

  const config = variants[variant] || variants[ERROR_VARIANTS.PAGE];

  // Handle different button actions
  const handleAction = (action, href) => {
    switch (action) {
      case 'reset':
        if (onReset) onReset();
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

  // Get action buttons based on variant
  const getActionButtons = () => {
    if (variant === ERROR_VARIANTS.PAGE) {
      return [
        ERROR_CTA_BUTTONS.TRY_AGAIN,
        ERROR_CTA_BUTTONS.RELOAD_PAGE,
        ERROR_CTA_BUTTONS.GO_HOME,
      ];
    }
    return [ERROR_CTA_BUTTONS.TRY_AGAIN];
  };

  const actionButtons = onReset ? getActionButtons() : getActionButtons().filter(btn => btn.action !== 'reset');

  return (
    <div className={config.containerClass}>
      <div className="error-boundary-content">
        {/* Error Icon */}
        <div className="error-boundary-icon">
          <Icon name="close" size={variant === ERROR_VARIANTS.PAGE ? 64 : 40} />
        </div>

        {/* Error Title */}
        <h2 className="error-boundary-title">{config.title}</h2>

        {/* Error Message */}
        <p className="error-boundary-message">{config.message}</p>

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
        {config.showDetails && error && (
          <details className="error-boundary-details">
            <summary className="error-boundary-details-summary">
              {DEV_ERROR_LABELS.DETAILS_TITLE}
            </summary>
            <div className="error-boundary-details-content">
              <div className="error-detail-section">
                <h4>{DEV_ERROR_LABELS.ERROR_MESSAGE}</h4>
                <pre>{error.toString()}</pre>
              </div>

              {errorInfo?.componentStack && (
                <div className="error-detail-section">
                  <h4>{DEV_ERROR_LABELS.COMPONENT_STACK}</h4>
                  <pre>{errorInfo.componentStack}</pre>
                </div>
              )}

              {error.stack && (
                <div className="error-detail-section">
                  <h4>{DEV_ERROR_LABELS.STACK_TRACE}</h4>
                  <pre>{error.stack}</pre>
                </div>
              )}
            </div>
          </details>
        )}

        {/* Support Contact */}
        {variant === ERROR_VARIANTS.PAGE && (
          <div className="error-boundary-footer">
            <p className="error-boundary-support">
              {ERROR_MSG.SUPPORT_TEXT}{' '}
              <a href={`mailto:${CONTACT.SUPPORT_EMAIL}`}>
                {CONTACT.SUPPORT_EMAIL}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
