# Email Setup Guide

## Option 1: Resend (Recommended) ⭐

Resend is the easiest and most reliable way to send emails from Next.js.

### Setup Steps:

1. **Create Resend Account**
   - Go to https://resend.com
   - Sign up for free account (100 emails/day free)
   - Verify your email

2. **Get API Key**
   - Go to API Keys section
   - Create new API key
   - Copy the key (starts with `re_`)

3. **Add to Environment Variables**
   \`\`\`bash
   # In Vercel Dashboard or .env.local
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL=your-email@gmail.com
   \`\`\`

4. **Deploy**
   - Push to Vercel
   - Emails will be sent from `onboarding@resend.dev` (free tier)
   - Replies will go to client's email (replyTo configured)

### Custom Domain (Optional)
- Add your domain to Resend
- Verify DNS records
- Update `from` address in code

---

## Option 2: Gmail SMTP (Alternative)

Using Gmail directly with SMTP.

### Setup Steps:

1. **Enable App Password in Gmail**
   - Go to Google Account Settings
   - Security > 2-Step Verification
   - App passwords > Generate new app password
   - Copy the 16-character password

2. **Install Nodemailer**
   \`\`\`bash
   npm install nodemailer
   npm install --save-dev @types/nodemailer
   \`\`\`

3. **Environment Variables**
   \`\`\`bash
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   \`\`\`

4. **Create Email Service**
   \`\`\`typescript
   // lib/gmail.ts
   import nodemailer from 'nodemailer'

   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: process.env.GMAIL_USER,
       pass: process.env.GMAIL_APP_PASSWORD,
     },
   })

   export async function sendEmail(to: string, subject: string, html: string) {
     await transporter.sendMail({
       from: process.env.GMAIL_USER,
       to,
       subject,
       html,
     })
   }
   \`\`\`

---

## Option 3: SendGrid (Enterprise)

For high-volume emails with advanced features.

### Setup:
1. Create account at https://sendgrid.com
2. Get API key
3. Add to environment: `SENDGRID_API_KEY`
4. Install: `npm install @sendgrid/mail`

---

## Recommended: Use Resend

**Why Resend?**
✅ Easy setup (5 minutes)
✅ Reliable delivery
✅ Built for Next.js
✅ Free tier: 100 emails/day
✅ No SMTP configuration needed
✅ Better deliverability than Gmail
✅ Professional email templates
✅ Email tracking (optional)

**Pricing:**
- Free: 100 emails/day
- Pro: $20/month - 50,000 emails
- Scale: Custom pricing

---

## Testing

### Local Testing:
\`\`\`bash
# Add to .env.local
RESEND_API_KEY=your_key_here
CONTACT_EMAIL=your-email@gmail.com

# Run dev server
npm run dev

# Test the contact form
\`\`\`

### Production Testing:
1. Deploy to Vercel
2. Add environment variables in Vercel Dashboard
3. Test form on live site
4. Check Gmail inbox

---

## Email Features Included

✅ **HTML Email Templates**: Professional styling
✅ **Client Confirmation**: Auto-reply to customer
✅ **Reply-To**: Easy to respond to clients
✅ **Spam Protection**: Honeypot field
✅ **Email Validation**: Regex validation
✅ **Error Handling**: Graceful failures
✅ **Mobile Responsive**: Emails look good on all devices

---

## Troubleshooting

### Emails not arriving?
1. Check spam folder
2. Verify API key is correct
3. Check Vercel logs for errors
4. Verify environment variables are set

### Gmail rejecting emails?
- Use Resend instead (better deliverability)
- Or configure DMARC/SPF/DKIM records

### Need help?
- Resend docs: https://resend.com/docs
- Vercel support: https://vercel.com/help
