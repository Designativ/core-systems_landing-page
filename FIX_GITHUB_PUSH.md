# Fix GitHub Push Issue

## ✅ Verified
- ✅ Repository exists: https://github.com/Designativ/core-systems-website
- ✅ Token is valid and authenticates as `Designativ`
- ✅ Token has `push` and `admin` permissions to the repository
- ✅ Code is committed and ready to push

## 🔴 Issue
Getting 403 error when pushing, even though token has correct permissions.

## 💡 Solution: Manual Push via Terminal

Try this **exact command** (copy-paste entire block):

```bash
git remote set-url origin https://github.com/Designativ/core-systems-website.git
git push -u origin main
```

**When prompted:**
- **Username:** `Designativ`
- **Password:** Paste your token: `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`

## 🎯 Alternative Solution: Use GitHub Desktop

1. **Download GitHub Desktop:** https://desktop.github.com/
2. **Add repository:**
   - File → Add Local Repository
   - Browse to: `/Users/nataliiaivanova/Documents/Core-Design/Website 2.0`
3. **Publish repository:**
   - Click "Publish repository"
   - Choose: `Designativ/core-systems-website`
   - Check "Keep this code private" if desired
   - Click "Publish repository"

## 🔧 Alternative: Create New Classic Token

If the token still doesn't work, create a new **Classic Personal Access Token**:

1. **Go to:** https://github.com/settings/tokens/new
2. **Name:** "Core Systems Git Push"
3. **Expiration:** 90 days
4. **Select scope:** ✅ **`repo`** (all sub-scopes)
5. **Generate token** and copy it
6. **Use new token:**
   ```bash
   git remote set-url origin https://YOUR_NEW_TOKEN@github.com/Designativ/core-systems-website.git
   git push -u origin main
   ```

## 📋 Quick Test

Test if token works with this command:

```bash
curl -H "Authorization: token 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" https://api.github.com/repos/Designativ/core-systems-website
```

If this works (returns repository info), the token is valid but might need to be used differently for git push.

---

**Most likely:** The token works but needs to be entered manually when git prompts for credentials. Try the manual push method above.
