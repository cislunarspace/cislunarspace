import type { Theme } from 'vuepress'
import { path } from '@vuepress/utils'
import { defaultTheme } from '@vuepress/theme-default'

export default ((options) => {
  return {
    name: 'vuepress-theme-cislunar',
    extends: defaultTheme(options),
    clientConfigFile: path.resolve(__dirname, 'client.ts'),
    alias: {
      '@theme/Layout.vue': path.resolve(__dirname, 'layouts/Layout.vue'),
    },
  }
}) as Theme
