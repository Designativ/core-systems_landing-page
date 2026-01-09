#!/bin/bash
# Script to push to GitHub with Personal Access Token

# Remove token from URL
git remote set-url origin https://github.com/Designativ/core-systems-website.git

# Push using token as password
# When prompted:
# Username: Designativ
# Password: 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

echo "Attempting to push to GitHub..."
echo "Using token as password when prompted..."

git push -u origin main <<EOF
Designativ
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
EOF
