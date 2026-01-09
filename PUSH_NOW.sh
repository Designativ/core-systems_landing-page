#!/bin/bash
# Simple script to push to GitHub
# Run this in your terminal: bash PUSH_NOW.sh

echo "🚀 Pushing to GitHub..."
echo ""

# Set remote URL
git remote set-url origin https://github.com/Designativ/core-systems-website.git

echo "📤 Attempting push..."
echo "When prompted, use:"
echo "  Username: Designativ"
echo "  Password: Your GitHub Personal Access Token"
echo ""

# This will prompt for credentials
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 Your branch should now appear in Netlify"
else
    echo ""
    echo "❌ Push failed. Try one of these:"
    echo ""
    echo "Option 1: Create a new token at https://github.com/settings/tokens/new"
    echo "  - Select 'repo' scope"
    echo "  - Copy the token and use it as password"
    echo ""
    echo "Option 2: Use GitHub Desktop"
    echo "  - Download: https://desktop.github.com/"
    echo "  - Add repository from this folder"
    echo "  - Click 'Publish repository'"
fi
