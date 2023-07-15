import Set from './set'
import { describe, it, expect } from 'vitest'
import { store } from 'hybrids'

describe.concurrent('Set', () => {
  const table: { name: string; v: Partial<Set>; error?: boolean }[] = [
    { name: 'angle just right', v: { angle: 45 } },
    { name: 'angle too low', v: { angle: -1 }, error: true },
    { name: 'angle too hight', v: { angle: 91 }, error: true },
    { name: 'difficulty just right', v: { difficulty: 5 } },
    { name: 'difficulty too low', v: { difficulty: -1 }, error: true },
    { name: 'difficulty too hight', v: { difficulty: 10 }, error: true },
  ]

  for (const row of table) {
    it(row.name, async () => {
      if (row.error) {
        expect(await store.set(store.get(Set, 'test'), row.v)).to.throw
      } else {
        expect(await store.set(store.get(Set, 'test'), row.v)).to.not.throw
      }
    })
  }
})
