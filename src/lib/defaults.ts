import { store } from 'hybrids'
import * as m from '../models'

interface Defaults {
  tags: {
    push: m.Tag
    pull: m.Tag

    up: m.Tag
    down: m.Tag
    over: m.Tag

    arm: m.Tag
    biceps: m.Tag
    triceps: m.Tag
    forearm: m.Tag

    back: m.Tag
    trap: m.Tag
    lat: m.Tag

    leg: m.Tag
    quad: m.Tag
    hamstring: m.Tag
    calf: m.Tag

    deltoid: m.Tag
    front: m.Tag
    mid: m.Tag
    rear: m.Tag

    chest: m.Tag
    upper: m.Tag
    lower: m.Tag

    cable: m.Tag
    barbell: m.Tag
    dumbbell: m.Tag
    machine: m.Tag
    hammer: m.Tag
    smith: m.Tag

    curl: m.Tag
    squat: m.Tag
    dead: m.Tag
    lift: m.Tag
    raise: m.Tag

    underhand: m.Tag
    overhand: m.Tag
    neautral: m.Tag
  }
  sets: m.Set[]
  logs: m.Log[]
  exercises: m.Exercise[]
  workouts: m.Workout[]
}

export async function makeDefaults(): Defaults {
  return {
    tags: {
      push: await store.set(m.Tag, { emoji: '🫷', name: 'push' }),
      pull: await store.set(m.Tag, { emoji: '🪢', name: 'pull' }),

      up: await store.set(m.Tag, { emoji: '⬆️', name: 'up' }),
      down: await store.set(m.Tag, { emoji: '⬇️', name: 'down' }),
      over: await store.set(m.Tag, { emoji: '↪️', name: 'over' }),

      arm: await store.set(m.Tag, { emoji: '🦖', name: 'arm' }),
      biceps: await store.set(m.Tag, { emoji: '💪', name: 'biceps' }),
      triceps: await store.set(m.Tag, { emoji: '🙇', name: 'triceps' }),
      forearm: await store.set(m.Tag, { emoji: '🤜', name: 'forearm' }),

      back: await store.set(m.Tag, { emoji: '🔻', name: 'back' }),
      lat: await store.set(m.Tag, { emoji: '🪽', name: 'lat' }),
      trap: await store.set(m.Tag, { emoji: '🤷', name: 'trap' }),

      leg: await store.set(m.Tag, { emoji: '🪼', name: 'leg' }),
      quad: await store.set(m.Tag, { emoji: '🦵', name: 'quad' }),
      hamstring: await store.set(m.Tag, { emoji: '🐹', name: 'hamstring' }),
      calf: await store.set(m.Tag, { emoji: '🐮', name: 'calf' }),

      deltoid: await store.set(m.Tag, { emoji: '🛆', name: 'deltoid' }),
      quad: await store.set(m.Tag, { emoji: '🦵', name: 'quad' }),
      hamstring: await store.set(m.Tag, { emoji: '🐹', name: 'hamstring' }),
      calf: await store.set(m.Tag, { emoji: '🐮', name: 'calf' }),
    },
  }
}
