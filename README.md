# NAUMAN NASEER — Premium Animated Developer Portfolio

An interactive, high-performance developer portfolio built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, engineered with a cinematic **black, white, and vivid orange** visual identity.

---

## 🌟 Highlights & Key Features

- **Black, White & Vivid Orange Aesthetic**: Near-black `#080808` base, `#111111` surfaces, `#292929` borders, pure white typography, and electric orange `#FF4D12` interactive accents.
- **Hero Section Composition**:
  - **Left side**: Smartphone mockup with realistic depth, dynamic notch, live developer profile, code snippet, and project metrics with gentle floating animation.
  - **Right side**: Oversized bold typography with **NAUMAN** in crisp white and **NASEER** in vivid orange, typewriter rotating titles, compelling introduction, and quick action buttons.
- **Interactive Particle Background**: High-performance canvas particle network with dynamic line links and gentle mouse repulsion tinted with subtle orange ambient glows.
- **About Section**:
  - Profile card with glowing border and status breakdown.
  - One-click **Résumé Preview Modal** with confetti celebration and raw download support.
  - Core philosophy cards for problem solving and software architecture.
- **Categorized Skills Arsenal**:
  - Filter tabs for Languages, Core CS, Web Development, and Tools.
  - Technology ticker / marquee with pause-on-hover.
- **Project Showcase**:
  - High-impact preview cards with problem solved breakdown, key architecture bullets, and tech badges.
  - Inspect Full Specs modal with deep architectural details and direct GitHub repository links.
- **Experience & Education Timeline**:
  - Vertical timeline with glowing line and alternating cards.
- **Capabilities & Services**:
  - Core software development (C++, Python, Java), Frontend web systems, Database design, and Logic debugging.
- **Functional Contact Section**:
  - Complete form with field validation (name, email format regex, subject, minimum message length).
  - One-click copy email button with feedback.
  - Orange/white confetti celebration upon sending.
- **Subtle Desktop Custom Cursor**: Non-blocking custom orange dot and trailing ring follower that automatically disables on touch devices.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18 + Vite |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + PostCSS |
| **Animations** | Framer Motion + Canvas 2D |
| **Icons** | Lucide React + React Icons |
| **Effects** | Canvas Confetti |

---

## 🚀 Getting Started

### Prerequisites

Node.js (v18 or newer) and npm installed.

### 1. Start the Development Server

```bash
cd d:\portfolio
npm run dev
```

Visit `http://localhost:5173` in your browser.

### 2. Production Build & Preview

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## ⚙️ Customization Guide

All portfolio content is centralized in **[`src/data/portfolioData.ts`](./src/data/portfolioData.ts)**:

- **Personal Info**: Full name (`NAUMAN NASEER`), tagline, rotating titles, biography, status badge.
- **Profile Image & Résumé**: Update URLs directly in `portfolioData.personal.profileImage` and `portfolioData.personal.resumeUrl`.
- **Social Media Links**: GitHub, LinkedIn, Instagram, and email.
- **Projects**: Add, remove, or modify titles, screenshots, descriptions, and repo links.
- **Skills**: Add languages, core CS competencies, or tools.
- **Timeline**: Education milestones and coursework.

---

## 📬 Contact Form Configuration

The contact form is located in **[`src/sections/ContactSection.tsx`](./src/sections/ContactSection.tsx)**.
To connect it to a free backend form service like [Formspree](https://formspree.io):

1. Create a free Formspree form ID at `https://formspree.io`.
2. Send a `POST` request with `fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: JSON.stringify(formData) })` inside `handleSubmit`.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to your GitHub account (`https://github.com/devnoumannaseer-ctrl/portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel will automatically detect **Vite** as the framework preset.
4. Click **Deploy**.
