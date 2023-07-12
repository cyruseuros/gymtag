import pico from '@picocss/pico/css/pico.css?inline'

const picoStyleSheet = new CSSStyleSheet()
picoStyleSheet.replaceSync(pico)

const styles = [
  picoStyleSheet,
]

export default styles
