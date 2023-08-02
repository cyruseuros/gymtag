import Tag from './tag'
import Set from './set'
import Exercise from './exercise'
import Workout from './workout'
import type { Model } from 'hybrids'

interface Log {
  id: string
  exercise: Exercise
  tags: Tag[]
  sets: Set[]
}

const Log: Model<Log> = {
  id: true,
  exercise: Exercise,
  tags: [Tag],
  sets: [Set],
}

export default Log
