import { useEffect, useRef, useState } from 'react'
import type { Word } from '../data/words'

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]/g, '')
}

interface Props {
  words: Word[]
}

export function Quiz({ words }: Props) {
  const [pool, setPool] = useState<Word[]>(() => shuffle(words))
  const [i, setI] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setPool(shuffle(words))
    setI(0)
    setAnswered(false)
    setScore(0)
    setValue('')
  }, [words])

  useEffect(() => {
    inputRef.current?.focus()
  }, [i])

  if (pool.length === 0) {
    return <p className="text-center text-sm text-ink-dim">No words in this category.</p>
  }

  const w = pool[i]

  function check() {
    if (answered) return
    const accepted = w.de.split('/').map((s) => normalize(s))
    const ok = accepted.includes(normalize(value))
    setCorrect(ok)
    setAnswered(true)
    if (ok) setScore((s) => s + 1)
  }

  function next() {
    if (i + 1 >= pool.length) {
      setPool(shuffle(words))
      setI(0)
      setScore(0)
    } else {
      setI((v) => v + 1)
    }
    setAnswered(false)
    setValue('')
  }

  return (
    <div className="rounded-xl border border-line bg-panel p-4 text-center">
      <div className="mb-1.5 text-xs text-ink-dim">How do you say...</div>
      <div className="mb-3.5 text-2xl font-semibold">{w.en}</div>

      <input
        ref={inputRef}
        value={value}
        disabled={answered}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && (answered ? next() : check())}
        placeholder="type the German word"
        className="mb-2.5 w-full rounded-lg border border-line bg-panel2 px-3 py-2.5 text-center text-sm text-ink outline-none focus:border-gold-dim"
      />

      <div className="min-h-[18px] text-sm">
        {answered &&
          (correct ? (
            <span className="text-good">Richtig! ✓</span>
          ) : (
            <span className="text-bad">
              Not quite — it's <b>{w.de}</b>
            </span>
          ))}
      </div>

      <div className="mt-2.5 flex gap-2">
        {answered ? (
          <button
            onClick={next}
            className="flex-1 rounded-lg border border-line bg-panel2 py-2.5 text-sm font-semibold text-ink"
          >
            Next word →
          </button>
        ) : (
          <button onClick={check} className="flex-1 rounded-lg bg-gold py-2.5 text-sm font-semibold text-[#1b1200]">
            Check
          </button>
        )}
      </div>

      <div className="mt-3.5 text-xs text-ink-dim">
        Score: {score} / {i + (answered ? 1 : 0)} this round &middot; word {i + 1} of {pool.length}
      </div>
    </div>
  )
}
