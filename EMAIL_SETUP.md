# Email Setup Guide

## Quick Setup

1. **Sign up for Resend** (free tier available)
   - Visit [https://resend.com](https://resend.com)
   - Create an account and verify your email

2. **Get your API key**
   - Go to [Resend API Keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Copy the API key (starts with `re_`)

3. **Create `.env.local` file** in the root directory:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   ```

4. **For testing**, you can use:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

5. **Restart your development server** after adding the environment variables

## Email Recipient

All contact form submissions will be sent to:
- **natalieindesign@gmail.com**

The email will include:
- Name
- Email (with reply-to set to sender)
- Company (if provided)
- Website (if provided)
- Message

## Production Setup

For production deployment (e.g., Vercel):

1. **Verify your domain in Resend**
   - Go to [Resend Domains](https://resend.com/domains)
   - Add and verify your domain
   - Update DNS records as instructed

2. **Set environment variables in your hosting provider**
   - In Vercel: Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` and `RESEND_FROM_EMAIL`
   - Redeploy your application

3. **Use a verified domain email** for `RESEND_FROM_EMAIL`
   - Example: `contact@yourdomain.com` or `noreply@yourdomain.com`

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check `natalieindesign@gmail.com` for the submission email
4. Check the browser console for any errors

## reCAPTCHA v3 Setup (Invisible CAPTCHA)

The contact form includes invisible reCAPTCHA v3 protection to prevent spam submissions.

1. **Sign up for Google reCAPTCHA**
   - Visit [https://www.google.com/recaptcha/admin](https://www.google.com/recaptcha/admin)
   - Sign in with your Google account

2. **Register a new site**
   - Click "Create" or "+" button
   - Choose **reCAPTCHA v3** (invisible - no user interaction required)
   - Add your domain(s):
     - For localhost: `localhost`
     - For production: `yourdomain.com`
   - Accept the terms and submit

3. **Get your keys**
   - **Site Key** (public): Copy this - you'll add it as `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - **Secret Key** (private): Copy this - you'll add it as `RECAPTCHA_SECRET_KEY`

4. **Add to `.env.local`**
   ```env
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
   RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
   ```
   (Note: The keys above are Google's test keys. Replace with your actual keys from reCAPTCHA dashboard)

5. **Restart your development server** after adding the keys

6. **For production**, add these environment variables to your hosting provider (e.g., Vercel)

**Note:** reCAPTCHA v3 is completely invisible to users - no checkboxes or challenges. It works in the background and assigns a score (0.0 to 1.0) based on user behavior. The form will still work without reCAPTCHA configured, but spam protection will be disabled.

## Troubleshooting

- **"Email service is not configured"**: Make sure `RESEND_API_KEY` is set in `.env.local`
- **"Failed to send email"**: Check that your API key is valid and you haven't exceeded rate limits
- **Emails going to spam**: Verify your domain in Resend and use a proper "from" email address
- **"reCAPTCHA verification failed"**: 
  - Make sure both `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` are set
  - Verify that your domain is added to the reCAPTCHA allowed domains list
  - Check that you're using reCAPTCHA v3 keys (not v2)
  - For localhost testing, make sure `localhost` is added to your reCAPTCHA site domains
