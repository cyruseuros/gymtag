import Log from './log'
import Tag from './tag'
import type { Model } from 'hybrids'

interface Workout {
  id: string
  tags: Tag[]
  logs: Log[]
}

const Workout: Model<Workout> = {
  id: true,
  tags: [Tag],
  logs: [Log],
}
