# GitHub Push Troubleshooting

## 🔴 Error: "Permission denied" or "Repository not found"

This usually means one of these:

### Issue 1: Repository doesn't exist on GitHub

**Check:** Go to https://github.com/Designativ/core-systems-website

**If 404 error:**
- Repository doesn't exist yet
- Create it at: https://github.com/new
- Name it: `core-systems-website`
- Don't initialize with README

### Issue 2: Token doesn't have correct permissions

**Check your token permissions:**
1. Go to: https://github.com/settings/tokens
2. Find your token (or create a new one)
3. Make sure it has **`repo`** scope checked
4. Token should have full repository access

**If token doesn't have `repo` permission:**
- Create a new token with `repo` scope
- Use that token instead

### Issue 3: Repository name mismatch

**Verify:**
- GitHub repository is exactly: `core-systems-website`
- Case-sensitive, no typos
- Belongs to `Designativ` account

### Issue 4: Token is expired or revoked

**Check:**
- Token might be expired
- Token might be revoked
- Create a new token if needed

## ✅ Solution: Create New Token with Correct Permissions

1. **Go to:** https://github.com/settings/tokens/new
2. **Note:** "Core Systems Website"
3. **Expiration:** Choose your preference (30 days, 90 days, etc.)
4. **Select scopes:**
   - ✅ **`repo`** - Full control of private repositories
     - ✅ repo:status
     - ✅ repo_deployment
     - ✅ public_repo
     - ✅ repo:invite
     - ✅ security_events
5. **Click:** "Generate token"
6. **Copy the token** (you won't see it again!)

## 🔧 After Creating New Token

**Update the remote URL with new token:**

```bash
# Replace NEW_TOKEN with your new token
git remote set-url origin https://Designativ:NEW_TOKEN@github.com/Designativ/core-systems-website.git

# Then push
git push -u origin main
```

## 🎯 Quick Check Commands

**Verify repository exists:**
```bash
curl -I https://github.com/Designativ/core-systems-website
# Should return 200 if exists, 404 if not
```

**Verify remote is correct:**
```bash
git remote -v
# Should show: https://github.com/Designativ/core-systems-website.git
```

## 📋 Checklist Before Pushing

- [ ] Repository created on GitHub: https://github.com/Designativ/core-systems-website
- [ ] Token has `repo` scope enabled
- [ ] Token is not expired
- [ ] Repository name matches exactly (case-sensitive)
- [ ] Repository is accessible (not private with wrong permissions)

## 🆘 If Still Not Working

Try this alternative approach:

1. **Remove current remote:**
   ```bash
   git remote remove origin
   ```

2. **Add remote without token in URL:**
   ```bash
   git remote add origin https://github.com/Designativ/core-systems-website.git
   ```

3. **Push (will prompt for credentials):**
   ```bash
   git push -u origin main
   ```
   - Username: `Designativ`
   - Password: Paste your Personal Access Token

This way, git will prompt you and you can paste the token directly.

---

**Most likely issue: Repository doesn't exist on GitHub yet or token doesn't have `repo` permission.**
