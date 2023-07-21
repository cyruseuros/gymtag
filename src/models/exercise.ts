import Tag from './tag'
import Log from './log'
import { Model } from 'hybrids'

interface Exercise {
  id: string
  tags: Tag[]
  logs: Log[]
}

const Exercise: Model<Exercise> = {
  id: true,
  tags: [Tag],
  logs: [Log],
}

export default Exercise
