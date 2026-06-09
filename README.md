# SÈNTRI APPAREL — homepage mockup

An improved static mockup of [sentriapparel.co](https://sentriapparel.co), built to keep
the **exact same niche** (premium streetwear) and **same visual language** (near-black +
paper, slab serif + grotesque, the real product photography) while tightening the details.

**Live preview:** see the GitHub Pages link in the repo's About section.

## What changed vs. the live Shopify site

| Area | Before | After |
|------|--------|-------|
| Buttons | Two clashing greens (`#D4DFD2` + `#2E4A29`), system font, per-section color schemes | One `.btn` system in brand near-black `#091208` / paper, in the brand font |
| Hero text | Sat directly on the photo | Gradient scrim for legibility + staggered load animation |
| Labels | Trailing periods ("…RELEASE.") | Cleaned |
| "Learn more" | Orphaned low-contrast gray text | Animated underline link with arrow |
| Products | None on homepage | Real product grid (4 hoodies) with hover-zoom |
| Motion | None | Restrained scroll-reveal + marquee announcement |

Niche, copy, palette, and photography are unchanged — this is a polish pass, not a redesign.

## Stack

Plain HTML/CSS/JS — no build step, no dependencies. Fonts via Google Fonts
(**Besley** slab serif + **Archivo** grotesque, standing in for the live site's
paid GT Standard). Images are referenced directly from the live SÈNTRI CDN.

## Run locally

```bash
python3 -m http.server 8090
# open http://localhost:8090
```

## Notes

- Prices (£68 / £72) are **placeholders** for the mockup.
- Images hotlink from `sentriapparel.co`; if the live store changes them, swap the URLs in `index.html`.
- To take this live on the real store, the button + spacing fixes map directly to Shopify
  theme **color scheme** settings and section padding — no theme code required for most of it.
