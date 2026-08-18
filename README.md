# AI Career Copilot

> **Acdyon Technologies Frontend Challenge — Part 2: The Premium Home Page**  
> *Core Positioning: "Your next career move, powered by AI."*

---

## 🚀 Live Demo

**Live Website**: [https://ai-carrer-mu.vercel.app/](https://ai-carrer-mu.vercel.app/)  
**GitHub Repository**: [https://github.com/vamshiyadav-2003/ai-carrer](https://github.com/vamshiyadav-2003/ai-carrer)

---

## Overview

**AI Career Copilot** is a high-grade frontend application built for job seekers to discover relevant opportunities, evaluate role compatibility, receive actionable resume insights, and track job applications across every hiring stage.

This project was built specifically for **Part 2 of the Acdyon Technologies Frontend Challenge**, prioritizing UI taste, responsive engineering, accessibility, data honesty, and product interaction.

---

## Key Features

* **Interactive AI Job Match Simulator**: Multi-role fit evaluation with real-time NLP text analysis, validation error handling, loading skeleton states, skill match tags, AI insights, and an interactive optimization plan.
* **Resume Insights Engine**: Audit panel featuring a `78% Demo Score`, checklist breakdown, and line-by-line phrasing and metric recommendations.
* **Application Tracker & Pipeline Workspace**: 4-stage Kanban tracking (`Applied`, `Interview`, `Shortlisted`, `Completed`) with interactive empty states, an **+ Add Application** modal, and toast feedback notifications.
* **Why AI Career Copilot Workflow**: 4-phase architecture (`01 Discover` → `02 Understand` → `03 Improve` → `04 Track`) with desktop connecting line and mobile vertical stack.
* **Built For Categories**: Dedicated role guidance cards for *Students*, *Career Switchers*, and *Early-Career Professionals*.
* **Responsive & Accessible**: 100% responsive across 390px mobile and 1440px desktop layouts with visible focus rings (`outline-2`), semantic HTML5 elements, ARIA labels, keyboard navigation (Arrow keys + Enter + Escape), and `prefers-reduced-motion` support.
* **Spotlight Command Palette (Easter Egg)**: `Cmd+K` or `Ctrl+K` keyboard launcher for fast section navigation.

---

## Tech Stack

* **React 18** — Component-driven declarative UI
* **Vite 5** — Fast dev server and Rollup production bundling
* **Tailwind CSS 3** — Modern utility-first SaaS styling system
* **Lucide React** — Professional SVG icon system
* **JavaScript (ES Modules)** — Modern ES6+ syntax

---

## Getting Started

To run the project locally on your machine:

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

---

## Build for Production

To create an optimized production bundle:

```bash
npm run build
```

The output files will be compiled into the `dist/` directory with zero build errors.

---

## Deployment (Vercel)

This project is deployed on Vercel with single-page application SPA rewrite configuration (`vercel.json`):

1. **Live Deployment**: [https://ai-carrer-mu.vercel.app/](https://ai-carrer-mu.vercel.app/)
2. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

---

## AI Usage Transparency

In accordance with Acdyon assessment guidelines:

* **Generated**: Initial component structural boilerplate and example dataset entries (`Data Analyst`, `Software Engineer`, `Product Manager`, `Business Analyst`, `AI/ML Engineer`).
* **Manually Reviewed & Modified**: Reviewed all copy for 100% data honesty, configured Tailwind color palette tokens (`#0F172A`, `#2563EB`), added validation error states, loading skeletons, modal forms, and tested keyboard navigation (`Cmd+K`, Arrow keys, Escape key).
* **Verified Personally**: Executed `npm run dev` and `npm run build` with zero warnings/errors, and verified 390px mobile and 1440px desktop layouts.

