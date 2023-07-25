import Set from './set'
import { beforeEach, describe, it, expect } from 'vitest'
import { store } from 'hybrids'

// TODO: figure out how to make sure it returns different colors
// even though colisions are allowed
describe.concurrent('Set', () => {
  const table = [
    { name: 'angle just right', v: { angle: 45 } },
    { name: 'angle too low', v: { angle: -1 }, error: 'angle' },
    { name: 'angle too hight', v: { angle: 91 }, error: 'angle' },
    { name: 'difficulty just right', v: { difficulty: 5 } },
    { name: 'difficulty too low', v: { difficulty: -1 }, error: 'difficulty' },
    {
      name: 'difficulty too hight',
      v: { difficulty: 11 },
      error: 'difficulty',
    },
  ]

  let set: Set
  beforeEach(async () => {
    set = await store.set(Set, {
      tags: [],
      weight: 0,
      distance: 0,
      reps: 0,
      time: 0,
      angle: 0,
      difficulty: 0,
    })
  })

  for (const row of table) {
    it(row.name, async () => {
      if (row.error) {
        await expect(store.set(set, row.v)).rejects.toThrowError(row.error)
      } else {
        await expect(store.set(set, row.v)).resolves.not.toThrow()
      }
    })
  }
})
