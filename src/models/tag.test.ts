import { expect, it, describe } from 'vitest'
import { makeTagName } from './tag'

describe.concurrent('makeTagId', () => {
  const table = [
    { name: 'empty', in: '', out: '' },
    { name: 'space', in: 'two words', out: 'two-words' },
    { name: 'multi-space', in: 'two  words', out: 'two-words' },
    { name: 'tab', in: 'two\twords', out: 'two-words' },
    { name: 'multi-tab', in: 'two\t\twords', out: 'two-words' },
    { name: 'mixed-space-tab', in: 'two\t words', out: 'two-words' },
    { name: 'space-dash', in: 'two -words', out: 'two-words' },
    { name: 'multi-dash', in: 'two--words', out: 'two-words' },
    { name: 'space-multi-dash', in: 'two --words', out: 'two-words' },
    { name: 'multi-space-multi-dash', in: 'two  --words', out: 'two-words' },
  ]

  for (const row of table) {
    it(row.name, () => {
      expect(makeTagName(row.in)).toEqual(row.out)
    })
  }
})