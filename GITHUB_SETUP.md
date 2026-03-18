# GitHub Setup & Deployment Guide

This guide will walk you through uploading your SipStrong project to GitHub and setting it up for collaboration.

## Prerequisites

### Step 1: Install Git

**Windows**:
1. Download from https://git-scm.com/download/win
2. Run the installer
3. Use default settings
4. Restart your terminal/PowerShell

**Verify installation**:
```bash
git --version
```

### Step 2: Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Check configuration:
```bash
git config --global --list
```

## GitHub Setup

### Step 1: Create GitHub Account

1. Go to https://github.com/join
2. Create your account
3. Verify email

### Step 2: Create Repository

1. Go to https://github.com/new
2. **Repository name**: `sipstrong`
3. **Description**: `Elite Performance Nutrition Platform - E-commerce built with Next.js`
4. **Visibility**: `Public` (or Private if preferred)
5. **Initialize repo**: Leave unchecked (we have a local project)
6. Click "Create repository"

## First-Time Git Setup

### Step 1: Initialize Git Repository

Navigate to your project directory and run:

```bash
cd C:\Users\Kunal\OneDrive\Desktop\okok
git init
```

### Step 2: Configure Git for This Project (Optional)

```bash
# Set name/email for this repo only (overrides global)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Step 3: Add All Files

```bash
git add .
```

Check what will be committed:
```bash
git status
```

### Step 4: Create Initial Commit

```bash
git commit -m "Initial production-ready commit

- Production-ready Next.js 16 application
- Firebase authentication configured
- Tailwind CSS styling implemented
- Error boundaries and security hardening
- Comprehensive documentation included
- Vercel deployment ready"
```

### Step 5: Set Main Branch

```bash
git branch -M main
```

### Step 6: Add Remote Repository

Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/sipstrong.git
```

Verify the remote:
```bash
git remote -v
```

### Step 7: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

You may be prompted to enter your GitHub credentials. Use:
- **Username**: Your GitHub username
- **Password**: A Personal Access Token (see below)

## GitHub Personal Access Token (Recommended)

Instead of password, use a Personal Access Token:

1. Go to Settings → Developer settings → Personal access tokens
2. Click "Generate new token"
3. Name: `git-push`
4. Select scopes: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (save it somewhere safe)
7. Use this token as your password when pushing

## Complete Git Workflow

After initial setup, here's the typical workflow:

### Making Changes

```bash
# 1. Create a feature branch
git checkout -b feature/your-feature-name

# 2. Make your changes
# Edit your files...

# 3. Check status
git status

# 4. Stage changes
git add .

# 5. Commit with meaningful message
git commit -m "feat: Add new feature"

# 6. Push to GitHub
git push origin feature/your-feature-name

# 7. Create Pull Request on GitHub
```

### Pulling Latest Changes

```bash
# Fetch from remote
git fetch origin

# Pull latest main
git pull origin main
```

### Viewing History

```bash
# View commit log
git log --oneline

# View your changes
git diff

# View committed changes
git diff --cached
```

## Common Commands Reference

```bash
# Status
git status                           # Show what changed
git log                             # Show commit history
git log --oneline -10               # Last 10 commits short format

# Branching
git branch                          # List branches
git checkout -b branch-name         # Create & switch to branch
git checkout branch-name            # Switch branch
git branch -d branch-name           # Delete branch

# Staging
git add .                           # Stage all changes
git add file.ts                     # Stage specific file
git reset file.ts                   # Unstage file
git reset --hard                    # Undo all changes (careful!)

# Committing
git commit -m "message"             # Commit with message
git commit --amend                  # Modify last commit
git push origin branch-name         # Push branch
git push -u origin branch-name      # Push & track branch

# Pulling
git pull origin main                # Pull latest main
git fetch origin                    # Fetch updates

# Reverting
git revert HEAD                     # Create new commit undoing last
git reset HEAD~1                    # Undo last commit (keep changes)
git reset HEAD~1 --hard             # Undo last commit (discard changes)

# Stashing
git stash                           # Stash current changes
git stash pop                       # Restore stashed changes
```

