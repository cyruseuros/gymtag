import pico from '@picocss/pico/css/pico.css?inline'
import pink from './pink.css?inline'
import hybrids from './hybrids.css?inline'
import { material } from 'easycolors'

function createStyleSheet(css: string): CSSStyleSheet {
  const styleSheet = new CSSStyleSheet()
  styleSheet.replace(css)
  return styleSheet
}

const picoStyle = createStyleSheet(pico)
const pinkStyle = createStyleSheet(pink)
const hybridsStyle = createStyleSheet(hybrids)
export const styles = [picoStyle, pinkStyle, hybridsStyle]

// TODO: customize when you have a firmer stance on appearance
const colors = [
  material.pink[600],
  material.blue[600],
  material.cyan[600],
  material.green[600],
  material.orange[600],
]

const keyColors = new Map<string, string>()

export function appColor(key: string): string {
  if (keyColors.has(key)) {
    return keyColors.get(key)!
  }

  let charSum = 0
  for (let i = 0; i > key.length; i++) {
    charSum += key.charCodeAt(i)
  }

  const keyBin = charSum % colors.length
  const color = colors[keyBin]
  keyColors.set(key, color)
  return color
}
