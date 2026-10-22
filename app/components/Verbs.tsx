import { useEffect, useMemo, useRef, useState } from 'react'
import { PERSONS, VERB_TYPES, VERBS, type Verb, type VerbType } from '../data/verbs'
import { speakGerman } from '../lib/speak'

type Mode = 'tables' | 'drill'

const PRONOUNS = ['ich', 'du', 'er', 'wir', 'ihr', 'sie'] as const
const PRONOUNS_EN = ['I', 'you', 'he', 'we', 'you all', 'they'] as const

const TYPE_BADGE: Record<VerbType, string> = {
  regular: 'border-line text-ink-dim',
  irregular: 'border-gold-dim text-gold',
  modal: 'border-good text-good',
}

function normalize(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/ß/g, 'ss')
    .replace(/ae/g, 'ä')
    .replace(/oe/g, 'ö')
    .replace(/ue/g, 'ü')
}

function VerbCard({ verb }: { verb: Verb }) {
  return (
    <details className="group mb-2.5 overflow-hidden rounded-xl border border-line bg-panel">
      <summary className="flex cursor-pointer list-none items-center gap-2.5 px-3.5 py-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-display text-[17px] text-gold">{verb.inf}</span>
            <span
              className={`rounded-full border px-1.5 py-px text-[10px] capitalize ${TYPE_BADGE[verb.type]}`}
            >
              {verb.type}
            </span>
            {verb.extra && (
              <span className="rounded-full border border-line px-1.5 py-px text-[10px] text-ink-dim">
                new
              </span>
            )}
          </div>
          <div className="text-[11px] text-ink-dim">
            {verb.en} · {verb.pron}
          </div>
        </div>
        <span className="text-ink-dim transition-transform group-open:rotate-180">▾</span>
      </summary>

      <div className="space-y-3 border-t border-line px-3.5 pb-3.5 pt-3">
        <div className="grid grid-cols-2 gap-x-4">
          {verb.forms.map((form, i) => (
            <button
              key={i}
              onClick={() => speakGerman(`${PRONOUNS[i]} ${form}`)}
              className="flex items-baseline justify-between border-b border-line py-1.5 text-left text-sm"
              aria-label={`Play ${PRONOUNS[i]} ${form}`}
            >
              <span className="text-xs text-ink-dim">{PERSONS[i]}</span>
              <span className="font-semibold text-ink">{form}</span>
            </button>
          ))}
        </div>

        {verb.note && <p className="text-xs text-ink-dim">{verb.note}</p>}

        <div className="space-y-2">
          {verb.examples.map((ex) => (
            <div key={ex.de} className="flex items-start gap-2 rounded-lg bg-panel2 p-2.5">
              <button
                onClick={() => speakGerman(ex.de)}
                className="flex-none text-base leading-none"
                aria-label={`Play ${ex.de}`}
              >
                🔊
              </button>
              <div>
                <div className="text-sm text-ink">{ex.de}</div>
                <div className="text-xs italic text-ink-dim">{ex.en}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </details>
  )
}

function randomPrompt(verbs: Verb[]) {
  return {
    verb: verbs[Math.floor(Math.random() * verbs.length)],
    person: Math.floor(Math.random() * PERSONS.length),
  }
}

function Drill({ verbs }: { verbs: Verb[] }) {
  const [prompt, setPrompt] = useState(() => randomPrompt(verbs))
  const [value, setValue] = useState('')
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
  const [score, setScore] = useState({ right: 0, total: 0 })
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setPrompt(randomPrompt(verbs))
    setAnswered(false)
    setValue('')
    setScore({ right: 0, total: 0 })
  }, [verbs])

  useEffect(() => {
    inputRef.current?.focus()
  }, [prompt])

  const { verb, person } = prompt
  const answer = verb.forms[person]

  function check() {
    if (answered) return
    const ok = normalize(value) === normalize(answer)
    setCorrect(ok)
    setAnswered(true)
    setScore((s) => ({ right: s.right + (ok ? 1 : 0), total: s.total + 1 }))
    speakGerman(`${PRONOUNS[person]} ${answer}`)
  }

  function next() {
    setPrompt(randomPrompt(verbs))
    setAnswered(false)
    setValue('')
  }

  return (
    <div className="rounded-xl border border-line bg-panel p-4 text-center">
      <div className="mb-1.5 text-xs text-ink-dim">Conjugate...</div>
      <div className="mb-0.5 font-display text-2xl text-gold">{verb.inf}</div>
      <div className="mb-3.5 text-xs text-ink-dim">{verb.en}</div>

      <div className="mb-2.5 flex items-center gap-2">
        <span className="w-24 flex-none text-right text-sm font-semibold">{PERSONS[person]}</span>
        <input
          ref={inputRef}
          value={value}
          disabled={answered}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && (answered ? next() : check())}
          placeholder="type the verb form"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          className="w-full rounded-lg border border-line bg-panel2 px-3 py-2.5 text-sm text-ink outline-none focus:border-gold-dim"
        />
      </div>

      <div className="min-h-[18px] text-sm">
        {answered &&
          (correct ? (
            <span className="text-good">Richtig! ✓</span>
          ) : (
            <span className="text-bad">
              Not quite — it's <b>{PRONOUNS[person]} {answer}</b>
            </span>
          ))}
      </div>

      {answered && (
        <p className="mt-1.5 text-xs text-ink-dim">
          e.g. <span className="text-ink">{verb.examples[0].de}</span>
          <br />
          <span className="italic">{verb.examples[0].en}</span>
        </p>
      )}

      <div className="mt-2.5 flex gap-2">
        {answered ? (
          <button
            onClick={next}
            className="flex-1 rounded-lg border border-line bg-panel2 py-2.5 text-sm font-semibold text-ink"
          >
            Next →
          </button>
        ) : (
          <button onClick={check} className="flex-1 rounded-lg bg-gold py-2.5 text-sm font-semibold text-[#1b1200]">
            Check
          </button>
        )}
      </div>

      <div className="mt-3.5 text-xs text-ink-dim">
        Score: {score.right} / {score.total} · no umlaut key? type ae / oe / ue
      </div>
    </div>
  )
}

