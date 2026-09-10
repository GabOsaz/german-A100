# Deutsch: Erste 100 Wörter

A flashcard / list / quiz app for the first 100 core English words and their German
translations, built with **TanStack Start**, **TanStack Router**, **React**, and
**Tailwind CSS**, packaged as an installable **PWA**.

## Features

- **Flashcards** — flip card, phonetic pronunciation, and a 🔊 play button (browser
  speech synthesis, German voice, works offline)
- **List view** — scan all 100 at once, mark words mastered
- **Quiz** — type the German word, get instant feedback
- Filter by category (pronouns, verbs, question words, prepositions, etc.)
- Progress saved locally (`localStorage`) — persists across sessions
- Installable as a home-screen app (PWA) with offline support once cached

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:3000`).

The first `npm run dev` (or `npm run build`) auto-generates
`app/routeTree.gen.ts` from the files in `app/routes/` — this is expected and
should not be edited by hand.

## Build & run in production mode

```bash
npm run build
npm run start
```

## Making the PWA installable

Browsers only offer the "install" prompt over **HTTPS** (localhost during dev is
exempted). To test/use it as an installed app:

1. Deploy the built app to any host that supports TanStack Start's Node/Nitro
   output — Vercel, Netlify, Cloudflare Pages, Fly.io, or your own Node server
   all work.
2. Visit the deployed HTTPS URL in Chrome/Edge/Safari.
3. Use "Add to Home Screen" (iOS Safari) or the install icon in the address
   bar (Chrome/Edge/Android) to install it.

The manifest and service worker are generated automatically by
`vite-plugin-pwa` (configured in `app.config.ts`) at build time — no extra
steps needed beyond a normal `npm run build`.

## Customizing

- **Word list / translations / pronunciations**: `app/data/words.ts`
- **Colors / theme tokens**: `tailwind.config.ts`
- **Flashcard / list / quiz UI**: `app/components/`
- **Pronunciation audio voice**: `app/lib/speak.ts` — currently uses the
  browser's built-in `SpeechSynthesis` with a German (`de-DE`) voice if the
  device has one installed. Voice quality varies by OS/browser; there's no
  bundled audio, so it works fully offline once installed.

## Notes on the phonetic pronunciations

The `pron` field in `words.ts` is a rough English-reader respelling (e.g.
*danke* → "DAHN-kuh"), not IPA — meant as a quick visual aid alongside the
audio button, not a precise phonetic transcription.
