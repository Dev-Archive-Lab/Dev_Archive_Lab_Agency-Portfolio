# Dev Archive Lab — Agency Portfolio Website

A premium, frontend-only portfolio website for **Dev Archive Lab**, a full stack development, design, AI automation and digital growth studio founded by Victoria.

Built with **React + Vite**, **Tailwind CSS**, **Framer Motion**, and **react-helmet-async**.

---

## 🚀 Running Locally

> **Note:** This project uses portable Node.js and Git if they are not in your system PATH.
> Prefix commands with the paths below if `node` or `git` are not found.

```powershell
# If using portable Node.js (adjust path to yours):
$env:PATH = "C:\Users\USER\nodejs;$env:PATH"

# Install dependencies
npm install

# Start the dev server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
/
├── public/
│   ├── logo-mark.png          # Brand logo (PNG)
│   ├── logo-mark.svg          # Brand logo (SVG)
│   ├── og-preview.svg         # Open Graph preview image (SVG source)
│   ├── og-preview.png         # Open Graph preview image (export to real PNG before deploy)
│   ├── robots.txt             # SEO: search crawler rules
│   ├── sitemap.xml            # SEO: sitemap (update URLs after deploy)
│   ├── _redirects             # Netlify SPA routing fix
│   └── images/
│       └── victoria.jpg       # ← ADD YOUR PHOTO HERE (see below)
├── src/
│   ├── data/                  # ✏️  EDIT ALL CONTENT HERE
│   │   ├── company.js         # Brand info, email, social links, form endpoint
│   │   ├── services.js        # 11 services with deliverables
│   │   ├── projects.js        # Concept projects + WORK_NOTE text
│   │   ├── testimonials.js    # 4 Upwork client testimonials
│   │   └── faqs.js            # FAQ questions and answers
│   ├── components/
│   │   ├── home/              # Home page section components
│   │   └── services/          # Services page components (FAQ accordion)
│   ├── pages/                 # Route-level page components
│   └── App.jsx                # Router + code-split lazy imports
├── vercel.json                # Vercel SPA routing fix
├── .gitattributes             # Consistent line endings
└── index.html                 # Base HTML, JSON-LD schema, default OG tags
```

---

## ✏️ Editing Content

All editable content lives in `/src/data/`. **Never edit it anywhere else.**

### Company info, email, social links — `src/data/company.js`
```js
export const COMPANY_INFO = {
  name: 'Dev Archive Lab',
  founderName: 'Victoria',
  email: 'devarchivelab.agency@gmail.com',
  FORM_ENDPOINT: '',   // ← Add your Formspree endpoint here (see below)
  socials: {
    behance: 'https://www.behance.net/victoriaijewere',
    linkedin: 'https://www.linkedin.com/in/dev-archive-lab-b51919401',
    upwork:   'https://www.upwork.com/freelancers/~01e8231c19b7fcc368',
    fiverr:   'https://www.fiverr.com/ruthijewere',
  },
};
```

### Services — `src/data/services.js`
Edit the `services` array. Each service has:
- `title`, `icon`, `tagline`, `deliverables[]`, `idealFor`

### Projects / Work — `src/data/projects.js`
Edit the `PROJECTS` array. When you have a real case study, replace `resultPlaceholder` with the actual result.
Also update `WORK_NOTE` from the concept-projects disclaimer to something like `"Client case studies from real projects."` once you have real work.

### Testimonials — `src/data/testimonials.js`
Four Upwork review objects. Add more as you receive them.

### FAQs — `src/data/faqs.js`
Array of `{ question, answer }` objects.

---

## 🖼️ Adding Your Photo (About Page)

1. Export or crop your headshot at **800×800 px** (square, minimum).
2. Save it as `public/images/victoria.jpg`.
3. The About page will automatically display it.

The page shows an elegant branded placeholder until the file exists — no code change needed.

---

## 📬 Setting Up the Contact Form (Formspree)

The contact form has two modes:

| `FORM_ENDPOINT` value | Behaviour |
|---|---|
| `""` (empty) | Opens pre-filled `mailto:` link in user's email app |
| `"https://formspree.io/f/XXXXXXXX"` | Submits to Formspree, shows checkmark success state |

**To activate Formspree:**
1. Sign up at [formspree.io](https://formspree.io) and create a new form.
2. Copy the endpoint URL (e.g. `https://formspree.io/f/abcdefgh`).
3. Open `src/data/company.js` and paste it into `FORM_ENDPOINT`.
4. Rebuild and redeploy.

---

## 🖥️ Open Graph / Social Preview Image

The file `public/og-preview.svg` is the branded social preview image (1200×630).  
Before deploying, **export it as a real PNG**:

- Open `public/og-preview.svg` in a browser → right-click → Save as PNG, **or**
- Use Figma / Inkscape / SVGOMG to export at 1200×630 px.
- Save the result as `public/og-preview.png`, replacing the placeholder copy.

---

## 🌐 Deploying

### Vercel (Recommended)

**Option A — Drag and drop:**
1. Run `npm run build`
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the `dist/` folder onto the page
4. Done — Vercel detects `vercel.json` and handles SPA routing automatically.

**Option B — Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

**Option C — Connect GitHub repo:**
1. Push this repo to GitHub (already done).
2. Go to [vercel.com](https://vercel.com) → Import Project → select the repo.
3. Framework: **Vite** (auto-detected). Root: `/`. Build command: `npm run build`. Output: `dist`.
4. Click Deploy.

> `vercel.json` already handles all SPA deep-link routing. No extra config needed.

### Netlify

1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com) → Sites → drag `dist/` onto the page, **or**
3. Connect the GitHub repo → Build command: `npm run build`, Publish directory: `dist`

> `public/_redirects` already handles SPA routing on Netlify.

---

## 🔎 After You Deploy — Final Checklist

- [ ] Update the canonical domain in every `<Helmet>` block from `https://devarchivelab.com` to your real domain (search for `devarchivelab.com` in `src/pages/`)
- [ ] Update `public/sitemap.xml` URLs to your real domain
- [ ] Update `index.html` JSON-LD `"url"` field to your real domain
- [ ] Export `public/og-preview.png` as a real PNG (see above)
- [ ] Add `public/images/victoria.jpg` (your headshot)
- [ ] Set `FORM_ENDPOINT` in `src/data/company.js` to your Formspree URL
- [ ] Replace concept projects in `src/data/projects.js` with real case studies as you complete them
- [ ] Update `WORK_NOTE` in `src/data/projects.js` once you have real case studies

---

## 🎨 Design System Notes

| Token | Value | Usage |
|---|---|---|
| Background | `#050B1F` | Page background |
| Gold | `#F5B83D` | Primary CTAs, accents |
| Cyan | `#22D3EE` | Glows, highlights, hover |
| Logo Blue | `#0A5CFF` | Brand blue |
| Font (Display) | Sora | All headings |
| Font (Body) | Inter | Body copy |

---

## 📄 License

Private. All rights reserved. © 2026 Dev Archive Lab.
