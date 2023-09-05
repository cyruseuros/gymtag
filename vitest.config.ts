import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    browser: {
      enabled: false,
      headless: true,
      name: 'firefox',
    },
  },
})
