# Netlify Deployment Setup Guide

## 🔴 Current Issue: "git ref refs/heads/main does not exist"

Netlify can't find your `main` branch because:
- ❌ No remote repository configured
- ❌ Code hasn't been pushed to GitHub/GitLab

## ✅ Solution: Connect to GitHub

### Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `core-systems-website` (or any name you prefer)
3. Description: "Core Systems - AI-powered automation for growing BC businesses"
4. Choose: **Public** or **Private**
5. ❌ **Don't** check "Initialize this repository with a README"
6. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/core-systems-website.git

# Make sure you're on main branch
git branch -M main

# Push your code
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/nataliiaivanova/core-systems-website.git
git branch -M main
git push -u origin main
```

### Step 3: Connect Netlify to GitHub

1. Go to **https://app.netlify.com**
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub (if first time)
5. Select your repository: `core-systems-website`
6. Configure build settings:
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
7. Click **"Deploy site"**

### Step 4: Add Environment Variables to Netlify

1. In Netlify dashboard, go to: **Site settings** → **Environment variables**
2. Add these variables:
   - `RESEND_API_KEY` = `re_3CMnaw7q_Bjz1HcTEuK2gy6CMCrDyLC6B`
   - `RESEND_FROM_EMAIL` = `onboarding@resend.dev`
   - `NEXT_PUBLIC_APP_URL` = `https://your-site.netlify.app` (after first deploy)
   - `NEXT_PUBLIC_APP_NAME` = `Core Systems`
3. Click **"Save"**

### Step 5: Redeploy

After adding environment variables:
- Go to **Deploys** tab
- Click **"Trigger deploy"** → **"Clear cache and deploy site"**

## 📋 Build Settings for Next.js

Netlify should auto-detect Next.js, but verify:

- **Build command:** `npm run build` or `next build`
- **Publish directory:** `.next`
- **Node version:** `18.x` or `20.x` (in Netlify settings)

## ✅ After Setup

Once connected:
- ✅ Every push to `main` branch will auto-deploy
- ✅ Form will work on production (with your Resend API key)
- ✅ Site will be live at `your-site.netlify.app`

## 🆘 Troubleshooting

**"Still can't find main branch":**
- Make sure you pushed: `git push -u origin main`
- Verify branch name: `git branch` (should show `main`)
- Check Netlify: Site settings → Build & deploy → Production branch = `main`

**"Deploy succeeds but site is blank":**
- Check publish directory: Should be `.next` for Next.js
- Check build command: Should be `npm run build`
- Check build logs in Netlify for errors

**"Form doesn't work on production":**
- Make sure environment variables are set in Netlify
- Check that `RESEND_API_KEY` is added
- Redeploy after adding environment variables

## 🎯 Quick Command Reference

```bash
# Check current remote
git remote -v

# Add GitHub remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main

# If you already have a remote, update it:
git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git push -u origin main
```

---

**Your code is ready! Just push it to GitHub and connect Netlify!** 🚀
