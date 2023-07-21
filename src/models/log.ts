import Tag from './tag'
import Set from './set'
import Exercise from './exercise'
import type { Model } from 'hybrids'

interface Log {
  id: string
  exercise: Exercise
  tags: Tag[]
  sets: Set[]
}

// NOTE: Logs are in a 2-way binding with exercises
// and in a 1-way binding with workouts
const Log: Model<Log> = {
  id: true,
  exercise: Exercise,
  tags: [Tag],
  sets: [Set],
}

export default Log
