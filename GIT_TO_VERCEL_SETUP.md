# 📖 Simple Guide: Getting Your Website Online (Step by Step)

## What This Guide Does

This will help you:
1. ✅ Save your work so it's backed up (like saving to Google Drive)
2. ✅ Put your website code on the internet (on GitHub)
3. ✅ Make your website live for everyone to see (on Vercel)
4. ✅ Set it up so when you make changes, the website updates automatically

**Think of it like this:**
- **Cursor** = Where you write your website code (like Microsoft Word)
- **Git** = A way to save versions of your work (like Google Drive version history)
- **GitHub** = A website where you store your code online (like Dropbox for code)
- **Vercel** = A website that turns your code into a live website (like printing a document)

---

## Where You Are Right Now

Great news! You already have:
- ✅ Your code saved locally (on your computer)
- ✅ A Git repository set up (everything is committed)
- ✅ A GitHub repository created: `core-systems-website`
- ✅ Your local folder is connected to GitHub
- ⚠️ Your latest changes might need to be pushed to GitHub (uploaded)

**Your repository location:**
- **Local (on your computer):** `/Users/nataliiaivanova/Documents/Core-Design/Website 2.0`
- **On GitHub:** https://github.com/Designativ/core-systems-website

**What "nothing to commit, working tree clean" means:**
- All your changes are saved (committed) locally
- You're ready to upload (push) to GitHub

---

## Step 1: Save Your Changes (This is Called "Committing")

Before putting your website online, you need to save all your recent work. This is like hitting "Save" in a document.

### Easy Way: Using Cursor's Visual Buttons

1. **Look at the left side of Cursor** - you'll see icons
2. **Click the icon that looks like a branch** (or press `Cmd+Shift+G` on Mac)
   - This is called "Source Control"
3. **You'll see a list of files you changed**
   - These are files that need to be saved
4. **Look for a button that says "Commit"** or has a ✓ checkmark
5. **Type a message** explaining what you did, like:
   - "Added email form settings"
   - "Fixed website colors"
   - "Added new pages"
6. **Click the Commit button**
   - This saves your changes with a note about what you changed

**Why do this?** It's like writing a note about what you changed, so later you can remember what you did.

---

## Step 2: Put Your Code on GitHub (This is Called "Pushing")

**Good news!** You already have a GitHub repository: `core-systems-website`. Now you just need to upload your latest saved changes to it.

### ⭐ Easiest Way: Use GitHub Desktop (Recommended!)

**This is the simplest method - no complicated passwords needed!**

