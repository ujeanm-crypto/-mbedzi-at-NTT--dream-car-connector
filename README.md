# NTT Dream Car Connector

Production-ready Vite + React landing page for Phumudzo Eugene Mbedzi, NTT Motor Group vehicle sales consultant.

## Included

- Responsive mobile-first design
- User-supplied Phumudzo images
- NTT-inspired red/navy visual system
- WhatsApp lead handoff with pre-filled enquiry
- Call and email CTAs
- Instagram, Facebook and NTT website links
- Vehicle condition, brand, model, finance and trade-in fields
- SEO metadata and Open Graph metadata
- Accessible labels and reduced-motion support
- Sticky mobile conversion bar
- No backend required for the initial WhatsApp lead flow

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist` folder to Netlify, Vercel, Cloudflare Pages, GitHub Pages (with the appropriate SPA configuration), or another static host.

## Important

The enquiry form intentionally opens WhatsApp rather than silently sending personal information to a third-party form service.

The official NTT website is used as the corporate reference:
https://www.nttgroup.co.za/

Update the contact constants in `src/main.jsx` if any personal contact details change.
