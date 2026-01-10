# 🚀 Push to GitHub via Terminal - Step by Step

## Step 1: Get GitHub Personal Access Token

1. **Go to:** https://github.com/settings/tokens
2. **Click:** "Generate new token" → **"Generate new token (classic)"**
3. **Settings:**
   - **Note:** `Core Systems Terminal Push`
   - **Expiration:** 90 days (or longer)
   - **Scopes:** ✅ Check **`repo`** (full control - gives access to private repos too)
4. **Scroll down** and click **"Generate token"**
5. **COPY THE TOKEN** (starts with `ghp_`)
   - ⚠️ **You can only see it once!** Save it immediately

---

## Step 2: Update Remote URL with Token

**Run this command** (replace `YOUR_TOKEN` with your actual token):

```bash
cd "/Users/nataliiaivanova/Documents/Core-Design/Website 2.0"
git remote set-url origin https://ghp_YOUR_TOKEN@github.com/Designativ/core-systems_landing-page.git
```

**Example** (if your token was `ghp_abc123xyz`):
```bash
git remote set-url origin https://ghp_abc123xyz@github.com/Designativ/core-systems_landing-page.git
```

---

## Step 3: Add All Files and Commit

**Run these commands:**

```bash
# Make sure you're in the right folder
cd "/Users/nataliiaivanova/Documents/Core-Design/Website 2.0"

# Add all files
git add .

# Commit everything
git commit -m "Initial commit - Core Systems website"

# Push to GitHub
git push -u origin main
```

**That's it!** Your code will upload to GitHub.

---

## If You Get Errors:

### "Permission denied" or "403 error":
- ✅ Make sure token is correct (starts with `ghp_`)
- ✅ Make sure you copied the entire token (no spaces)
- ✅ Try creating a new token

### "Repository not found":
- ✅ Check repository name: `core-systems_landing-page`
- ✅ Make sure repository exists on GitHub
- ✅ Go to: https://github.com/Designativ/core-systems_landing-page

### "Branch main does not exist":
- ✅ Try: `git push -u origin main --force` (if this is a new empty repo)

---

## After Pushing:

1. **Verify on GitHub:**
   - Go to: https://github.com/Designativ/core-systems_landing-page
   - You should see all your files!

2. **Then deploy to Netlify:**
   - Go to: https://app.netlify.com
   - Import from GitHub
   - Select your repository
   - Deploy!

---

**Ready? Get your token first, then I'll help you run the commands!** 🚀
