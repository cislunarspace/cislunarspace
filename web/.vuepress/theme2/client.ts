import { defineClientConfig } from '@vuepress/client'
import { LayoutTypes } from './utils/layout-types'
import { useRouter } from 'vue-router'
import { usePage } from 'vuepress/client'
import { watch } from 'vue'
import './styles/index.scss'
import Layout from './layouts/Layout.vue'
import SpaceNewsHome from './layouts/SpaceNewsHome.vue'
import SpaceNewsArchive from './layouts/SpaceNewsArchive.vue'
import SpaceNewsArticle from './layouts/SpaceNewsArticle.vue'
import AiChatLayout from './layouts/AiChatLayout.vue'
import Footer from './components/Footer.vue'
import PageSidebar from './components/ExtraSidebar.vue'
import AiChat from './components/AiChat.vue'
import Forum from './components/Forum.vue'
import OrbitSimLab from './components/OrbitSimLab.vue'
import type { PageData } from './utils/types'
import { resolveFrontmatterImage } from './utils/imageUrl'
import { configureWechatShare } from './composables/useWechatShare'
import { updateOgMeta } from './composables/useOgMeta'
import { useScrollReveal } from './composables/useScrollReveal'
import { useLocalePersistence } from './composables/useLocalePersistence'

function toAbsoluteUrl(input: string) {
  if (!input) return ''
  if (/^https?:\/\//i.test(input)) return input
  const origin = window.location.origin
  const normalized = input.startsWith('/') ? input : `/${input}`
  return new URL(normalized, origin).toString()
}

export default defineClientConfig({
  layouts: {
    Layout,
    SpaceNewsHome,
    SpaceNewsArchive,
    SpaceNewsArticle,
    AiChatLayout,
  },
  enhance({ app }) {
    app.component('Footer', Footer)
    app.component('PageSidebar', PageSidebar)
    app.component('AiChat', AiChat)
    app.component('Forum', Forum)
    app.component('OrbitSimLab', OrbitSimLab)
  },
  setup() {
    const router = useRouter()
    const page = usePage()

    useScrollReveal()
    useLocalePersistence()

    function buildShareData() {
      if (typeof window === 'undefined') return null
      const fm = (page.value as PageData).frontmatter || {}
      const routePath = router.currentRoute.value.path

      let shareImage = toAbsoluteUrl('/logo.png')
      const resolved = resolveFrontmatterImage(fm.image, routePath)
      if (fm.wechatShare?.image) {
        shareImage = toAbsoluteUrl(fm.wechatShare.image)
      } else if (resolved) {
        shareImage = toAbsoluteUrl(resolved)
      }

      const title = fm.wechatShare?.title || (fm.title as string | undefined) || document.title
      const desc = fm.wechatShare?.desc
        || (fm.description as string | undefined)
        || (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content
        || ''
      const link = window.location.href.split('#')[0]

      return { title, desc, imgUrl: shareImage, link, fm }
    }

    function setupShare() {
      const data = buildShareData()
      if (!data) return
      configureWechatShare(data).catch(() => {})
      const ogType = data.fm.layout === LayoutTypes.SpaceNewsArticle ? 'article' : 'website'
      updateOgMeta(data.title, data.desc, data.imgUrl, data.link, ogType)
    }

    setupShare()

    watch(() => router.currentRoute.value.path, () => {
      setTimeout(() => setupShare(), 0)
    })
  },
})
