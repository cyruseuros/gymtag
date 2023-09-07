import { store, define, html } from 'hybrids'
import T from '../models/tag'
import './scope'

interface Tag {
  t?: T
}

export default define<Tag>({
  tag: 'app-tag',
  t: store(T),
  render: e => html`
    <template layout>
      <a role="button" layout="row gap">
        <span>#${e.t?.emoji}</span>
        <span>${e.t?.name}</span>
        <app-scope scopes="${['foo', 'bar']}"></app-scope>
      </a>
    </template>
  `,
})
