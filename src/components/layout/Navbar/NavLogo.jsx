// Navbar Logo Component

import Link from 'next/link';
import Image from 'next/image';
import { BRAND } from '@/constants/global.constant';
import { NAV_URLS } from '@/constants/global.constant';

export default function NavLogo() {
  return (
    <Link href={NAV_URLS.HOME} className="nav-logo">
      <Image
        src={BRAND.LOGO_URL}
        alt={BRAND.LOGO_ALT}
        width={120}
        height={40}
        priority
        style={{ objectFit: 'contain', maxHeight: '40px', width: 'auto' }}
      />
    </Link>
  );
}
