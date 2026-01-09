# Fix GitHub 403 Error

## 🔴 Problem
Getting 403 error even though token has permissions. This is a common issue with **Fine-grained tokens**.

## 💡 Solution: Create a Classic Personal Access Token

Fine-grained tokens (starting with `github_pat_`) sometimes have issues with git operations. Classic tokens (starting with `ghp_`) work more reliably.

### Step 1: Create Classic Token

1. **Go to:** https://github.com/settings/tokens/new
   - ⚠️ **IMPORTANT:** Make sure you're on the "Personal access tokens" → "Tokens (classic)" section
   - NOT the "Fine-grained tokens" section

2. **Token settings:**
   - **Note:** "Core Systems Git Push"
   - **Expiration:** 90 days (or your preference)
   - **Select scopes:**
     - ✅ **`repo`** - Full control of private repositories
       - This includes all sub-scopes automatically

3. **Click:** "Generate token"

4. **Copy the token** (it will start with `ghp_` - different from fine-grained tokens)

### Step 2: Use Classic Token

Once you have the classic token (starts with `ghp_`), run:

```bash
cd "/Users/nataliiaivanova/Documents/Core-Design/Website 2.0"
git remote set-url origin https://ghp_YOUR_CLASSIC_TOKEN@github.com/Designativ/core-systems-website.git
git push -u origin main
```

Or, when prompted manually:

```bash
git remote set-url origin https://github.com/Designativ/core-systems-website.git
git push -u origin main
```

**When prompted:**
- Username: `Designativ`
- Password: `ghp_YOUR_CLASSIC_TOKEN` (paste your classic token)

## 🚀 Alternative: Use GitHub Desktop (Recommended)

If token issues persist, **GitHub Desktop** handles authentication automatically:

1. **Download:** https://desktop.github.com/
2. **Install** and **Sign in** with GitHub
3. **File** → **Add Local Repository**
4. **Browse to:** `/Users/nataliiaivanova/Documents/Core-Design/Website 2.0`
5. **Click:** "Publish repository" button
6. **Repository name:** `core-systems-website`
7. **Click:** "Publish Repository"

GitHub Desktop will:
- ✅ Authenticate automatically using your GitHub account
- ✅ Push all your code
- ✅ Set up the remote correctly
- ✅ Handle all git operations

## 🎯 Quick Steps to Create Classic Token

1. Go to: https://github.com/settings/tokens/new
2. If you see "Fine-grained tokens" page, click "Tokens (classic)" in the sidebar
3. Click "Generate new token" → "Generate new token (classic)"
4. Select `repo` scope
5. Generate and copy token (starts with `ghp_`)
6. Use it as described above

---

**Why this works:** Classic tokens (`ghp_`) have been around longer and work more reliably with git operations than fine-grained tokens (`github_pat_`).
