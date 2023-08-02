import { store } from 'hybrids'
import * as m from '../models'

const defaultTags = {
  push: '🫷',
  press: '🫸',
  pull: '🪢',
  twist: '🥨',

  up: '⬆️',
  down: '⬇️',
  over: '↪️',

  arm: '🦖',
  biceps: '💪',
  triceps: '🙇',
  forearm: '🦍',

  back: '🐢',
  lat: '🪽',
  trap: '🤷',

  leg: '🐓',
  quad: '🦵',
  hamstring: '🐹',
  calf: '🐮',

  shoulder: '🪨',
  front: '👉',
  mid: '🫵',
  rear: '👈',

  chest: '🪘',
  upper: '☝️',
  lower: '👇',

  cable: '🚡',
  barbell: '💈',
  dumbbell: '🔩',
  machine: '⚙️',
  hammer: '🔨',
  smith: '🛝',
  bench: '⛪',
  preacher: '🙏',

  curl: '➰',
  squat: '🍑',
  dead: '💀',
  lift: '🛗',
  raise: '💸',

  underhand: '🫴',
  overhand: '🫳',
  neutral: '🤙',

  warmup: '🔥',
  failure: '😵',

  seated: '🪑',
  incline: '📐',
  decline: '🦥',

  ab: '🌡️',
  oblique: '🔪',
}

// TODO: support skin tones and genders
export async function addTags<T extends Record<string, string>>(
  tags: T,
): Promise<Record<keyof T, m.Tag>> {
  const t = {} as Record<keyof T, m.Tag>

  for (const [key, value] of Object.entries(tags)) {
    t[key as keyof T] = await store.set(m.Tag, {
      name: key,
      emoji: value,
    })
  }

  return t
}

export async function addDefaultWorkouts(): Promise<m.Workout[]> {
  const t = await addTags(defaultTags)

  const workouts: m.Workout[] = [
    await store.set(m.Workout, {
      tags: [t.arm, t.shoulder],
      template: await store.set(m.Session, {
        logs: [
          await store.set(m.Log, {
            exercise: await store.set(m.Exercise, {
              tags: [t.seated, t.shoulder, t.press, t.mid, t.front],
            }),
            sets: [
              await store.set(m.Set, { weight: 30, reps: 8 }),
              await store.set(m.Set, { weight: 30, reps: 8 }),
            ],
          }),
        ],
      }),
    }),
    await store.set(m.Workout, {}),
  ]

  return workouts
}
