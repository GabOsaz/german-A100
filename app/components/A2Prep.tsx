import { useMemo, useRef, useState } from 'react'
import { A2_GLOSSARY } from '../data/a2Glossary'
import { A2_GROUPS, A2_SECTIONS, type A2Entry, type A2Example, type A2GroupItem } from '../data/a2Words'
import { speakGerman } from '../lib/speak'
import { TapProvider, TapText, TapWord, type Lookup } from './TapText'

type Mode = 'reader' | 'groups'

const ALL_ENTRIES = A2_SECTIONS.flatMap((s) => s.entries)
const PHRASES_PER_PAGE = 10

/** Fill each page with whole entries until it holds PHRASES_PER_PAGE example sentences. */
function paginate(entries: A2Entry[]) {
  const pages: A2Entry[][] = []
  let page: A2Entry[] = []
  let count = 0
  for (const e of entries) {
    const n = Math.max(e.examples.length, 1)
    if (page.length && count + n > PHRASES_PER_PAGE) {
      pages.push(page)
      page = []
      count = 0
    }
    page.push(e)
    count += n
  }
  if (page.length) pages.push(page)
  return pages
}

function Pager({ page, total, onChange }: { page: number; total: number; onChange: (p: number) => void }) {
  if (total <= 1) return null
  const btn = 'rounded-lg border border-line bg-panel px-3 py-1.5 text-xs text-ink disabled:opacity-40'
  return (
    <div className="my-3 flex items-center justify-between gap-2">
      <button type="button" className={btn} disabled={page === 0} onClick={() => onChange(page - 1)}>
        ‹ Prev
      </button>
      <span className="text-xs text-ink-dim">
        Page <b className="text-gold">{page + 1}</b> / {total}
      </span>
      <button
        type="button"
        className={btn}
        disabled={page === total - 1}
        onClick={() => onChange(page + 1)}
      >
        Next ›
      </button>
    </div>
  )
}

function groupLookup(item: A2GroupItem): Lookup {
  const isNumeric = /^[\d.,:/ ]/.test(item.de)
  return {
    word: item.de,
    pron: item.pron,
    meaning: item.en,
    grammar: item.grammar,
    speak: isNumeric && item.grammar ? item.grammar : item.de,
    knownKey: item.de.toLowerCase(),
  }
}

/** Every distinct word (by dictionary form) the learner can mark as known. */
const TOTAL_WORDS = new Set([
  ...Object.entries(A2_GLOSSARY).map(([k, g]) => (g[2] ?? k).toLowerCase()),
  ...A2_GROUPS.flatMap((g) => g.items.map((i) => i.de.toLowerCase())),
]).size

function normalize(s: string) {
  return s.toLowerCase().replace(/ß/g, 'ss').trim()
}

/** Strip "(sich)", "(ab)" etc. and slashes so the voice reads a clean word. */
function speakable(s: string) {
  return s.replace(/\([^)]*\)/g, '').replace(/\s*\/\s*/g, ', ').trim()
}

