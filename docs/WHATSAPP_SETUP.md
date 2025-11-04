# WhatsApp Button Setup Guide

## Quick Setup

### Step 1: Update Phone Number

Replace the phone number in `app/layout.tsx`:

\`\`\`tsx
<WhatsAppButton 
  phoneNumber="+1234567890"  // ⚠️ CHANGE THIS to your WhatsApp number
  message="Hola, me gustaría solicitar información sobre sus servicios."
/>
\`\`\`

### Step 2: Phone Number Format

Your phone number should be in international format:

\`\`\`bash
✅ Correct Examples:
+5215512345678    # Mexico
+573001234567     # Colombia
+5511987654321    # Brazil
+541123456789     # Argentina
+56912345678      # Chile
+51987654321      # Peru
+593987654321     # Ecuador

❌ Wrong Examples:
555-1234          # Missing country code
+1 (555) 123-4567 # Has spaces and parentheses (will be auto-removed)
1234567890        # Missing + and country code
\`\`\`

**Note:** The component automatically removes spaces, dashes, and parentheses, but it's best to use clean format.

---

## 📱 Two Button Styles Available

### Option 1: Full Featured (Recommended)
- ✅ Animated pulse effect
- ✅ Hover tooltip
- ✅ Notification badge
- ✅ Scale animation on hover

**Component:** `whatsapp-button.tsx`

\`\`\`tsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  message="Custom message here"
  position="bottom-right"  // or "bottom-left"
/>
\`\`\`

### Option 2: Simple Version
- ✅ Minimal design
- ✅ Smaller bundle size
- ✅ Still animated

**Component:** `whatsapp-button-simple.tsx`

\`\`\`tsx
<WhatsAppButtonSimple 
  phoneNumber="+1234567890"
  message="Custom message here"
/>
\`\`\`

---

## 🎨 Customization Options

### Change Position

\`\`\`tsx
// Bottom Right (default)
<WhatsAppButton position="bottom-right" />

// Bottom Left
<WhatsAppButton position="bottom-left" />
\`\`\`

### Custom Message

\`\`\`tsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  message="¡Hola! Quiero una cotización para un tanque de 10,000 galones."
/>
\`\`\`

### Remove Notification Badge

Edit `components/whatsapp-button.tsx` and remove this section:

\`\`\`tsx
{/* Remove this block */}
<div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full size-5 flex items-center justify-center">
  1
</div>
\`\`\`

### Change Colors

Edit the button styles in the component:

\`\`\`tsx
// Green (default - WhatsApp brand)
className="bg-green-500 hover:bg-green-600"

// Blue
className="bg-blue-500 hover:bg-blue-600"

// Custom color
className="bg-[#25D366] hover:bg-[#20BA5A]"  // WhatsApp official colors
\`\`\`

---

## 🌍 Environment Variable Method (Optional)

If you want to manage the phone number via environment variables:

### 1. Add to Vercel Environment Variables:
\`\`\`bash
NEXT_PUBLIC_WHATSAPP_PHONE=+1234567890
\`\`\`

### 2. Update the component usage:
\`\`\`tsx
import whatsappConfig from "@/lib/whatsapp-config"

<WhatsAppButton 
  phoneNumber={whatsappConfig.phoneNumber}
  message={whatsappConfig.messages.default}
/>
\`\`\`

---

## 📊 Different Messages for Different Pages

You can show different messages based on the page:

\`\`\`tsx
// app/(site)/servicios/layout.tsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  message="Hola, quisiera conocer más sobre sus servicios específicos."
/>

// app/(site)/productos/durachem-500/page.tsx
<WhatsAppButton 
  phoneNumber="+1234567890"
  message="Hola, me interesa el producto Durachem 500 Series."
/>
\`\`\`

Or use the config helper:

\`\`\`tsx
import whatsappConfig from "@/lib/whatsapp-config"

<WhatsAppButton 
  phoneNumber={whatsappConfig.phoneNumber}
  message={whatsappConfig.messages.productos}
/>
\`\`\`

---

## 🧪 Testing

### Test Checklist:
- [ ] Button appears on all pages
- [ ] Button stays fixed when scrolling
- [ ] Clicking opens WhatsApp (web or app)
- [ ] Message is pre-filled correctly
- [ ] Phone number is correct
- [ ] Works on mobile devices
- [ ] Works on desktop
- [ ] Animation works smoothly
- [ ] Tooltip appears on hover (desktop)
- [ ] Button is accessible (keyboard navigation)

### Test on Different Devices:
1. **Desktop:** Should open WhatsApp Web
2. **Mobile:** Should open WhatsApp app
3. **Tablet:** Should work on both web and app

---

## 🎯 How It Works

### WhatsApp URL Format:
\`\`\`
https://wa.me/PHONE_NUMBER?text=MESSAGE
\`\`\`

**Example:**
\`\`\`
https://wa.me/5215512345678?text=Hola,%20me%20gustaría%20más%20información
\`\`\`

### What Happens:
1. User clicks the button
2. Opens in new tab (`target="_blank"`)
3. WhatsApp web/app opens
4. Chat opens with your number
5. Message is pre-filled
6. User can edit and send

---

## 🔧 Troubleshooting

### Button Not Showing:
- Check that it's added to `app/layout.tsx`
- Clear browser cache
- Check z-index isn't being overridden

### Wrong Phone Number:
- Verify country code is included
- Check format: `+[country][area][number]`
- No spaces or special characters (auto-removed by component)

### Message Not Pre-filled:
- Check message is properly encoded
- Verify URL in browser console
- Test with simpler message first

### Button Blocked by Other Elements:
- Check z-index (currently `z-50`)
- Increase if needed: `z-[60]` or higher
- Ensure no fixed elements overlap

---

## 📱 Mobile Optimization

The button is fully responsive:

- **Mobile (< 640px):** 56px (14rem)
- **Desktop (≥ 640px):** 64px (16rem)
- **Pulse animation:** Slower on mobile (2s vs 1s)
- **Tooltip:** Hidden on mobile (touch devices)

---

## ♿ Accessibility Features

✅ **Included:**
- ARIA label for screen readers
- Keyboard navigation support
- Focus visible states
- High contrast colors
- Touch-friendly size (44px minimum)

---

## 🎨 Design Specs

### Colors:
- **Primary:** `#25D366` (WhatsApp Green)
- **Hover:** `#20BA5A` (Darker Green)
- **Shadow:** Elevated on hover

