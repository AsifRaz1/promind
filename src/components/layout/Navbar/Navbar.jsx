'use client';

// Main Navbar Component

import { useState, useEffect } from 'react';
import { Icon } from '@/icons';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavCTA from './NavCTA';
import MobileMenu from './MobileMenu';
import './navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <NavLogo />

        {/* Desktop Menu */}
        <div className="navbar-desktop">
          <NavMenu />
          <NavCTA />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Icon name="menu" size={24} />
        </button>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </div>
    </nav>
  );
}
