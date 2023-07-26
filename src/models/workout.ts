import Log from './log'
import Tag from './tag'
import Exercise from './exercise'
import type { Model } from 'hybrids'

interface Workout {
  id: string
  tags: Tag[]
  logs: Log[]
  template: Log
  archive: Exercise[]
}

const Workout: Model<Workout> = {
  id: true,
  tags: [Tag],
  logs: [Log],
  template: Log,
  archive: [Exercise],
}

export default Workout
