import { createFileRoute } from '@tanstack/react-router'
import { Verbs } from '../components/Verbs'

export const Route = createFileRoute('/verbs')({
  component: Verbs,
})
