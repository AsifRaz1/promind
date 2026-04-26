'use client';

// Mobile Menu Component

import { useEffect } from 'react';
import { Icon } from '@/icons';
import NavMenu from './NavMenu';
import NavCTA from './NavCTA';

export default function MobileMenu({ isOpen, onClose }) {
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="mobile-menu-overlay" onClick={onClose}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {/* Close Button */}
        <button className="mobile-menu-close" onClick={onClose} aria-label="Close menu">
          <Icon name="close" size={24} />
        </button>

        {/* Menu Items */}
        <div className="mobile-menu-content">
          <NavMenu onLinkClick={onClose} />
          <div className="mobile-menu-cta">
            <NavCTA />
          </div>
        </div>
      </div>
    </>
  );
}
