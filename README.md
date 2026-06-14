# ScriptCore

A modern, multi-page website for **ScriptCore** — a student-led organization making computer science education accessible through workshops, projects, and mentorship.

Built with **React + Vite + Tailwind CSS** and **Framer Motion**, following the project brand:

- **Colors:** Dark Navy `#0F172A`, Blue `#3B82F6`, Cyan `#06B6D4`, White
- **Fonts:** Poppins (headings), Inter (body), JetBrains Mono (code)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Pages

| Route | Page | Highlights |
|-------|------|-----------|
| `/` | Home | Animated hero with live mock code editor, floating code particles, animated impact counters, What We Do, featured programs, **interactive coding quiz**, student projects gallery, success stories, CTA |
| `/about` | About | Story, mission & vision, journey timeline |
| `/programs` | Programs | All 7 programs with topics & outcomes, learning path, why our programs |
| `/chapters` | Chapters | Chapter network + "start a chapter" flow |
| `/events` | Events | Upcoming workshops/hackathons/competitions + past recaps |
| `/resources` | Resources | Free slides, lesson plans, challenges, workshop archive |
| `/team` | Team | Leadership cards with role, focus & LinkedIn |
| `/get-involved` | Get Involved | Students / Volunteers / Schools paths + sign-up form |
| `/contact` | Contact | Contact form, email, social links |

## Standout features

- **Animated counters** that count up on scroll (Impact dashboard)
- **Mock coding editor** that types out and "runs" a Python snippet
- **Interactive coding challenge** — a small embedded quiz with instant feedback
- **Student projects gallery** and **success stories**
- Scroll-triggered reveals, hover lift/glow on cards, sticky animated navbar
- Fully responsive (mobile menu, fluid grids)

## Project structure

```
src/
  components/   # Navbar, Footer, Counter, CodeEditor, CodingChallenge, etc.
  pages/        # One file per route
  data/site.js  # All site content in one place — edit here to update copy
```

All copy lives in [`src/data/site.js`](src/data/site.js) so content can be updated without touching components.
