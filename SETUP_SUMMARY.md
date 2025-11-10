# GitHub Site Setup - Complete Package

## What You Have

This is a complete, production-ready website package for the WA Surveillance Watch campaign. Everything is configured and ready to deploy to GitHub Pages.

## Complete File Structure

```
github-site/
├── .github/
│   └── workflows/
│       └── deploy.yml                    # Automatic deployment configuration
├── public/
│   ├── Template_download/                # All downloadable template files (8 files)
│   │   ├── EMAIL_TEMPLATES_all_scenarios.md
│   │   ├── HOW_TO_GUIDE_public_records_requests.md
│   │   ├── LEGAL_CONTEXT_surveillance_cameras.md
│   │   ├── QUICK_REFERENCE_surveillance_requests.md
│   │   ├── QUICK_START_one_page_guide.md
│   │   ├── TOOLKIT_INDEX_master_guide.md
│   │   ├── flock_camera_records_request_SIMPLIFIED.md
│   │   └── flock_camera_records_request_template.md
│   └── eye-icon.svg                      # Favicon
├── src/
│   ├── App.jsx                           # Main React component (campaign website)
│   ├── main.jsx                          # React entry point
│   └── index.css                         # Tailwind CSS styles
├── .gitignore                            # Git ignore rules
├── DEPLOYMENT_GUIDE.md                   # Step-by-step deployment instructions
├── README.md                             # Repository documentation
├── index.html                            # HTML entry point
├── package.json                          # Dependencies and scripts
├── postcss.config.js                     # PostCSS configuration
├── tailwind.config.js                    # Tailwind CSS configuration
└── vite.config.js                        # Vite build configuration
```

## Quick Start (3 Steps)

### Step 1: Download to Your Computer

Download the entire `github-site` folder to your computer.

### Step 2: Update Configuration

Open `vite.config.js` and change the base path to match your GitHub repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Change this!
})
```

### Step 3: Follow Deployment Guide

Open `DEPLOYMENT_GUIDE.md` and follow the step-by-step instructions to:
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages
4. Access your live site!

## What's Included

### Website Features

✅ **Hero Section** - Bold headline with breaking news banner
✅ **Statistics Dashboard** - Surveillance by the numbers
✅ **Problem Section** - Mass surveillance and federal access issues
✅ **Victory Section** - November 2025 court ruling details
✅ **Action Center** - Tabbed interface for templates and guides
✅ **Download Functionality** - All 8 template files ready to download
✅ **FAQ Section** - Interactive accordion with common questions
✅ **Resources** - Links to ACLU-WA, AG's office, and UW report
✅ **Contact Info** - Thurston County (Olympia, Lacey, Tumwater) contacts
✅ **Responsive Design** - Works on desktop, tablet, and mobile

### Technical Features

✅ **React 18** - Modern UI framework
✅ **Vite** - Fast build tool
✅ **Tailwind CSS** - Utility-first styling
✅ **Lucide React Icons** - Beautiful icon set
✅ **GitHub Actions** - Automatic deployment on push
✅ **Production Optimized** - Minified and optimized builds

### Documentation

✅ **README.md** - Complete repository documentation
✅ **DEPLOYMENT_GUIDE.md** - Step-by-step deployment instructions
✅ **Inline Comments** - Code is documented

### All Templates (Updated to 2025)

✅ **Simplified Template** - 2-page request (beginner-friendly)
✅ **Comprehensive Template** - 6-page detailed request
✅ **Complete How-To Guide** - Step-by-step instructions
✅ **Quick Start Guide** - One-page reference
✅ **Legal Context Document** - Court ruling & UW report details
✅ **Email Templates** - 10 ready-to-use scenarios
✅ **Quick Reference** - Handy reference guide
✅ **Toolkit Index** - Master guide to all files

## Before You Deploy - Checklist

- [ ] Download the `github-site` folder to your computer
- [ ] Install Node.js 18+ (from nodejs.org)
- [ ] Open `vite.config.js` and update the `base` path
- [ ] Create a GitHub account (if you don't have one)
- [ ] Read the DEPLOYMENT_GUIDE.md
- [ ] Have Git installed (or use GitHub Desktop)

## Testing Locally (Optional but Recommended)

Before deploying to GitHub, you can test the site on your computer:

```bash
# Open terminal/command prompt in the github-site folder

# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
# The site should load and work perfectly
```

## After Deployment

Once your site is live, you can:

✅ **Share the URL** with community organizations
✅ **Update content** by editing files and pushing to GitHub
✅ **Monitor deployments** in the GitHub Actions tab
✅ **Track issues** using GitHub Issues
✅ **Accept contributions** via Pull Requests

## Updating Content Later

To update the site after initial deployment:

1. **Edit files** on your computer
2. **Commit changes**: `git add .` and `git commit -m "Updated content"`
3. **Push to GitHub**: `git push`
4. **Automatic deployment** - GitHub Actions rebuilds and deploys automatically

## Common Updates

### Update Contact Information
Edit `src/App.jsx`, search for "Thurston County Area Contacts" section

### Add New Template
1. Add file to `public/Template_download/`
2. Update `toolkitFiles` array in `src/App.jsx`

### Change Colors/Styling
Edit Tailwind classes in `src/App.jsx` (search for color names like `blue-500`)

### Update Stats
Edit the stats section in `src/App.jsx` (search for "Stats Section")

## File Sizes

- **Total package**: ~500KB
- **Built site**: ~200KB (minified and optimized)
- **Load time**: < 2 seconds on decent connection

## Browser Compatibility

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Support Resources

If you need help:

1. **Read DEPLOYMENT_GUIDE.md** - Covers 99% of issues
2. **Check GitHub Pages docs** - [docs.github.com/pages](https://docs.github.com/pages)
3. **Google specific errors** - Most issues are well-documented
4. **Open a GitHub issue** - For site-specific problems

## Success Indicators

Your deployment is successful when:

✅ GitHub Actions workflow shows green checkmark
✅ Site loads at `https://yourusername.github.io/repo-name/`
✅ No console errors (press F12 in browser)
✅ All download buttons work
✅ Site is responsive on mobile
✅ Navigation works smoothly

## What Makes This Special

This isn't just a website - it's a complete campaign toolkit:

✅ **Legally Sound** - Based on actual court ruling and state law
✅ **Community Focused** - Protects vulnerable populations
✅ **Action-Oriented** - Makes transparency accessible
✅ **Well-Documented** - Easy for non-technical users
✅ **Professional Quality** - Ready for public use
✅ **Zero Cost** - Free hosting via GitHub Pages

## Timeline to Live Site

- **Setup time**: 10 minutes
- **First deployment**: 5-10 minutes
- **Total**: ~20 minutes from download to live site

## Next Steps

1. **Right now**: Open DEPLOYMENT_GUIDE.md
2. **Follow the guide**: Step-by-step to live site
3. **Share your site**: With community organizations
4. **Make impact**: Help people demand transparency

## Legal Note

This website provides information and tools for exercising rights under Washington's Public Records Act (RCW 42.56). It is not legal advice. All templates are based on:

- **Rodriguez v. City of Sedro Woolley** (Nov 2025)
- **UW Center for Human Rights Report** (Oct 2025)
- **Washington State RCW 42.56**

## Credits

Built for Washington State residents fighting for surveillance transparency and government accountability.

---

**Ready?** Open `DEPLOYMENT_GUIDE.md` and let's get your site live!

**Questions?** Everything you need is in the DEPLOYMENT_GUIDE.md and README.md files.

**Let's demand transparency together! 👁️**
