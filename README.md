# WA Surveillance Watch

A campaign website to help Washington State residents demand transparency about law enforcement surveillance cameras through public records requests.

## Live Site

Visit the live site at: [https://www.wasurveillancewatch.org/](https://www.wasurveillancewatch.org/)

## About

This website provides information and tools for Washington State residents to file public records requests about surveillance camera systems operated by law enforcement agencies.

### Key Features

- Information about mass surveillance and federal access issues
- Details about the landmark November 2025 Skagit County court ruling
- Downloadable public records request templates
- Step-by-step guides for filing requests
- Contact information for Thurston County and other WA agencies
- Resources and links to advocacy organizations

### Based On

- **Rodriguez v. City of Sedro Woolley** (Skagit County Superior Court, November 2025) - Ruled that surveillance data must be disclosed under RCW 42.56
- **University of Washington Center for Human Rights Report** (October 2025) - Revealed unauthorized federal access to WA surveillance systems

## Project Structure

```
wa-surveillance-watch/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment
├── public/
│   └── Template_download/       # All downloadable templates
│       ├── flock_camera_records_request_SIMPLIFIED.md
│       ├── flock_camera_records_request_template.md
│       ├── HOW_TO_GUIDE_public_records_requests.md
│       ├── QUICK_START_one_page_guide.md
│       ├── LEGAL_CONTEXT_surveillance_cameras.md
│       ├── EMAIL_TEMPLATES_all_scenarios.md
│       ├── QUICK_REFERENCE_surveillance_requests.md
│       └── TOOLKIT_INDEX_master_guide.md
├── src/
│   ├── App.jsx                  # Main campaign website component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Tailwind CSS styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/wa-surveillance-watch.git
cd wa-surveillance-watch
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment to GitHub Pages

### Automatic Deployment

This repository is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Steps

1. **Create a new repository on GitHub** named `wa-surveillance-watch` (or your preferred name)

2. **Update the base path** in `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',  // Change this to match your repository name
   })
   ```

3. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages (under Code and automation)
   - Set Source to "GitHub Actions"

4. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/wa-surveillance-watch.git
   git push -u origin main
   ```

5. **Wait for deployment**: The GitHub Action will automatically build and deploy your site. Check the Actions tab to monitor progress.

6. **Access your site**: After deployment, your site will be available at `https://yourusername.github.io/wa-surveillance-watch/`

## Customization

### Changing Repository Name

If you use a different repository name:

1. Update `base` in `vite.config.js` to match your repo name
2. Update URLs in this README

### Modifying Content

- **Main website**: Edit `src/App.jsx`
- **Styles**: Modify Tailwind classes in `src/App.jsx` or add custom CSS to `src/index.css`
- **Templates**: Update files in `public/Template_download/`
- **Contact info**: Update the agency contacts in the "Local Contacts" section of `App.jsx`

### Adding New Templates

1. Add your template file to `public/Template_download/`
2. Update the `toolkitFiles` array in `src/App.jsx`:
   ```javascript
   { 
     name: 'Your New Template', 
     path: '/Template_download/your_file.md', 
     filename: 'Downloaded_Name.md' 
   }
   ```

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **GitHub Pages** - Hosting

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Contributing

This is a community resource. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## Resources

- **ACLU of Washington**: [aclu-wa.org](https://www.aclu-wa.org) | (206) 624-2184
- **WA Attorney General Public Records**: [https://www.atg.wa.gov/open-government](https://www.atg.wa.gov/open-government) | (360) 753-6200
- **UW Center for Human Rights**: [jsis.washington.edu/humanrights](https://jsis.washington.edu/humanrights)

## Legal Disclaimer

This website provides information and tools for exercising rights under Washington's Public Records Act (RCW 42.56). **This is not legal advice.** For specific legal guidance, consult an attorney.

## License

The templates and information provided are intended to help Washington State residents exercise their rights under the Public Records Act. You are free to use, modify, and distribute these materials.

## Support

For questions about:
- **The templates**: Contact the ACLU of Washington or WA Attorney General's office
- **The website**: Open an issue on GitHub
- **Public records requests**: See the guides included in the templates

## Acknowledgments

This toolkit builds on the work of:
- Jose Rodriguez, whose public records requests led to the landmark court ruling
- ACLU of Washington for ongoing surveillance transparency advocacy
- UW Center for Human Rights for investigating federal access to surveillance data
- All Washington residents fighting for transparency and accountability

---

**Last Updated**: November 2025  
**Version**: 1.0.0

**"Sunlight is the best disinfectant." - Justice Louis Brandeis**
