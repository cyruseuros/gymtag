import { material } from 'easycolors'

// TODO: customize when you have a firmer stance on appearance
// probably rob this blind: https://optemization.com/notion-color-guide
// and apply here: https://github.com/picocss/pico/blob/master/css/themes/default.css
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
  for (let i = 0; i < key.length; i++) {
    charSum += key.charCodeAt(i)
  }

  const keyBin = charSum % colors.length
  const color = colors[keyBin]
  keyColors.set(key, color)
  return color
}
