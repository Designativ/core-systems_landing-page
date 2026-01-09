# Netlify Deployment Fix

## 🔴 Error: "git ref refs/heads/main does not exist"

This error means Netlify cannot find the `main` branch in your connected Git repository.

## ✅ Solution Options

### Option 1: Connect to GitHub/GitLab (Recommended)

If you don't have a remote repository yet:

1. **Create a GitHub repository:**
   - Go to https://github.com/new
   - Name it (e.g., `core-systems-website`)
   - Don't initialize with README
   - Click "Create repository"

2. **Add remote and push your code:**
   ```bash
   git remote add origin https://github.com/yourusername/core-systems-website.git
   git branch -M main
   git push -u origin main
   ```

3. **Connect Netlify to GitHub:**
   - Go to Netlify dashboard
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select your repository
   - Set branch to `main`
   - Deploy!

### Option 2: Fix Existing Netlify Connection

If you already have a repository connected:

1. **Check if your local code is pushed:**
   ```bash
   git push origin main
   ```

2. **Verify branch name matches:**
   - Netlify expects `main` branch
   - Make sure you're pushing to `main`, not `master`

3. **In Netlify:**
   - Go to Site settings → Build & deploy
   - Verify "Production branch" is set to `main`
   - Verify "Repository" is correctly connected
   - Click "Retry deploy" or "Trigger deploy"

### Option 3: Manual Deploy (Quick Fix)

For immediate deployment:

1. **Build your site:**
   ```bash
   npm run build
   ```

2. **In Netlify:**
   - Go to your site dashboard
   - Click "Sites" → Your site → "Deploys"
   - Click "Deploy manually" (or drag & drop the `.next` folder)

## 🔧 Quick Fix Steps (Right Now)

Since you have uncommitted changes, let's commit and push them:

1. **Commit current changes:**
   ```bash
   git add -A
   git commit -m "Fix form submission and hydration errors, update LinkedIn link"
   ```

2. **Check if remote exists:**
   ```bash
   git remote -v
   ```

3. **If no remote, create one and push:**
   - Create repository on GitHub/GitLab
   - Add remote: `git remote add origin <your-repo-url>`
   - Push: `git push -u origin main`

4. **If remote exists, push to it:**
   ```bash
   git push origin main
   ```

## 📋 Current Status

- ✅ Local branch: `main` (exists)
- ✅ Local commits: Yes (5 commits)
- ❌ Remote repository: Not configured
- ❌ Netlify connection: Can't find `main` branch

## 🎯 Next Steps

The easiest fix is to:
1. Create a GitHub repository
2. Push your local code to it
3. Connect Netlify to that GitHub repository
4. Deploy!

Would you like me to help you set this up step by step?
