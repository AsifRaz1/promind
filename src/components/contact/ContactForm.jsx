'use client';

// Contact Form Component

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/app/actions/contact.action';
import { CONTACT_FORM } from '@/constants/contact.constant';
import { Icon } from '@/icons';

const initialState = {
  success: false,
  message: '',
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      className="contact-form-submit"
      disabled={pending}
    >
      {pending ? (
        <>
          <Icon name="loading" size={18} />
          {CONTACT_FORM.submitButton.loadingText}
        </>
      ) : (
        <>
          {CONTACT_FORM.submitButton.text}
          <Icon name="arrowRight" size={18} />
        </>
      )}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <section className="contact-section contact-form-section">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-tagline">{CONTACT_FORM.tagline}</span>
          <h2 className="contact-title">{CONTACT_FORM.title}</h2>
          <p className="contact-description">{CONTACT_FORM.description}</p>
        </div>

        <form action={formAction} className="contact-form">
          {/* Status Message */}
          {state.message && (
            <div className={`contact-form-message ${state.success ? 'success' : 'error'}`}>
              {state.message}
            </div>
          )}

          <div className="contact-form-grid">
            {/* Name Field */}
            <div className="contact-form-field">
              <label htmlFor="name" className="contact-form-label">
                {CONTACT_FORM.fields.name.label}
                {CONTACT_FORM.fields.name.required && <span className="required">*</span>}
              </label>
              <input
                type={CONTACT_FORM.fields.name.type}
                id="name"
                name="name"
                placeholder={CONTACT_FORM.fields.name.placeholder}
                required={CONTACT_FORM.fields.name.required}
                className="contact-form-input"
              />
              {state.errors?.name && (
                <span className="contact-form-error">{state.errors.name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="contact-form-field">
              <label htmlFor="email" className="contact-form-label">
                {CONTACT_FORM.fields.email.label}
                {CONTACT_FORM.fields.email.required && <span className="required">*</span>}
              </label>
              <input
                type={CONTACT_FORM.fields.email.type}
                id="email"
                name="email"
                placeholder={CONTACT_FORM.fields.email.placeholder}
                required={CONTACT_FORM.fields.email.required}
                className="contact-form-input"
              />
              {state.errors?.email && (
                <span className="contact-form-error">{state.errors.email}</span>
              )}
            </div>

            {/* Phone Field */}
            <div className="contact-form-field">
              <label htmlFor="phone" className="contact-form-label">
                {CONTACT_FORM.fields.phone.label}
              </label>
              <input
                type={CONTACT_FORM.fields.phone.type}
                id="phone"
                name="phone"
                placeholder={CONTACT_FORM.fields.phone.placeholder}
                className="contact-form-input"
              />
              {state.errors?.phone && (
                <span className="contact-form-error">{state.errors.phone}</span>
              )}
            </div>

            {/* Company Field */}
            <div className="contact-form-field">
              <label htmlFor="company" className="contact-form-label">
                {CONTACT_FORM.fields.company.label}
              </label>
              <input
                type={CONTACT_FORM.fields.company.type}
                id="company"
                name="company"
                placeholder={CONTACT_FORM.fields.company.placeholder}
                className="contact-form-input"
              />
            </div>
          </div>

          {/* Subject Field - Full Width */}
          <div className="contact-form-field">
            <label htmlFor="subject" className="contact-form-label">
              {CONTACT_FORM.fields.subject.label}
              {CONTACT_FORM.fields.subject.required && <span className="required">*</span>}
            </label>
            <input
              type={CONTACT_FORM.fields.subject.type}
              id="subject"
              name="subject"
              placeholder={CONTACT_FORM.fields.subject.placeholder}
              required={CONTACT_FORM.fields.subject.required}
              className="contact-form-input"
            />
            {state.errors?.subject && (
              <span className="contact-form-error">{state.errors.subject}</span>
            )}
          </div>

          {/* Message Field - Full Width */}
          <div className="contact-form-field">
            <label htmlFor="message" className="contact-form-label">
              {CONTACT_FORM.fields.message.label}
              {CONTACT_FORM.fields.message.required && <span className="required">*</span>}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={CONTACT_FORM.fields.message.placeholder}
              required={CONTACT_FORM.fields.message.required}
              rows={CONTACT_FORM.fields.message.rows}
              className="contact-form-textarea"
            />
            {state.errors?.message && (
              <span className="contact-form-error">{state.errors.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
