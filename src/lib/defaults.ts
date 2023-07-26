import { store } from 'hybrids'
import * as models from '../models'
import scope from '../components/scope'

interface Defaults {
  tags: {
    push: models.Tag
    pull: models.Tag

    up: models.Tag
    down: models.Tag
    over: models.Tag

    arm: models.Tag
    biceps: models.Tag
    triceps: models.Tag

    back: models.Tag
    trap: models.Tag
    lat: models.Tag

    leg: models.Tag
    quad: models.Tag
    hamstring: models.Tag

    deltoid: models.Tag
    front: models.Tag
    mid: models.Tag
    rear: models.Tag

    cable: models.Tag
    barbell: models.Tag
    dumbbell: models.Tag
    machine: models.Tag
    hammer: models.Tag
    smith: models.Tag

    curl: models.Tag
    squat: models.Tag
    dead: models.Tag
    lift: models.Tag
    raise: models.Tag

    underhand: models.Tag
    overhand: models.Tag
    neautral: models.Tag
  }
  sets: models.Set[]
  logs: models.Log[]
  exercises: {
    pullUp: models.Exercise
    pullDown: models.Exercise
    barbellSquat: models.Exercise
    dumbbellSquat: models.Exercise
    dummbellCurl: models.Exercise
    hammerCurl: models.Exercise
    deadlift: models.Exercise
    shoulderPress: models.Exercise
  }
  workouts: models.Workout[]
}

export async function makeDefaults(): Defaults {
  return {
    tags: {
      push: await store.set(models.Tag, {
        emoji: '🫷',
        name: 'push',
        scopes: new Set([models.Scope.Exercise, models.Scope.Workout]),
      }),
    },
  }
}
