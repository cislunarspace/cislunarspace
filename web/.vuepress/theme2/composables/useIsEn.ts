import { computed } from 'vue'
import { usePage } from 'vuepress/client'

export function useIsEn() {
  const page = usePage()
  return computed(() => (page.value.path || '').startsWith('/en/'))
}
