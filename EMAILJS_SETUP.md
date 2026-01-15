# EmailJS Setup Instructions

The consultation form is configured to send emails using EmailJS. Follow these steps to set it up:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Copy the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Consultation Request from {{from_name}}

**Content:**
```
Hello,

You have received a new consultation request from the Ziebex website.

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Interest: {{service}}

Message:
{{message}}

---
This email was sent from the Ziebex website contact form.
```

4. In "To Email" field, enter: `{{to_email}}` (this will be dynamically set by the code)
5. In "Reply To" field, enter: `{{from_email}}`
6. Copy the **Template ID**

**Note:** The code is configured to send the email to both `info@ziebex.com` and `matthew@ziebex.com` automatically using the same template.

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update the Code
Open `src/components/Consultation.jsx` and replace these values:

```javascript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
```

## Alternative: Use Environment Variables (Recommended)
1. Create a `.env` file in the root directory:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Consultation.jsx to use:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

## Testing
After setup, test the form to ensure emails are being sent to both addresses.
