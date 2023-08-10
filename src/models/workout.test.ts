import { describe, it, expect, beforeAll, afterEach } from 'vitest'
import { addWorkouts } from './workout'
import { workouts } from '../assets/data/workouts'
import { tags } from '../assets/data/tags'
import { addTags } from './tag'

describe.concurrent('addWorkouts', () => {
  const table = [
    { name: 'adds no workouts', workouts: [] },
    { name: 'adds a workout', workouts: [workouts[0]] },
    { name: 'adds default workouts', workouts: workouts },
  ]

  let tagIds: Awaited<ReturnType<typeof addTags<typeof tags>>>

  beforeAll(async () => {
    tagIds = await addTags(tags)
  })

  for (const row of table) {
    it(row.name, async () => {
      console.log('test')
      await addWorkouts(tagIds, row.workouts)
    })
  }

  afterEach(async () => {})
})
