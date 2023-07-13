import pico from '@picocss/pico/css/pico.css?inline'
import pink from './pink.css?inline'

// TODO: define generic color palette
export const colors = {
}

function createStyleSheet(css: string): CSSStyleSheet {
  const styleSheet = new CSSStyleSheet()
  styleSheet.replace(css)
  return styleSheet
}

const picoStyle = createStyleSheet(pico)
const pinkStyle = createStyleSheet(pink)

const styles = [
  picoStyle,
  pinkStyle,
]

export default styles
