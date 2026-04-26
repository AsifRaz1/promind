// Navbar CTA Button Component

import Link from 'next/link';
import { NAV_CTA } from '@/constants/navbar.constant';

export default function NavCTA() {
  return (
    <Link href={NAV_CTA.href} className="nav-cta">
      {NAV_CTA.label}
    </Link>
  );
}
