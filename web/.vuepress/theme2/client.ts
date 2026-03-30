import { defineClientConfig } from '@vuepress/client'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import Layout from './layouts/Layout.vue'
import SpaceNewsHome from './layouts/SpaceNewsHome.vue'
import SpaceNewsArchive from './layouts/SpaceNewsArchive.vue'
import Footer from './components/Footer.vue'
import PageSidebar from './components/ExtraSidebar.vue'

const WECHAT_SDK_SRC = 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js'
let sdkLoadPromise: Promise<any> | null = null
let configuredUrl = ''

function isWechatBrowser() {
  return /micromessenger/i.test(window.navigator.userAgent || '')
}

function loadWechatSdk() {
  if ((window as any).wx) return Promise.resolve((window as any).wx)
  if (sdkLoadPromise) return sdkLoadPromise
  sdkLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = WECHAT_SDK_SRC
    script.async = true
    script.onload = () => resolve((window as any).wx)
    script.onerror = () => reject(new Error('Failed to load WeChat JS-SDK.'))
    document.head.appendChild(script)
  })
  return sdkLoadPromise
}

function normalizeSignaturePayload(payload: any) {
  const data = payload && payload.data ? payload.data : payload
  if (!data) return null
  const appId = data.appId || data.appid
  const timestamp = Number(data.timestamp)
  const nonceStr = data.nonceStr || data.noncestr
  const signature = data.signature
  if (!appId || !timestamp || !nonceStr || !signature) return null
  return { appId, timestamp, nonceStr, signature }
}

function toAbsoluteUrl(input: string) {
  if (!input) return ''
  if (/^https?:\/\//i.test(input)) return input
  const origin = window.location.origin
  const normalized = input.startsWith('/') ? input : `/${input}`
  return new URL(normalized, origin).toString()
}

async function configureWechatShare() {
  if (!isWechatBrowser()) return
  const signatureEndpoint = 'https://www.cislunarspace.cn/api/wechat-signature'
  const currentUrl = window.location.href.split('#')[0]
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
    await new Promise<void>((resolve) => { wx.ready(() => resolve()) })
    configuredUrl = currentUrl
  }
  const title = document.title
  const desc = (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content || ''
  const imgUrl = toAbsoluteUrl('/logo.png')
  const link = window.location.href.split('#')[0]
  if (typeof wx.updateAppMessageShareData === 'function') wx.updateAppMessageShareData({ title, desc, link, imgUrl })
  if (typeof wx.updateTimelineShareData === 'function') wx.updateTimelineShareData({ title, link, imgUrl })
}

export default defineClientConfig({
  layouts: {
    Layout,
    SpaceNewsHome,
    SpaceNewsArchive,
  },
  enhance({ app }) {
    app.component('Footer', Footer)
    app.component('PageSidebar', PageSidebar)
  },
  setup() {
    const router = useRouter()
    configureWechatShare().catch(() => {})
    watch(() => router.currentRoute.value.path, (to, from) => {
      if (!from) return
      const fromEn = from.startsWith('/en/')
      const toEn = to.startsWith('/en/')
      if (fromEn !== toEn) {
        try { localStorage.setItem('cislunar-lang-chosen', toEn ? 'en' : 'zh') } catch {}
      }
      setTimeout(() => configureWechatShare().catch(() => {}), 0)
    })
  },
})
