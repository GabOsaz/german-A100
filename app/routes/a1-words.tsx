import { createFileRoute } from '@tanstack/react-router'
import { A1Words } from '../components/A1Words'

export const Route = createFileRoute('/a1-words')({
  component: A1Words,
})
