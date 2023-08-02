import Session from './session'
import Tag from './tag'
import Exercise from './exercise'
import type { Model } from 'hybrids'

interface Workout {
  id: string
  tags: Tag[]
  sessions: Session[]
  template: Session
  archive: Exercise[]
}

const Workout: Model<Workout> = {
  id: true,
  tags: [Tag],
  sessions: [Session],
  template: Session,
  archive: [Exercise],
}

export default Workout
