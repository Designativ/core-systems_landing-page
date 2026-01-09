# 🚀 Vercel Deployment Checklist

## ✅ Pre-Deployment Verification

### 1. Build Configuration ✅
- [x] **package.json** exists with build scripts
  - ✅ `"build": "next build"` - Present
  - ✅ `"start": "next start"` - Present
  - ✅ `"dev": "next dev"` - Present
- [x] **next.config.js** exists and is properly configured
- [x] **Build test successful** - `npm run build` completes without errors
- [x] **Framework auto-detection** - Next.js will be auto-detected by Vercel

### 2. Environment Variables Setup

You **MUST** configure these in Vercel Dashboard after deployment:

#### Required for Contact Form:
- [ ] `RESEND_API_KEY` - Your Resend API key
  - Get it from: https://resend.com/api-keys
  - Required for contact form submissions

#### Optional but Recommended:
- [ ] `RESEND_FROM_EMAIL` - Email address to send from
  - Default: `onboarding@resend.dev` (for testing)
  - For production: Use your verified domain email (e.g., `noreply@yourdomain.com`)
  
- [ ] `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` - reCAPTCHA v3 Site Key
  - Get it from: https://www.google.com/recaptcha/admin
  - Required if you want spam protection on contact form
  
- [ ] `RECAPTCHA_SECRET_KEY` - reCAPTCHA v3 Secret Key
  - Get it from: https://www.google.com/recaptcha/admin
  - Required if you want spam protection on contact form

#### Optional Configuration:
- [ ] `NEXT_PUBLIC_APP_URL` - Your production URL (e.g., `https://yourdomain.com`)
- [ ] `NEXT_PUBLIC_APP_NAME` - Your app name (default: "My Website")

### 3. SEO Assets ✅
All required SEO assets are in place:
- [x] **Favicons**: `favicon.ico`, `favicon.svg` in `/public`
- [x] **Apple Icons**: `apple-icon.png` (180x180) in `/public`
- [x] **PWA Icons**: `icon-192.png`, `icon-512.png` in `/public`
- [x] **OpenGraph Image**: `og-image.jpg` (1200x630) in `/public`
- [x] **Manifest**: `manifest.json` in `/public`
- [x] **Robots.txt**: Generated dynamically via `src/app/robots.ts`
- [x] **Sitemap**: Generated dynamically via `src/app/sitemap.ts`

### 4. Code Quality ✅
- [x] **TypeScript**: No type errors
- [x] **Build**: Completes successfully
- [x] **Static Pages**: All pages pre-render correctly
- [x] **API Routes**: `/api/contact` route is properly configured

### 5. Dependencies ✅
- [x] All dependencies are listed in `package.json`
- [x] `node_modules` is in `.gitignore` (won't be uploaded)
- [x] `package-lock.json` exists (ensures consistent installs)

### 6. Git Repository (Optional but Recommended)
- [ ] Push your code to GitHub/GitLab/Bitbucket for easier deployment
- [ ] Connect Vercel to your Git repository for automatic deployments

---

## 📋 Deployment Steps

### Step 1: Deploy to Vercel

**Option A: Deploy via Vercel CLI (from Cursor)**
```bash
# Install Vercel CLI globally (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (first time will ask questions)
vercel

# For production deployment
vercel --prod
```

**Option B: Deploy via Vercel Dashboard (Recommended)**
1. Go to: https://vercel.com/new
2. **Import Git Repository** (if connected to Git):
   - Connect your GitHub/GitLab/Bitbucket account
   - Select your repository
   - Vercel will auto-detect Next.js

3. **Or Upload Project** (if not using Git):
   - Drag and drop your project folder
   - Or use `vercel` CLI command

### Step 2: Configure Project Settings

Vercel will auto-detect these, but verify:
- **Framework Preset**: Next.js ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` (auto-detected) ✅
- **Install Command**: `npm install` ✅

### Step 3: Add Environment Variables

**Critical Step!** Add all environment variables in Vercel Dashboard:

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Environment Variables**
3. Add each variable:
   ```
   RESEND_API_KEY=re_your_key_here
   RESEND_FROM_EMAIL=noreply@yourdomain.com
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
   RECAPTCHA_SECRET_KEY=your_secret_key
   NEXT_PUBLIC_APP_URL=https://yourdomain.vercel.app
   ```

4. **Important**: Check all environments (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** after adding environment variables (Vercel will prompt you)

### Step 4: Domain Configuration (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain (e.g., `yourdomain.com`)
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic, usually < 1 minute)

### Step 5: Verify Deployment

After deployment, test:
- [ ] **Homepage loads**: Visit your Vercel URL
- [ ] **All pages work**: Navigate through the site
- [ ] **Contact form works**: Submit a test form
- [ ] **Email delivery**: Check `natalieindesign@gmail.com` for test submission
- [ ] **reCAPTCHA**: If configured, verify it's working (check browser console)
- [ ] **SEO**: Check meta tags with browser dev tools
- [ ] **Favicons**: Check browser tab shows favicon
- [ ] **Mobile**: Test on mobile device or emulator

---

## 🔧 Post-Deployment Configuration

### Update reCAPTCHA Domains (if using reCAPTCHA)
1. Go to: https://www.google.com/recaptcha/admin
2. Edit your site settings
3. Add your Vercel domain: `yourproject.vercel.app`
4. Add your custom domain (if using one)

### Verify Email Settings
1. In Resend Dashboard, verify your domain (if using custom domain)
2. Test form submission
3. Check spam folder if emails don't arrive

### Set Up Custom Domain (if needed)
1. In Vercel Dashboard → Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for SSL certificate

---

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Verify all environment variables are set
- Ensure `package.json` has correct build script

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set in Vercel environment variables
- Check Resend dashboard for API key status
- Verify `RESEND_FROM_EMAIL` is correct (or using default)
- Check Vercel function logs for errors

### reCAPTCHA Not Working
- Verify both `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` are set
- Check that your Vercel domain is added to reCAPTCHA allowed domains
- Check browser console for errors

### Environment Variables Not Working
- Make sure you **redeployed** after adding environment variables
- Check that variables are set for **Production** environment
- Verify variable names match exactly (case-sensitive)
- `NEXT_PUBLIC_*` variables are available on client-side, others are server-only

---

## ✅ Quick Deploy Command

Once everything is configured, future deployments can be done with:
```bash
vercel --prod
```

Or just push to your connected Git branch - Vercel will auto-deploy! 🚀

---

## 📝 Notes

- **Vercel automatically handles**: Next.js optimization, CDN, SSL certificates, serverless functions
- **Build time**: Usually 1-2 minutes for Next.js apps
- **Free tier includes**: 100GB bandwidth, 100 serverless function invocations/day
- **Custom domains**: Free SSL certificates included

---

**Ready to deploy?** Follow the steps above and your site will be live in minutes! 🎉
