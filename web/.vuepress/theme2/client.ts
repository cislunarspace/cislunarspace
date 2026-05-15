import { defineClientConfig } from '@vuepress/client'
import { useRouter } from 'vue-router'
import { usePage } from 'vuepress/client'
import { watch } from 'vue'
import './styles/index.scss'
import Layout from './layouts/Layout.vue'
import SpaceNewsHome from './layouts/SpaceNewsHome.vue'
import SpaceNewsArchive from './layouts/SpaceNewsArchive.vue'
import SpaceNewsArticle from './layouts/SpaceNewsArticle.vue'
import AiChatLayout from './layouts/AiChatLayout.vue'
import DialecticLayout from './layouts/DialecticLayout.vue'
import Footer from './components/Footer.vue'
import PageSidebar from './components/ExtraSidebar.vue'
import AiChat from './components/AiChat.vue'
import Dialectic from './components/Dialectic.vue'
import Forum from './components/Forum.vue'
import OrbitSimLab from './components/OrbitSimLab.vue'
import type { PageData } from './utils/types'
import { normalizePageMetadata } from '../page-metadata'
import { updateOgMeta } from './composables/useOgMeta'
import { useScrollReveal } from './composables/useScrollReveal'
import { useLocalePersistence } from './composables/useLocalePersistence'

export default defineClientConfig({
  layouts: {
    Layout,
    SpaceNewsHome,
    SpaceNewsArchive,
    SpaceNewsArticle,
    AiChatLayout,
    DialecticLayout,
  },
  enhance({ app }) {
    app.component('Footer', Footer)
    app.component('PageSidebar', PageSidebar)
    app.component('AiChat', AiChat)
    app.component('Dialectic', Dialectic)
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
      const link = window.location.href.split('#')[0]
      const metadata = normalizePageMetadata({
        path: router.currentRoute.value.path,
        frontmatter: fm,
        siteBaseUrl: window.location.origin,
        pageUrl: link,
        fallbackTitle: document.title,
        fallbackDescription: (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content || '',
      })

      return {
        title: metadata.share.title,
        desc: metadata.share.description,
        imgUrl: metadata.share.image,
        link: metadata.share.url,
        type: metadata.type,
      }
    }

    function setupShare() {
      const data = buildShareData()
      if (!data) return
      updateOgMeta(data.title, data.desc, data.imgUrl, data.link, data.type)
    }

    setupShare()

    watch(() => router.currentRoute.value.path, () => {
      setTimeout(() => setupShare(), 0)
    })
  },
})
