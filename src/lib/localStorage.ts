import type { Storage } from 'hybrids'

function makeKey(key: string, id?: string): string {
  const path = ['app', key]

  if (id) {
    path.push(id)
  }

  return path.join('/')
}

// TODO: test functions directly
export function enumerable<M>(key: string): Storage<M> {
  return {
    get: (id) =>
      JSON.parse(localStorage.getItem(makeKey(key, id as string)) || '{}'),
    set: (id, data) => {
      localStorage.setItem(makeKey(key, id as string), JSON.stringify(data))
      return data
    },
  }
}

export function singleton<M>(key: string): Storage<M> {
  return {
    get: () => JSON.parse(localStorage.getItem(makeKey(key)) || '{}'),
    set: (_, data) => {
      localStorage.setItem(makeKey(key), JSON.stringify(data))
      return data
    },
  }
}
