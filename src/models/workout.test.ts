import { describe, it, expect, beforeAll, afterEach } from 'vitest'
import Workout, { addWorkouts } from './workout'
import { workouts } from '../assets/data/workouts'
import { tags } from '../assets/data/tags'
import { addTags } from './tag'
import type { TagIds } from './tag'
import { store } from 'hybrids'

// TODO: expand test cases to introspect return types
describe.only.concurrent('addWorkouts', () => {
  const table = [
    // { name: 'adds no workouts', workouts: [] },
    { name: 'adds a workout', workouts: [workouts[0]] },
    // { name: 'adds default workouts', workouts: workouts },
  ]

  let tagIds: TagIds<keyof typeof tags>

  beforeAll(async () => {
    tagIds = await addTags(tags)
  })

  for (const row of table) {
    it(row.name, async () => {
      const workouts = await addWorkouts(tagIds, row.workouts)
      console.log(workouts)
      // make sure tags are there
      for (let i = 0; i < workouts.length; i++) {
        const added = store.get(Workout, workouts[i].id)
        expect(added.tags.map(t => t.name)).toEqual(row.workouts[i].tags)
      }

      // TODO: test other fields
    })
  }

  afterEach(async () => {})
})
