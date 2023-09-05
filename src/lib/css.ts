import pico from '@picocss/pico/css/pico.css?inline'
import pink from '../assets/css/pink.css?inline'
import hybrids from '../assets/css/hybrids.css?inline'

function createStyleSheet(css: string): CSSStyleSheet {
  const styleSheet = new CSSStyleSheet()
  styleSheet.replace(css)
  return styleSheet
}

// TODO: use emojis instead of icons (remember pico uses them as background images)
const picoStyle = createStyleSheet(pico)
const pinkStyle = createStyleSheet(pink)
const hybridsStyle = createStyleSheet(hybrids)
export const styles = [picoStyle, pinkStyle, hybridsStyle]
