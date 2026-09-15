import { createFileRoute } from '@tanstack/react-router'
import { StudyGuide } from '../components/StudyGuide'

export const Route = createFileRoute('/study-guide')({
  component: StudyGuide,
})
