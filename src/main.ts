import { mount, html, router, define } from 'hybrids'
import Home from './views/home'

interface App {
  stack: HTMLElement[]
}

const App = define<App>({
  tag: 'app-container',
  stack: router(Home),
  content: e => html`
    <template layout="column">
      ${e.stack}
    </template>
  `
})

mount(document.body, App)