## Team Collaboration Best Practices

### Branch Naming Conventions

```
feature/description           # New features
fix/description              # Bug fixes
hotfix/description           # Emergency fixes
docs/description             # Documentation
refactor/description         # Code refactoring
perf/description             # Performance improvements
```

### Commit Message Format

```
type(scope): subject

- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Code style
- refactor: Refactoring
- perf: Performance
- test: Tests
- chore: Build/dependencies

Example:
feat(cart): Add cart item quantity controls

- Implement increment/decrement buttons
- Update cart total calculation
- Add localStorage persistence
- Include UI animation feedback
```

### Pull Request Process

1. **Push feature branch**
   ```bash
   git push origin feature/your-feature
   ```

2. **Create PR on GitHub**
   - Compare branch to main
   - Add description
   - Link related issues

3. **Code review**
   - Team members review
   - Approve when ready

4. **Merge**
   - Squash commits if many
   - Merge to main
   - Delete feature branch

5. **Deploy**
   - Main branch auto-deploys to production (via Vercel)

## GitHub Settings

### Protect Main Branch

1. Go to repository Settings → Branches
2. Click "Add rule"
3. Branch name pattern: `main`
4. Enable:
   - [ ] Require pull request reviews
   - [ ] Require status checks to pass
   - [ ] Require branches to be up to date
   - [ ] Dismiss stale PR approvals
5. Save

### Add Collaborators

1. Settings → Collaborators
2. Add team members
3. They can change their permission level

### Enable GitHub Actions

1. Go to Actions tab
2. Select workflow template (or use default)
3. Configure and enable

## Troubleshooting

### Authentication Failed

**Error**: `fatal: Authentication failed for 'https://github.com/...'`

**Solution**:
```bash
# Use Personal Access Token instead of password
# Or update credentials in Windows Credential Manager
```

### Branch Tracking Issues

**Error**: `fatal: The current branch main has no upstream branch`

**Solution**:
```bash
git push -u origin main
```

### Commit to Wrong Branch

```bash
# Check which branch you're on
git status

# Switch to correct branch
git checkout correct-branch

# Move commits
git cherry-pick <commit-hash>

# Delete from wrong branch
git checkout wrong-branch
git reset --hard HEAD~1
```

### Need to Update with Latest Main

```bash
# Fetch latest
git fetch origin

# Rebase (recommended)
git rebase origin/main

# Or merge (if collaborative)
git merge origin/main
```

## GitHub Features to Use

### Issues
- Report bugs
- Request features
- Discuss improvements

### Projects
- Organize tasks
- Track progress
- Plan releases

### Milestones
- Group related issues
- Track version releases

### Labels
- Organize issues/PRs
- Categorize work

### Wiki
- Project documentation
- Setup guides
- Architecture docs

## Next Steps After Push

1. ✅ **Verify Repository**
   - Visit https://github.com/YOUR_USERNAME/sipstrong
   - Check all files are there
   - Verify README displays correctly

2. ✅ **Enable GitHub Pages** (Optional)
   - For documentation hosting

3. ✅ **Add Secrets**
   - For CI/CD if using GitHub Actions

4. ✅ **Create Release** (When ready)
   - Go to Releases
   - Create tag and release notes

5. ✅ **Collaborate**
   - Invite team members
   - Set up branch protection
   - Establish workflow guidelines

## Resources

- **Git Documentation**: https://git-scm.com/doc
- **GitHub Help**: https://docs.github.com
- **GitHub Skills**: https://skills.github.com
- **Git Cheat Sheet**: https://training.github.com

---

## Quick Start Summary

```bash
# 1. Install Git and configure
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 2. Initialize in project directory
cd /path/to/sipstrong
git init

# 3. Stage and commit
git add .
git commit -m "Initial production-ready commit"

# 4. Set main branch
git branch -M main

# 5. Add remote
git remote add origin https://github.com/YOUR_USERNAME/sipstrong.git

# 6. Push
git push -u origin main

# 7. Done! ✅
```

---

**Ready to collaborate? Start by creating your GitHub repository and following the setup above!** 🚀
