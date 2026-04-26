'use client';

// Generic Reusable Drawer Component

import { useEffect, useRef } from 'react';
import { Icon } from '@/icons';
import { useClickOutside } from '@/hooks/useClickOutside';
import './drawer.css';

export default function Drawer({
  isOpen,
  onClose,
  children,
  position = 'right', // 'left' or 'right'
  width = '100%', // full width by default for mobile
  showCloseButton = true,
  closeOnOverlayClick = true,
}) {
  const drawerRef = useRef(null);

  // Close on click outside
  useClickOutside(drawerRef, onClose, isOpen && closeOnOverlayClick);

  // Prevent body scroll when drawer is open
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
      <div
        className="drawer-overlay"
        onClick={closeOnOverlayClick ? onClose : undefined}
      />

      {/* Drawer */}
      <div ref={drawerRef} className={`drawer drawer-${position} ${isOpen ? 'open' : ''}`} style={{ width }}>
        {/* Close Button */}
        {showCloseButton && (
          <button
            className="drawer-close"
            onClick={onClose}
            aria-label="Close drawer"
          >
            <Icon name="close" size={24} />
          </button>
        )}

        {/* Content */}
        <div className="drawer-content">
          {children}
        </div>
      </div>
    </>
  );
}
