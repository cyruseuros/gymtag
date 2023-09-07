import type { Model } from 'hybrids'
import { store } from 'hybrids'

// TODO: ensure tag names are unique once storage.connect is set up
interface Tag {
  id: string
  emoji: string
  name: string
  // scopes will be dynamically computed in components
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

export type TagData<T extends string | symbol | number> = Partial<
  Record<T, string>
>
export type TagIds<T extends string | symbol | number> = Partial<
  Record<T, string>
>

export async function addTags<T extends string | symbol | number>(
  tags: TagData<T>,
): Promise<TagIds<T>> {
  const t = {} as TagIds<T>

  for (const [key, value] of Object.entries(tags)) {
    const tag = await store.set(Tag, {
      name: key,
      // for some reson the compiler is not smart enough to infer that value is a string here
      emoji: value as string,
    })

    t[key as keyof typeof t] = tag.id
  }

  return t
}

export function getTags<T extends string | symbol | number>(
  tagIds: TagIds<T>,
  tags?: T[],
): Tag[] {
  return tags ? tags.map(tag => store.get(Tag, tagIds[tag])) : []
}
