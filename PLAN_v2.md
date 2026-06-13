# Portfolio v2 — Plan of Action

Inspired by [thariq.io](https://www.thariq.io/?mode=professional)

---

## Reference Analysis: What Makes thariq.io Work

| Element | thariq.io | Current Portfolio |
|---|---|---|
| Theme | Dark, minimal, near-black | Warm cream retro/brutalist |
| Layout | Two-column: left label + right content | Centered, single-column |
| Navigation | Barely visible, minimal chrome | Fixed navbar with logo + icons + links |
| Hero | Circular avatar + name, no tagline clutter | Text-only, no photo |
| About | Two short paragraphs, storytelling voice | One paragraph, skills-focused |
| Articles | Inline list — title + read time + date | Heavy `TechnicalLog` card per article |
| Projects | Visual grid with screenshots ("Stuff I've Made") | Text-only log cards |
| Page structure | Single scroll, all sections on one page | Multi-page routing |

---

## What to Keep

- The warm cream (`#f8f3e3`) retro aesthetic — it's the identity, don't abandon it
- Retro typography and monospace tags — differentiating, keep it
- `TechnicalLog` for Work/Experience — that section works fine as cards
- Tag badges on projects/work entries
- Mobile hamburger menu + social icons layout

---

## Plan

### Phase 1 — Hero & About Overhaul
**Goal:** First impression should feel human, not like a landing page template.

- [ ] Add a circular profile photo to the Hero section (above the name)
- [ ] Restructure the Hero into a two-column `About` block after the name:
  - Left column: `ABOUT` label (small mono caps, muted)
  - Right column: bio text
- [ ] Rewrite the bio in a first-person storytelling voice (like thariq's two paragraphs):
  - Para 1: What you're currently doing / building
  - Para 2: Background, wins, what drives you (ETH Global, hackathons, the range across chains/AI/systems)
- [ ] Remove the "Based in India · Available for collaborations" pill row — fold it into the bio prose

---

### Phase 2 — Homepage Writing/Posts Section
**Goal:** Surface recent writing directly on the homepage, inline and lightweight — not full cards.

- [ ] Add a `Writing` section between Projects and Experience on the home page
- [ ] Render it as a simple list (not `TechnicalLog` cards):
  - Title (linked) — estimated read time — date (right-aligned)
- [ ] Cap to 3 most recent articles; add "View all →" link to `/Articles`
- [ ] Wire to the same Medium/Substack fetch used in `app/Articles/page.tsx`

---

### Phase 3 — Project Cards → Visual Grid
**Goal:** "Stuff I've Made" style — show the work visually, not just describe it.

- [ ] Replace the `TechnicalLog` grid on the home page Projects section with a 3-column (desktop) / 1-column (mobile) image card grid
- [ ] Each card:
  - Screenshot or representative image (fallback: gradient + project name if no image)
  - Title
  - One-line description (max 80 chars)
  - Tags row
  - Entire card is a link (same GitHub link already wired)
- [ ] Add screenshots/OG images for the four current projects:
  - Dark Pool Hook
  - Fabel
  - CitreaMesh
  - RPG Verse Agentic
- [ ] Keep the detailed `TechnicalLog` view on `/projects` page as the expanded view

---

### Phase 4 — Navigation Simplification
**Goal:** Less chrome, more signal.

- [ ] Remove the center logo (`APJ`) from the navbar — it adds visual noise; replace with a plain text `ayush petwal` home link or nothing (home is `/`)
- [ ] Collapse the 4 social icon buttons in the navbar into a smaller social row in the footer instead
- [ ] Keep the page nav links (projects · work · articles · side quests) — they work
- [ ] On desktop: left = nav links, right = minimal social or empty

---

### Phase 5 — Side Quests → Personal Space
**Goal:** This section should feel like a personal space, not a placeholder.

- [ ] Add a `Writing` sub-section for personal blogs (links to posts as they go live)
- [ ] Add a `Shelf` or `Currently` sub-section: what you're reading, watching, or building for fun
- [ ] Optional: add a `Photography` log if you have street shots to share
- [ ] Keep it minimal — a few items per section, no empty states

---

### Phase 6 — Footer
**Goal:** Footer should carry the social links (freed from navbar) and feel complete.

- [ ] Move GitHub, LinkedIn, Twitter, LeetCode social links from navbar into the footer
- [ ] Add a short one-liner: "Open to collaborations and interesting problems."
- [ ] Keep the copyright line and "Built with Next.js 15" stamp

---

## Rough Sequence

```
Phase 1 → Phase 4 → Phase 2 → Phase 3 → Phase 5 → Phase 6
  (Hero)   (Nav)    (Writing)  (Cards)   (Side)    (Footer)
```

Start with Phase 1 + 4 together — they both touch the "frame" of the page and are quick wins that immediately change the feel. Phase 3 (visual project cards) is the heaviest lift because it needs screenshots.

---

## Notes

- Keep the retro/cream theme throughout — don't chase thariq's dark mode, yours is distinctive
- thariq.io works because of *restraint* (what it removes), not what it adds — apply the same lens to each phase
- The two-column label layout (left: section name, right: content) is the single most impactful structural change to adopt
