import Tag, { getTags, type TagIds } from './tag'
import Set, { addSets, type SetData } from './set'
import Exercise from './exercise'
import { store, type Model } from 'hybrids'

interface Log {
  id: string
  exercise: Exercise
  tags: Tag[]
  sets: Set[]
}

const Log: Model<Log> = {
  id: true,
  exercise: Exercise,
  tags: [Tag],
  sets: [Set],
}

export default Log

export interface LogData<T> {
  tags: Array<T>
  sets: Array<SetData<T>>
}

export async function addLogs<T extends string | symbol | number>(
  tagIds: TagIds<T>,
  logs: LogData<T>[],
): Promise<Log[]> {
  if (logs.length === 0) {
    return []
  }

  return await Promise.all(
    logs.map(async log =>
      store.set(Log, {
        tags: getTags(tagIds, log.tags),
        sets: await addSets(tagIds, log.sets),
      }),
    ),
  )
}
