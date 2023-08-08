import type { Model } from 'hybrids'
import { store } from 'hybrids'

// TODO: ensure tag names are unique once storage.connect is set up
interface Tag {
  id: string
  emoji: string
  name: string
  // scopes will be dynamically computed in components
  // TODO: re-eval whether scops should be static
}

const Tag: Model<Tag> = {
  id: true,
  name: '',
  // TODO: validate with https://www.npmjs.com/package/emoji-regex
  emoji: '',
}

export default Tag

export function makeTagName(name: string): string {
  let id = name.toLowerCase()
  id = id.replace(/\s+/g, '-')
  return id.replace(/-+/g, '-')
}

// TODO: rewrite to use new data types
export async function addTags<T extends Record<string, string | undefined>>(
  tags: T,
): Promise<Record<keyof T, string>> {
  const t = {} as Record<keyof T, string>

  for (const [key, value] of Object.entries(tags)) {
    const tag = await store.set(Tag, {
      name: key,
      emoji: value,
    })

    t[key as keyof typeof t] = tag.id
  }

  return t
}

export type TagData<T extends string> = Record<T, string>
