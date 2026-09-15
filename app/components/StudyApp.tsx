import { CATEGORIES, WORDS } from '../data/words'
import { WordTrainer } from './WordTrainer'

export function StudyApp() {
  return (
    <WordTrainer
      title="Deutsch: Erste 100 Wörter"
      subtitle="core words, EN → DE"
      words={WORDS}
      categories={CATEGORIES}
      storageKey="german100:mastered"
    />
  )
}
