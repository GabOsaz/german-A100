import { createFileRoute } from '@tanstack/react-router'
import { StudyApp } from '../components/StudyApp'

export const Route = createFileRoute('/')({
  component: StudyApp,
})
