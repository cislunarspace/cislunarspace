import { watch } from 'vue'
import { useRouter } from 'vue-router'

export function useLocalePersistence() {
  const router = useRouter()

  watch(() => router.currentRoute.value.path, (to, from) => {
    if (!from) return
    const fromEn = from.startsWith('/en/')
    const toEn = to.startsWith('/en/')
    if (fromEn !== toEn) {
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('cislunar-lang-chosen', toEn ? 'en' : 'zh')
        } catch {}
      }
    }
  })
}
