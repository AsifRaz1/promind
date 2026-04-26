'use server';

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
      error: 'Failed to send message. Please try again later.',
    };
  }
}
