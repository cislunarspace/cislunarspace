import type { WechatSignature } from '../utils/types'
import { isWechatBrowser, loadWechatSdk } from './useWechatSdk'

let configuredUrl = ''

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

export async function configureWechatShare(shareData: { title: string; desc: string; imgUrl: string; link: string }) {
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
