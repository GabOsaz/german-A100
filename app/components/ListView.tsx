import type { Word } from '../data/words'
import { speakGerman } from '../lib/speak'

interface Props {
  words: Word[]
  mastered: Set<number>
  onToggleMaster: (n: number) => void
}

export function ListView({ words, mastered, onToggleMaster }: Props) {
  return (
    <div>
      {words.map((w) => (
        <div key={w.n} className="flex items-center gap-2.5 border-b border-line py-2.5">
          <div className="w-6 flex-none text-[11px] text-ink-dim">{w.n}</div>
          <div className="flex-1 text-sm">{w.en}</div>
          <button
            onClick={() => speakGerman(w.de)}
            className="flex-none text-base leading-none"
            aria-label={`Play pronunciation of ${w.de}`}
          >
            🔊
          </button>
          <div className="flex-1">
            <div className="font-display text-[15px] text-gold">{w.de}</div>
            <div className="text-[11px] text-ink-dim">{w.pron}</div>
          </div>
          <button
            onClick={() => onToggleMaster(w.n)}
            className={`flex h-5.5 w-5.5 flex-none items-center justify-center rounded-full border text-xs ${
              mastered.has(w.n) ? 'border-good bg-good text-[#0d1a10]' : 'border-line text-transparent'
            }`}
          >
            ✓
          </button>
        </div>
      ))}
    </div>
  )
}
