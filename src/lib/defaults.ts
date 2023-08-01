import { store } from 'hybrids'
import * as m from '../models'

interface Tags {
  push: m.Tag
  press: m.Tag
  pull: m.Tag
  twist: m.Tag

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

  shoulder: m.Tag
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
  bench: m.Tag
  preacher: m.Tag

  curl: m.Tag
  squat: m.Tag
  dead: m.Tag
  lift: m.Tag
  raise: m.Tag

  underhand: m.Tag
  overhand: m.Tag
  neutral: m.Tag

  warmup: m.Tag
  failure: m.Tag

  seated: m.Tag
  incline: m.Tag
  decline: m.Tag

  ab: m.Tag
  oblique: m.Tag
}

// TODO: support skin tones and genders
export async function addDefaultTags(): Promise<Tags> {
  return {
    push: await store.set(m.Tag, { emoji: '🫷', name: 'push' }),
    press: await store.set(m.Tag, { emoji: '🫸', name: 'press' }),
    pull: await store.set(m.Tag, { emoji: '🪢', name: 'pull' }),
    twist: await store.set(m.Tag, { emoji: '🥨', name: 'twist' }),

    up: await store.set(m.Tag, { emoji: '⬆️', name: 'up' }),
    down: await store.set(m.Tag, { emoji: '⬇️', name: 'down' }),
    over: await store.set(m.Tag, { emoji: '↪️', name: 'over' }),

    arm: await store.set(m.Tag, { emoji: '🦖', name: 'arm' }),
    biceps: await store.set(m.Tag, { emoji: '💪', name: 'biceps' }),
    triceps: await store.set(m.Tag, { emoji: '🙇', name: 'triceps' }),
    forearm: await store.set(m.Tag, { emoji: '🦍', name: 'forearm' }),

    back: await store.set(m.Tag, { emoji: '🐢', name: 'back' }),
    lat: await store.set(m.Tag, { emoji: '🪽', name: 'lat' }),
    trap: await store.set(m.Tag, { emoji: '🤷', name: 'trap' }),

    leg: await store.set(m.Tag, { emoji: '🐓', name: 'leg' }),
    quad: await store.set(m.Tag, { emoji: '🦵', name: 'quad' }),
    hamstring: await store.set(m.Tag, { emoji: '🐹', name: 'hamstring' }),
    calf: await store.set(m.Tag, { emoji: '🐮', name: 'calf' }),

    shoulder: await store.set(m.Tag, { emoji: '🪨', name: 'shoulder' }),
    front: await store.set(m.Tag, { emoji: '👉', name: 'front' }),
    mid: await store.set(m.Tag, { emoji: '🫵', name: 'mid' }),
    rear: await store.set(m.Tag, { emoji: '👈', name: 'rear' }),

    chest: await store.set(m.Tag, { emoji: '🪘', name: 'chest' }),
    upper: await store.set(m.Tag, { emoji: '☝️', name: 'upper' }),
    lower: await store.set(m.Tag, { emoji: '👇', name: 'lower' }),

    cable: await store.set(m.Tag, { emoji: '🚡', name: 'cable' }),
    barbell: await store.set(m.Tag, { emoji: '💈', name: 'barbell' }),
    dumbbell: await store.set(m.Tag, { emoji: '🔩', name: 'dumbbell' }),
    machine: await store.set(m.Tag, { emoji: '⚙️', name: 'machine' }),
    hammer: await store.set(m.Tag, { emoji: '🔨', name: 'hammer' }),
    smith: await store.set(m.Tag, { emoji: '🛝', name: 'smith' }),
    bench: await store.set(m.Tag, { emoji: '⛪', name: 'bench' }),
    preacher: await store.set(m.Tag, { emoji: '🙏', name: 'preacher' }),

    curl: await store.set(m.Tag, { emoji: '➰', name: 'curl' }),
    squat: await store.set(m.Tag, { emoji: '🍑', name: 'squat' }),
    dead: await store.set(m.Tag, { emoji: '💀', name: 'dead' }),
    lift: await store.set(m.Tag, { emoji: '🛗', name: 'lift' }),
    raise: await store.set(m.Tag, { emoji: '💸', name: 'raise' }),

    underhand: await store.set(m.Tag, { emoji: '🫴', name: 'underhand' }),
    overhand: await store.set(m.Tag, { emoji: '🫳', name: 'overhand' }),
    neutral: await store.set(m.Tag, { emoji: '🤙', name: 'neutral' }),

    warmup: await store.set(m.Tag, { emoji: '🔥', name: 'warmup' }),
    failure: await store.set(m.Tag, { emoji: '😵', name: 'failure' }),

    seated: await store.set(m.Tag, { emoji: '🪑', name: 'seated' }),
    incline: await store.set(m.Tag, { emoji: '📐', name: 'incline' }),
    decline: await store.set(m.Tag, { emoji: '🦥', name: 'decline' }),

    ab: await store.set(m.Tag, { emoji: '🌡️', name: 'ab' }),
    oblique: await store.set(m.Tag, { emoji: '🔪', name: 'oblique' }),
  }
}

export async function addDefaultWorkouts(): Promise<m.Workout[]> {
  const tags = await addDefaultTags()

  const workouts: m.Workout[] = [
    await store.set(m.Workout, {
      tags: [tags.arm, tags.shoulder],
      template: [
        await store.set(m.Log, {
          exercise: await store.set(m.Exercise, {
            tags: [
              tags.seated,
              tags.mid,
              tags.front,
              tags.shoulder,
              tags.press,
            ],
          }),
        }),
      ],
    }),
    await store.set(m.Workout, {}),
  ]

  return workouts
}
