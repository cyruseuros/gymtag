import { store } from 'hybrids'
import type { Model } from 'hybrids'
import Tag from './tag'

// TODO: handle units in the future
// TODO: timestamps (implications on logs)
// TODO: dropsets/supersets...
interface Set {
  id: string
  tags: Tag[]
  weight: number // kg
  distance: number // m
  reps: number // n
  time: number // s
  angle: number // deg 0-90
  difficulty: number // n 0-10
}

const Set: Model<Set> = {
  id: true,
  tags: [Tag],
  weight: 0,
  distance: 0,
  reps: 0,
  time: 0,
  angle: store.value(
    0,
    v => v >= 0 && v <= 90,
    'Only angles of 0-90 degrees are supported',
  ),
  difficulty: store.value(
    0,
    v => v >= 0 && v <= 10,
    'Only difficulty levels of 0-10 are supported',
  ),
}

export default Set
