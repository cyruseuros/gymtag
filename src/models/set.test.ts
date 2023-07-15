import Set from './set'
import { describe, it, expect } from 'vitest'
import { store } from 'hybrids'

describe.concurrent('Set', () => {
  const table = [
    { name: 'angle just right', v: { angle: 45 } },
    { name: 'angle too low', v: { angle: -1 }, error: true },
    { name: 'angle too hight', v: { angle: 91 }, error: true },
    { name: 'difficulty just right', v: { difficulty: 5 } },
    { name: 'difficulty too low', v: { difficulty: -1 }, error: true },
    { name: 'difficulty too hight', v: { difficulty: 11 }, error: true },
  ]

  for (const row of table) {
    it(row.name, async () => {
      const set = store.get(Set, 'test')

      if (row.error) {
        await expect(store.set(set, row.v)).rejects.toThrow()
      } else {
        await expect(store.set(set, row.v)).resolves
      }
    })
  }
})
