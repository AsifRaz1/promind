'use client';

// Custom hook to track scroll progress

import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;

      setScrollProgress(Math.min(progress, 100));

      // Show button after scrolling 20% of the page
      setIsVisible(progress > 20);
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scrollProgress, isVisible };
}
