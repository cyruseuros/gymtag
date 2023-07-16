import { store } from 'hybrids'
import type { Model } from 'hybrids'
import { enumerable } from '../lib/localStorage'

export enum Scope {
  Exercise = 'exercise',
  Set = 'set',
  Muscle = 'muscle',
}

interface Tag {
  id: string
  name: string
  scopes: Set<Scope>
}

const Tag: Model<Tag> = {
  id: true,
  name: '',
  scopes: new Set(),
  [store.connect]: enumerable('tag'),
}

export function makeTagName(name: string): string {
  let id = name.toLowerCase()
  id = id.replace(/\s+/g, '-')
  return id.replace(/-+/g, '-')
}

export default Tag
