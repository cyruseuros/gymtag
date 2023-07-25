import Scope from './scope'
import type { Model } from 'hybrids'

// TODO: ensure tag names are unique once storage.connect is set up
interface Tag {
  id: string
  emoji: string
  name: string
  scopes: Set<Scope>
}

const Tag: Model<Tag> = {
  id: true,
  name: '',
  // TODO: validate with https://www.npmjs.com/package/emoji-regex
  emoji: '',
  scopes: new Set(),
}

export function makeTagName(name: string): string {
  let id = name.toLowerCase()
  id = id.replace(/\s+/g, '-')
  return id.replace(/-+/g, '-')
}

export default Tag
