import { mount, html, router, define } from 'hybrids'
import styles from './lib/theme'
import Home from './views/home'

interface App {
  stack: HTMLElement[]
}

const App = define<App>({
  tag: 'app-container',
  stack: router(Home),
  content: (e) =>
    html` <div layout="column">${e.stack}</div> `.use(html.transition),
})

document.adoptedStyleSheets = styles
mount(document.body, App)
