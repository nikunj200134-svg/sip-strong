# Vercel Deployment Guide for SipStrong

## Prerequisites
- Node.js 20+ installed locally
- Vercel account created (https://vercel.com)
- Firebase project with authentication enabled
- Git repository initialized

## Step-by-Step Deployment

### 1. Prepare Environment Variables

Before deploying, ensure you have all required Firebase credentials:

```bash
# Copy the example file
cp .env.example .env.local

# Fill in your actual Firebase credentials:
NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 2. Test Build Locally

```bash
# Install dependencies
npm install

# Run build locally to verify no errors
npm run build

# If build succeeds, test the production build locally
npm run start
```

### 3. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Visit https://vercel.com/import
3. Connect your repository
4. Vercel will auto-detect Next.js configuration
5. Add environment variables in project settings:
   - Click "Settings" → "Environment Variables"
   - Add all `NEXT_PUBLIC_FIREBASE_*` variables
   - Mark them as "Production", "Preview", and "Development" as needed
6. Click "Deploy"

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy the project
vercel --prod

# When prompted, set environment variables:
# - Choose project name
# - Link to existing project (if you have one)
# - Enter all Firebase environment variables
```

### 4. Post-Deployment Verification

After successful deployment:

1. **Check Build Status**
   - Visit your Vercel dashboard at https://vercel.com/dashboard
   - Verify the latest build passed

2. **Test the Live Application**
   - Visit your production URL
   - Navigate through all pages
   - Test the login/authentication flow
   - Ensure images load properly
   - Check console for any errors

3. **Monitor Performance**
   - Use Vercel Analytics to monitor Core Web Vitals
   - Check build times and deployment duration
   - Review any runtime errors in logs

### 5. Continuous Deployment

Vercel automatically deploys on every push to your main branch:

```bash
# Push changes to trigger automatic deployment
git push origin main
```

For preview deployments on pull requests:
- Vercel automatically creates preview deployments for each PR
- All team members can review changes before merging

## Environment Variables Setup in Vercel Dashboard

1. Go to Project Settings → Environment Variables
2. Add each variable:
   - **Variable Name**: `NEXT_PUBLIC_FIREBASE_API_KEY`
   - **Value**: (your Firebase API Key)
   - **Environments**: Check all (Production, Preview, Development)
3. Repeat for all Firebase configuration variables

## Important Security Notes

⚠️ **DO NOT:**
- Commit `.env` file to version control
- Expose private Firebase credentials publicly
- Use test/development Firebase keys in production

✅ **DO:**
- Use production Firebase project credentials
- Enable Firebase security rules in production
- Set up Vercel environment variables through the dashboard
- Keep sensitive keys only in Vercel's secure environment variable storage

## Troubleshooting

### Build Fails with "Firebase API Key not found"
- ✓ Verify all `NEXT_PUBLIC_FIREBASE_*` variables are set in Vercel
- ✓ Check that variable names match exactly (including capitalization)
- ✓ Redeploy after updating environment variables

### Images Not Loading in Production
- ✓ Verify Unsplash domain is in `next.config.ts` remote patterns
- ✓ Check image URLs are HTTPS
- ✓ Verify images.unsplash.com is accessible

### Authentication Not Working
- ✓ Confirm Firebase is initialized with correct credentials
- ✓ Check Firebase console for any error logs
- ✓ Verify Firebase auth is enabled in your project
- ✓ Ensure origin is authorized in Firebase console

### 502 Bad Gateway Errors
- ✓ Check build logs for any runtime errors
- ✓ Restart deployment: Go to Deployments → Redeploy
- ✓ Verify all environment variables are set correctly

## Rollback to Previous Deployment

If something goes wrong:

1. Go to Vercel Dashboard → Deployments
2. Find the previous working deployment
3. Click "Promote to Production"
4. All traffic will be routed to the previous version

## Monitoring & Logs

View deployment logs:
- Go to Vercel Dashboard → Deployments
- Click on a deployment
- View build logs under "Logs"
- View runtime errors in "Runtime Logs"

## Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow the DNS configuration instructions
4. Update DNS records at your domain provider
5. Vercel automatically issues SSL certificate

## Next Steps

- Monitor Vercel Analytics for performance metrics
- Set up error tracking with Sentry or similar
- Configure monitoring alerts
- Plan for scaling if needed

For more details, visit: https://vercel.com/docs
