'use client';

// Reusable Contact Form Component

import { useState } from 'react';
import { sendContactEmail } from '@/app/actions/contact.action';
import { Icon } from '@/icons';
import {
  CONTACT_FORM_FIELDS,
  CONTACT_FORM_TEXT,
} from '@/constants/contact.constant';
import './contactForm.css';

export default function ContactForm({ onClose, showTitle = true }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setSuccessMessage('');

    const formData = new FormData(e.target);

    try {
      const result = await sendContactEmail(formData);

      if (result.success) {
        setSuccessMessage(CONTACT_FORM_TEXT.SUCCESS_MESSAGE);
        e.target.reset();
        
        // Auto close after 2 seconds if onClose is provided
        if (onClose) {
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      } else if (result.errors) {
        setErrors(result.errors);
      } else {
        setErrors({ general: result.error || CONTACT_FORM_TEXT.ERROR_MESSAGE });
      }
    } catch (error) {
      setErrors({ general: CONTACT_FORM_TEXT.ERROR_MESSAGE });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      {/* Header */}
      {showTitle && (
        <div className="contact-form-header">
          <div>
            <h2 className="contact-form-title">{CONTACT_FORM_TEXT.TITLE}</h2>
            <p className="contact-form-subtitle">{CONTACT_FORM_TEXT.SUBTITLE}</p>
          </div>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="contact-form-close"
              aria-label="Close"
            >
              <Icon name="close" size={24} />
            </button>
          )}
        </div>
      )}

      {/* Success Message */}
      {successMessage && (
        <div className="contact-form-success">
          <Icon name="close" size={20} />
          <span>{successMessage}</span>
        </div>
      )}

      {/* General Error */}
      {errors.general && (
        <div className="contact-form-error-general">
          {errors.general}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        {/* Name Field */}
        <div className="contact-form-field">
          <label htmlFor="name" className="contact-form-label">
            {CONTACT_FORM_FIELDS.NAME.label}
          </label>
          <input
            type={CONTACT_FORM_FIELDS.NAME.type}
            id="name"
            name={CONTACT_FORM_FIELDS.NAME.name}
            placeholder={CONTACT_FORM_FIELDS.NAME.placeholder}
            required={CONTACT_FORM_FIELDS.NAME.required}
            minLength={CONTACT_FORM_FIELDS.NAME.minLength}
            maxLength={CONTACT_FORM_FIELDS.NAME.maxLength}
            className={`contact-form-input ${errors.name ? 'error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.name && (
            <span className="contact-form-error">{errors.name}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="contact-form-field">
          <label htmlFor="email" className="contact-form-label">
            {CONTACT_FORM_FIELDS.EMAIL.label}
          </label>
          <input
            type={CONTACT_FORM_FIELDS.EMAIL.type}
            id="email"
            name={CONTACT_FORM_FIELDS.EMAIL.name}
            placeholder={CONTACT_FORM_FIELDS.EMAIL.placeholder}
            required={CONTACT_FORM_FIELDS.EMAIL.required}
            className={`contact-form-input ${errors.email ? 'error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.email && (
            <span className="contact-form-error">{errors.email}</span>
          )}
        </div>

        {/* Message Field */}
        <div className="contact-form-field">
          <label htmlFor="message" className="contact-form-label">
            {CONTACT_FORM_FIELDS.MESSAGE.label}
          </label>
          <textarea
            id="message"
            name={CONTACT_FORM_FIELDS.MESSAGE.name}
            placeholder={CONTACT_FORM_FIELDS.MESSAGE.placeholder}
            required={CONTACT_FORM_FIELDS.MESSAGE.required}
            minLength={CONTACT_FORM_FIELDS.MESSAGE.minLength}
            maxLength={CONTACT_FORM_FIELDS.MESSAGE.maxLength}
            rows={CONTACT_FORM_FIELDS.MESSAGE.rows}
            className={`contact-form-textarea ${errors.message ? 'error' : ''}`}
            disabled={isSubmitting}
          />
          {errors.message && (
            <span className="contact-form-error">{errors.message}</span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="contact-form-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? CONTACT_FORM_TEXT.BUTTON_SENDING : CONTACT_FORM_TEXT.BUTTON_TEXT}
        </button>
      </form>
    </div>
  );
}
