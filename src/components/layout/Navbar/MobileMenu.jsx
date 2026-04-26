'use client';

// Mobile Menu Component

import Drawer from '@/components/common/Drawer';
import NavMenu from './NavMenu';
import NavCTA from './NavCTA';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      position="right"
      width="100%"
      showCloseButton={true}
      closeOnOverlayClick={true}
    >
      {/* Menu Items */}
      <div className="mobile-menu-content">
        <NavMenu onLinkClick={onClose} />
        <div className="mobile-menu-cta">
          <NavCTA />
        </div>
      </div>
    </Drawer>
  );
}
