import { useEffect, useState } from 'react'
import type { Word } from '../data/words'
import { speakGerman } from '../lib/speak'

interface Props {
  words: Word[]
  mastered: Set<number>
  onToggleMaster: (n: number) => void
}

export function Flashcards({ words, mastered, onToggleMaster }: Props) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  useEffect(() => {
    setIdx(0)
    setFlipped(false)
  }, [words])

  if (words.length === 0) {
    return <p className="text-center text-sm text-ink-dim">No words in this category.</p>
  }

  const w = words[Math.min(idx, words.length - 1)]
  const isMastered = mastered.has(w.n)

  function go(delta: number) {
    setFlipped(false)
    setIdx((i) => (i + delta + words.length) % words.length)
  }

  return (
    <div className="flex flex-col items-center gap-3.5 pb-1 pt-2">
      <div
        className="perspective h-48 w-full max-w-xs cursor-pointer"
        onClick={() => setFlipped((f) => !f)}
      >
        <div className={`flip-inner relative h-full w-full ${flipped ? 'flipped' : ''}`}>
          {/* front */}
          <div className="backface-hidden absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-line bg-panel px-4 text-center">
            <span className="absolute left-3 top-2.5 text-[11px] text-ink-dim">#{w.n}</span>
            <div className="text-2xl font-semibold">{w.en}</div>
            <div className="mt-1 text-[11px] text-ink-dim">tap to reveal</div>
          </div>
          {/* back */}
          <div className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-line bg-panel2 px-4 text-center">
            <span className="absolute left-3 top-2.5 text-[11px] text-ink-dim">#{w.n}</span>
            <div className="font-display text-3xl text-gold">{w.de}</div>
            <div className="mt-1.5 text-sm text-ink-dim">{w.pron}</div>
            {w.note && <div className="mt-2 text-xs text-ink-dim">{w.note}</div>}
            <button
              onClick={(e) => {
                e.stopPropagation()
                speakGerman(w.de)
              }}
              className="mt-3 rounded-full border border-line bg-panel px-3 py-1 text-xs text-ink"
            >
              🔊 Play
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-xs items-center gap-2.5">
        <button
          onClick={() => go(-1)}
          className="h-10 w-10 flex-none rounded-full border border-line bg-panel text-lg"
        >
          ‹
        </button>
        <button
          onClick={() => onToggleMaster(w.n)}
          className={`flex-1 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
            isMastered ? 'border-good bg-good text-[#0d1a10]' : 'border-good bg-transparent text-good'
          }`}
        >
          {isMastered ? '✓ Mastered' : 'Mark mastered'}
        </button>
        <button
          onClick={() => go(1)}
          className="h-10 w-10 flex-none rounded-full border border-line bg-panel text-lg"
        >
          ›
        </button>
      </div>
      <div className="text-xs text-ink-dim">
        {idx + 1} of {words.length}
      </div>
    </div>
  )
}
