# 🔗 Complete Guide: Cursor → Git → GitHub → Vercel

## Overview

This guide will help you:
1. ✅ Commit your code locally (Git in Cursor)
2. ✅ Push to GitHub repository
3. ✅ Connect GitHub to Vercel
4. ✅ Deploy automatically on every push

---

## 📋 Current Status

Based on your repository:
- ✅ Git is initialized
- ✅ You have commits in your local repository
- ✅ GitHub remote is configured (`Designativ/core-systems-website`)
- ⚠️ Fine-grained token issues with git push (we'll solve this)

---

## Step 1: Commit Your Current Changes

First, let's commit all your work locally:

### Option A: Using Terminal in Cursor

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Add Resend API key configuration and Vercel deployment guides"

# View status
git status
```

### Option B: Using Cursor's Git UI

1. Click the **Source Control** icon in the left sidebar (or press `Cmd+Shift+G`)
2. Review your changes
3. Click **"+"** next to files to stage them
4. Enter commit message: `Add Resend API key configuration and Vercel deployment guides`
5. Click **"✓ Commit"** button

---

## Step 2: Push to GitHub

You have a remote configured, but we had token issues earlier. Here are your options:

### Option A: Use GitHub Desktop (Easiest - Recommended) ⭐

**This is the easiest method and avoids all token issues:**

1. **Download GitHub Desktop:**
   - Go to: https://desktop.github.com/
   - Download and install

2. **Sign in:**
   - Open GitHub Desktop
   - Sign in with your GitHub account (`Designativ`)
   - Use your GitHub username and password (or GitHub CLI if configured)

3. **Add Your Repository:**
   - Click **File** → **Add Local Repository**
   - Browse to: `/Users/nataliiaivanova/Documents/Core-Design/Website 2.0`
   - Click **"Add Repository"**

4. **Push to GitHub:**
   - You'll see all your commits
   - Click **"Publish repository"** button (if first time)
   - Or click **"Push origin"** (if already published)
   - Select repository: `core-systems-website`
   - Click **"Push Repository"** or **"Push origin"**

✅ **Done!** Your code is now on GitHub.

### Option B: Create Classic GitHub Token (For Command Line)

If you prefer command line, create a Classic token:

1. **Go to:** https://github.com/settings/tokens
2. **Click:** "Tokens (classic)" tab (NOT fine-grained)
3. **Click:** "Generate new token" → "Generate new token (classic)"
4. **Settings:**
   - Note: `Core Systems Git Push`
   - Expiration: 90 days (or longer)
   - **Scopes:** ✅ Check `repo` (full control)
5. **Generate token** and copy it (starts with `ghp_`)

6. **Update Git Remote:**
   ```bash
   git remote set-url origin https://ghp_YOUR_CLASSIC_TOKEN@github.com/Designativ/core-systems-website.git
   ```

7. **Push:**
   ```bash
   git push -u origin main
   ```

### Option C: Fix Current Token (Advanced)

If you want to try fixing the current fine-grained token:

1. Go to: https://github.com/settings/tokens
2. Find your fine-grained token
3. Edit it
4. Ensure **"Repository access"** is set to:
   - **"Selected repositories"** → Select `core-systems-website`
   - OR **"All repositories"**
5. Under **"Repository permissions"**, ensure:
   - **Contents**: Read and write
   - **Metadata**: Read-only
6. Save and try pushing again

---

## Step 3: Verify GitHub Repository

Once pushed, verify everything is on GitHub:

1. **Go to:** https://github.com/Designativ/core-systems-website
2. **Check:**
   - ✅ All your files are there
   - ✅ All commits are visible
   - ✅ `.env.local` is NOT there (should be ignored - that's good!)

---

## Step 4: Connect GitHub to Vercel

Now connect your GitHub repository to Vercel for automatic deployments:

### Method 1: Import from GitHub (Recommended)

1. **Sign up/Login to Vercel:**
   - Go to: https://vercel.com
   - Sign up or login (can use GitHub account for easier setup)

2. **Import Repository:**
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - If not connected, click **"Connect GitHub Account"**
   - Authorize Vercel to access your repositories

3. **Select Repository:**
   - Find and select: `Designativ/core-systems-website`
   - Click **"Import"**

4. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected ✅)
   - **Root Directory:** `./` (default - leave as is)
   - **Build Command:** `npm run build` (auto-detected ✅)
   - **Output Directory:** `.next` (auto-detected ✅)
   - **Install Command:** `npm install` (auto-detected ✅)

5. **Environment Variables:**
   - **Before clicking "Deploy"**, click **"Environment Variables"**
   - Add these:
     ```
     RESEND_API_KEY=re_5NsK8Mpu_A3c6L5rWYm9jaWcjKQyzoaoz
     RESEND_FROM_EMAIL=onboarding@resend.dev
     ```
   - Make sure to select:
     - ✅ Production
     - ✅ Preview
     - ✅ Development (optional)
   - Click **"Save"** after adding each variable

6. **Deploy:**
   - Click **"Deploy"** button
   - Wait 1-2 minutes for build to complete
   - Your site will be live at: `https://core-systems-website.vercel.app`
   - (Or your custom domain if configured)

### Method 2: Connect Existing Vercel Project

If you already created a Vercel project manually:

1. **Go to your Vercel project dashboard**
2. **Settings** → **Git**
3. **Connect Git Repository**
4. Select: `Designativ/core-systems-website`
5. **Save**

---

## Step 5: Set Up Automatic Deployments

Once connected, Vercel will automatically deploy:

- ✅ **Every push to `main` branch** → Production deployment
- ✅ **Every pull request** → Preview deployment
- ✅ **Every commit** → Preview deployment (for other branches)

### How It Works:

1. You commit and push to GitHub
2. Vercel detects the push
3. Vercel runs `npm install` and `npm run build`
4. Vercel deploys your site
5. You get a notification (if enabled)

**No manual deployment needed!** 🎉

---

## Step 6: Verify Deployment

After first deployment:

1. **Check Build Logs:**
   - In Vercel dashboard, click on your deployment
   - Check "Build Logs" tab
   - Should see: `✓ Compiled successfully`

2. **Visit Your Site:**
   - Click **"Visit"** button in Vercel dashboard
   - Or go to: `https://your-project.vercel.app`

3. **Test Contact Form:**
   - Submit the contact form
   - Check `natalieindesign@gmail.com` for the email
   - Should receive email within seconds!

4. **Check Environment Variables:**
   - Settings → Environment Variables
   - Verify `RESEND_API_KEY` is set
   - If not working, make sure you **redeployed** after adding variables

---

## 🔄 Workflow Going Forward

Once everything is set up, your workflow is simple:

### Daily Development:

```bash
# 1. Make changes in Cursor
# 2. Commit changes
git add .
git commit -m "Your commit message"

# 3. Push to GitHub (via GitHub Desktop or terminal)
git push origin main

# 4. Vercel automatically deploys! 🚀
# Check Vercel dashboard for deployment status
```

Or use Cursor's Git UI:
1. Make changes
2. Click Source Control icon
3. Stage and commit
4. Push (or use GitHub Desktop)

---

## 🛠️ Troubleshooting

### "Repository not found" in Vercel
- ✅ Make sure you authorized Vercel to access GitHub
- ✅ Check repository name is correct
- ✅ Verify repository is public or you have access

### Build fails in Vercel
- ✅ Check build logs in Vercel dashboard
- ✅ Verify `package.json` has correct build script
- ✅ Check for TypeScript errors: `npm run build` locally
- ✅ Ensure all dependencies are in `package.json`

### Environment variables not working
- ✅ Make sure you **redeployed** after adding variables
- ✅ Check variable names are correct (case-sensitive)
- ✅ Verify variables are set for **Production** environment
- ✅ Check Vercel function logs for errors

### Contact form not sending emails
- ✅ Verify `RESEND_API_KEY` is set in Vercel
- ✅ Check Resend dashboard for email logs: https://resend.com/emails
- ✅ Verify API key hasn't been revoked
- ✅ Check spam folder

### "Fine-grained token" still not working
- ✅ Use GitHub Desktop instead (easiest solution)
- ✅ Or create Classic token (starts with `ghp_`)
- ✅ Fine-grained tokens have known issues with git protocol

---

## ✅ Quick Checklist

Before deploying:
- [ ] All code committed locally
- [ ] Code pushed to GitHub
- [ ] GitHub repository is accessible
- [ ] Vercel account created
- [ ] Vercel connected to GitHub
- [ ] Project imported in Vercel
- [ ] Environment variables added in Vercel:
  - [ ] `RESEND_API_KEY`
  - [ ] `RESEND_FROM_EMAIL` (optional)
- [ ] Build completes successfully
- [ ] Site is live and accessible
- [ ] Contact form tested and working

---

## 📚 Additional Resources

- **GitHub Desktop:** https://desktop.github.com/
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Resend Dashboard:** https://resend.com/emails
- **GitHub Tokens:** https://github.com/settings/tokens

---

## 🎯 Recommended: GitHub Desktop

**Why use GitHub Desktop?**
- ✅ No token issues
- ✅ Visual interface
- ✅ Easy to see changes
- ✅ Simple push/pull
- ✅ Built-in Git workflow
- ✅ Free and official from GitHub

**After installing GitHub Desktop, your workflow:**
1. Make changes in Cursor
2. Open GitHub Desktop
3. See all changes
4. Commit with message
5. Click "Push origin"
6. Vercel auto-deploys! 🚀

---

## 💡 Next Steps

After setting everything up:

1. **Custom Domain (Optional):**
   - Vercel Settings → Domains
   - Add your custom domain
   - Update DNS records
   - Free SSL certificate included!

2. **Monitor Deployments:**
   - Check Vercel dashboard regularly
   - Set up email notifications
   - Review build logs if issues occur

3. **Production Optimizations:**
   - Verify domain in Resend (for production emails)
   - Set up custom `RESEND_FROM_EMAIL`
   - Add reCAPTCHA keys (optional)
   - Monitor email delivery in Resend dashboard

---

**Ready to start?** Follow the steps above, and you'll have your site live on Vercel in minutes! 🚀
