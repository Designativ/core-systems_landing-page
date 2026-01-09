#!/bin/bash
# Script to push to GitHub with Personal Access Token

# Remove token from URL
git remote set-url origin https://github.com/Designativ/core-systems-website.git

# Push using token as password
# When prompted:
# Username: Designativ
# Password: YOUR_TOKEN_HERE (get it from https://github.com/settings/tokens)

echo "Attempting to push to GitHub..."
echo "Using token as password when prompted..."

git push -u origin main <<EOF
Designativ
YOUR_TOKEN_HERE
EOF
