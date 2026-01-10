# 🚀 Fresh Start: New Repository + Netlify

## Step 1: Create New GitHub Repository

1. **Go to:** https://github.com/new
2. **Repository name:** `core-systems-website-new` (or any name you want)
3. **Description:** (optional) "Core Systems website"
4. **Visibility:** 
   - Choose **Public** (if you want others to see)
   - Or **Private** (if you want it private)
5. **DON'T check any boxes** (no README, no .gitignore, no license)
6. **Click "Create repository"**

**You'll get a page with setup instructions - that's fine, we'll do it our way!**

---

## Step 2: Push Your Code to New Repository

### Option A: Using Terminal (Simple)

After creating the repository, you'll see a page with a URL like:
`https://github.com/Designativ/core-systems-website-new.git`

**Run these commands in terminal:**

```bash
cd "/Users/nataliiaivanova/Documents/Core-Design/Website 2.0"

# Remove old remote
git remote remove origin

# Add new remote (replace with YOUR new repo URL)
git remote add origin https://github.com/Designativ/core-systems-website-new.git

# Push everything
git push -u origin main
```

**If it asks for username/password:**
- Username: `Designativ`
- Password: Your GitHub Personal Access Token (get from https://github.com/settings/tokens)
  - Create Classic token with `repo` scope
  - Use that as password

### Option B: Using GitHub Desktop (If You Want to Try Again)

1. In GitHub Desktop
2. Repository → Repository Settings → Remote
3. Change the remote URL to your new repository
4. Click "Push origin"

---

## Step 3: Deploy to Netlify

1. **Go to:** https://app.netlify.com
2. **Sign up/Login** (can use GitHub account - easy!)

3. **Add New Site:**
   - Click "Add new site" → "Import an existing project"

4. **Connect to Git Provider:**
   - Click "GitHub" (or the provider you used)
   - Authorize Netlify to access your repositories
   - Find and select: `core-systems-website-new` (your new repo)
   - Click "Import"

5. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** (leave empty)

6. **Add Environment Variables:**
   - Click "Show advanced" → "New variable"
   - Add: `RESEND_API_KEY` = `re_5NsK8Mpu_A3c6L5rWYm9jaWcjKQyzoaoz`
   - Add: `RESEND_FROM_EMAIL` = `onboarding@resend.dev`
   - Click "Deploy site"

7. **Wait 2-3 minutes** for build to complete

8. **Done!** Your site is live! 🎉

**Your site URL will be:** `https://your-site-name.netlify.app`

---

## After Deployment

1. **Test your site:**
   - Visit the Netlify URL
   - Test the contact form
   - Check that emails arrive

2. **Custom Domain (Optional):**
   - Netlify Settings → Domain management
   - Add your custom domain
   - Free SSL included!

---

## Summary

1. ✅ Create new GitHub repository
2. ✅ Push code to new repository  
3. ✅ Deploy to Netlify
4. ✅ Add environment variables
5. ✅ Site is live!

**Much simpler! Let's do it step by step!** 🚀