function Toggle({ on, onClick, children }: { on: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 rounded-lg border px-2 py-1.5 text-xs transition-colors ${
        on ? 'border-gold-dim bg-panel2 text-gold' : 'border-line bg-panel text-ink-dim'
      }`}
    >
      {on ? '● ' : '○ '}
      {children}
    </button>
  )
}

function ExampleLine({ ex, showEn }: { ex: A2Example; showEn: boolean }) {
  const [open, setOpen] = useState(false)
  const visible = showEn || open

  return (
    <div className="rounded-lg bg-panel2 p-2.5">
      <div className="flex items-start gap-2">
        <button
          type="button"
          onClick={() => speakGerman(speakable(ex.de))}
          className="mt-1 flex-none text-base leading-none"
          aria-label={`Play ${ex.de}`}
        >
          🔊
        </button>
        <p className="flex-1 text-[15px] leading-7 text-ink">
          <TapText text={ex.de} />
        </p>
        {!showEn && (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`mt-1 flex-none rounded border px-1.5 py-px text-[10px] ${
              open ? 'border-gold-dim text-gold' : 'border-line text-ink-dim'
            }`}
            aria-label={open ? 'Hide translation' : 'Show translation'}
          >
            EN
          </button>
        )}
      </div>
      {visible && <div className="mt-1 pl-7 text-xs italic text-ink-dim">{ex.en}</div>}
    </div>
  )
}

function EntryCard({ entry, showEn }: { entry: A2Entry; showEn: boolean }) {
  return (
    <div className="mb-2.5 rounded-xl border border-line bg-panel px-3.5 py-3">
      <div className="mb-2 flex items-start gap-2.5">
        <div className="flex-1">
          <div>
            <span className="font-display text-[17px] text-gold">{entry.de}</span>
            <span className="ml-1.5 text-xs text-ink-dim">({entry.pron})</span>
          </div>
          {entry.grammar && <div className="text-[11px] text-ink-dim">{entry.grammar}</div>}
          <div className="text-xs text-ink">{entry.en}</div>
        </div>
        <button
          type="button"
          onClick={() => speakGerman(speakable(entry.de))}
          className="flex-none text-base leading-none"
          aria-label={`Play pronunciation of ${entry.de}`}
        >
          🔊
        </button>
      </div>
      <div className="space-y-2">
        {entry.examples.map((ex, i) => (
          <ExampleLine key={i} ex={ex} showEn={showEn} />
        ))}
      </div>
    </div>
  )
}

function Reader({ showEn }: { showEn: boolean }) {
  const [letter, setLetter] = useState(A2_SECTIONS[0].letter)
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(0)
  const topRef = useRef<HTMLDivElement>(null)

  const q = normalize(query)
  const entries = useMemo(
    () =>
      q
        ? ALL_ENTRIES.filter((e) => normalize(e.de).includes(q) || normalize(e.en).includes(q))
        : (A2_SECTIONS.find((s) => s.letter === letter)?.entries ?? []),
    [q, letter],
  )
  const pages = useMemo(() => paginate(entries), [entries])
  const current = pages[Math.min(page, pages.length - 1)] ?? []
  const phrases = entries.reduce((n, e) => n + e.examples.length, 0)

  function goTo(p: number) {
    setPage(p)
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setPage(0)
        }}
        placeholder="Search German or English…"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck={false}
        className="mb-3 w-full rounded-lg border border-line bg-panel px-3 py-2 text-sm text-ink outline-none focus:border-gold-dim"
      />

      {!q && (
        <div className="mb-4 flex flex-wrap gap-1.5">
          {A2_SECTIONS.map((s) => (
            <button
              key={s.letter}
              type="button"
              onClick={() => {
                setLetter(s.letter)
                setPage(0)
              }}
              className={`h-8 w-8 rounded-full border text-xs transition-colors ${
                letter === s.letter
                  ? 'border-gold bg-gold font-semibold text-[#1b1200]'
                  : 'border-line bg-panel text-ink-dim'
              }`}
            >
              {s.letter}
            </button>
          ))}
        </div>
      )}

      <div ref={topRef} className="scroll-mt-4">
        <p className="text-[11px] text-ink-dim">
          {q
            ? `${entries.length} match${entries.length === 1 ? '' : 'es'}`
            : `${entries.length} words in ${letter}`}{' '}
          · {phrases} phrases
        </p>
        <Pager page={page} total={pages.length} onChange={goTo} />
      </div>

      {current.map((e, i) => (
        <EntryCard key={`${letter}-${page}-${e.de}-${i}`} entry={e} showEn={showEn} />
      ))}

      <Pager page={page} total={pages.length} onChange={goTo} />
    </>
  )
}

function Groups() {
  return (
    <>
      {A2_GROUPS.map((g, i) => (
        <details
          key={g.title}
          open={i === 0}
          className="group mb-3 overflow-hidden rounded-xl border border-line bg-panel"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between px-3.5 py-3">
            <div>
              <div className="font-display text-[15px] text-ink">{g.title}</div>
              <div className="text-[11px] text-ink-dim">
                {g.en} · {g.items.length}
              </div>
            </div>
            <span className="text-ink-dim transition-transform group-open:rotate-180">▾</span>
          </summary>
          <div className="flex flex-wrap gap-1.5 border-t border-line px-3.5 pb-3.5 pt-3 text-sm text-ink">
            {g.items.map((item, j) => (
              <span key={j} className="rounded-lg border border-line bg-panel2 px-1 py-0.5">
                <TapWord lookup={groupLookup(item)} />
              </span>
            ))}
          </div>
        </details>
      ))}
    </>
  )
}

export function A2Prep() {
  const [mode, setMode] = useState<Mode>('reader')
  const [highlight, setHighlight] = useState(true)
  const [showEn, setShowEn] = useState(false)

  return (
    <TapProvider storageKey="german100:a2-known" highlight={highlight}>
      {(known, resetKnown) => (
        <div className="mx-auto max-w-lg px-4 pb-12 pt-4">
          <header className="mb-1">
            <h1 className="font-display text-2xl tracking-tight">Goethe A2 Prep</h1>
          </header>
          <p className="mb-4 text-xs text-ink-dim">
            The full Goethe-Zertifikat A2 word list ({ALL_ENTRIES.length} entries) with its exam
            example sentences. <b className="text-ink">Tap any word</b> to see what it means, hear
            it, and mark it as known. Highlighted words are ones you haven't marked yet. Tap{' '}
            <b className="text-ink">EN</b> to check a sentence translation.
          </p>

          <div className="mb-4 rounded-xl border border-line bg-panel px-3 py-2.5">
            <div className="mb-1.5 flex justify-between text-xs text-ink-dim">
              <span>Known words</span>
              <span>
                <b className="text-gold">{known.size}</b> / {TOTAL_WORDS}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded bg-panel2">
              <div
                className="h-full rounded bg-gradient-to-r from-gold-dim to-gold transition-[width]"
                style={{ width: `${Math.min(100, Math.round((known.size / TOTAL_WORDS) * 100))}%` }}
              />
            </div>
          </div>

          <div className="mb-3 grid grid-cols-2 gap-2">
            {(['reader', 'groups'] as Mode[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className={`rounded-lg border px-2 py-2 text-sm transition-colors ${
                  mode === m
                    ? 'border-gold-dim bg-panel2 font-semibold text-gold'
                    : 'border-line bg-panel text-ink'
                }`}
              >
                {m === 'reader' ? 'Word list A–Z' : 'Word groups'}
              </button>
            ))}
          </div>

          <div className="mb-4 flex gap-2">
            <Toggle on={highlight} onClick={() => setHighlight((h) => !h)}>
              Highlight new words
            </Toggle>
            {mode === 'reader' && (
              <Toggle on={showEn} onClick={() => setShowEn((s) => !s)}>
                Show translations
              </Toggle>
            )}
          </div>

          {mode === 'reader' ? <Reader showEn={showEn} /> : <Groups />}

          <button
            type="button"
            onClick={resetKnown}
            className="mx-auto mt-6 block text-center text-xs text-ink-dim underline"
          >
            Reset known words
          </button>
        </div>
      )}
    </TapProvider>
  )
}
