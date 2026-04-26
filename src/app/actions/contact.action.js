'use server';

// Contact Form Server Action

/**
 * Handle contact form submission
 * @param {Object} prevState - Previous form state
 * @param {FormData} formData - Form data from submission
 * @returns {Object} Result with success/error status
 */
export async function submitContactForm(prevState, formData) {
  try {
    // Extract and sanitize form data
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim().toLowerCase();
    const phone = formData.get('phone')?.trim();
    const company = formData.get('company')?.trim();
    const subject = formData.get('subject')?.trim();
    const message = formData.get('message')?.trim();

    // Validation
    const errors = {};

    if (!name || name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (phone && !/^[\d\s\-\+\(\)]+$/.test(phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!subject || subject.length < 3) {
      errors.subject = 'Subject must be at least 3 characters';
    }

    if (!message || message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    // If validation errors, return them
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
        message: 'Please fix the errors below',
      };
    }

    // TODO: In production, implement actual email sending logic
    // For now, just simulate success
    // Options:
    // 1. Send email via nodemailer/sendgrid/resend
    // 2. Save to database
    // 3. Send to CRM/notification service

    console.log('Contact form submission:', {
      name,
      email,
      phone,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
    };
// Server Action for Contact Form (Security Layer)
// This runs on the server only, protecting EmailJS credentials

import emailjs from '@emailjs/browser';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize input (prevent XSS)
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent HTML injection
    .substring(0, 1000); // Limit length
}

// Validate form data
function validateFormData(data) {
  const errors = {};

  // Validate name
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  if (data.name && data.name.length > 50) {
    errors.name = 'Name must be less than 50 characters';
  }

  // Validate email
  if (!data.email || !EMAIL_REGEX.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Validate message
  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  if (data.message && data.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

// Main server action to send contact form
export async function sendContactEmail(formData) {
  try {
    // Extract and sanitize data
    const data = {
      name: sanitizeInput(formData.get('name')),
      email: sanitizeInput(formData.get('email')),
      message: sanitizeInput(formData.get('message')),
    };

    // Validate
    const validation = validateFormData(data);
    if (!validation.isValid) {
      return {
        success: false,
        errors: validation.errors,
      };
    }

    // Check environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing');
      return {
        success: false,
        error: 'Email service not configured',
      };
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_name: 'Promind Team', // You can customize this
      },
      publicKey
    );

    if (response.status === 200) {
      return {
        success: true,
        message: 'Email sent successfully',
      };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
      error: 'Failed to send message. Please try again later.',
    };
  }
}
