import Session from './session'
import Tag from './tag'
import { SetData } from './set'
import { TagData } from './tag'
import type { Model } from 'hybrids'
import { store } from 'hybrids'
import * as m from '../models'

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

// TODO: break out into separate add<Model> functions in different modules
export async function addWorkouts<T extends string>(
  tagIds: TagData<T>,
  workouts: WorkoutData<typeof tagIds>[],
) {
  for (const workout of workouts) {
    await store.set(m.Workout, {
      tags: workout.tags.map(tag => store.get(m.Tag, tagIds[tag])),
      template: await store.set(m.Session, {
        logs: await Promise.all(
          workout.template.map(async log => ({
            tags: log.tags.map(tag => store.get(m.Tag, tagIds[tag])),
            sets: await Promise.all(
              log.sets.map(
                async set =>
                  await store.set(m.Set, {
                    tags: set.tags
                      ? set.tags.map(tag => store.get(m.Tag, tagIds[tag]))
                      : [],
                    weight: set.weight,
                    distance: set.distance,
                    reps: set.reps,
                    time: set.time,
                    angle: set.angle,
                    difficulty: set.difficulty,
                  }),
              ),
            ),
          })),
        ),
      }),
    })
  }
}
