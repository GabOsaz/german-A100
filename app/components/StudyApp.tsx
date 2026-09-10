import { useState } from 'react'
import { CATEGORIES, WORDS, type Category } from '../data/words'
import { useMastered } from '../lib/useMastered'
import { Flashcards } from './Flashcards'
import { ListView } from './ListView'
import { Quiz } from './Quiz'

type Mode = 'flashcard' | 'list' | 'quiz'

export function StudyApp() {
  const [cat, setCat] = useState<Category | 'all'>('all')
  const [mode, setMode] = useState<Mode>('flashcard')
  const { mastered, toggle, reset } = useMastered()

  const words = cat === 'all' ? WORDS : WORDS.filter((w) => w.cat === cat)
  const pct = Math.round((mastered.size / WORDS.length) * 100)

  return (
    <div className="mx-auto max-w-lg px-4 pb-12 pt-6">
      <header className="mb-4 flex items-baseline justify-between">
        <h1 className="font-display text-2xl tracking-tight">Deutsch: Erste 100 Wörter</h1>
      </header>
      <p className="mb-4 text-xs text-ink-dim">core words, EN → DE</p>

      <div className="mb-4 rounded-xl border border-line bg-panel px-3 py-2.5">
        <div className="mb-1.5 flex justify-between text-xs text-ink-dim">
          <span>Mastered</span>
          <span>
            <b className="text-gold">{mastered.size}</b> / {WORDS.length}
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded bg-panel2">
          <div
            className="h-full rounded bg-gradient-to-r from-gold-dim to-gold transition-[width]"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="mb-3 grid grid-cols-3 gap-2">
        {(['flashcard', 'list', 'quiz'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`rounded-lg border px-2 py-2 text-sm capitalize transition-colors ${
              mode === m
                ? 'border-gold-dim bg-panel2 font-semibold text-gold'
                : 'border-line bg-panel text-ink'
            }`}
          >
            {m === 'flashcard' ? 'Flashcards' : m === 'list' ? 'List' : 'Quiz'}
          </button>
        ))}
      </div>

      <div className="mb-4 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none]">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            onClick={() => setCat(c.id)}
            className={`flex-none whitespace-nowrap rounded-full border px-3 py-1 text-xs transition-colors ${
              cat === c.id
                ? 'border-gold bg-gold font-semibold text-[#1b1200]'
                : 'border-line bg-panel text-ink-dim'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {mode === 'flashcard' && (
        <Flashcards words={words} mastered={mastered} onToggleMaster={toggle} />
      )}
      {mode === 'list' && <ListView words={words} mastered={mastered} onToggleMaster={toggle} />}
      {mode === 'quiz' && <Quiz words={words} />}

      <button
        onClick={reset}
        className="mx-auto mt-6 block text-center text-xs text-ink-dim underline"
      >
        Reset all progress
      </button>
    </div>
  )
}
