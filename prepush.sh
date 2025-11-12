#!/bin/bash
echo "🔍 Running Pre-Push Checklist..."

# 1️⃣ Stop if any command fails
set -e

# 2️⃣ Clean old builds
echo "🧹 Cleaning old build folders..."
rm -rf .next
rm -rf dist

# 3️⃣ Install dependencies (ensure up-to-date)
echo "📦 Checking dependencies..."
npm install

# 4️⃣ Run lint check (skip if no config)
if npm run | grep -q "lint"; then
  echo "🧪 Running lint..."
  npm run lint
else
  echo "⚠️ No lint script found — skipping lint check"
fi

# 5️⃣ Build the project
echo "🏗️ Building project..."
npm run build

# 6️⃣ Run tests (optional)
if npm run | grep -q "test"; then
  echo "🧩 Running tests..."
  npm run test
else
  echo "⚠️ No test script found — skipping tests"
fi

# 7️⃣ Show git status
echo "📋 Git status:"
git status

# 8️⃣ Done
echo "✅ Pre-push checks passed! You can now safely push your code 🚀"
