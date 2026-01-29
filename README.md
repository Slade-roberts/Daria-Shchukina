# Daria Shchukina - Literary Portfolio

A modern, responsive literary portfolio website for Daria Shchukina built with React. This portfolio showcases her work in English literature and translation.

## Features

- ✨ Clean, professional design with smooth scrolling navigation
- 📱 Fully responsive (mobile, tablet, and desktop)
- 🔍 SEO optimized with meta tags and sitemap
- ⚡ Fast performance with React
- 🎨 Custom styling with CSS
- 📧 Contact form integration (Formspree)

## Sections

- **Home**: Welcome message and introduction
- **Portfolio**: Showcase of literary work and translations
- **About**: Background and expertise
- **Contact**: Contact form for inquiries

## Tech Stack

- React 19.2.4
- React Scripts 5.0.1
- CSS3 (with responsive media queries)
- GitHub Pages for hosting

## Local Development

### Prerequisites

- Node.js 18.x or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Slade-roberts/Daria-Shchukina.git
cd Daria-Shchukina
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000/Daria-Shchukina](http://localhost:3000/Daria-Shchukina)

## Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000/Daria-Shchukina](http://localhost:3000/Daria-Shchukina) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run deploy`
Deploys the app to GitHub Pages (requires gh-pages package).

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow runs on every push to the `main` branch.

**Live Site**: [https://slade-roberts.github.io/Daria-Shchukina](https://slade-roberts.github.io/Daria-Shchukina)

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

## Project Structure

```
Daria-Shchukina/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   ├── sitemap.xml         # Sitemap for SEO
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Robots.txt file
├── src/
│   ├── components/
│   │   ├── Header.js       # Navigation header with smooth scrolling
│   │   ├── Home.js         # Home section component
│   │   ├── Portfolio.js    # Portfolio section component
│   │   ├── About.js        # About section component
│   │   ├── Contact.js      # Contact form component
│   │   ├── Footer.js       # Footer component
│   │   └── *.css           # Component-specific styles
│   ├── App.js              # Main application component
│   ├── App.css             # Global application styles
│   ├── index.js            # Application entry point
│   └── index.css           # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions deployment workflow
└── package.json            # Project dependencies and scripts
```

## SEO Optimizations

- Meta description and keywords
- Open Graph tags for social media sharing
- Semantic HTML structure
- Sitemap.xml for search engines
- Responsive design for mobile SEO
- Fast loading times with optimized React build

## Contact Form

The contact form uses Formspree for form handling. To set up your own:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the `action` URL in `src/components/Contact.js` with your Formspree form ID

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 Daria Shchukina. All rights reserved.

## Contributing

This is a personal portfolio site. For issues or suggestions, please open an issue on GitHub.
