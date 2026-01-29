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
# Install Sanity CLI globally
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Create new project
sanity init --template clean --project "Daria Shchukina Portfolio" --dataset production
```

Note the `projectId` from the output.

### 2. Set Environment Variables

#### For the web app (`/web/.env`):

```env
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_STUDIO_URL=https://your-studio-url.sanity.studio
VITE_REVEAL_CODE=your_secret_passcode
```

#### For the studio (`/studio/.env`):

```env
SANITY_STUDIO_PROJECT_ID=your_project_id_here
SANITY_STUDIO_DATASET=production
```

### 3. Create API Token

In your Sanity project dashboard:
1. Go to API → Tokens
2. Create a new token with "Editor" permissions
3. Copy the token to `SANITY_API_TOKEN` in `/web/.env` (if needed for server-side, but for static site, client-side only)

### 4. Install Dependencies & Run Locally

```bash
# Install all dependencies
npm install

# Run web app (in one terminal)
npm run dev:web

# Run studio (in another terminal)
npm run dev:studio
```

### 5. Deploy

#### Deploy Sanity Studio

```bash
npm run deploy:studio
```

Note the deployed URL and add it to `VITE_SANITY_STUDIO_URL` in `/web/.env`.

#### Deploy to GitHub Pages

The GitHub Actions workflow will automatically build and deploy the `/web` app to GitHub Pages when pushing to the main branch.

Ensure the repository is set to deploy from GitHub Pages with the `/docs` folder or root, depending on setup.

### 6. Seed Content

```bash
cd studio
npm run seed
```

This creates sample content for testing. You can then edit or replace it in the Studio.

### 7. Invite Daria to Sanity

In Sanity project dashboard:
- Go to Members → Invite
- Add Daria's email with "Editor" role

## How Daria Edits Content

1. Login to Sanity Studio via the "Admin" link in the site header
2. Edit Site Settings for global info (title, about, socials, etc.)
3. Add/edit Publications and Projects
4. Use the "Featured" toggle to control homepage content
5. Reorder items by dragging in the list views
6. Update SEO settings per page/document

## Surprise Mode

The site starts with a "surprise" gate. To reveal:
- Visit `/?code=YOUR_CODE` (code from `VITE_REVEAL_CODE`)
- Or use the passcode input on the gate page

## Troubleshooting

### CORS Issues
- For static sites, ensure CORS is configured in Sanity for your domain.
- In Sanity project dashboard: API → CORS origins → Add your GitHub Pages URL (e.g., https://yourusername.github.io)

### Dataset Issues
- Verify dataset is "production" (or update env vars)
- Check Sanity project dashboard for correct dataset name

### Build Errors
- Ensure all env vars are set
- Check Node.js version (18+ required)

### Content Not Showing
- Verify content is published in Sanity
- Check GROQ queries in `/web/src/lib/queries.ts`

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
# Web app
npm run dev:web

# Studio
npm run dev:studio
```

Open [http://localhost:5173](http://localhost:5173) for the web app and [http://localhost:3333](http://localhost:3333) for the studio.