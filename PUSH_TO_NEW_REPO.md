# 🚀 Push Code to New Repository: core-systems_landing-page

## ✅ Repository Ready!

**Your new repository:**
- Name: `core-systems_landing-page`
- URL: https://github.com/Designativ/core-systems_landing-page
- Status: Empty (ready for your code!)

---

## Option 1: Upload ZIP via GitHub Website (EASIEST!) ⭐

### Step 1: Upload Files

1. **Go to:** https://github.com/Designativ/core-systems_landing-page

2. **Click:** "uploading an existing file" (it's a link on the page)
   - OR click **"Add file"** → **"Upload files"**

3. **Upload the ZIP file:**
   - I created: `core-systems-website.zip`
   - Location: `/Users/nataliiaivanova/Documents/Core-Design/core-systems-website.zip`
   - Drag and drop it OR click "choose your files"
   - Select the ZIP file

4. **Extract files:**
   - After upload, GitHub will show the ZIP
   - Download it, extract locally
   - Then upload the extracted files/folders to GitHub
   - **OR** better: Just upload folders directly (see below)

### Better: Upload Folders Directly (No ZIP)

1. **Go to:** https://github.com/Designativ/core-systems_landing-page

2. **Click:** "Add file" → "Upload files"

3. **Drag these folders:**
   - `src` folder
   - `public` folder
   - `package.json`
   - `next.config.js`
   - `tailwind.config.ts`
   - `tsconfig.json`
   - `postcss.config.js`
   - `.gitignore`
   - All other files (not folders)

4. **Scroll down** and click **"Commit changes"**

5. **Done!** Your code is on GitHub!

---

## Option 2: Use GitHub Desktop (If You Want)

1. **Open GitHub Desktop**
2. **File** → **Add Local Repository**
3. **Select:** `/Users/nataliiaivanova/Documents/Core-Design/Website 2.0`
4. **Click:** "Publish repository"
5. **Repository name:** `core-systems_landing-page`
6. **Make sure it says:** `Designativ/core-systems_landing-page`
7. **Click:** "Publish Repository"
8. **Done!**

---

## Option 3: Use Terminal with Authentication

If you want to use terminal, you'll need a Personal Access Token:

1. **Get token:** https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name: `Core Systems Push`
   - Scope: ✅ `repo` (full control)
   - Generate and copy token (starts with `ghp_`)

2. **Push with token:**
   ```bash
   git remote set-url origin https://ghp_YOUR_TOKEN@github.com/Designativ/core-systems_landing-page.git
   git push -u origin main
   ```
   - Replace `YOUR_TOKEN` with your actual token

---

## ✅ Recommended: Option 1 (Upload via Website)

**Easiest and fastest!** Just drag your folders to GitHub website.

**After uploading, go to Step 2: Deploy to Netlify!**

---

## Next Step: Deploy to Netlify

Once your code is on GitHub:

1. Go to: https://app.netlify.com
2. Sign up/Login (can use GitHub account!)
3. Click "Add new site" → "Import an existing project"
4. Click "GitHub" → Authorize
5. Select: `Designativ/core-systems_landing-page`
6. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
7. Add environment variables:
   - `RESEND_API_KEY` = `re_5NsK8Mpu_A3c6L5rWYm9jaWcjKQyzoaoz`
   - `RESEND_FROM_EMAIL` = `onboarding@resend.dev`
8. Click "Deploy site"
9. **Done!** Your site is live! 🚀

---

## Quick Checklist

- [ ] Upload code to GitHub (via website, Desktop, or terminal)
- [ ] Verify files are on GitHub (check the repository)
- [ ] Go to Netlify
- [ ] Import from GitHub
- [ ] Configure build settings
- [ ] Add environment variables
- [ ] Deploy!
- [ ] Test your site

**Ready? Start with Option 1 - Upload via website!** 🎯
