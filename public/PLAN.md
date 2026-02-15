# Portfolio Website Implementation Plan - Phase 1 (Revised)

## Overview
Build a high-density, monochrome dark-themed developer portfolio using Next.js 15, TypeScript, and Tailwind CSS. The design is inspired by minimalist engineering portfolios (whoissarthak.com, heysuri.xyz).

## Strict Style Guidelines
- **Theme**: Monochrome Dark.
- **Background**: `#0a0a0a` (Near-black).
- **Primary Text**: `text-zinc-200` (Off-white).
- **Secondary Text**: `text-zinc-400` (Muted gray).
- **Borders**: `border-zinc-800`.
- **Hovers**: `hover:bg-zinc-900`, `hover:border-zinc-700`.
- **Typography**:
  - **Monospace**: Geist Mono / JetBrains Mono (Headings, Dates, Tech Tags).
  - **Sans-serif**: Inter / Geist Sans (Body text, Project descriptions).
- **Sizing**: High density. H1 <= `text-3xl`. Body `text-sm` or `text-base`.

## Implementation Strategy

### 1. Foundation & Design System
- Configure Tailwind CSS (v4) with the monochrome palette.
- Set up CSS variables for the dual-font system.
- Implement global styles for scrollbars and text selection.

### 2. Layout Structure
- **Navbar**: Full-width (edge-to-edge), fixed at top, `backdrop-blur-md`, `border-b border-zinc-800`.
- **Content Wrapper**: `max-w-3xl mx-auto px-6` for horizontal centering.

### 3. Core Components
- **Navbar Component**: Minimal links (Home, Projects, Side Quests, Work, Articles).
- **Hero Section**:
  - Monospace H1 for branding/name.
  - Muted sans-serif description.
- **Technical Log (Project List)**:
  - Format: `[Date Range (mono)] -> [Project Title (mono)] -> [Description (sans)] -> [Tech Stack Badges (mono, outline)]`.
  - Item-level hover: `bg-zinc-900`.
- **Experience Timeline**: Similar to technical log but for work history.
- **Article Feed**: Fetching from Medium/Substack RSS.

### 4. Technical Stack
- **Framework**: Next.js 15 (App Router).
- **Styling**: Tailwind CSS 4.
- **Icons**: Lucide React.
- **Animations**: Framer Motion (subtle fade-ins).
- **Data Fetching**: Server Components for SEO and performance.

## Phase 1 Deliverables
1. `app/globals.css`: Design system tokens.
2. `components/Navbar.tsx`: Fixed blur navbar.
3. `components/Hero.tsx`: Minimalist intro.
4. `components/ProjectLog.tsx`: Technical log list items.
5. `app/page.tsx`: Integrated home page.

## Phase 2 (Coming Soon)
- GitHub API integration for real-time project fetching.
- Spotify API for Side Quests.
- RSS parsing for Articles.

---
*Note: Sticking strictly to the monochrome aesthetic. No vibrant colors.*
