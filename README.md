# Shalom R. — Portfolio

A modern, mobile-first developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## Features

- **Light / dark mode** that defaults to the system/browser preference and persists your choice.
- **Changeable accent color scheme** (Violet, Ocean, Emerald, Sunset, Amber) via the palette menu.
- **Dynamic, calming gradient background** with slowly drifting blobs tied to the active accent.
- **Smooth page transitions** and tasteful scroll-reveal animations (respecting `prefers-reduced-motion`).
- **Mobile-first**, fully responsive layout with a minimal, adaptable structure.

## Project structure

```
app/
├─ public/            # static assets + serverless mini-apps (recipe.html, log.html), images, favicons
├─ src/
│  ├─ components/     # Navbar, Footer, AnimatedBackground, ThemeControls, motion helpers
│  ├─ data/content.js # all site content as structured data
│  ├─ pages/          # Home, About, Projects, Playground, Art, SetPowerFree, NotFound
│  ├─ theme/          # ThemeContext (mode + accent)
│  ├─ App.jsx         # routes + page-transition shell
│  └─ index.css       # Tailwind layers + theme CSS variables
└─ vite.config.js
```

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content

All copy lives in `src/data/content.js` — profile, projects, playground apps, the SetPowerFree
writeup, and the AI art gallery. Update there and the UI follows.
