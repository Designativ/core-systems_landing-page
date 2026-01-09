# Form Submission Debugging Guide

## Issue: "Server error. Please try again or email us directly."

## ✅ Fixes Applied

1. **Hydration Error Fixed**
   - Removed hardcoded `active` classes from reveal animations
   - Fixed timing in `reveal-init.tsx` to prevent hydration mismatch

2. **API Route Fixed**
   - All responses now include `Content-Type: application/json` header
   - Added proper error handling for JSON parsing
   - Lazy initialization of Resend client
   - All error paths return JSON, never HTML

3. **Form Error Handling Improved**
   - Better detection of HTML vs JSON responses
   - More informative error messages
   - Better logging for debugging

## 🔍 Debugging Steps

### Step 1: Restart Dev Server

The API route changes require a server restart:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 2: Check Browser Console

Open browser DevTools (F12) → Console tab and look for:
- Error messages from the API
- Any network errors
- Detailed error logs we added

### Step 3: Check Network Tab

1. Open DevTools → Network tab
2. Submit the form
3. Find the `/api/contact` request
4. Check:
   - **Status Code**: Should be 200, 400, or 500 (not 404)
   - **Response Headers**: Should include `content-type: application/json`
   - **Response Body**: Should be JSON, not HTML

### Step 4: Verify API Route Works

Test the API directly:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"test message"}'
```

**Expected Response:**
```json
{"error":"Email service is not configured. Please set RESEND_API_KEY in .env.local"}
```

If you see HTML instead, the API route isn't working.

### Step 5: Check Environment Variables

Ensure `.env.local` exists and has the correct variables:

```bash
# Check if .env.local exists
ls -la .env.local

# View contents (don't commit this file!)
cat .env.local
```

Required variables:
- `RESEND_API_KEY` - Required for form to actually send emails
- `RESEND_FROM_EMAIL` - Optional, defaults to `onboarding@resend.dev`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - Optional for reCAPTCHA
- `RECAPTCHA_SECRET_KEY` - Optional for reCAPTCHA

### Step 6: Check Server Logs

Look at the terminal where `npm run dev` is running. You should see:
- Any errors from the API route
- Console.log messages we added
- Resend API errors (if any)

## 🐛 Common Issues

### Issue: API returns HTML instead of JSON

**Causes:**
1. Dev server not restarted after API route changes
2. Next.js routing issue (404 or 500 error page)
3. API route throwing an error before it can return JSON

**Solution:**
1. Restart dev server: `npm run dev`
2. Clear browser cache or use incognito mode
3. Check server logs for errors
4. Verify the route file exists: `src/app/api/contact/route.ts`

### Issue: "Email service is not configured"

**Cause:** Missing `RESEND_API_KEY` in `.env.local`

**Solution:**
1. Create `.env.local` file in project root
2. Add: `RESEND_API_KEY=re_your_api_key_here`
3. Get API key from: https://resend.com/api-keys
4. Restart dev server

### Issue: Form submits but no email received

**Causes:**
1. `RESEND_API_KEY` not set or invalid
2. Email went to spam
3. Resend API error

**Solution:**
1. Check server logs for Resend API errors
2. Verify API key is correct
3. Check spam folder
4. Test API key in Resend dashboard

## 📋 Testing Checklist

- [ ] Dev server restarted after changes
- [ ] `.env.local` file exists with `RESEND_API_KEY`
- [ ] Browser console shows no hydration errors
- [ ] Network tab shows JSON response (not HTML)
- [ ] API route responds correctly to curl test
- [ ] Server logs show no errors
- [ ] Form validation works (required fields)
- [ ] Error messages display correctly

## 🔧 Quick Fixes

### Clear All Caches

```bash
# Delete Next.js cache
rm -rf .next

# Delete node_modules cache
rm -rf node_modules/.cache

# Restart dev server
npm run dev
```

### Test API Route Directly

```bash
# Test with valid data
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"Test message"}'

# Should return JSON with error about RESEND_API_KEY
```

### Verify Route File

```bash
# Check route file exists
ls -la src/app/api/contact/route.ts

# Check file exports POST function
grep "export.*POST" src/app/api/contact/route.ts
```

## 📝 Current Status

✅ **Fixed Issues:**
- Hydration mismatch error (removed hardcoded `active` classes)
- API always returns JSON with proper headers
- Better error handling and logging
- Form properly handles JSON responses

⚠️ **If Still Having Issues:**
1. Check browser console for specific errors
2. Check Network tab for response details
3. Check server logs for API errors
4. Verify `.env.local` configuration
5. Restart dev server

## 🆘 Still Not Working?

If the form still shows "Server error" after all these fixes:

1. **Check the exact error in browser console**
2. **Check Network tab for the actual response**
3. **Check server terminal logs**
4. **Try submitting from an incognito/private window** (to rule out cache)
5. **Verify the API route is accessible**: `curl http://localhost:3000/api/contact -X POST -H "Content-Type: application/json" -d '{}'`

The form should now work properly with better error messages!
