# Daria Shchukina Literary Portfolio

A production-ready personal website for Daria Shchukina, built with Vite, React, TypeScript, Tailwind CSS, and Sanity CMS. Features a surprise reveal mode and full CMS editing capabilities.

## Tech Stack

- **Frontend**: Vite, React, TypeScript, Tailwind CSS
- **CMS**: Sanity (hosted)
- **Deployment**: GitHub Pages (frontend), Sanity hosted (CMS)
- **Fonts**: Playfair Display (serif), Inter (sans)

## Prerequisites

- Node.js 18+
- Sanity account (free tier available)

## Setup Instructions

### 1. Create Sanity Project

```bash
# Login to Sanity (opens browser)
npx sanity login

# Create new project in studio folder
npx sanity init --output-path studio
```

On Windows, use `npx sanity` instead of `sanity` if the command isn't recognized.

**Important:** Our Sanity project ID is `u5p3y2lz` and dataset is `production`. If you create a new project, update these values in the configuration files.

### 2. Set Environment Variables

#### For the web app (`/web/.env`):

```env
VITE_SANITY_PROJECT_ID=u5p3y2lz
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2025-01-01
VITE_REVEAL_CODE=your_secret_passcode
```

#### For the studio (`/studio/.env`):

```env
SANITY_STUDIO_PROJECT_ID=u5p3y2lz
SANITY_STUDIO_DATASET=production
```

**Note:** No API token is needed for the frontend since we're using a public dataset with read-only access.

### 3. Install Dependencies & Run Locally

```bash
# Install web dependencies (uses pnpm via npx since npm has workspace issues)
cd web
npx -y pnpm@latest install

# Install studio dependencies
cd ../studio
npm install

# Run web app (in one terminal)
cd ../web
npx -y pnpm@latest run dev

# Run studio (in another terminal)
cd ../studio
npm run dev
```

### 4. Deploy

#### Deploy Sanity Studio

```bash
cd studio
npx sanity deploy
```

Note the deployed URL for reference.

#### Deploy to GitHub Pages

The GitHub Actions workflow will automatically build and deploy the web app to GitHub Pages when pushing to the main branch.

**GitHub Pages Configuration:**
- Go to repository Settings → Pages
- Set Source to "GitHub Actions"
- The workflow builds from `web/dist` and deploys to the `gh-pages` branch

**Important:** The `vite.config.ts` is configured with `base: "/Daria-Shchukina/"` for GitHub Pages deployment.

### 5. Seed Content

```bash
cd studio
npm run seed
```

This creates sample content for testing. You can then edit or replace it in the Studio.

### 6. Invite Daria to Sanity

In Sanity project dashboard:
- Go to Members → Invite
- Add Daria's email with "Editor" role

## How Daria Edits Content

1. Login to Sanity Studio via the "Admin" link in the site header
2. Edit Site Settings for global info (title, about, socials, etc.)
3. Add/edit Publications and Projects
4. Use the "Featured" toggle to control homepage content
5. Use the `sortOrder` field to control display order (lower numbers appear first)
6. Update SEO settings per page/document

## Surprise Mode

The site starts with a "surprise" gate. To reveal:
- Visit `/?code=YOUR_CODE` (code from `VITE_REVEAL_CODE`)
- Or use the passcode input on the gate page

## Troubleshooting

### Studio Errors
If Studio shows errors, ensure `studio/sanity.config.ts` includes the correct `projectId` and `dataset`:
```typescript
projectId: 'u5p3y2lz',
dataset: 'production',
```

### CORS Issues
- For static sites, ensure CORS is configured in Sanity for your domain.
- In Sanity project dashboard: API → CORS origins → Add your GitHub Pages URL (e.g., https://yourusername.github.io)

### Dataset Issues
- Verify dataset is "production"
- Check Sanity project dashboard for correct dataset name

### Build Errors
- Ensure all env vars are set
- Check Node.js version (18+ required)
- For web folder, use `npx -y pnpm@latest` commands instead of npm

### Content Not Showing
- Verify content is published in Sanity
- Check GROQ queries in `/web/src/lib/queries.ts`

### Routing Issues on GitHub Pages
- The app uses `HashRouter` for client-side routing to avoid 404s on page refresh
- Direct links to pages will work correctly

## File Structure

```
/
├── web/                    # Vite React app
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── lib/           # Sanity client, queries, types
│   │   ├── pages/         # Page components
│   │   └── main.tsx       # App entry
│   ├── index.html
│   ├── vite.config.ts
│   └── .env.example
├── studio/                 # Sanity Studio
│   ├── schemas/           # Content schemas
│   └── sanity.config.ts
├── .github/workflows/      # GitHub Actions
└── README.md
```

## Development

```bash
# Web app (uses pnpm via npx)
cd web
npx -y pnpm@latest run dev

# Studio (uses npm)
cd ../studio
npm run dev
```

Open [http://localhost:5173/Daria-Shchukina/](http://localhost:5173/Daria-Shchukina/) for the web app and [http://localhost:3333](http://localhost:3333) for the studio.