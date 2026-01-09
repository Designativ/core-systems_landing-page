# Fix Netlify Deployment - Step by Step

## 🔴 Problem
Netlify error: "git ref refs/heads/main does not exist"

**Root Cause:** No remote repository configured. Your code is only local.

## ✅ Solution: Create GitHub Repo and Push Code

### Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `core-systems-website` (or any name you prefer)
3. Description: "Core Systems - AI-powered automation for BC businesses"
4. Choose **Public** or **Private**
5. ❌ **DO NOT** check "Add a README file"
6. ❌ **DO NOT** check "Add .gitignore"
7. ❌ **DO NOT** check "Choose a license"
8. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these (replace `YOUR_USERNAME`):

```bash
# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/core-systems-website.git

# Ensure you're on main branch
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Example if your username is `nataliiaivanova`:**
```bash
git remote add origin https://github.com/nataliiaivanova/core-systems-website.git
git branch -M main
git push -u origin main
```

### Step 3: Connect Netlify to GitHub Repository

1. In **Netlify Dashboard** → Go to your site: **regal-lily-5908f8**
2. Click **"Site settings"** (or gear icon)
3. Go to **"Build & deploy"** → **"Continuous Deployment"**
4. Click **"Link repository"** (or **"Change repository"** if already linked)
5. Choose **"GitHub"** and authorize if needed
6. Select your repository: **`core-systems-website`** (or whatever you named it)
7. Configure:
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
8. Click **"Save"**

### Step 4: Add Environment Variables in Netlify

1. In **Site settings** → **"Environment variables"**
2. Click **"Add variable"**
3. Add these one by one:

   **Variable 1:**
   - Key: `RESEND_API_KEY`
   - Value: `re_3CMnaw7q_Bjz1HcTEuK2gy6CMCrDyLC6B`
   - Click "Save"

   **Variable 2:**
   - Key: `RESEND_FROM_EMAIL`
   - Value: `onboarding@resend.dev`
   - Click "Save"

   **Variable 3:**
   - Key: `NEXT_PUBLIC_APP_NAME`
   - Value: `Core Systems`
   - Click "Save"

4. After first deploy, add:
   - Key: `NEXT_PUBLIC_APP_URL`
   - Value: Your Netlify URL (e.g., `https://regal-lily-5908f8.netlify.app`)

### Step 5: Trigger Deployment

1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Or Netlify will auto-deploy once you push to GitHub

## 🎯 Quick Command Reference

**After creating GitHub repo, run these commands:**

```bash
# 1. Add remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# 2. Ensure main branch
git branch -M main

# 3. Push code
git push -u origin main
```

**To verify it worked:**
```bash
# Check remote is added
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/REPO_NAME.git (fetch)
# origin  https://github.com/YOUR_USERNAME/REPO_NAME.git (push)
```

## ✅ After This

Once you push to GitHub and connect Netlify:
- ✅ Netlify will find the `main` branch
- ✅ Deployment will succeed
- ✅ Form will work on production (with environment variables)
- ✅ Future pushes to `main` will auto-deploy

## 📋 Checklist

- [ ] Created GitHub repository
- [ ] Added remote: `git remote add origin <url>`
- [ ] Pushed code: `git push -u origin main`
- [ ] Connected Netlify to GitHub repository
- [ ] Set branch to `main` in Netlify
- [ ] Added environment variables in Netlify
- [ ] Triggered deploy

---

**Once you have the GitHub repository URL, I can help you run the commands!**
