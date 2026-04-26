'use client';

// Scroll to Top Button with Circular Progress Indicator

import { Icon } from '@/icons';
import { useScrollProgress } from '@/hooks';
import './scrollToTop.css';

export default function ScrollToTop() {
  const { scrollProgress, isVisible } = useScrollProgress();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  // Calculate stroke-dashoffset for circular progress
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      className="scroll-to-top"
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      {/* SVG Circle Progress */}
      <svg className="scroll-progress-ring" width="50" height="50">
        {/* Background circle (light gray) */}
        <circle
          className="scroll-progress-ring-bg"
          cx="25"
          cy="25"
          r={radius}
          strokeWidth="3"
        />
        {/* Progress circle (dark, fills as you scroll) */}
        <circle
          className="scroll-progress-ring-progress"
          cx="25"
          cy="25"
          r={radius}
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>

      {/* Arrow Icon */}
      <Icon name="arrowUp" size={20} className="scroll-icon" />
    </button>
  );
}
