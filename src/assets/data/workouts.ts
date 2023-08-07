import type { Tags } from './tags'
import * as m from '../../models'

interface WorkoutSet extends Partial<Omit<m.Set, 'id' | 'tags'>> {
  tags?: Array<keyof Tags>
}

interface Workout {
  tags: Array<keyof Tags>
  template: Array<{
    tags: Array<keyof Tags>
    sets: Array<WorkoutSet>
  }>
}

export const workouts: Workout[] = [
  {
    tags: ['arm', 'shoulder'],
    template: [
      {
        tags: ['seated', 'shoulder', 'press', 'mid', 'front'],
        sets: [
          { tags: ['warmup'], weight: 10, reps: 5 },
          { weight: 30, reps: 8 },
          { weight: 30, reps: 8 },
        ],
      },

      {
        tags: ['seated', 'dumbbell', 'shoulder', 'raise', 'mid'],
        sets: [
          { weight: 10, reps: 12 },
          { weight: 10, reps: 12 },
        ],
      },

      {
        tags: ['barbell', 'biceps', 'curl', 'neutral'],
        sets: [
          { weight: 42.5, reps: 10 },
          { weight: 42.5, reps: 9 },
        ],
      },

      {
        tags: ['dumbbell', 'cross', 'hammer', 'curl', 'biceps'],
        sets: [
          { weight: 20, reps: 8 },
          { weight: 17.5, reps: 12 },
        ],
      },

      {
        tags: ['close', 'triceps', 'bench', 'press'],
        sets: [
          { weight: 85, reps: 10 },
          { weight: 85, reps: 8 },
        ],
      },

      {
        tags: ['ez', 'skull', 'crush', 'triceps', 'neutral'],
        sets: [
          { weight: 45, reps: 11 },
          { weight: 45, reps: 10 },
        ],
      },
    ],
  },

  {
    tags: ['chest', 'back'],
    template: [
      {
        tags: ['wide', 'chest', 'dip'],
        sets: [
          { tags: ['warmup'], weight: 0, reps: 5 },
          { weight: 60, reps: 8 },
          { weight: 60, reps: 8 },
        ],
      },

      {
        tags: ['machine', 'lower', 'chest', 'fly'],
        sets: [
          { weight: 130, reps: 12 },
          { weight: 130, reps: 9 },
        ],
      },

      {
        tags: ['wide', 'pull', 'up', 'lat'],
        sets: [
          { weight: 20, reps: 8 },
          { weight: 20, reps: 8 },
        ],
      },

      {
        tags: ['close', 'underhand', 'pull', 'up', 'lat', 'biceps'],
        sets: [
          { weight: 20, reps: 8 },
          { weight: 20, reps: 8 },
        ],
      },
    ],
  },

  {
    tags: ['leg', 'ab'],
    template: [
      {
        tags: ['front', 'lever', 'ab'],
        sets: [
          { tags: ['progression'], time: 20, reps: 3 },
          { tags: ['progression'], time: 20, reps: 3 },
        ],
      },

      {
        tags: ['rear', 'lever', 'ab'],
        sets: [
          { tags: ['progression'], time: 10, reps: 3 },
          { tags: ['progression'], time: 10, reps: 3 },
        ],
      },

      {
        tags: ['machine', 'ab', 'crunch'],
        sets: [
          { weight: 80, reps: 12 },
          { weight: 80, reps: 12 },
        ],
      },

      {
        tags: ['box', 'jump', 'leg'],
        sets: [
          { distance: 90, reps: 8 },
          { distance: 90, reps: 8 },
        ],
      },

      {
        tags: ['squat', 'leg'],
        sets: [
          { weight: 70, reps: 12 },
          { weight: 70, reps: 12 },
        ],
      },
    ],
  },
]
