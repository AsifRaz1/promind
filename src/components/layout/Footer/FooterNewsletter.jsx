'use client';

// Footer Newsletter Component

import { useState } from 'react';
import { Icon } from '@/icons';
import { FOOTER_NEWSLETTER } from '@/constants/footer.constant';

export default function FooterNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Implement newsletter subscription API call
    console.log('Newsletter subscription:', email);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="footer-newsletter">
      <p className="newsletter-title">{FOOTER_NEWSLETTER.title}</p>
      
      <form onSubmit={handleSubmit} className="newsletter-form">
        <div className="input-wrapper">
          <Icon name="email" size={20} className="input-icon" />
          <input
            type="email"
            placeholder={FOOTER_NEWSLETTER.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="newsletter-input"
            disabled={isSubmitting}
          />
        </div>
        <button 
          type="submit" 
          className="newsletter-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : FOOTER_NEWSLETTER.buttonText}
        </button>
      </form>
    </div>
  );
}
