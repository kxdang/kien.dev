# kien.dev

Personal portfolio, lab notebook edition. Built with [Astro](https://astro.build), styled as a scientific lab notebook: paper and ink, one oxide-green accent, a red margin rule, sections named like a paper (Abstract, Materials & Methods, Reaction Pathway, Appendix, Correspondence).

Ships zero external JavaScript. The theme toggle, pronunciation audio, and scroll reveals are small inline scripts.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Structure

- `src/data/portfolio.ts` — all content (skills, roles, side projects)
- `src/components/*.astro` — one component per section
- `src/styles/global.css` — design tokens and page frame
- `public/` — photo, pronunciation audio, favicons

Fonts are self-hosted via Fontsource: Newsreader (serif) and IBM Plex Mono.
