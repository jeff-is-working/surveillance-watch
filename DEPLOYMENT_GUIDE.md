# Deployment Guide - GitHub Pages

This guide will walk you through deploying the WA Surveillance Watch website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js 18+ installed (for testing locally)

## Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Repository settings:
   - **Repository name**: `wa-surveillance-watch` (or your preferred name)
   - **Description**: "Campaign website for Washington State surveillance transparency"
   - **Public** or **Private**: Choose Public (required for free GitHub Pages)
   - **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### Step 2: Update Configuration

Before pushing to GitHub, you need to update one configuration file:

1. Open `vite.config.js` in a text editor
2. Find this line:
   ```javascript
   base: '/wa-surveillance-watch/',
   ```
3. Replace `wa-surveillance-watch` with YOUR repository name (if different)
4. Save the file

**Example:** If your repository is named `surveillance-watch`, change it to:
```javascript
base: '/surveillance-watch/',
```

### Step 3: Initialize Git and Push Code

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: WA Surveillance Watch campaign site"

# Rename branch to main (if needed)
git branch -M main

# Add your GitHub repository as remote
# Replace 'yourusername' and 'wa-surveillance-watch' with your values
git remote add origin https://github.com/yourusername/wa-surveillance-watch.git

# Push to GitHub
git push -u origin main
```

**Note:** Replace `yourusername` and `wa-surveillance-watch` with your actual GitHub username and repository name.

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. The page will auto-save

### Step 5: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages" running
3. Wait for it to complete (usually 2-5 minutes)
4. A green checkmark means success!

### Step 6: Access Your Site

Your site will be available at:
```
https://yourusername.github.io/wa-surveillance-watch/
```

Replace `yourusername` and `wa-surveillance-watch` with your actual values.

## Troubleshooting

### Build Fails

**Problem**: GitHub Action shows red X (failed)

**Solutions**:
1. Check the Actions tab and click on the failed workflow
2. Look at the error logs
3. Common issues:
   - **Node version**: The workflow uses Node 20. If there's an error, it should be compatible
   - **Dependencies**: Make sure `package.json` is correct

### Page Shows 404

**Problem**: Site URL shows "404 Page Not Found"

**Solutions**:
1. **Check base path**: Ensure `vite.config.js` has the correct base path matching your repo name
2. **Wait**: Sometimes it takes a few minutes after deployment
3. **Check Pages settings**: Ensure Source is set to "GitHub Actions"
4. **Rebuild**: Go to Actions tab, click on latest workflow, click "Re-run jobs"

### Blank Page

**Problem**: Site loads but shows blank page

**Solutions**:
1. **Check browser console**: Press F12 and look for errors
2. **Base path issue**: Most likely the base path in `vite.config.js` doesn't match your repo name
3. **Fix and redeploy**:
   ```bash
   # Update vite.config.js, then:
   git add vite.config.js
   git commit -m "Fix base path"
   git push
   ```

### Downloads Don't Work

**Problem**: Template download buttons don't download files

**Solutions**:
1. **Check files exist**: Verify all template files are in `public/Template_download/`
2. **Case sensitivity**: GitHub Pages is case-sensitive. Ensure file names match exactly
3. **Rebuild**: Files in `public/` should automatically be copied to deployment

## Testing Locally Before Deployment

To test the site on your computer before pushing to GitHub:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

To test the production build locally:

```bash
# Build the site
npm run build

# Preview the build
npm run preview

# Open browser to the URL shown (usually http://localhost:4173)
```

## Updating the Site

After your initial deployment, to make updates:

```bash
# Make your changes to files

# Stage changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy
```

## Custom Domain (Optional)

To use a custom domain like `www.surveillancewatch.org`:

1. **Add CNAME file**:
   - Create a file named `CNAME` (no extension) in the `public/` folder
   - Add your domain: `www.surveillancewatch.org`
   - Commit and push

2. **Update DNS settings** with your domain provider:
   - Add a CNAME record pointing to: `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses

3. **Configure in GitHub**:
   - Go to Settings > Pages
   - Add your custom domain
   - Enable "Enforce HTTPS" (after DNS propagates)

Full instructions: [GitHub Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Monitoring

### Check Site Status

- **Actions tab**: See all deployments and their status
- **Environments**: See deployment history under Settings > Environments > github-pages

### Analytics (Optional)

To add Google Analytics or similar:
1. Edit `index.html`
2. Add tracking code in the `<head>` section
3. Commit and push

## Security

### Enable Branch Protection (Recommended)

1. Go to Settings > Branches
2. Add rule for `main` branch
3. Suggested protections:
   - Require pull request reviews before merging
   - Require status checks to pass before merging

### Keep Dependencies Updated

Regularly update dependencies for security:

```bash
npm update
npm audit fix
```

Commit and push updates.

## Support

- **GitHub Pages Docs**: [docs.github.com/pages](https://docs.github.com/pages)
- **Vite Deployment Guide**: [vitejs.dev/guide/static-deploy](https://vitejs.dev/guide/static-deploy)
- **Repository Issues**: Open an issue for site-specific problems

## Checklist

Use this checklist to ensure everything is set up correctly:

- [ ] Repository created on GitHub
- [ ] `vite.config.js` base path updated to match repository name
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled with "GitHub Actions" as source
- [ ] Workflow completed successfully (green checkmark in Actions tab)
- [ ] Site loads at `https://yourusername.github.io/repo-name/`
- [ ] All download buttons work
- [ ] Site is mobile-responsive
- [ ] No console errors (F12 in browser)

## Success!

Once deployed, share your site:
- Social media
- Local news outlets
- Community organizations
- ACLU of Washington
- Activist groups

Your site is now helping Washington State residents demand transparency!

---

**Questions?** Open an issue on GitHub or consult the main README.md
