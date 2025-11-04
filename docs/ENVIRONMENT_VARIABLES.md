# Environment Variables Guide

This document explains all environment variables used in the project.

## Required Environment Variables

### Email Configuration (Resend)

#### RESEND_API_KEY
- **Required**: Yes
- **Description**: API key from Resend for sending emails
- **Where to get**: https://resend.com/api-keys
- **Example**: `re_abc123xyz...`
- **Used in**: `lib/email.tsx`, `app/actions.ts`

#### CONTACT_EMAIL
- **Required**: Yes
- **Description**: Your Gmail address where contact form submissions will be sent
- **Example**: `your-email@gmail.com`
- **Used in**: `lib/email.tsx`

---

### File Storage (Vercel Blob)

#### BLOB_READ_WRITE_TOKEN
- **Required**: Yes (automatically set by Vercel)
- **Description**: Token for Vercel Blob Storage
- **Where to get**: Automatically provided by Vercel
- **Used in**: File uploads and downloads

#### DURACHEM_500_PDF_URL
- **Required**: Yes
- **Description**: URL to the Durachem 500 PDF file in blob storage
- **Current value**: `https://vmioddwthmnmldqb.public.blob.vercel-storage.com/Durachem-500-ficha-tecnica`
- **Used in**: `app/(site)/productos/durachem-500/page.tsx`

---

## Automatic Environment Variables (Provided by Vercel)

These are automatically available and don't need to be configured:

#### VERCEL_URL
- **Description**: The deployment URL (e.g., `your-project.vercel.app`)
- **Used in**: `lib/site.ts` for generating absolute URLs
- **Provided by**: Vercel (automatic)

#### VERCEL_ENV
- **Description**: The environment type (`production`, `preview`, or `development`)
- **Provided by**: Vercel (automatic)

---

## How to Set Environment Variables

### In Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - Click "Add New"
   - Enter the key name
   - Enter the value
   - Select environments (Production, Preview, Development)
   - Click "Save"

### For Local Development

Create a `.env.local` file in your project root:

\`\`\`bash
# .env.local (local development only)
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@gmail.com
\`\`\`

**Important**: Never commit `.env.local` to git. It's already in `.gitignore`.

---

## Removed Variables

The following variables are **NOT NEEDED** and have been removed:

### ❌ NEXT_PUBLIC_SITE_URL
- **Why removed**: Automatically handled by `lib/site.ts` using `VERCEL_URL`
- **Alternative**: Uses `VERCEL_URL` or falls back to localhost

### ❌ GMAIL_USER
- **Why removed**: Not using Gmail SMTP (using Resend instead)
- **Alternative**: Resend handles email sending

### ❌ GMAIL_APP_PASSWORD
- **Why removed**: Not using Gmail SMTP (using Resend instead)
- **Alternative**: `RESEND_API_KEY` is used instead

---

## Environment Variable Checklist

### Vercel Production Setup:
- [ ] `RESEND_API_KEY` - Get from https://resend.com
- [ ] `CONTACT_EMAIL` - Your Gmail address
- [ ] `BLOB_READ_WRITE_TOKEN` - Auto-configured by Vercel
- [ ] `DURACHEM_500_PDF_URL` - Already configured

### Local Development Setup:
- [ ] Create `.env.local` file
- [ ] Add `RESEND_API_KEY`
- [ ] Add `CONTACT_EMAIL`
- [ ] Run `npm run dev` to test

---

## Troubleshooting

### "RESEND_API_KEY is not defined"
- Make sure you added the variable in Vercel
- Redeploy after adding environment variables
- Check for typos in the variable name

### "Emails not sending"
- Verify API key is correct in Resend dashboard
- Check you haven't exceeded free tier limit (100/day)
- Look at Vercel function logs for errors

### "Environment variable not updating"
- Redeploy the project after changing variables
- Check that variable is set for the correct environment
- Clear browser cache if testing locally

---

## Security Best Practices

✅ **DO:**
- Keep API keys secret
- Use different keys for development and production
- Rotate keys if compromised
- Use Vercel's encrypted environment variables

❌ **DON'T:**
- Commit `.env.local` to git
- Share API keys publicly
- Use production keys in development
- Store sensitive data in `NEXT_PUBLIC_*` variables (they're exposed to browser)

---

## Current Configuration Summary

\`\`\`bash
# Required in Vercel Dashboard
RESEND_API_KEY=re_****** (hidden)
CONTACT_EMAIL=your-email@gmail.com

# Auto-configured by Vercel
BLOB_READ_WRITE_TOKEN=****** (automatic)
DURACHEM_500_PDF_URL=https://****** (configured)
VERCEL_URL=*****.vercel.app (automatic)
\`\`\`

Total required manual configuration: **2 variables** (RESEND_API_KEY, CONTACT_EMAIL)
