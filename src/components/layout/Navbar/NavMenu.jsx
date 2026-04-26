// Navbar Menu Component

import { NAV_MENU_ITEMS } from '@/constants/navbar.constant';
import NavMenuItem from './NavMenuItem';

export default function NavMenu({ onLinkClick }) {
  return (
    <ul className="nav-menu">
      {NAV_MENU_ITEMS.map((item) => (
        <NavMenuItem key={item.id} item={item} onLinkClick={onLinkClick} />
      ))}
    </ul>
  );
}
