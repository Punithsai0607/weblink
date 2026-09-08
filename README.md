# Punith Sai — Full-Stack Developer Portfolio

A modern, professional portfolio website built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS v4**.

Designed to showcase full-stack development capabilities, real projects, and technical skills for job applications.

---

## ✨ Features

- **Dark Premium Design** — Glassmorphism, subtle gradients, professional typography
- **Interactive Navbar** — Smooth scroll active-section tracking, mobile hamburger menu
- **Hero Section** — Interactive developer terminal widget with tabbed architecture/test/AI views
- **About Section** — Personal introduction, engineering philosophy cards
- **Skills Section** — Filterable skill categories with proficiency bars
- **Projects Section** — Expandable project cards with modal detail views (architecture, features, tests)
- **Education Section** — Degree + Certifications layout
- **Contact Section** — Contact info + working contact form
- **Footer** — Navigation, links, branding
- **Fully Responsive** — Desktop, laptop, tablet, mobile
- **SEO Optimized** — Meta tags, Open Graph, semantic HTML

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 8 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (@tailwindcss/vite) |
| Icons | Lucide React |
| Build | Vite |
| Deploy | Vercel / Netlify |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/punithsai0607/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The portfolio will be live at `http://localhost:5173`

### Production Build

```bash
npm run build
```

Build output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## ☁️ Deployment on Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**

Done! Vercel automatically handles CI/CD on every push.

---

## 📝 Customization Checklist

Replace the following placeholder values in `src/data/portfolioData.ts`:

| Field | Current Value | Replace With |
|-------|-------------|-------------|
| `github` | `https://github.com/punithsai0607` | Your actual GitHub URL |
| `linkedin` | `https://linkedin.com/in/punithsai` | Your actual LinkedIn URL |
| Project `githubUrl` | Placeholder URLs | Your actual GitHub repo URLs |
| Project `liveDemoUrl` | Not set | Add if projects are deployed |
| Education `grade` | General description | Your actual GPA / CGPA if desired |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky navigation with mobile menu
│   ├── Hero.tsx          # Hero section with interactive terminal widget
│   ├── About.tsx         # About section with philosophy cards
│   ├── Skills.tsx        # Filterable skill categories
│   ├── Projects.tsx      # Project cards grid
│   ├── ProjectModal.tsx  # Expandable project detail modal
│   ├── Education.tsx     # Education + certifications
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Site footer
├── data/
│   └── portfolioData.ts  # ← ALL content lives here. Edit this file.
├── index.css             # Tailwind + custom glass/animation styles
├── App.tsx               # Root layout + scroll tracking
└── main.tsx              # React entry point
```

---

## 📄 License

MIT © Punith Sai
