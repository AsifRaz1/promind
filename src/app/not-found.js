import Link from 'next/link';
import { NOT_FOUND_MSG, NOT_FOUND_QUICK_LINKS } from '@/constants/error.constant';
import { NAV_URLS } from '@/constants/global.constant';

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      {/* 404 */}
      <h1 style={{
        fontSize: '6rem',
        fontWeight: '400',
        color: '#888888',
        margin: '0 0 1rem 0'
      }}>
        {NOT_FOUND_MSG.TITLE}
      </h1>

      {/* Page Not Found */}
      <h2 style={{
        fontSize: '1.5rem',
        fontWeight: '400',
        color: '#666666',
        margin: '0 0 1rem 0'
      }}>
        {NOT_FOUND_MSG.HEADING}
      </h2>

      {/* Message */}
      <p style={{
        fontSize: '1rem',
        color: '#999999',
        margin: '0 0 2rem 0',
        maxWidth: '500px'
      }}>
        {NOT_FOUND_MSG.MESSAGE}
      </p>

      {/* Buttons */}
      <div style={{
        display: 'flex',
        gap: '0.75rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link
          href={NAV_URLS.HOME}
          style={{
            padding: '0.625rem 1rem',
            background: '#1a1a1a',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '0.9rem'
          }}
        >
          Back to Home
        </Link>

        <Link
          href={NAV_URLS.CONTACT}
          style={{
            padding: '0.625rem 1rem',
            background: 'transparent',
            color: '#1a1a1a',
            textDecoration: 'none',
            border: '1px solid #1a1a1a',
            borderRadius: '4px',
            fontSize: '0.9rem'
          }}
        >
          Contact Support
        </Link>
      </div>

      {/* Quick Links */}
      <div>
        <p style={{
          fontSize: '0.85rem',
          color: '#999999',
          margin: '0 0 0.75rem 0'
        }}>
          {NOT_FOUND_MSG.SUGGESTIONS_TITLE}
        </p>
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {NOT_FOUND_QUICK_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              style={{
                color: '#666666',
                textDecoration: 'underline',
                fontSize: '0.9rem'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
