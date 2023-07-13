import { store } from 'hybrids';
import type { Model } from 'hybrids';

interface Tag {
  id: string
  name: string
  tags: Tag[]
}

const Tag: Model<Tag> = {
  id: true,
  name: '',
  tags: [],
  [store.connect]: {
    offline: true
  }
}

export default Tag

