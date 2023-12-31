import { html, define, router } from 'hybrids'
import '../components/scope'

interface Home {}

export default define<Home>({
  tag: 'app-home-view',
  [router.connect]: {
    url: '/',
  },
  content: () => html`
    <app-scope
      scopes="${['foo', 'bar', 'baz', 'bad', 'boo', 'bah']}"
    ></app-scope>
  `,
})
