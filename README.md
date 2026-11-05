# Roman2Urdu Next.js Project

A responsive Roman Urdu language-tools website built with Next.js App Router, React, and JavaScript.

## Pages
- `/` — Roman Urdu to Urdu converter
- `/urdu-to-roman` — Urdu script to Roman text
- `/names` — searchable starter names collection
- `/word-meanings` — starter English/Urdu vocabulary
- `/poetry-maker` — poetry card preview, themes, text sizing, image download and share action
- `/blog`, `/about`, `/contact` — supporting pages

## Install and run
Requires Node.js 20.9+.

```bash
npm install
npm run dev
```
Open http://localhost:3000.

Production commands:

```bash
npm run build
npm start
```

## Roman Urdu transliteration
The local helper is `lib/romanUrduConverter.js`. It uses a custom dictionary first, tries the `urdu-tools` library for a compatible `fromRoman` / `romanToUrdu` export, and then falls back to local phonetic rules. No remote AI or transliteration API is called by this code. This is best-effort transliteration rather than a sentence-aware model; test real Roman Urdu chat examples before production deployment.

## Urdu typography
The global stylesheet requests Noto Nastaliq Urdu and Noto Naskh Arabic from Google Fonts. Internet access is needed to load the web fonts; fallback fonts are configured.

See `PROJECT_TECHNICAL_OVERVIEW.md` for the package purposes, routes, and conversion flow.

## Content and deployment notes
Names and word meanings are starter content. Run `npm run build` locally and resolve any build errors before deploying to Vercel. This archive has not been validated with a full production build in the current environment.


## Poetry Maker transliteration fixes

- Added phrase-level rules for common poetry lines such as `Dil ney yeah kaha ha dil sey`.
- Added common poet-name spellings including `Mir taqi mir` and `Allama Iqbal`.
- The poet/author label is transliterated into Urdu for the live preview and downloaded PNG, while the editable input remains in Roman text.
- Conversion remains rule/dictionary based; ambiguous or misspelled phrases may still need manual correction.


## Extended Roman Urdu dictionary

`lib/romanUrduConverter.js` includes 1,000 additional single-word dictionary keys, including common vocabulary and widely used Roman Urdu spelling variants. Since Roman Urdu spelling is not standardized, ambiguous spellings may still need contextual handling or manual correction.


## Poetry Maker image sizes and text fitting

- WhatsApp Status / Story exports at 1080 × 1920 (9:16).
- Square post exports at 1080 × 1080 (1:1).
- Instagram / Facebook feed posts export at 1080 × 1350 (4:5).
- Poetry is wrapped to the canvas width and the font size reduces until the text fits the available poetry area; the live preview uses matching size-aware fitting. Poet names are rendered in Urdu script when Roman Urdu input can be converted by the local dictionary.


## Word meanings dictionary update

The English-to-Urdu word meanings page now includes 2,230 entries (the original 230 plus 2,000 additional everyday terms and useful inflected forms). Search supports English and Urdu, prioritizes exact matches, then prefix matches, followed by broader suggestions.
