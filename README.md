# Next js website rebuild

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/alejandro-zuluaga-barns-projects/v0-next-js-website-rebuild)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/5vNtYGqBK0y)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/alejandro-zuluaga-barns-projects/v0-next-js-website-rebuild](https://vercel.com/alejandro-zuluaga-barns-projects/v0-next-js-website-rebuild)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/5vNtYGqBK0y](https://v0.dev/chat/projects/5vNtYGqBK0y)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Environment Variables

This project requires the following environment variables:

### Required
- `RESEND_API_KEY` - Resend API key for sending emails (get from https://resend.com)
- `CONTACT_EMAIL` - Your Gmail address to receive contact form submissions

### Auto-configured by Vercel
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob Storage token (automatic)
- `VERCEL_URL` - Deployment URL (automatic)

See [docs/ENVIRONMENT_VARIABLES.md](docs/ENVIRONMENT_VARIABLES.md) for detailed configuration instructions.

## Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS with custom design system
- ✅ Contact form with email notifications (Resend)
- ✅ PDF downloads via Vercel Blob Storage
- ✅ Video support with lazy loading
- ✅ Fully responsive design
- ✅ SEO optimized
- ✅ Accessible (WCAG compliant)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/alejandro-zuluaga-barns/v0-next-js-website-rebuild.git
cd v0-next-js-website-rebuild
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Create environment variables file
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

4. Add your environment variables to `.env.local`:
\`\`\`bash
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@gmail.com
\`\`\`

5. Run development server
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── app/
│   ├── (site)/              # Main site pages
│   │   ├── page.tsx         # Homepage
│   │   ├── servicios/       # Services page
│   │   ├── nosotros/        # About page
│   │   ├── contacto/        # Contact page
│   │   └── productos/       # Products pages
│   ├── actions.ts           # Server actions
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── hero.tsx             # Hero section
│   ├── contact-form.tsx     # Contact form
│   └── ...                  # Other components
├── lib/
│   ├── email.tsx            # Email utilities (Resend)
│   ├── site.ts              # Site configuration
│   └── utils.ts             # Utility functions
└── public/
    ├── images/              # Images
    ├── videos/              # Video files
    └── downloads/           # Downloadable files
\`\`\`

## Documentation

- [Environment Variables Guide](docs/ENVIRONMENT_VARIABLES.md)
- [Email Setup Guide](docs/EMAIL_SETUP.md)
- [Video Integration Guide](docs/VIDEO_GUIDE.md)

## Support

For questions or issues:
- Open an issue on GitHub
- Contact Vercel support at https://vercel.com/help
- Check v0.dev documentation at https://v0.dev/docs

## License

This project is private and proprietary.
