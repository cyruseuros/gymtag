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

export async function addWorkouts<T extends string>(
  tagIds: TagData<T>,
  workouts: WorkoutData<typeof tagIds>[],
) {
  console.log('after set')
  for (const w of workouts) {
    const logs = []
    for (const l of w.template) {
      const log = await store.set(m.Log, {
        tags: l.tags.map(t => store.get(m.Tag, tagIds[t])),
      })
      const sets = []
      for (const s of l.sets) {
        const set = await store.set(m.Set, {
          angle: s.angle || 0,
          difficulty: s.difficulty || 0,
          distance: s.distance || 0,
          reps: s.reps || 0,
          time: s.time || 0,
          weight: s.weight || 0,
        })
        if (s.tags) {
          store.set(set, {
            tags: s.tags.map(t => store.get(m.Tag, tagIds[t])),
          })
        }
        sets.push(set)
      }
      logs.push(log)
    }
    const template = await store.set(m.Session, { logs: logs })
    await store.set(m.Workout, {
      tags: w.tags.map(t => store.get(m.Tag, tagIds[t])),
      template: template,
    })
  }
}
