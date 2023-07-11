import { html, define, router } from 'hybrids'

interface Home {
}

export default define<Home>({
  tag: 'app-home-view',
  [router.connect]: {
    url: '/'
  },
  content: () => html`
    <span>home page</span>
  `
})