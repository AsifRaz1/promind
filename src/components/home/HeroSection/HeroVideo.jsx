'use client';

// Hero Video Background Component

import { useEffect, useRef } from 'react';
import { HERO_CONTENT } from '@/constants/hero.constant';

export default function HeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video plays (some browsers require user interaction)
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="hero-video-container">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        poster={HERO_CONTENT.videoPoster}
      >
        <source src={HERO_CONTENT.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="hero-video-overlay"></div>
    </div>
  );
}
