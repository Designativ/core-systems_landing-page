# Quick Email Setup Guide

## ✅ Good News!

The error message **"Email service is not configured. Please set RESEND_API_KEY in .env.local"** means:

1. ✅ **Form is working** - It's submitting correctly
2. ✅ **API is working** - It's returning JSON properly
3. ⚠️ **Just need to configure email** - Missing API key

## 🔧 Quick Fix (3 Steps)

### Step 1: Get Resend API Key (Free)

1. Go to **https://resend.com**
2. Click **"Sign Up"** (or "Log In" if you have an account)
3. Verify your email address
4. Go to **https://resend.com/api-keys**
5. Click **"Create API Key"**
6. Copy the API key (it starts with `re_`, like `re_xxxxxxxxxx`)

### Step 2: Create `.env.local` File

Create a file named `.env.local` in your project root directory:

```bash
# In your project root (Website 2.0/)
touch .env.local
```

Or create it in your code editor.

### Step 3: Add This Content

Open `.env.local` and add:

```env
# Email Configuration (Required for form to send emails)
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev

# Optional: App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Core Systems
```

**Replace `re_your_api_key_here` with your actual API key from Step 1**

### Step 4: Restart Dev Server

After creating `.env.local`:

1. Stop your dev server (Ctrl+C in terminal)
2. Start it again: `npm run dev`
3. Test the form again

## 📧 Where Emails Go

All form submissions will be sent to:
- **natalieindesign@gmail.com**

## 🧪 Test It

After setup:
1. Fill out the form
2. Submit it
3. Check **natalieindesign@gmail.com** for the email
4. You should see a success message on the form!

## ❓ Troubleshooting

**Still seeing the error?**
- Make sure `.env.local` is in the project root (same folder as `package.json`)
- Make sure the API key starts with `re_`
- Restart the dev server after creating `.env.local`
- Check there are no extra spaces in the `.env.local` file

**Email not received?**
- Check spam folder
- Verify the API key is correct
- Check server terminal for error messages
- Make sure `natalieindesign@gmail.com` is correct in the code

## 📝 File Location

Your `.env.local` should be at:
```
/Users/nataliiaivanova/Documents/Core-Design/Website 2.0/.env.local
```

Same level as:
- `package.json`
- `next.config.js`
- `src/` folder

---

**That's it!** Once you add the API key and restart, the form will send emails successfully! 🎉
