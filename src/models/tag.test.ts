import { expect, it, describe } from 'vitest'
import { makeTagName, addTags } from './tag'
import Tag from './tag'
import { store } from 'hybrids'

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

describe.concurrent.only('addTags', () => {
  const table = [
    {
      name: 'add single tag',
      tags: {
        push: '🫷',
      },
    },
    {
      name: 'add multiple tags',
      tags: {
        pull: '🪢',
        twist: '🥨',
      },
    },
    {
      name: 'add no tags',
      tags: {},
    },
  ]

  for (const row of table) {
    it(row.name, async () => {
      await addTags(row.tags)
      console.log(store.get([Tag]))
      store.set([Tag], null)
    })
  }
})
