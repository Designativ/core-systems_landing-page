# Quick Guide: Push to GitHub

## Current Status
- ✅ Code is committed and ready
- ✅ Repository exists: https://github.com/Designativ/core-systems-website
- ❌ Push is failing due to authentication (403 error)

## Solution Options

### Option 1: Run the Push Script (Easiest)

I've created a script for you. **Open your terminal** and run:

```bash
cd "/Users/nataliiaivanova/Documents/Core-Design/Website 2.0"
bash PUSH_NOW.sh
```

When prompted:
- **Username:** `Designativ`
- **Password:** Paste your token: `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`

### Option 2: Manual Push (Step by Step)

**In your terminal**, run these commands one by one:

```bash
# Navigate to project
cd "/Users/nataliiaivanova/Documents/Core-Design/Website 2.0"

# Set remote (if needed)
git remote set-url origin https://github.com/Designativ/core-systems-website.git

# Push - this will prompt for credentials
git push -u origin main
```

**When prompted:**
- Username: `Designativ`
- Password: Your token (paste it)

### Option 3: Create New Token (If current token doesn't work)

1. **Go to:** https://github.com/settings/tokens/new
2. **Name:** "Core Systems Push"
3. **Expiration:** 90 days
4. **Select scope:** ✅ **`repo`** (check the box)
5. **Click:** "Generate token"
6. **Copy the token** (starts with `ghp_` for classic tokens)
7. **Use it:**
   ```bash
   git remote set-url origin https://YOUR_NEW_TOKEN@github.com/Designativ/core-systems-website.git
   git push -u origin main
   ```

### Option 4: Use GitHub Desktop (No Command Line)

1. **Download:** https://desktop.github.com/
2. **Install** and sign in with GitHub
3. **File** → **Add Local Repository**
4. **Browse to:** `/Users/nataliiaivanova/Documents/Core-Design/Website 2.0`
5. **Click:** "Publish repository"
6. **Repository name:** `core-systems-website`
7. **Click:** "Publish Repository"

This will automatically push your code to GitHub.

## After Successful Push

Once your code is on GitHub:

1. **Go back to Netlify** configuration page
2. **Refresh** the page (or click the branch dropdown again)
3. The **`main`** branch should now appear in the dropdown
4. **Select** `main` from the dropdown
5. **Build command:** Enter `npm run build`
6. **Click:** "Deploy site"

## Need Help?

If none of these work, the issue might be:
- Token doesn't have `repo` scope
- Token is expired
- Repository permissions need adjustment

In that case, **Option 3** (create new token) or **Option 4** (GitHub Desktop) are your best bets.
