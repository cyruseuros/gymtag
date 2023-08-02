import Tag from './tag'
import Log from './log'
import type { Model } from 'hybrids'

interface Session {
  id: string
  tags: Tag[]
  logs: Log[]
}

const Session: Model<Session> = {
  id: true,
  tags: [Tag],
  logs: [Log],
}

export default Session
