import { appColor } from './theme'
import { expect, describe, it } from 'vitest'

describe.concurrent('appColor', () => {
  const table = [
    'tag1',
    'tag 2',
    'tag-3',
    'tag/4',
    'tag.5',
    'scope1',
    'scope 2',
    'scope-3',
    'scope/4',
    'scope.5',
  ]

  for (const row of table) {
    it(row, () => {
      const res = appColor(row)
      expect(res).toMatch(/^#[a-f0-9]{6}$/i)
      expect(res).toMatch(appColor(row))
    })
  }
})