### Animations:
- **Pulse:** Continuous ping effect
- **Hover:** Scale to 110%
- **Tooltip:** Fade and slide

### Sizes:
- **Mobile:** 56×56px
- **Desktop:** 64×64px
- **Icon:** 24×24px (mobile), 28×28px (desktop)

---

## 🚀 Performance Notes

- **Bundle size:** ~2KB (gzipped)
- **No external dependencies** (uses Lucide icon from existing package)
- **No API calls** (pure client-side)
- **Lazy loaded** (not render-blocking)

---

## 📝 Best Practices

1. ✅ **Use international format** for phone
2. ✅ **Keep message under 200 characters**
3. ✅ **Test on real devices**
4. ✅ **Monitor WhatsApp Business metrics**
5. ✅ **Respond quickly** to inquiries
6. ✅ **Set up auto-replies** in WhatsApp Business

---

## 🔗 WhatsApp Business Setup

For better customer experience:

1. **Download WhatsApp Business** (free)
2. **Set up business profile:**
   - Company name
   - Description
   - Address
   - Business hours
   - Website link

3. **Enable features:**
   - Quick replies
   - Auto-responses
   - Labels for organizing chats
   - Catalog (if selling products)

4. **Link:** https://business.whatsapp.com

---

## ✅ Final Checklist

Before going live:

- [ ] Phone number is correct and tested
- [ ] Message is in Spanish (or your target language)
- [ ] Button appears on all pages
- [ ] Button doesn't overlap with other elements
- [ ] WhatsApp Business is set up
- [ ] Auto-reply is configured
- [ ] Team is ready to respond quickly

---

## 🎉 You're All Set!

Your WhatsApp button is now live and ready to receive customer inquiries!

**Expected results:**
- 📈 Increased customer engagement
- ⚡ Faster response times
- 💬 More qualified leads
- 🎯 Better conversion rates
\`\`\`
