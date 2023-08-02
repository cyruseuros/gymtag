import Tag from './tag'
import { Model } from 'hybrids'

// NOTE: associated logs are computed
interface Exercise {
  id: string
  tags: Tag[]
}

const Exercise: Model<Exercise> = {
  id: true,
  tags: [Tag],
}

export default Exercise
