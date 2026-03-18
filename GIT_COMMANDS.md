# 🔧 Git Commands Ready to Use

**Copy and paste these commands in order to upload your project to GitHub**

---

## Prerequisites (One-time Setup)

### 1. Install Git
Download from: https://git-scm.com/download/win

### 2. Configure Git Globally
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Verify:
```bash
git config --global --list
```

---

## Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: `sipstrong`
3. **Description**: `Elite Performance Nutrition Platform - E-commerce built with Next.js`
4. **Visibility**: `Public` (or Private)
5. **Initialize repo**: Leave unchecked
6. Click "Create repository"

**Copy the repository URL** (will look like: `https://github.com/YOUR_USERNAME/sipstrong.git`)

---

## Initialize & Push to GitHub

### Step 1: Navigate to Project Directory
```bash
cd "C:\Users\Kunal\OneDrive\Desktop\okok"
```

### Step 2: Initialize Git Repository
```bash
git init
```

### Step 3: Verify Files (should see project files)
```bash
git status
```

### Step 4: Stage All Files
```bash
git add .
```

### Step 5: Verify Staged Files
```bash
git status
```

You should see green "Changes to be committed" with all your files.

### Step 6: Create Initial Commit
```bash
git commit -m "Initial production-ready commit

- Production-ready Next.js 16 application
- Firebase authentication configured
- Tailwind CSS styling and responsive design
- Advanced animations with Framer Motion and GSAP
- Error boundaries and comprehensive error handling
- Security hardening and environment variable protection
- Complete project documentation
- Vercel deployment ready
- ESLint and TypeScript strict mode configured
- E-commerce platform with product catalog and shopping cart"
```

### Step 7: Set Main Branch
```bash
git branch -M main
```

### Step 8: Add Remote Repository
**Replace `YOUR_USERNAME` with your actual GitHub username:**
```bash
git remote add origin https://github.com/YOUR_USERNAME/sipstrong.git
```

### Step 9: Verify Remote
```bash
git remote -v
```

You should see:
```
origin  https://github.com/YOUR_USERNAME/sipstrong.git (fetch)
origin  https://github.com/YOUR_USERNAME/sipstrong.git (push)
```

### Step 10: Push to GitHub
```bash
git push -u origin main
```

You may be prompted for credentials:
- **Username**: Your GitHub username
- **Password**: Your password OR Personal Access Token

---

## After Successful Push

### Verify on GitHub
1. Go to: `https://github.com/YOUR_USERNAME/sipstrong`
2. You should see all your project files
3. README should display on the main page
4. .env should NOT be visible (it's ignored)

### Check What Was Pushed
```bash
git log --oneline
```

Should show your initial commit at the top.

---

## Ongoing Git Workflow

### For New Features
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes to files...

# Stage changes
git add .

# Commit
git commit -m "feat: Your feature description"

# Push to GitHub
git push origin feature/your-feature-name
```

### Pull Requests (on GitHub.com)
1. After pushing branch, go to your repository
2. You'll see a "Compare & pull request" button
3. Click it and describe your changes
4. Click "Create pull request"
5. Teammates review and approve
6. Merge when ready

### Pulling Latest Changes
```bash
# Get latest updates
git pull origin main

# Or if on different branch
git pull origin branch-name
```

### View Commit History
```bash
# Simple view
git log --oneline

# Detailed view with graph
git log --oneline --graph --decorate --all
```

---

## Common Useful Commands

### Check Status Anytime
```bash
git status
```

### See What Changed
```bash
git diff
```

### See Staged Changes
```bash
git diff --cached
```

### Create a Tag (for releases)
```bash
git tag v1.0.0
git push origin v1.0.0
```

### Switch Branches
```bash
git checkout main
git checkout feature/my-feature
```

### Create New Branch
```bash
git checkout -b feature/new-feature
```

### List All Branches
```bash
git branch -a
```

### Delete Branch (after merging)
```bash
git branch -d feature/my-feature
```

---

## If Something Goes Wrong

### Undo Last Commit (keep changes)
```bash
git reset HEAD~1
```

### Undo Last Commit (discard changes)
```bash
git reset HEAD~1 --hard
```

### Stash Uncommitted Changes
```bash
git stash
```

### Get Stashed Changes Back
```bash
git stash pop
```

### Fix Accidentally Deleted File
```bash
git checkout -- filename
```

### See All Recent Actions
```bash
git reflog
```

---

## Using Personal Access Token (Recommended)

Instead of password, use a Personal Access Token:

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token"
3. Name: `git-push`
4. Expiration: 90 days or No expiration
5. Scopes: Select `repo` (full control of private repositories)
6. Click "Generate token"
7. **COPY and SAVE the token** (you won't see it again)
8. Use this token when prompted for password

---

## Summary - Quick Sequence

```bash
# 1. Navigate to project
cd "C:\Users\Kunal\OneDrive\Desktop\okok"

# 2. Initialize
git init

# 3. Check status
git status

# 4. Stage files
git add .

# 5. Commit
git commit -m "Initial production-ready commit"

# 6. Set main branch
git branch -M main

# 7. Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/sipstrong.git

# 8. Verify
git remote -v

# 9. Push
git push -u origin main

# 10. Done! ✅
```

---

## Verify Everything Worked

```bash
# Check last commit
git log -1

# Check remote
git remote -v

# Check branch
git branch
```

---

## Reference: Environment Variables

Your `.env` file (local only, not committed):
- Contains Firebase credentials
- Only used in development
- Protected by .gitignore
- `npm install` will work without it

Your `.env.example` (committed to repo):
- Shows structure needed
- No actual values
- Used as template for new developers

---

## Next: Enable GitHub Pages (Optional)

To host project documentation:

1. Go to repository Settings → Pages
2. Select branch: `main`
3. Select folder: `/ (root)`
4. Save

Your README will be available at: `https://YOUR_USERNAME.github.io/sipstrong`

---

## Need Help?

Refer to these files in your project:
- **[GITHUB_SETUP.md](GITHUB_SETUP.md)** - Full GitHub setup guide
- **[README.md](README.md)** - Project documentation
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines

---

**You're all set! Follow the commands above and your project will be on GitHub.** 🚀

The first time will take a minute. Subsequent pushes are much faster!
