'use client';

// Navbar Menu Item Component

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/icons';

export default function NavMenuItem({ item, onLinkClick }) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = pathname === item.href;

  const handleMouseEnter = () => {
    if (item.hasDropdown) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (item.hasDropdown) {
      setIsDropdownOpen(false);
    }
  };

  const handleClick = () => {
    if (onLinkClick) {
      onLinkClick();
    }
  };

  if (item.hasDropdown) {
    return (
      <li
        className="nav-item nav-item-dropdown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={`nav-link ${isActive ? 'active' : ''}`}>
          {item.label}
          <Icon name="chevronDown" size={14} className="dropdown-icon" />
        </button>

        {isDropdownOpen && (
          <ul className="nav-dropdown">
            {item.dropdownItems.map((subItem) => (
              <li key={subItem.id} className="nav-dropdown-item">
                <Link
                  href={subItem.href}
                  className="nav-dropdown-link"
                  onClick={handleClick}
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className="nav-item">
      <Link
        href={item.href}
        className={`nav-link ${isActive ? 'active' : ''}`}
        onClick={handleClick}
      >
        {item.label}
      </Link>
    </li>
  );
}