export function Verbs() {
  const [type, setType] = useState<VerbType | 'all'>('all')
  const [mode, setMode] = useState<Mode>('tables')

  const verbs = useMemo(
    () => (type === 'all' ? VERBS : VERBS.filter((v) => v.type === type)),
    [type],
  )

  return (
    <div className="mx-auto max-w-lg px-4 pb-12 pt-4">
      <header className="mb-1">
        <h1 className="font-display text-2xl tracking-tight">A1 Verbs</h1>
      </header>
      <p className="mb-4 text-xs text-ink-dim">
        Present-tense conjugation for the verbs in your word lists, with example sentences built
        from the Practice and A1 vocabulary. Verbs marked <b className="text-ink">new</b> aren't in
        either list yet but are essential at A1. Tap any form or sentence to hear it.
      </p>

      <div className="mb-4 rounded-xl border border-line bg-panel p-3 text-xs">
        <p className="mb-1.5 font-semibold text-gold">The regular pattern</p>
        <p className="mb-2 text-ink-dim">
          Drop <b className="text-ink">-en</b> from the infinitive, then add:
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
          {['-e', '-st', '-t', '-en', '-t', '-en'].map((ending, i) => (
            <div key={i} className="flex justify-between">
              <span className="text-ink-dim">
                {PRONOUNS[i]} <span className="text-[10px] italic">({PRONOUNS_EN[i]})</span>
              </span>
              <span className="font-semibold text-ink">{ending}</span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-ink-dim">
          Irregular verbs change their stem only in <b className="text-ink">du</b> and{' '}
          <b className="text-ink">er/sie/es</b>. Modals have no ending in{' '}
          <b className="text-ink">ich</b> and <b className="text-ink">er/sie/es</b> and push the
          second verb to the end.
        </p>
      </div>

      <div className="mb-3 grid grid-cols-2 gap-2">
        {(['tables', 'drill'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`rounded-lg border px-2 py-2 text-sm transition-colors ${
              mode === m
                ? 'border-gold-dim bg-panel2 font-semibold text-gold'
                : 'border-line bg-panel text-ink'
            }`}
          >
            {m === 'tables' ? 'Tables' : 'Drill'}
          </button>
        ))}
      </div>

      <div className="mb-4 flex gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none]">
        {VERB_TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => setType(t.id)}
            className={`flex-none whitespace-nowrap rounded-full border px-3 py-1 text-xs transition-colors ${
              type === t.id
                ? 'border-gold bg-gold font-semibold text-[#1b1200]'
                : 'border-line bg-panel text-ink-dim'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {mode === 'tables' ? (
        verbs.map((v) => <VerbCard key={v.inf} verb={v} />)
      ) : (
        <Drill verbs={verbs} />
      )}
    </div>
  )
}
