import { store } from 'hybrids'
import * as m from '../models'

const t = {
  push: '🫷',
  press: '🫸',
  pull: '🪢',
  twist: '🥨',
  crush: '🥰',
  dip: '💧',
  fly: '🕊️',
  crunch: '🍟',
  jump: '🐸',

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
  ez: '🌴',
  dumbbell: '🔩',
  machine: '⚙️',
  hammer: '🔨',
  smith: '🛝',
  bench: '⛪',
  box: '📦',
  preacher: '🙏',

  curl: '➰',
  squat: '🍑',
  dead: '🪦',
  skull: '💀',
  lift: '🛗',
  raise: '💸',
  cross: '❌',
  lever: '🎰',
  progression: '🚧',

  underhand: '🫴',
  overhand: '🫳',
  neutral: '🤙',
  close: '🤏',
  wide: '👀',

  warmup: '🔥',
  failure: '😵',

  seated: '🪑',
  incline: '📐',
  decline: '🦥',

  ab: '🌡️',
  oblique: '🔪',
  neck: '🧣',
}

// assumes emojis are unique in t
const w = [
  {
    tags: [t.arm, t.shoulder],
    template: [
      {
        tags: [t.seated, t.shoulder, t.press, t.mid, t.front],
        sets: [
          { tags: [t.warmup], weight: 10, reps: 5 },
          { weight: 30, reps: 8 },
          { weight: 30, reps: 8 },
        ],
      },

      {
        tags: [t.seated, t.dumbbell, t.shoulder, t.raise, t.mid],
        sets: [
          { weight: 10, reps: 12 },
          { weight: 10, reps: 12 },
        ],
      },

      {
        tags: [t.barbell, t.biceps, t.curl, t.neutral],
        sets: [
          { weight: 42.5, reps: 10 },
          { weight: 42.5, reps: 9 },
        ],
      },

      {
        tags: [t.dumbbell, t.cross, t.hammer, t.curl, t.biceps],
        sets: [
          { weight: 20, reps: 8 },
          { weight: 17.5, reps: 12 },
        ],
      },

      {
        tags: [t.close, t.triceps, t.bench, t.press],
        sets: [
          { weight: 85, reps: 10 },
          { weight: 85, reps: 8 },
        ],
      },

      {
        tags: [t.ez, t.skull, t.crush, t.triceps, t.neutral],
        sets: [
          { weight: 45, reps: 11 },
          { weight: 45, reps: 10 },
        ],
      },
    ],
  },

  {
    tags: [t.chest, t.back],
    template: [
      {
        tags: [t.wide, t.chest, t.dip],
        sets: [
          { tags: [t.warmup], weight: 0, reps: 5 },
          { weight: 60, reps: 8 },
          { weight: 60, reps: 8 },
        ],
      },

      {
        tags: [t.machine, t.lower, t.chest, t.fly],
        sets: [
          { weight: 130, reps: 12 },
          { weight: 130, reps: 9 },
        ],
      },

      {
        tags: [t.wide, t.pull, t.up, t.lat],
        sets: [
          { weight: 20, reps: 8 },
          { weight: 20, reps: 8 },
        ],
      },

      {
        tags: [t.close, t.underhand, t.pull, t.up, t.lat, t.biceps],
        sets: [
          { weight: 20, reps: 8 },
          { weight: 20, reps: 8 },
        ],
      },
    ],
  },

  {
    tags: [t.leg, t.ab],
    template: [
      {
        tags: [t.front, t.lever, t.ab],
        sets: [
          { tags: [t.progression], time: 20, reps: 3 },
          { tags: [t.progression], time: 20, reps: 3 },
        ],
      },

      {
        tags: [t.rear, t.lever, t.ab],
        sets: [
          { tags: [t.progression], time: 10, reps: 3 },
          { tags: [t.progression], time: 10, reps: 3 },
        ],
      },

      {
        tags: [t.machine, t.ab, t.crunch],
        sets: [
          { weight: 80, reps: 12 },
          { weight: 80, reps: 12 },
        ],
      },

      {
        tags: [t.box, t.jump, t.leg],
        sets: [
          { distance: 90, reps: 8 },
          { distance: 90, reps: 8 },
        ],
      },

      {
        tags: [t.squat, t.leg],
        sets: [
          { weight: 70, reps: 12 },
          { weight: 70, reps: 12 },
        ],
      },
    ],
  },
]

type DefaultTags = Record<keyof typeof t, m.Tag>

// TODO: support skin tones and genders
export async function addTags<T extends Record<string, string>>(
  tags: T,
): Promise<DefaultTags> {
  const t = {} as DefaultTags

  for (const [key, value] of Object.entries(tags)) {
    t[key as keyof DefaultTags] = await store.set(m.Tag, {
      name: key,
      emoji: value,
    })
  }

  return t
}
