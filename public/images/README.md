# Images

## Logo

The site logo is referenced from code as `/images/dwright-logo.svg`.

A placeholder SVG is included that approximates the brand mark (navy "D WRIGHT" with the "PAINTING + DECORATING" tagline and a paintbrush flourish).

To use the real logo file:

1. Save your final logo as `dwright-logo.png` (or `.webp`) in this folder.
2. Update the two references in code:
   - `app/page.tsx` — `const logo = "/images/dwright-logo.png";`
   - `app/painter/[suburb]/layout.tsx` — `const logo = "/images/dwright-logo.png";`

## Hero / carousel

Hero background and carousel images are currently external URLs hosted by the previous project. Replace with your own URLs (or local files in this folder) when ready.
