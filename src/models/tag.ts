import type { Model } from 'hybrids'

export enum Scope {
  Exercise = 'exercise',
  Workout = 'workout',
  Set = 'set',
  Log = 'log',
  Muscle = 'muscle', // does not require model for now
}

// TODO: ensure tag names are unique once storage.connect is set up
interface Tag {
  id: string
  name: string
  scopes: Set<Scope>
}

const Tag: Model<Tag> = {
  id: true,
  name: '',
  scopes: new Set(),
}

export function makeTagName(name: string): string {
  let id = name.toLowerCase()
  id = id.replace(/\s+/g, '-')
  return id.replace(/-+/g, '-')
}

export default Tag
