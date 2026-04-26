'use client';

// Custom Hook - Click Outside Detector
// Reusable hook to detect clicks outside a component

import { useEffect } from 'react';

/**
 * Hook that triggers callback when user clicks outside the referenced element
 * @param {React.RefObject} ref - React ref of the element to monitor
 * @param {Function} callback - Function to call when click outside is detected
 * @param {boolean} isActive - Whether the hook should be active (default: true)
 */
export function useClickOutside(ref, callback, isActive = true) {
  useEffect(() => {
    // Only add listener if active
    if (!isActive) return;

    function handleClickOutside(event) {
      // If clicked element is outside the ref element, trigger callback
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback, isActive]);
}
