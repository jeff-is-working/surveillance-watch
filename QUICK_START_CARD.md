# QUICK START CARD
## WA Surveillance Watch - GitHub Deployment

---

## YOU HAVE: Complete GitHub-Ready Website

**Location**: `github-site/` folder
**Size**: 25 files, ~500KB
**Status**: Production-ready, all dates updated to 2025

---

## 3 STEPS TO LIVE SITE

### 1. UPDATE CONFIG (2 minutes)
Open: `github-site/vite.config.js`
Change: `base: '/wa-surveillance-watch/'`
To: `base: '/YOUR-REPO-NAME/'`

### 2. PUSH TO GITHUB (5 minutes)
```bash
cd github-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### 3. ENABLE PAGES (3 minutes)
- Go to GitHub repo Settings
- Click "Pages" in sidebar
- Source: "GitHub Actions"
- Done!

**Your site**: `https://USERNAME.github.io/REPO/`

---

## WHAT'S INSIDE

### Website Sections
- Hero with breaking news
- Stats dashboard (80+ cities, 2000 plates/min)
- Problem: Mass surveillance + federal access
- Victory: Nov 2025 court ruling
- Action center with downloads
- FAQ accordion
- Resources & contacts

### All 8 Templates
1. Simplified Request (2 pages)
2. Comprehensive Request (6 pages)
3. Complete How-To Guide
4. Quick Start Guide
5. Legal Context Document
6. Email Templates (10 scenarios)
7. Quick Reference
8. Toolkit Index

### Tech Stack
- React 18 + Vite
- Tailwind CSS
- Lucide Icons
- Auto-deploy via GitHub Actions

---

## FILE STRUCTURE

```
github-site/
├── src/App.jsx              <- Main website
├── public/Template_download/ <- All 8 templates
├── vite.config.js           <- UPDATE THIS FIRST!
├── DEPLOYMENT_GUIDE.md      <- Full instructions
├── README.md                <- Repo documentation
└── package.json             <- Dependencies
```

---

## TESTING LOCALLY (OPTIONAL)

```bash
npm install    # First time only
npm run dev    # Start dev server
# Open: http://localhost:5173
```

---

## TROUBLESHOOTING

**Blank page?**
→ Fix `base:` path in vite.config.js

**Downloads don't work?**
→ Files in `public/Template_download/` should copy automatically

**Build fails?**
→ Check Actions tab on GitHub for error logs

**404 error?**
→ Ensure Pages source is "GitHub Actions"

---

## QUICK REFERENCE

**Update content**: Edit `src/App.jsx`
**Add template**: Put in `public/Template_download/` + update `toolkitFiles` array
**Change colors**: Edit Tailwind classes in App.jsx
**Monitor deploys**: Actions tab on GitHub

---

## NEED HELP?

1. **Read**: DEPLOYMENT_GUIDE.md (covers everything)
2. **Read**: README.md (full documentation)
3. **Read**: SETUP_SUMMARY.md (overview)

---

## WHAT IT DOES

Helps Washington State residents:
✓ Learn about surveillance cameras
✓ Download request templates
✓ File public records requests
✓ Demand transparency

Based on:
- Rodriguez v. Sedro Woolley (Nov 2025)
- UW Report on federal access (Oct 2025)
- RCW 42.56 (WA Public Records Act)

---

## YOU'RE READY!

**Now**: Open DEPLOYMENT_GUIDE.md
**Next**: Follow step-by-step instructions
**Result**: Live site in ~20 minutes

**Questions?** Everything is documented in the guides.

**Let's go! 🚀**
