'use client';

// Global Error Handler - Catches errors in root layout
// This is a fallback when error.js fails

import { ERROR_MSG, ERROR_CTA_BUTTONS } from '@/constants/error.constant';

export default function GlobalError({ error, reset }) {
  const criticalButtons = [
    ERROR_CTA_BUTTONS.TRY_AGAIN,
    ERROR_CTA_BUTTONS.GO_HOME,
  ];

  return (
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <div style={{
            maxWidth: '600px',
            width: '100%',
            background: '#ffffff',
            padding: '3rem',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            {/* Error Icon */}
            <div style={{
              width: '100px',
              height: '100px',
              margin: '0 auto 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)',
              borderRadius: '50%',
              fontSize: '3rem',
              color: '#ffffff'
            }}>
              ✕
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#1a1a1a',
              marginBottom: '1rem'
            }}>
              {ERROR_MSG.CRITICAL_TITLE}
            </h1>

            {/* Message */}
            <p style={{
              fontSize: '1.1rem',
              color: '#666666',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {ERROR_MSG.CRITICAL_MESSAGE}
            </p>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {criticalButtons.map((button) => {
                const handleClick = () => {
                  if (button.action === 'reset') {
                    reset();
                  } else if (button.action === 'navigate') {
                    window.location.href = button.href;
                  }
                };

                const buttonStyles = {
                  padding: '0.875rem 2rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  ...(button.variant === 'primary' ? {
                    border: 'none',
                    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                    color: '#ffffff'
                  } : {
                    border: '2px solid #1a1a1a',
                    background: 'transparent',
                    color: '#1a1a1a'
                  })
                };

                return (
                  <button
                    key={button.id}
                    onClick={handleClick}
                    style={buttonStyles}
                  >
                    {button.label}
                  </button>
                );
              })}
            </div>

            {/* Development Error Details */}
            {process.env.NODE_ENV === 'development' && error && (
              <details style={{
                marginTop: '2rem',
                textAlign: 'left',
                background: '#f9f9f9',
                padding: '1rem',
                borderRadius: '8px'
              }}>
                <summary style={{ cursor: 'pointer', fontWeight: '600' }}>
                  Error Details (Development)
                </summary>
                <pre style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: '#ffffff',
                  borderRadius: '6px',
                  overflow: 'auto',
                  fontSize: '0.85rem'
                }}>
                  {error?.message || error?.toString()}
                  {'\n\n'}
                  {error?.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
