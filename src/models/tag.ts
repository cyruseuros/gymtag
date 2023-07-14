import { store } from 'hybrids'
import type { Model } from 'hybrids'

interface Tag {
  id: string
  tags: Tag[]
}

const Tag: Model<Tag> = {
  id: true,
  tags: [],
  [store.connect]: {
    offline: true,
  },
}

export function makeTagId(name: string): string {
  let id = name.toLowerCase()
  id = id.replace(/\s+/g, '-')
  return id.replace(/-+/g, '-')
}

export default Tag
