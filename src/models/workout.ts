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
  console.log('before set')
  const s = await store.set(m.Tag, { emoji: 'f', name: 'oo' })
  console.log(s)
  // const set = await store.set(m.Set, {
  //   tags: [],
  //   weight: 0,
  //   distance: 0,
  //   reps: 2,
  //   time: 0,
  //   angle: 0,
  //   difficulty: 0,
  // })
  // console.log(set)

  console.log('after set')
  // const exercise = await store.set(m.Exercise, {})
  // for (const w of workouts) {
  //   const logs = []
  //   for (const l of w.template) {
  //     // const log = await store.set(m.Log, {
  //     //   // tags: l.tags.map(t => store.get(m.Tag, tagIds[t])),
  //     // })
  //     //   const sets = []
  //     //   for (const s of l.sets) {
  //     //     const set = await store.set(m.Set, {
  //     //       angle: s.angle,
  //     //       difficulty: s.difficulty,
  //     //       distance: s.distance,
  //     //       reps: s.reps,
  //     //       time: s.time,
  //     //       weight: s.weight,
  //     //     })
  //     //     if (s.tags) {
  //     //       store.set(set, {
  //     //         tags: s.tags.map(t => store.get(m.Tag, tagIds[t])),
  //     //       })
  //     //     }
  //     //     sets.push(set)
  //     //   }
  //     //   logs.push(log)
  //   }
  //   // const template = await store.set(m.Session, { logs: logs })
  //   // await store.set(m.Workout, {
  //   //   tags: w.tags.map(t => store.get(m.Tag, tagIds[t])),
  //   //   template: template,
  //   // })
  // }
}
