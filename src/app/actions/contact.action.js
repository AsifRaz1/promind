'use server';

// Contact Form Server Action - Simple Static Site Version
// No EmailJS, no database - just validation and logging

/**
 * Sanitize input to prevent XSS attacks
 */
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .substring(0, 1000); // Limit length
}

/**
 * Handle contact form submission
 * @param {Object} prevState - Previous form state (required by useFormState)
 * @param {FormData} formData - Form data from submission
 * @returns {Object} Result with success/error status
 */
export async function submitContactForm(prevState, formData) {
  try {
    // Extract and sanitize form data
    const name = sanitizeInput(formData.get('name') || '');
    const email = sanitizeInput(formData.get('email') || '').toLowerCase();
    const phone = sanitizeInput(formData.get('phone') || '');
    const company = sanitizeInput(formData.get('company') || '');
    const subject = sanitizeInput(formData.get('subject') || '');
    const message = sanitizeInput(formData.get('message') || '');

    // Validation
    const errors = {};

    // Name validation
    if (!name || name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    if (name && name.length > 50) {
      errors.name = 'Name must be less than 50 characters';
    }

    // Email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation (optional field)
    if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Subject validation
    if (!subject || subject.length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }
    if (subject && subject.length > 100) {
      errors.subject = 'Subject must be less than 100 characters';
    }

    // Message validation
    if (!message || message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    if (message && message.length > 1000) {
      errors.message = 'Message must be less than 1000 characters';
    }

    // If validation errors, return them
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
        message: 'Please fix the errors below',
      };
    }

    // Log the submission (for development - check server console)
    console.log('✅ Contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      company: company || 'Not provided',
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
    };

  } catch (error) {
    // Log error (check server console)
    console.error('❌ Contact form error:', error);

    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}

// 📧 TO SEND ACTUAL EMAILS:
// Install Resend: npm install resend
// Then uncomment and configure below:

/*
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Add this inside submitContactForm after validation:
await resend.emails.send({
  from: 'onboarding@resend.dev', // Change to your verified domain
  to: process.env.CONTACT_EMAIL || 'your-email@example.com',
  subject: `Contact Form: ${subject}`,
  replyTo: email,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
    ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, '<br>')}</p>
  `,
});
*/