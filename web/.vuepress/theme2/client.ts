import { defineClientConfig } from '@vuepress/client'
import { useRouter } from 'vue-router'
import { usePage } from 'vuepress/client'
import { watch, onMounted } from 'vue'
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
import type { WechatSdk, WechatSignature, PageData } from './utils/types'

const WECHAT_SDK_SRC = 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js'
let sdkLoadPromise: Promise<WechatSdk> | null = null
let configuredUrl = ''

function isWechatBrowser() {
  return /micromessenger/i.test(window.navigator.userAgent || '')
}

function getWxSdk(): WechatSdk | undefined {
  return (window as unknown as { wx?: WechatSdk }).wx
}

function loadWechatSdk() {
  const wx = getWxSdk()
  if (wx) return Promise.resolve(wx)
  if (sdkLoadPromise) return sdkLoadPromise
  sdkLoadPromise = new Promise<WechatSdk>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = WECHAT_SDK_SRC
    script.async = true
    script.onload = () => {
      const sdk = getWxSdk()
      if (sdk) resolve(sdk)
      else reject(new Error('WeChat JS-SDK loaded but wx is undefined.'))
    }
    script.onerror = () => reject(new Error('Failed to load WeChat JS-SDK.'))
    document.head.appendChild(script)
  })
  return sdkLoadPromise
}

function normalizeSignaturePayload(payload: unknown): WechatSignature | null {
  const raw = (payload as Record<string, unknown>)?.data ?? payload
  if (!raw || typeof raw !== 'object') return null
  const data = raw as Record<string, unknown>
  const appId = (data.appId || data.appid) as string | undefined
  const timestamp = Number(data.timestamp)
  const nonceStr = (data.nonceStr || data.noncestr) as string | undefined
  const signature = data.signature as string | undefined
  if (!appId || !timestamp || !nonceStr || !signature) return null
  return { appId, timestamp, nonceStr, signature }
}

import { resolveFrontmatterImage } from './utils/imageUrl'

function toAbsoluteUrl(input: string) {
  if (!input) return ''
  if (/^https?:\/\//i.test(input)) return input
  const origin = window.location.origin
  const normalized = input.startsWith('/') ? input : `/${input}`
  return new URL(normalized, origin).toString()
}

function setMeta(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function updateOgMeta(title: string, desc: string, image: string, url: string, ogType: 'article' | 'website') {
  const siteName = url.includes('/en/') ? "Cislunar Space Beginner's Guide" : '地月空间入门指南'
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', desc)
  setMeta('property', 'og:image', image)
  setMeta('property', 'og:url', url)
  setMeta('property', 'og:type', ogType)
  setMeta('property', 'og:site_name', siteName)
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  if (desc)
    setMeta('name', 'twitter:description', desc)
  setMeta('name', 'twitter:image', image)
}

async function configureWechatShare(shareData: { title: string; desc: string; imgUrl: string; link: string }) {
  if (!isWechatBrowser()) return
  const signatureEndpoint = 'https://www.cislunarspace.cn/api/wechat-signatures'
  const currentUrl = shareData.link
  const wx = await loadWechatSdk()
  if (!wx) return
  if (configuredUrl !== currentUrl) {
    const endpointUrl = `${signatureEndpoint}?url=${encodeURIComponent(currentUrl)}`
    const response = await fetch(endpointUrl, { method: 'GET', credentials: 'include' })
    if (!response.ok) return
    const signatureData = normalizeSignaturePayload(await response.json())
    if (!signatureData) return
    wx.config({
      debug: false,
      appId: signatureData.appId,
      timestamp: signatureData.timestamp,
      nonceStr: signatureData.nonceStr,
      signature: signatureData.signature,
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage'],
    })
    await Promise.race([
      new Promise<void>((resolve) => { wx.ready(resolve) }),
      new Promise<void>((resolve) => setTimeout(resolve, 3000)),
    ])
    configuredUrl = currentUrl
  }
  if (typeof wx.updateAppMessageShareData === 'function') {
    wx.updateAppMessageShareData(shareData)
  }
  if (typeof wx.updateTimelineShareData === 'function') {
    wx.updateTimelineShareData({ title: shareData.title, link: shareData.link, imgUrl: shareData.imgUrl })
  }
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

    // ---- 滚动渐入动画 ----
    onMounted(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
      )

      const initReveal = () => {
        document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale').forEach((el) => {
          observer.observe(el)
        })
      }

      initReveal()

      // 路由切换后重新扫描
      const disconnect = watch(() => router.currentRoute.value.path, () => {
        setTimeout(initReveal, 300)
      })

      return () => {
        disconnect()
        observer.disconnect()
      }
    })

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
      const ogType = data.fm.layout === 'SpaceNewsArticle' ? 'article' : 'website'
      updateOgMeta(data.title, data.desc, data.imgUrl, data.link, ogType)
    }

    setupShare()

    watch(() => router.currentRoute.value.path, (to, from) => {
      if (!from) return
      const fromEn = from.startsWith('/en/')
      const toEn = to.startsWith('/en/')
      if (fromEn !== toEn) {
        try { localStorage.setItem('cislunar-lang-chosen', toEn ? 'en' : 'zh') } catch {}
      }
      setTimeout(() => setupShare(), 0)
    })
  },
})
