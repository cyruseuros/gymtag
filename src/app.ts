import { mount, html, router, define } from 'hybrids'
import { styles } from './lib/theme'
import Home from './views/home'

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept()
}

interface App {
  stack: HTMLElement[]
}

const App = define<App>({
  tag: 'app-container',
  stack: router(Home),
  content: e =>
    html`
      <template layout="column" class="container">${e.stack}</template>
    `.use(html.transition),
})

document.adoptedStyleSheets = styles
mount(document.body, App)
