# Portfolio Site Migration to Next.js

## Overview

This project is a complete modernization of the personal portfolio site, migrated from vanilla HTML/CSS/JS to Next.js 14+ with TypeScript and Tailwind CSS.

## What Changed

### Technology Stack

**Before:**
- Vanilla HTML (6 separate pages)
- Single CSS file (main.css)
- Vanilla JavaScript (main.js)
- Font Awesome 4.7 CDN
- Google Analytics UA (deprecated)

**After:**
- Next.js 14+ with App Router
- TypeScript for type safety
- Tailwind CSS v4 for styling
- React Icons (replacing Font Awesome)
- Vercel Analytics & Speed Insights
- Embla Carousel (replacing vanilla JS slideshows)

### Features Preserved

✅ All content from original site
✅ Responsive design (mobile & desktop)
✅ Image carousels/slideshows with keyboard navigation
✅ PDF resume viewers
✅ Social media links
✅ All 5 pages: Home, Acting, Design, Coding, Contact
✅ Custom domain (samueldriver.com)

### Improvements

- **Performance**: Image optimization with Next.js Image component
- **SEO**: Proper metadata on all pages, OpenGraph tags
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
- **Code Quality**: TypeScript, component reusability, organized data files
- **Analytics**: Modern Vercel Analytics instead of deprecated GA UA
- **Developer Experience**: Hot reload, TypeScript intellisense, modern tooling

## Project Structure

```
nextjs-portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navigation/Footer
│   ├── page.tsx           # Home page
│   ├── acting/page.tsx    # Acting page
│   ├── design/page.tsx    # Design page
│   ├── coding/page.tsx    # Coding page
│   └── contact/page.tsx   # Contact page
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Responsive nav (mobile & desktop)
│   ├── Footer.tsx         # Social media icons
│   ├── Carousel.tsx       # Image carousel with Embla
│   ├── CreditsTable.tsx   # Acting/Design credits table
│   └── PDFViewer.tsx      # Resume viewer
├── data/                  # Content data files
│   ├── siteConfig.ts      # Site metadata, navigation, images
│   ├── credits.ts         # Acting/Design credits & training
│   └── content.ts         # Bio and other text content
├── public/                # Static assets
│   ├── images/
│   │   ├── headshots/     # Headshot photos
│   │   └── portfolio/     # Project photos
│   ├── resumes/           # PDF resumes
│   ├── CNAME              # Custom domain
│   └── favicon.ico
└── package.json
```

## Content Notes

- Fixed typo: "braod" → "broad" (in bio text)
- Fixed typo: "enjopyed" → "enjoyed" (in bio text)
- Fixed: "Ryan Robrin" → "Ryan Dobrin" (in acting credits - Goat)
- Standardized all image file extensions

## Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub repository
2. Import project to Vercel
3. Vercel will auto-detect Next.js and configure build
4. Add custom domain: `samueldriver.com`
5. Analytics and Speed Insights work automatically

### Option 2: GitHub Pages (Static Export)

To deploy as a static site on GitHub Pages:

1. Update `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

2. Build: `npm run build`
3. Deploy `out/` folder to GitHub Pages

**Note**: Static export loses some Next.js features (image optimization, ISR)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables (Optional)

For Google Analytics 4 (if migrating from UA):

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Add to Vercel project settings or `.env.local`

## Migration Checklist

- [x] Set up Next.js project with TypeScript & Tailwind
- [x] Install Vercel Analytics & Speed Insights
- [x] Migrate all images and PDFs
- [x] Create data files for content
- [x] Build responsive Navigation component
- [x] Build Footer with React Icons
- [x] Build Carousel component
- [x] Build Credits Table component
- [x] Build PDF Viewer component
- [x] Migrate Home page
- [x] Migrate Acting page
- [x] Migrate Design page
- [x] Migrate Coding page
- [x] Migrate Contact page
- [x] Add SEO metadata to all pages
- [x] Test build successfully
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Test on mobile devices
- [ ] Test all links and PDFs

## Notes for Future Updates

- To add new acting/design credits: Edit `data/credits.ts`
- To add new images: Place in `public/images/` and update `data/siteConfig.ts`
- To update bio: Edit `data/content.ts`
- To change navigation: Edit `data/siteConfig.ts`
- All colors are in `app/globals.css` under `:root` variables
