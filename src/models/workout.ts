import Session from './session'
import Tag, { TagIds, getTags } from './tag'
import type { Model } from 'hybrids'
import { store } from 'hybrids'
import { addLogs, type LogData } from './log'

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
  tags: Array<T>
  template: LogData<T>[]
}

export async function addWorkouts<T extends string | symbol | number>(
  tagIds: TagIds<T>,
  workouts: WorkoutData<T>[],
): Promise<Workout[]> {
  return await Promise.all(
    workouts.map(async workout =>
      store.set(Workout, {
        tags: getTags(tagIds, workout.tags),
        template: await store.set(Session, {
          logs: await addLogs(tagIds, workout.template),
        }),
      }),
    ),
  )
}
