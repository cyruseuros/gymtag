import Session from './session'
import Tag from './tag'
import { SetData } from './set'
import { TagData } from './tag'
import type { Model } from 'hybrids'

interface Workout {
  id: string
  tags: Tag[]
  sessions: Session[]
  template: Session
}

const Workout: Model<Workout> = {
  id: true,
  tags: [Tag],
  sessions: [Session],
  template: Session,
}

export default Workout

export interface WorkoutData<T> {
  tags: Array<keyof T>
  template: Array<{
    tags: Array<keyof T>
    sets: Array<SetData<T>>
  }>
}

export function addWorkouts<T extends string>(
  tagIds: TagData<T>,
  workouts: WorkoutData<typeof tagIds>,
) {
  // TODO: implement
}

addWorkouts({ foo: 'bar' }, { template: [], tags: ['foo'] })
