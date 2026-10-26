# Ayush Waghe Portfolio

React portfolio website built with Vite and plain CSS.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run preview` - preview the production build locally

## Deployment

Push this folder to a Git repository, then import that repository in Vercel. Use:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root
- Environment variables: none required

The `vercel.json` rewrite keeps direct links to the project documentation pages working. The Savings Saga demo streams from Google Drive; the video file is not part of the deployment. Keep its sharing set to "Anyone with the link - Viewer" and confirm Drive has finished processing it before publishing.

The resume and certificate files in `public/` are intentionally public and downloadable. The two project documentation `.docx` files at the repository root are excluded by `.gitignore` and stay on your computer.

To add a second project video later, add its thumbnail under `public/projects/` and add a `demo` object with `embedUrl` and `watchUrl` to that project in `src/data/portfolioData.js`.
