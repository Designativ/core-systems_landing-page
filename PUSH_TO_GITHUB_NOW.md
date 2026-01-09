# Push to GitHub - Manual Instructions

## ✅ Your Token is Valid!
- ✅ Token authenticates as `Designativ`
- ✅ Token has Push and Admin permissions
- ✅ Repository exists

## 🎯 Solution: Run These Commands in Your Terminal

Open your **Terminal** app and run these commands **one by one**:

```bash
# 1. Navigate to your project
cd "/Users/nataliiaivanova/Documents/Core-Design/Website 2.0"

# 2. Set the remote URL
git remote set-url origin https://github.com/Designativ/core-systems-website.git

# 3. Push - this will prompt for credentials
git push -u origin main
```

**When prompted for credentials:**
- **Username:** `Designativ`
- **Password:** `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`

**Important:** Copy and paste the password token when prompted (it won't show as you type).

## 🚀 Alternative: Use GitHub Desktop (Easiest)

If the command line doesn't work:

1. **Download:** https://desktop.github.com/
2. **Install** and **Sign in** with your GitHub account
3. **File** → **Add Local Repository**
4. **Browse to:** `/Users/nataliiaivanova/Documents/Core-Design/Website 2.0`
5. **Click:** "Publish repository" button
6. **Repository name:** `core-systems-website`
7. **Check:** "Keep this code private" (optional)
8. **Click:** "Publish Repository"

GitHub Desktop will handle all authentication automatically!

## ✅ After Successful Push

Once your code is on GitHub:

1. **Go back to Netlify** configuration page
2. **Refresh** the page (F5 or Cmd+R)
3. **Click** the "Branch to deploy" dropdown
4. **Select:** `main` (it should appear now)
5. **Build command:** Enter `npm run build`
6. **Click:** "Deploy site"

Your site will deploy automatically! 🎉

---

**Why the automated push didn't work:**
Your token has the correct permissions, but git authentication sometimes requires interactive input for security reasons. Running it manually in your terminal will work better.
