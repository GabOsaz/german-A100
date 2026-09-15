import { A1_CATEGORIES, A1_WORDS } from '../data/a1Words'
import { WordTrainer } from './WordTrainer'

export function A1Words() {
  return (
    <WordTrainer
      title="Goethe A1 Words"
      subtitle="exam topic vocabulary, EN → DE"
      words={A1_WORDS}
      categories={A1_CATEGORIES}
      storageKey="german100:a1-mastered"
    />
  )
}
