// Central Icon System
// Import icons from react-icons (install: npm install react-icons)

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FiArrowRight, FiArrowLeft, FiArrowUp } from 'react-icons/fi';
import { HiMenu, HiX } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import { BsChatDots } from 'react-icons/bs';

// Icon mapping object
const ICONS = {
  // Social Media
  facebook: FaFacebookF,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  youtube: FaYoutube,
  github: FaGithub,

  // Contact
  email: MdEmail,
  phone: MdPhone,
  location: MdLocationOn,

  // Arrows
  arrowRight: FiArrowRight,
  arrowLeft: FiArrowLeft,
  arrowUp: FiArrowUp,
  chevronDown: IoChevronDown,
  chevronUp: IoChevronUp,

  // Menu
  menu: HiMenu,
  close: HiX,

  // Other
  search: BiSearch,
  loading: AiOutlineLoading3Quarters,
  chat: BsChatDots,
};

// Icon Component
export function Icon({ name, size = 18, color, className, ...props }) {
  const C = ICONS[name];
  if (!C) return null;
  return <C size={size} color={color} className={className} {...props} />;
}

// Export ICONS map for direct access if needed
export { ICONS };
