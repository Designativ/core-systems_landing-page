# 📧 Resend API Key Setup Guide

## Overview

Your contact form sends emails using Resend. Here's what you need to configure in Resend and what settings to use.

---

## 🔑 Step 1: Create Resend Account & Get API Key

1. **Sign up** for Resend: https://resend.com
   - Free tier includes: 3,000 emails/month, 100 emails/day

2. **Verify your email** address

3. **Get your API Key:**
   - Go to: https://resend.com/api-keys
   - Click **"Create API Key"**
   - **Name**: `Core Systems Website` (or any name you prefer)
   - **Permission**: Select **"Sending access"** (or **"Full access"** if you plan to manage domains)
   - Click **"Add"**
   - **Copy the API key** (starts with `re_`)
     - ⚠️ **Important**: You can only see it once! Save it immediately.

---

## 📋 Step 2: API Key Settings in Resend

### Required Settings:

**API Key Name:**
- Use a descriptive name: `Core Systems Website` or `Production - Vercel`

**Permissions:**
- ✅ **"Sending access"** - Minimum required
- ✅ **"Full access"** - If you want to manage domains/emails too

**Environment:**
- Choose based on where you'll use it:
  - **Production** - For your live Vercel site
  - **Development** - For local testing (optional)

---

## 📬 Step 3: Email Configuration

### Current Setup in Your Code:

**From Email** (sender):
- Default: `onboarding@resend.dev` (for testing)
- Configurable via: `RESEND_FROM_EMAIL` environment variable
- **Recommended**: Use a custom domain email (e.g., `noreply@yourdomain.com`)

**To Email** (recipient):
- Hardcoded: `natalieindesign@gmail.com`
- This is where all contact form submissions go

**Reply-To:**
- Automatically set to the form submitter's email address
- This allows you to reply directly to the person who submitted the form

### Option A: Use Default Testing Email (Quick Start)

For immediate testing, you can use Resend's default test email:
- **From**: `onboarding@resend.dev` (already default in your code)
- No domain verification needed
- Works immediately
- ⚠️ **Limitation**: Limited to testing, may have deliverability issues

### Option B: Use Custom Domain Email (Production Recommended)

For production, verify your domain in Resend:

1. **Add Domain:**
   - Go to: https://resend.com/domains
   - Click **"Add Domain"**
   - Enter your domain (e.g., `yourdomain.com`)
   - Click **"Add"**

2. **Verify Domain:**
   - Resend will provide DNS records to add
   - Add these DNS records to your domain registrar:
     - **TXT record** for domain verification
     - **DKIM records** (2-3 CNAME records) for email authentication
   - Wait for verification (usually 5-10 minutes)

3. **Use Verified Domain:**
   - Set `RESEND_FROM_EMAIL=noreply@yourdomain.com` in Vercel
   - Or any email from your verified domain (e.g., `contact@yourdomain.com`)

---

## ⚙️ Step 4: Environment Variables to Set in Vercel

After getting your Resend API key, add these to Vercel:

### Required:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

### Optional (Recommended for Production):
```bash
RESEND_FROM_EMAIL=noreply@yourdomain.com
```

**If you don't set `RESEND_FROM_EMAIL`:**
- Defaults to `onboarding@resend.dev`
- Works for testing, but not ideal for production

---

## 🎯 What Your Code Does

Based on `src/app/api/contact/route.ts`:

```typescript
// Email is sent with:
from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"
to: "natalieindesign@gmail.com"
replyTo: email  // The form submitter's email
subject: "New Contact Form Submission from {name}"
```

**What this means:**
- ✅ All form submissions go to `natalieindesign@gmail.com`
- ✅ You can reply directly to the person who filled the form
- ✅ Email includes: name, email, company (optional), website (optional), message

---

## 🔒 Security Best Practices

### API Key Security:

1. **Never commit API keys to Git**
   - Already handled: `.env.local` is in `.gitignore`

2. **Use different keys for different environments:**
   - Production key: For Vercel deployment
   - Development key: For local testing (optional)

3. **Restrict API key permissions:**
   - Only grant "Sending access" if that's all you need
   - Don't use "Full access" unless necessary

4. **Rotate keys regularly:**
   - Delete old unused keys in Resend dashboard
   - Generate new keys if compromised

5. **Monitor usage:**
   - Check Resend dashboard for email logs
   - Watch for unusual activity

---

## 🧪 Testing Your Setup

### Test Locally:

1. Create `.env.local` in project root:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. Submit the contact form on http://localhost:3000

4. Check `natalieindesign@gmail.com` inbox

5. Check Resend dashboard: https://resend.com/emails
   - Should see the sent email with status

### Test on Vercel:

1. Add environment variables in Vercel Dashboard
2. Redeploy your site
3. Submit the contact form on your live site
4. Check email inbox and Resend logs

---

## 📊 Resend Dashboard Features

Once set up, you can use:

- **Email Logs**: https://resend.com/emails
  - See all sent emails
  - Check delivery status
  - View email content
  - Debug delivery issues

- **API Keys**: https://resend.com/api-keys
  - Manage all API keys
  - Revoke/create new keys
  - See usage per key

- **Domains**: https://resend.com/domains
  - Manage verified domains
  - View DNS records
  - Check verification status

- **Analytics**: https://resend.com/analytics
  - Email delivery rates
  - Bounce rates
  - Open rates (if enabled)

---

## ❗ Troubleshooting

### "Email service is not configured"
- ✅ Make sure `RESEND_API_KEY` is set in Vercel environment variables
- ✅ Redeploy after adding environment variables

### "Invalid API key"
- ✅ Check you copied the entire key (starts with `re_`)
- ✅ Verify key hasn't been revoked in Resend dashboard
- ✅ Check for extra spaces when pasting

### Emails not arriving
- ✅ Check spam/junk folder
- ✅ Verify `natalieindesign@gmail.com` is correct
- ✅ Check Resend email logs for delivery status
- ✅ Verify domain is verified (if using custom domain)

### "Domain not verified"
- ✅ Add DNS records to your domain registrar
- ✅ Wait 5-10 minutes for DNS propagation
- ✅ Use `onboarding@resend.dev` for testing (no verification needed)

### Rate limits
- ✅ Free tier: 100 emails/day, 3,000/month
- ✅ Check Resend dashboard for usage
- ✅ Upgrade plan if needed

---

## 💰 Resend Pricing

**Free Tier** (sufficient for most small sites):
- 3,000 emails/month
- 100 emails/day
- Unlimited API requests

**Paid Plans** (if you need more):
- Starts at $20/month for 50,000 emails

---

## ✅ Quick Setup Checklist

- [ ] Sign up at https://resend.com
- [ ] Verify your email address
- [ ] Create API key with "Sending access"
- [ ] Copy API key (starts with `re_`)
- [ ] Add `RESEND_API_KEY` to Vercel environment variables
- [ ] (Optional) Add `RESEND_FROM_EMAIL` to Vercel
- [ ] (Optional) Verify domain in Resend for production
- [ ] Test form submission locally
- [ ] Test form submission on Vercel
- [ ] Verify emails arrive at `natalieindesign@gmail.com`

---

## 📝 Summary

**Minimum Required:**
1. Resend account
2. API key with "Sending access" permission
3. Add `RESEND_API_KEY` to Vercel environment variables

**Recommended for Production:**
1. Verify your domain in Resend
2. Set `RESEND_FROM_EMAIL` to a verified domain email
3. Monitor email logs in Resend dashboard

That's it! Your contact form will start working as soon as you add the API key to Vercel. 🚀
