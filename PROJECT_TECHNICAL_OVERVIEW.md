# Roman2Urdu — Technical Overview

## Stack
- Next.js 15 (`next`): application framework, App Router, routing and production build.
- React 19 (`react`): component-based user interface.
- React DOM (`react-dom`): renders React into the browser.
- JavaScript and CSS: app logic and styling.
- `urdu-tools` (`^1.0.0` in package.json): optional local transliteration fallback integration. The app's custom dictionary takes precedence; a phonetic fallback remains if a compatible library function is unavailable.
- Google Fonts: `Noto Nastaliq Urdu` and `Noto Naskh Arabic` are requested in `app/globals.css` for Urdu typography. Font loading requires internet access; system fallbacks remain available.

## Roman Urdu to Urdu
The converter is in `lib/romanUrduConverter.js`. It does not call a remote AI or translation API. The conversion path is:
1. Apply built-in dictionary mappings for known spellings.
2. Attempt a compatible `urdu-tools` function (`fromRoman` / `romanToUrdu`) for unknown words.
3. Use the local phonetic mapping as a fallback.

This is a lightweight, best-effort transliteration system. It is not a sentence-aware AI model, and output should be tested with casual spellings, names, and mixed Urdu-English text. The compatibility wrapper does not guarantee that every `urdu-tools` release exposes the checked function names.

## Main routes
- `/` — Roman Urdu to Urdu converter
- `/urdu-to-roman` — Urdu script to Roman text
- `/names` — starter Urdu names collection
- `/word-meanings` — starter word meanings
- `/poetry-maker` — poetry card preview and sharing tools
- `/blog` — blog landing page
- `/about` — about page
- `/contact` — contact page

## Commands
Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
npm run build
npm start
```

`npm run build` has not been verified as part of preparing this archive. Run it locally before deploying to Vercel. Ensure the selected Node.js version is compatible with the Next.js version.


## Extended Roman Urdu dictionary

`lib/romanUrduConverter.js` includes 1,000 additional single-word dictionary keys, including common vocabulary and widely used Roman Urdu spelling variants. Since Roman Urdu spelling is not standardized, ambiguous spellings may still need contextual handling or manual correction.
