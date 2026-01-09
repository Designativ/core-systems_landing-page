# Manual Push Instructions

## 🔴 Current Issue: 403 Permission Denied

Your token might not have the correct permissions. Here's how to fix it:

## ✅ Solution: Create New Token with Correct Permissions

### Step 1: Create a New Personal Access Token (Classic)

1. **Go to:** https://github.com/settings/tokens/new
2. **Note:** "Core Systems Website Deploy"
3. **Expiration:** Choose 90 days or custom
4. **Select scopes:**
   - ✅ **`repo`** - Full control of private repositories
     - This includes all sub-scopes needed for pushing code

5. **Click:** "Generate token"
6. **IMPORTANT:** Copy the token immediately (you won't see it again!)

### Step 2: Use the New Token

Once you have a new token, run these commands:

```bash
# Replace NEW_TOKEN_HERE with your new token
git remote set-url origin https://NEW_TOKEN_HERE@github.com/Designativ/core-systems-website.git

# Then push
git push -u origin main
```

**OR** use it in the URL with username:

```bash
git remote set-url origin https://Designativ:NEW_TOKEN_HERE@github.com/Designativ/core-systems-website.git
git push -u origin main
```

## 🎯 Alternative: Push via GitHub CLI (gh)

If you have GitHub CLI installed:

```bash
gh auth login
gh repo create Designativ/core-systems-website --public --source=. --remote=origin
git push -u origin main
```

## 📋 Quick Checklist

- [ ] Repository exists: https://github.com/Designativ/core-systems-website ✅ (Verified: exists)
- [ ] Token has `repo` scope ⚠️ (Need to verify/create new)
- [ ] Token is not expired ⚠️ (Need to verify)
- [ ] Token is classic PAT (not fine-grained with restrictions) ⚠️ (Need to verify)

## 🆘 If Token Doesn't Work

Try creating a **Fine-grained Personal Access Token** instead:

1. Go to: https://github.com/settings/tokens?type=beta
2. Click: "Generate new token"
3. **Repository access:** Select "Only select repositories" → Choose `core-systems-website`
4. **Repository permissions:**
   - Contents: Read and write
   - Metadata: Read
5. Generate and use the new token

---

**Next step:** Create a new token with `repo` scope and share it, or try the manual push method.
