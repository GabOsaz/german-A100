import { createContext, useCallback, useContext, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { A2_GLOSSARY, type Gloss } from '../data/a2Glossary'
import { useMastered } from '../lib/useMastered'
import { speakGerman } from '../lib/speak'

/** Matches a word, keeping hyphenated compounds (E-Mail) and contractions (geht's) whole. */
const WORD_RE = /\p{L}+(?:['’-]\p{L}+)*/gu

export interface Lookup {
  word: string
  /** English-style pronunciation respelling */
  pron?: string
  meaning?: string
  /** dictionary form, e.g. "anfangen" for "fängt" */
  base?: string
  /** second reading of an ambiguous sentence-initial word */
  alt?: { meaning: string; base: string }
  /** plural / verb forms shown under the meaning */
  grammar?: string
  /** what the speaker button reads; defaults to the word itself */
  speak?: string
  /** what "known" is tracked by, so every form of a word shares one status */
  knownKey: string
}

/**
 * At the start of a sentence capitalisation says nothing about the word class,
 * so "Rauchen" could be the verb or the noun — return both senses there.
 */
export function lookupWord(token: string, sentenceStart = false): Lookup {
  const exact: Gloss | undefined = A2_GLOSSARY[token]
  const lower: Gloss | undefined = A2_GLOSSARY[token.toLowerCase()]
  const ambiguous = sentenceStart && exact && lower && exact[0] !== lower[0]
  const g = ambiguous ? lower : (exact ?? lower)
  const base = g?.[2]
  return {
    word: token,
    pron: g?.[1],
    // glosses sometimes repeat the base form, e.g. "begins (anfangen)" — it's shown separately
    meaning: base ? g?.[0].replace(` (${base})`, '') : g?.[0],
    base,
    alt: ambiguous ? { meaning: exact[0], base: exact[2] ?? token } : undefined,
    knownKey: (base ?? token).toLowerCase(),
  }
}

interface Active {
  lookup: Lookup
  el: HTMLElement
}

interface TapCtx {
  active: Active | null
  open: (lookup: Lookup, el: HTMLElement) => void
  known: Set<string>
  highlight: boolean
}

const Ctx = createContext<TapCtx | null>(null)

function useTap() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('TapText must be used inside <TapProvider>')
  return ctx
}

export function TapProvider({
  storageKey,
  highlight,
  children,
}: {
  storageKey: string
  highlight: boolean
  children: (known: Set<string>, resetKnown: () => void) => ReactNode
}) {
  const [active, setActive] = useState<Active | null>(null)
  const { mastered: known, toggle, reset } = useMastered<string>(storageKey)

  const open = useCallback((lookup: Lookup, el: HTMLElement) => {
    setActive((cur) =>
      cur?.el === el ? null : { lookup, el },
    )
  }, [])
  const close = useCallback(() => setActive(null), [])

  return (
    <Ctx.Provider value={{ active, open, known, highlight }}>
      {children(known, reset)}
      {active && (
        <Popover
          active={active}
          known={known.has(active.lookup.knownKey)}
          onToggleKnown={() => toggle(active.lookup.knownKey)}
          onClose={close}
        />
      )}
    </Ctx.Provider>
  )
}

/** A tappable word or phrase. Tapping opens a popover with its meaning. */
export function TapWord({ lookup }: { lookup: Lookup }) {
  const { active, open, known, highlight } = useTap()
  const ref = useRef<HTMLButtonElement>(null)
  const isActive = ref.current !== null && active?.el === ref.current
  const isNew = highlight && lookup.meaning !== undefined && !known.has(lookup.knownKey)

  return (
    <button
      ref={ref}
      type="button"
      onClick={(e) => open(lookup, e.currentTarget)}
      className={`rounded-[4px] px-[1px] transition-colors ${
        isActive
          ? 'bg-gold text-[#1b1200]'
          : isNew
            ? 'bg-gold/15 hover:bg-gold/30'
            : 'hover:bg-panel2'
      }`}
    >
      {lookup.word}
    </button>
  )
}

/** Renders German text where every word can be tapped for its meaning. */
export function TapText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  let last = 0
  for (const m of text.matchAll(WORD_RE)) {
    const i = m.index ?? 0
    if (i > last) parts.push(text.slice(last, i))
    const sentenceStart = /(^|[.!?:–„]\s*)$/.test(text.slice(0, i))
    parts.push(<TapWord key={i} lookup={lookupWord(m[0], sentenceStart)} />)
    last = i + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return <>{parts}</>
}

const GUTTER = 16
const GAP = 8

function Popover({
  active,
  known,
  onToggleKnown,
  onClose,
}: {
  active: Active
  known: boolean
  onToggleKnown: () => void
  onClose: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState<{ left: number; top: number; caret: number; above: boolean } | null>(
    null,
  )
  const { lookup, el } = active
  const [rect, setRect] = useState(() => el.getBoundingClientRect())

  useLayoutEffect(() => {
    const box = ref.current
    if (!box) return
    const vw = window.innerWidth
    const vh = window.innerHeight
    const w = box.offsetWidth
    const h = box.offsetHeight
    const center = rect.left + rect.width / 2
    const left = Math.min(Math.max(center - w / 2, GUTTER), vw - w - GUTTER)
    const above = rect.bottom + GAP + h > vh - GUTTER && rect.top - GAP - h > GUTTER
    const top = above ? rect.top - GAP - h : rect.bottom + GAP
    setPos({ left, top, caret: Math.min(Math.max(center - left, 14), w - 14), above })
  }, [rect])

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const t = e.target as Node
      if (ref.current?.contains(t) || el.contains(t)) return
      onClose()
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKey)
    // follow the word while the page scrolls; close once it leaves the screen
    function onMove() {
      const r = el.getBoundingClientRect()
      if (r.bottom < 0 || r.top > window.innerHeight) onClose()
      else setRect(r)
    }
    window.addEventListener('scroll', onMove, { capture: true, passive: true })
    window.addEventListener('resize', onMove)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onMove, { capture: true })
      window.removeEventListener('resize', onMove)
    }
  }, [el, onClose])

  const speakText = lookup.speak ?? lookup.word

  return createPortal(
    <div
      ref={ref}
      role="dialog"
      aria-label={`Meaning of ${lookup.word}`}
      style={{
        left: pos?.left ?? 0,
        top: pos?.top ?? 0,
        visibility: pos ? 'visible' : 'hidden',
      }}
      className="fixed z-50 w-[min(18rem,calc(100vw-2rem))] rounded-xl border border-gold-dim bg-panel2 p-3 text-left shadow-2xl shadow-black/50"
    >
      {pos && (
        <span
          style={{ left: pos.caret }}
          className={`absolute h-3 w-3 -translate-x-1/2 rotate-45 border-gold-dim bg-panel2 ${
            pos.above ? '-bottom-1.5 border-b border-r' : '-top-1.5 border-l border-t'
          }`}
        />
      )}
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <div className="leading-tight">
            <span className="font-display text-lg text-gold">{lookup.word}</span>
            {lookup.pron && <span className="ml-1.5 text-xs text-ink-dim">({lookup.pron})</span>}
          </div>
          {lookup.base && lookup.base.toLowerCase() !== lookup.word.toLowerCase() && (
            <div className="text-[11px] text-ink-dim">
              from <span className="text-ink">{lookup.base}</span>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => speakGerman(speakText)}
          className="flex-none text-base leading-none"
          aria-label={`Play pronunciation of ${speakText}`}
        >
          🔊
        </button>
      </div>

      <div className="mt-1.5 text-sm text-ink">
        {lookup.meaning ?? <span className="italic text-ink-dim">No translation yet</span>}
      </div>
      {lookup.alt && (
        <div className="mt-1 text-xs text-ink-dim">
          or <span className="text-ink">{lookup.alt.base}</span>: {lookup.alt.meaning}
        </div>
      )}
      {lookup.grammar && <div className="mt-0.5 text-[11px] text-ink-dim">{lookup.grammar}</div>}

      <button
        type="button"
        onClick={onToggleKnown}
        className={`mt-2.5 w-full rounded-lg border py-1.5 text-xs font-semibold transition-colors ${
          known ? 'border-good bg-good text-[#0d1a10]' : 'border-line text-ink-dim hover:text-ink'
        }`}
      >
        {known ? 'Known ✓' : 'Mark as known'}
      </button>
    </div>,
    document.body,
  )
}