1. **Download GitHub Desktop (if you don't have it):**
   - Go to: https://desktop.github.com/
   - Click "Download for Mac" (or Windows if you're on Windows)
   - Install it like any other app

2. **Sign in to GitHub Desktop:**
   - Open the GitHub Desktop app
   - Click "Sign in to GitHub"
   - Use your GitHub username and password (the same account: `Designativ`)
   - It will ask permission - click "Allow"

3. **Add Your Existing Website Folder:**
   - In GitHub Desktop, click **File** at the top
   - Click **Add Local Repository**
   - Click **Choose...**
   - Navigate to and select your website folder: `Website 2.0`
   - It's located at: `/Users/nataliiaivanova/Documents/Core-Design/Website 2.0`
   - Click **Add Repository**
   - GitHub Desktop will detect that this folder already has Git set up - that's perfect!

4. **Upload Your Changes to GitHub:**
   - You'll see your repository in GitHub Desktop
   - Look at the top right - there should be a button that says:
     - **"Push origin"** or **"Publish repository"** (if first time pushing)
   - Click that button
   - It will upload your code to: `Designativ/core-systems-website`

5. **Done!** 
   - Your code is now updated on GitHub
   - You can see it at: https://github.com/Designativ/core-systems-website
   - You should see all your files and latest commits there

**Why GitHub Desktop?** It's like having an app for Google Drive instead of using the website - much easier and no confusing passwords!

**Note:** Since you already have the repository set up, GitHub Desktop will recognize it automatically. You'll just need to click "Push origin" to upload any changes!

---

## Step 3: Check That Everything Worked

Make sure your code is actually on GitHub:

1. **Open your web browser**
2. **Go to:** https://github.com/Designativ/core-systems-website
3. **You should see:**
   - ✅ All your files listed (like `package.json`, `src`, `public`, etc.)
   - ✅ Your recent changes
   - ✅ A file called `.env.local` should NOT be there (that's good - it has your passwords!)

If you see your files, you're good! If not, go back to Step 2.

---

## Step 4: Make Your Website Live on the Internet (Using Vercel)

Vercel is a service that takes your code and turns it into a real website that anyone can visit.

### How to Set Up Vercel

1. **Create a Vercel Account:**
   - Go to: https://vercel.com in your browser
   - Click **"Sign Up"** 
   - You can sign up with your GitHub account (easiest!)
   - Or create an account with email

2. **Connect Your GitHub:**
   - After signing up, you'll see a button that says **"Add New..."** or **"New Project"**
   - Click it
   - Click **"Import Git Repository"** or **"Import from GitHub"**
   - If it asks, click **"Connect GitHub Account"**
   - Sign in with your GitHub account (`Designativ`)
   - Click **"Authorize"** or **"Allow"** when it asks for permission
   - This lets Vercel see your code (it's safe!)

3. **Choose Your Website:**
   - You'll see a list of your projects
   - Find: `core-systems-website` or `Designativ/core-systems-website`
   - Click **"Import"** next to it

4. **Set Up Your Website:**
   - Vercel will automatically detect it's a Next.js website (don't worry about what that means!)
   - Most settings will be filled in automatically
   - **Don't change anything** unless you know what you're doing
   - Look for a section called **"Environment Variables"** or **"Configure"**

5. **Add Your Email Settings (Important!):**
   - Before clicking "Deploy", find **"Environment Variables"** button
   - Click it
   - You need to add two things:
   
   **First one:**
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_5NsK8Mpu_A3c6L5rWYm9jaWcjKQyzoaoz`
   - **Where to use it:** Check all boxes (Production, Preview, Development)
   - Click **"Add"** or **"Save"**
   
   **Second one:**
   - **Name:** `RESEND_FROM_EMAIL`
   - **Value:** `onboarding@resend.dev`
   - **Where to use it:** Check all boxes
   - Click **"Add"** or **"Save"**

   **What are these?** These are settings that tell your contact form how to send emails. Without them, the contact form won't work!

6. **Make Your Website Live:**
   - Click the big **"Deploy"** button (usually blue or green)
   - Wait 1-2 minutes - you'll see it working
   - It's building your website (like compiling a book before printing)
   - When it says "Ready" or shows a green checkmark ✅, you're done!

7. **Your Website is Live!**
   - You'll see a button that says **"Visit"** or a web address
   - Click it - your website is now on the internet!
   - The address will be something like: `https://core-systems-website.vercel.app`

---

## Step 5: Test That Everything Works

Now test your website:

1. **Visit Your Website:**
   - Click the **"Visit"** button in Vercel
   - Or go to the web address it shows you
   - Your website should look exactly like it does on your computer!

2. **Test the Contact Form:**
   - Scroll down to the contact form
   - Fill it out with test information:
     - Name: Test
     - Email: your-email@example.com
     - Message: This is a test
   - Click Submit
   - Check the email: `natalieindesign@gmail.com`
   - You should receive an email within seconds!

3. **If the Form Doesn't Work:**
   - Go back to Vercel dashboard
   - Click **Settings** (gear icon)
   - Click **Environment Variables**
   - Make sure `RESEND_API_KEY` is there
   - If you just added it, you need to click **"Redeploy"** button
   - Wait for it to finish, then try the form again

---

## How It Works After Setup (The Magic Part!)

Once everything is set up, here's what happens automatically:

1. **You make changes** to your website in Cursor
2. **You save them** using GitHub Desktop (click "Push origin")
3. **Vercel automatically notices** you made changes
4. **Vercel automatically updates your live website** (in 1-2 minutes)
5. **Your website is updated!** No extra work needed!

**It's like having an assistant that watches your code and updates your website whenever you make changes!**

### Your Daily Workflow (Super Simple):

1. **Make changes** in Cursor (edit your website)
2. **Save in Cursor** (commit your changes - Step 1)
3. **Upload to GitHub** using GitHub Desktop (push - Step 2)
4. **That's it!** Vercel does the rest automatically

---

## If Something Goes Wrong (Troubleshooting)

### "I can't find my files on GitHub"
- Make sure you clicked "Push origin" in GitHub Desktop
- Wait a few seconds and refresh the GitHub webpage
- Check that you're signed into the right GitHub account

### "My website won't build on Vercel"
- In Vercel, click on your project
- Click on the failed deployment (it will be red)
- Click "View Build Logs"
- Look for red error messages
- These will tell you what's wrong
- Common fix: Make sure `RESEND_API_KEY` is set correctly

### "The contact form doesn't send emails"
- Go to Vercel → Your Project → Settings → Environment Variables
- Make sure `RESEND_API_KEY` is there with the correct value
- After adding/changing it, click "Redeploy" button
- Wait for it to finish, then test again
- Check your spam folder in email

### "I get an error when trying to push to GitHub"
- Use GitHub Desktop instead (easier!)
- Or make sure you're signed into GitHub Desktop
- If using terminal/command line, the password might be wrong - use GitHub Desktop instead

---

## ✅ Quick Checklist

Before you finish, make sure you've done these:

- [ ] Saved all changes in Cursor (committed)
- [ ] Uploaded code to GitHub using GitHub Desktop (pushed)
- [ ] Checked GitHub website and saw your files
- [ ] Created Vercel account
- [ ] Connected Vercel to GitHub
- [ ] Selected your project in Vercel
- [ ] Added `RESEND_API_KEY` in Vercel settings
- [ ] Added `RESEND_FROM_EMAIL` in Vercel settings  
- [ ] Clicked "Deploy" button
- [ ] Waited for it to finish (saw green checkmark)
- [ ] Visited your live website
- [ ] Tested the contact form
- [ ] Received a test email

---

## 🎯 Why Use GitHub Desktop? (Recommended!)

**Think of it this way:**
- **Terminal/Command Line** = Typing code commands (like DOS from the 1990s - confusing!)
- **GitHub Desktop** = A nice app with buttons you can click (like using an iPhone app instead of typing commands)

**Benefits:**
- ✅ No confusing passwords or tokens needed
- ✅ You can see what you're doing with pictures/icons
- ✅ Easier to understand what's happening
- ✅ Made by GitHub (the official app)
- ✅ Free!

**After installing GitHub Desktop, your process is:**
1. Make changes in Cursor
2. Open GitHub Desktop
3. See all your changes in a nice list
4. Type a message about what you changed
5. Click "Push origin" button
6. Done! Your website automatically updates!

---

## 💡 What to Do Next (Optional)

After everything is working:

1. **Get Your Own Website Address (Custom Domain):**
   - In Vercel, go to Settings → Domains
   - Add your own domain (like `www.yourwebsite.com`)
   - Follow the instructions (you'll need to change some settings at your domain registrar)
   - Vercel will give you a free SSL certificate (the lock icon that makes your site secure)

2. **Set Up Email Notifications:**
   - In Vercel Settings, turn on email notifications
   - You'll get an email every time your website updates
   - This way you know if something breaks

3. **Monitor Your Website:**
   - Check Vercel dashboard sometimes to make sure everything is working
   - If you see red errors, something needs fixing
   - Green checkmarks mean everything is good!

---

## 📚 Helpful Links

- **GitHub Desktop:** https://desktop.github.com/ (Download the easy app)
- **Vercel Dashboard:** https://vercel.com/dashboard (Where you manage your website)
- **Resend Dashboard:** https://resend.com/emails (See emails your contact form sends)
- **Your GitHub:** https://github.com/Designativ/core-systems-website (See your code online)

---

## 🎉 You're Done!

**Congratulations!** Your website is now:
- ✅ Saved safely on GitHub (backed up)
- ✅ Live on the internet (anyone can visit it)
- ✅ Set up to update automatically (whenever you make changes)

**Remember:**
- Always save your work in Cursor first (commit)
- Then upload to GitHub using GitHub Desktop (push)
- Vercel will automatically update your live website!

**Need help?** Most problems are solved by:
1. Making sure `RESEND_API_KEY` is set in Vercel
2. Using GitHub Desktop instead of command line
3. Clicking "Redeploy" in Vercel if you changed settings

Good luck! You've got this! 🚀
