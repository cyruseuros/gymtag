import { store } from 'hybrids'
import type { Model } from 'hybrids'
import { enumerable } from '../lib/localStorage'

interface Tag {
  id: string
  name: string
  categories: string[]
}

const Tag: Model<Tag> = {
  id: true,
  name: '',
  categories: [],
  [store.connect]: enumerable('tag'),
}

export function makeTagName(name: string): string {
  let id = name.toLowerCase()
  id = id.replace(/\s+/g, '-')
  return id.replace(/-+/g, '-')
}

export default Tag
