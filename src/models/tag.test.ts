import { expect, it, describe } from 'vitest'
import { makeTagName, addTags } from './tag'
import { tags } from '../assets/data/tags'
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

describe.concurrent('addTags', () => {
  const table = [
    {
      name: 'add no tags',
      tags: {},
    },
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
      name: 'add default tags',
      tags: tags,
    },
  ]

  for (const row of table) {
    it(row.name, async () => {
      const tags = await addTags(row.tags)
      for (const [key, value] of Object.entries(row.tags)) {
        const tag = store.get(Tag, tags[key as keyof typeof tags])
        expect(tag.name).toEqual(key)
        expect(tag.emoji).toEqual(value)
      }
    })
  }
})
